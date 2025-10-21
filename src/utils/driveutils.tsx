/**
 * Mengekstrak ID file dari berbagai format link Google Drive.
 * Contoh input:
 * - https://drive.google.com/file/d/123abc/view?usp=sharing
 * - https://drive.google.com/open?id=123abc
 * - 123abc
 */
export const extractDriveId = (input: string): string => {
  const trimmed = input.trim();
  const directPattern = /^[a-zA-Z0-9_-]+$/;
  if (directPattern.test(trimmed)) {
    return trimmed;
  }

  const bySlash = trimmed.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (bySlash?.[1]) {
    return bySlash[1];
  }

  const byQuery = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (byQuery?.[1]) {
    return byQuery[1];
  }

  const fallback = trimmed.split("/").filter(Boolean).pop();
  if (fallback) {
    return fallback.split("?")[0];
  }

  return trimmed;
};

/**
 * Mengubah link Google Drive menjadi direct image link
 * agar bisa ditampilkan dengan <img /> atau <Image />.
 */
export const driveImageUrl = (source: string): string => {
  const id = extractDriveId(source);
  return `https://lh3.googleusercontent.com/d/${id}=w1600-h900-no`;
};
