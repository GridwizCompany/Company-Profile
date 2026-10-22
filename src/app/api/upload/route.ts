import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

// Supported image extensions (termasuk .img)
const ALLOWED_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".svg",
  ".bmp",
  ".avif",
  ".ico",
  ".tiff",
  ".tif",
  ".heic",
  ".heif",
  ".img",
];

// MIME types that should be accepted
const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
  "image/bmp",
  "image/avif",
  "image/tiff",
  "image/x-icon",
  "image/vnd.microsoft.icon",
  "image/heic",
  "image/heif",
  "image/img",
  "image/x-img",
  "application/octet-stream", // Umumnya diberikan oleh OS/browser untuk file .img
  "application/x-img",
];

const VALID_FOLDERS = ["events", "news", "partners", "general"];

export async function POST(req: NextRequest) {
  try {
    // 0. Autentikasi Admin (Defense in depth)
    const isLoggedIn = req.cookies.get("admin_logged_in")?.value === "true";
    if (!isLoggedIn) {
      return NextResponse.json(
        { error: "Unauthorized: Anda harus login sebagai admin untuk mengunggah file." },
        { status: 401 }
      );
    }

    // 1. Parse form data
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const folder = (formData.get("folder") as string) || "general";

    if (!file) {
      return NextResponse.json({ error: "Tidak ada file yang dikirim." }, { status: 400 });
    }

    // 2. Validasi folder category
    if (!VALID_FOLDERS.includes(folder)) {
      return NextResponse.json(
        { error: `Folder "${folder}" tidak valid. Gunakan: ${VALID_FOLDERS.join(", ")}.` },
        { status: 400 }
      );
    }

    // 3. Validasi tipe file & ekstensi (Keduanya harus valid)
    const originalExt = path.extname(file.name || "").toLowerCase();
    const isImageMime = file.type.startsWith("image/") || ALLOWED_MIME_TYPES.includes(file.type);
    const isAllowedExt = ALLOWED_EXTENSIONS.includes(originalExt);

    if (!isAllowedExt || !isImageMime) {
      return NextResponse.json(
        { error: "Format file tidak didukung. Gunakan format JPG, PNG, WebP, IMG, GIF, atau SVG yang valid." },
        { status: 400 }
      );
    }

    // 4. Validasi ukuran file (maks 10MB)
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: `Ukuran file terlalu besar. Maksimal 10MB (file Anda: ${(file.size / 1024 / 1024).toFixed(1)}MB).` },
        { status: 400 }
      );
    }

    // 5. Prepare file path & extension
    const ext = originalExt || ".jpg";
    const baseName = path.basename(file.name, originalExt);
    const safeBaseName =
      baseName
        .replace(/[^a-zA-Z0-9_-]/g, "_")
        .replace(/_{2,}/g, "_")
        .replace(/^_+|_+$/g, "") || "image";

    const uniqueName = `${Date.now()}_${safeBaseName}${ext}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads", folder);

    // Ensure directory exists
    await mkdir(uploadDir, { recursive: true });

    // 6. Write file to disk
    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = path.join(uploadDir, uniqueName);
    await writeFile(filePath, buffer);

    // 7. Return public URL
    const publicUrl = `/uploads/${folder}/${uniqueName}`;
    return NextResponse.json({ url: publicUrl, fileName: uniqueName });
  } catch (err: any) {
    console.error("[UPLOAD API ERROR]", err);
    return NextResponse.json(
      { error: err.message || "Terjadi kesalahan saat mengupload file." },
      { status: 500 }
    );
  }
}
