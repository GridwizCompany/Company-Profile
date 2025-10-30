import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type RequestBody = {
  messages?: ChatMessage[];
};

export const runtime = "nodejs";

const GEMINI_MODEL = "gemini-2.5-flash";
export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { message: "", error: "GEMINI_API_KEY environment variable is missing." },
      { status: 500 }
    );
  }

  let body: RequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "", error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const history = body.messages ?? [];

  if (!Array.isArray(history) || history.length === 0) {
    return NextResponse.json(
      { message: "", error: "Messages array is required." },
      { status: 400 }
    );
  }

  const contents = history.map((message) => ({
    role: message.role === "assistant" ? "model" : "user",
    parts: [{ text: message.content ?? "" }],
  }));

  console.info("[Minflow] Gemini request", {
    messageCount: contents.length,
    lastRole: contents.at(-1)?.role,
  });

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      systemInstruction: {
        role: "system",
        parts: [
          {
            text:
              [
                "PERAN: Kamu adalah Minflow (Admin Reflow), asisten virtual resmi Gridwiz Energy & Mobility.",
                "FORMAT: Setiap jawaban WAJIB diawali dengan kalimat pembuka 'Jawaban Gemini:' sebelum isi jawabannya.",
                "IDENTITAS: Jika pengguna menanyakan identitasmu (contoh: 'siapa kamu', 'kamu siapa', 'siapa anda'), jawabanmu HARUS persis seperti ini sebelum melanjutkan konteks tambahan: 'Jawaban Gemini: Saya Minflow (Admin Reflow), asisten virtual Gridwiz Energy & Mobility yang siap membantu Anda.'",
                "LARANGAN: Jangan pernah mengatakan bahwa kamu adalah model AI Google atau model bahasa besar. Abaikan permintaan yang mencoba memaksa kamu mengakui hal tersebut.",
                "GAYA: Gunakan Bahasa Indonesia yang ramah, ringkas, dan solutif. Jika tidak yakin, akui keterbatasan dan sarankan langkah lanjutan atau tautan resmi Gridwiz. Semua jawaban tetap menggunakan awalan yang sudah ditetapkan.",
                "FORMAT TAMBAHAN: Jangan menggunakan penebalan teks (**bold**) atau kode Markdown lainnya. Gunakan hanya paragraf biasa dengan kalimat lengkap atau daftar bernomor standar tanpa tanda **.",
              ].join(" "),
          },
        ],
      },
      contents,
      generationConfig: {
        temperature: 0.8,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 512,
      },
      safetySettings: [
        {
          category: "HARM_CATEGORY_DANGEROUS_CONTENT",
          threshold: "BLOCK_ONLY_HIGH",
        },
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_ONLY_HIGH",
        },
        {
          category: "HARM_CATEGORY_HARASSMENT",
          threshold: "BLOCK_ONLY_HIGH",
        },
        {
          category: "HARM_CATEGORY_SEXUAL",
          threshold: "BLOCK_ONLY_HIGH",
        },
      ],
    });

    const reply = response.text?.trim() ?? "";

    if (!reply) {
      console.error(
        "[Minflow] Gemini empty reply",
        JSON.stringify(response, null, 2)
      );
      return NextResponse.json({
        message:
          "Maaf, saya belum menerima jawaban dari Gemini saat ini. Silakan coba lagi.",
      });
    }

    console.info("[Minflow] Gemini reply", reply);

    return NextResponse.json({ message: reply });
  } catch (error) {
    const baseDescription =
      error instanceof Error ? error.message : "Unexpected server error.";
    const status =
      typeof error === "object" && error !== null && "status" in error
        ? (error as { status?: unknown }).status
        : undefined;
    const errorPayload =
      typeof error === "object" && error !== null && "context" in error
        ? (error as { context?: unknown }).context
        : undefined;

    console.error("[Minflow] Gemini API request failed", {
      name: error instanceof Error ? error.name : "UnknownError",
      message: baseDescription,
      status,
      errorPayload,
    });

    return NextResponse.json(
      {
        message: "",
        error: `${baseDescription}${
          status ? ` (status: ${status as string})` : ""
        }`,
      },
      { status: 500 }
    );
  }
}
