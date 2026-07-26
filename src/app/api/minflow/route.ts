import { NextResponse } from "next/server";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
  timestamp?: string;
};

type RequestBody = {
  messages?: ChatMessage[];
  sessionId?: string;
  language?: "id" | "en";
};

type CsBotResponse = {
  reply?: string | null;
  message?: string | null;
  error?: string | null;
  detail?: string | null;
  log_id?: string;
  cs_enabled?: boolean;
};

export const runtime = "nodejs";

const MAX_HISTORY = 10;
const MAX_MESSAGE_LENGTH = 2000;
const DEFAULT_BACKEND_URL = "https://reflowapi.ptms3.com";
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 30;
const BACKEND_TIMEOUT_MS = 60_000;

const rateLimitBuckets = new Map<string, { count: number; resetAt: number }>();

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

const getBackendUrl = () =>
  trimTrailingSlash(
    process.env.MINFLOW_BACKEND_URL ||
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      DEFAULT_BACKEND_URL
  );

const getMinflowSource = () => process.env.MINFLOW_SOURCE || "whatsapp";

const getClientIp = (request: Request) =>
  request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
  request.headers.get("x-real-ip") ||
  "unknown";

const stripReasoning = (value: string) => {
  const text = value.trim();
  const markerPatterns = [
    /(?:^|\n)\s*(?:final answer|answer|jawaban)\s*:\s*/i,
    /(?:^|\n)\s*(?:response to user|user-facing response)\s*:\s*/i,
  ];

  for (const pattern of markerPatterns) {
    const match = pattern.exec(text);
    if (match?.index !== undefined) {
      const start = match.index + match[0].length;
      const cleaned = text.slice(start).trim();
      if (cleaned) return cleaned;
    }
  }

  return text
    .replace(
      /^\s*(?:thinking process|reasoning|analysis)\s*:\s*[\s\S]*?(?=\n\s*(?:final answer|answer|jawaban|response to user|user-facing response)\s*:|$)/i,
      ""
    )
    .trim();
};

export async function POST(request: Request) {
  const secret =
    process.env.MINFLOW_CS_SECRET ||
    process.env.LOCAL_LLM_WA_SECRET ||
    process.env.LOCAL_LLM_META_SECRET;

  if (!secret) {
    return NextResponse.json(
      { message: "", error: "MINFLOW_CS_SECRET environment variable is missing." },
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

  const messages = Array.isArray(body.messages) ? body.messages : [];
  const lastMessage = [...messages].reverse().find((item) => item.role === "user");
  const message = lastMessage?.content?.trim() ?? "";
  const clientIp = getClientIp(request);
  const now = Date.now();
  const bucket = rateLimitBuckets.get(clientIp);

  if (!bucket || bucket.resetAt <= now) {
    rateLimitBuckets.set(clientIp, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
  } else {
    bucket.count += 1;
    if (bucket.count > RATE_LIMIT_MAX_REQUESTS) {
      return NextResponse.json(
        {
          message: "",
          error: "Terlalu banyak permintaan. Silakan coba lagi sebentar.",
        },
        { status: 429 }
      );
    }
  }

  if (!message) {
    return NextResponse.json(
      { message: "", error: "Message is required." },
      { status: 400 }
    );
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      {
        message: "",
        error: `Message is too long. Maximum ${MAX_MESSAGE_LENGTH} characters.`,
      },
      { status: 400 }
    );
  }

  const history = messages
    .slice(0, -1)
    .slice(-MAX_HISTORY)
    .filter(
      (item) =>
        item?.content &&
        (item.role === "user" || item.role === "assistant")
    )
    .map((item) => ({
      role: item.role,
      content: String(item.content).slice(0, MAX_MESSAGE_LENGTH),
      timestamp: item.timestamp,
    }));

  const senderId =
    body.sessionId?.trim() ||
    `company-profile:${clientIp}`;
  const language = body.language === "en" ? "en" : "id";

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), BACKEND_TIMEOUT_MS);

    const response = await fetch(`${getBackendUrl()}/local-llm/cs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-llm-cs-secret": secret,
      },
      body: JSON.stringify({
        message,
        history,
        sender_id: senderId,
        source: getMinflowSource(),
        language,
        max_tokens: 300,
        skip_menu_guard: true,
      }),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    const data = (await response.json().catch(() => ({}))) as CsBotResponse;
    const responseMessage = Array.isArray(data.message)
      ? data.message.join(", ")
      : data.message || "";
    const reply = stripReasoning(data.reply || responseMessage || "");
    const error = (data.detail || responseMessage || data.error || "").trim();

    if (!response.ok) {
      console.error("[Midnflow] Backend CS bot failed", {
        status: response.status,
        error,
      });

      return NextResponse.json(
        {
          message: "",
          error: error || "CS bot backend request failed.",
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      message:
        reply ||
        "Maaf, Midnflow belum menerima jawaban saat ini. Silakan coba lagi sebentar.",
      log_id: data.log_id,
      cs_enabled: data.cs_enabled,
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      return NextResponse.json(
        {
          message: "",
          error:
            language === "en"
              ? "Midnflow is taking too long to respond. Please try again in a moment."
              : "Midnflow terlalu lama merespons. Silakan coba lagi sebentar.",
        },
        { status: 504 }
      );
    }

    const description =
      error instanceof Error ? error.message : "Unexpected server error.";

    console.error("[Midnflow] Backend CS bot unreachable", {
      message: description,
    });

    return NextResponse.json(
      {
        message: "",
        error: "Midnflow belum bisa terhubung ke backend CS bot saat ini.",
      },
      { status: 502 }
    );
  }
}
