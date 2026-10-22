"use client";

import { useRef, useState, useEffect } from "react";
import { UploadCloud, X, CheckCircle, AlertCircle, Loader } from "lucide-react";

interface ImageUploaderProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  required?: boolean;
  /** Target folder: "events" | "news" | "partners" */
  folder?: string;
}

type UploadStatus = "idle" | "uploading" | "success" | "error";

export default function ImageUploader({ label, value, onChange, required, folder = "general" }: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<UploadStatus>("idle");
  const [errMsg, setErrMsg] = useState("");
  const [preview, setPreview] = useState(value || "");

  useEffect(() => {
    setPreview(value || "");
  }, [value]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Client-side validation (10MB)
    if (file.size > 10 * 1024 * 1024) {
      setStatus("error");
      setErrMsg(`File terlalu besar (${(file.size / 1024 / 1024).toFixed(1)}MB). Maks 10MB.`);
      return;
    }

    // Show local preview while uploading
    const localPreview = URL.createObjectURL(file);
    setPreview(localPreview);
    setStatus("uploading");
    setErrMsg("");

    const fd = new FormData();
    fd.append("file", file);
    fd.append("folder", folder);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Upload gagal.");
      }

      setStatus("success");
      setPreview(data.url);
      onChange(data.url);
    } catch (err: unknown) {
      setStatus("error");
      setErrMsg(err instanceof Error ? err.message : "Terjadi kesalahan upload.");
      setPreview(value || "");
      onChange(value || "");
    } finally {
      // Reset input so same file can be re-selected if needed
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const handleClear = () => {
    setPreview("");
    setStatus("idle");
    setErrMsg("");
    onChange("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
      <label className="admin-form-label">
        {label} {required && "*"}
      </label>

      {/* Preview Area */}
      {preview ? (
        <div style={{ position: "relative", display: "inline-block", width: "100%", maxWidth: 320 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={preview}
            alt="Preview"
            style={{
              width: "100%",
              height: 160,
              objectFit: "cover",
              borderRadius: 10,
              border: "1.5px solid #E2E8F0",
              display: "block",
            }}
          />
          {status === "uploading" && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.45)",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                gap: 8,
                fontSize: "0.9rem",
                fontWeight: 600,
              }}
            >
              <Loader size={20} style={{ animation: "spin 1s linear infinite" }} />
              Mengupload...
            </div>
          )}
          {status !== "uploading" && (
            <button
              type="button"
              onClick={handleClear}
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                background: "rgba(0,0,0,0.6)",
                border: "none",
                borderRadius: "50%",
                width: 28,
                height: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#fff",
              }}
              title="Hapus gambar"
            >
              <X size={14} />
            </button>
          )}
        </div>
      ) : (
        /* Upload Drop Zone */
        <div
          onClick={() => inputRef.current?.click()}
          style={{
            border: "2px dashed #CBD5E1",
            borderRadius: 10,
            padding: "1.5rem",
            textAlign: "center",
            cursor: "pointer",
            background: "#F8FAFC",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#3B82F6")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#CBD5E1")}
        >
          <UploadCloud size={32} style={{ color: "#94A3B8", marginBottom: 8 }} />
          <p style={{ margin: 0, fontSize: "0.9rem", color: "#64748B", fontWeight: 500 }}>
            Klik untuk pilih gambar
          </p>
          <p style={{ margin: "4px 0 0", fontSize: "0.78rem", color: "#94A3B8" }}>
            JPG, PNG, WebP, IMG, GIF, SVG — Maks 10MB
          </p>
        </div>
      )}

      {/* Status messages */}
      {status === "success" && (
        <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#16A34A", fontSize: "0.83rem", fontWeight: 600 }}>
          <CheckCircle size={15} /> Gambar berhasil diupload!
        </div>
      )}
      {status === "error" && (
        <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#DC2626", fontSize: "0.83rem", fontWeight: 600 }}>
          <AlertCircle size={15} /> {errMsg}
        </div>
      )}

      {/* Hidden file input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*,.img,.IMG,.jpg,.jpeg,.png,.webp,.gif,.svg,.bmp,.avif"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {/* Also allow manual URL/path entry as fallback */}
      <input
        className="admin-form-input"
        type="text"
        value={value}
        onChange={(e) => { onChange(e.target.value); setPreview(e.target.value); setStatus("idle"); }}
        placeholder="Atau tempel path gambar (contoh: /images/foto.jpg atau /uploads/events/foto.img)"
        style={{ fontSize: "0.82rem" }}
      />

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
