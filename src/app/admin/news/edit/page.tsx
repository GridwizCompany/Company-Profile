"use client";

import { Suspense, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { useAdminData } from "../../../../context/AdminDataContext";
import { NewsData } from "../../../../lib/newsData";
import ImageUploader from "../../../../component/ImageUploader";
import "../../admin.css";

type FormState = Omit<NewsData, "id"> & { id?: string };

const EMPTY: FormState = {
  slug: "", title: "", shortDesc: "", category: "", date: "", location: "", imageSrc: "", content: "",
};

function AdminNewsFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams?.get("id") || "new";
  const isNew = id === "new";

  const { news, addNews, updateNews } = useAdminData();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!isNew) {
      const item = news.find((n) => n.id === id);
      if (item) setForm({ ...item });
    }
  }, [id, isNew, news]);

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const set = (key: keyof FormState, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.date || !form.shortDesc) {
      showToast("Judul, tanggal, dan deskripsi singkat wajib diisi.", "error");
      return;
    }
    setSaving(true);
    await new Promise((r) => setTimeout(r, 400));

    const generatedSlug = form.title.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    const slug = (!isNew && form.slug) ? form.slug : (generatedSlug || `news-${Date.now()}`);

    if (isNew) {
      addNews({ ...form, slug });
      showToast("Berita berhasil ditambahkan! ✅");
    } else {
      updateNews({ ...(form as NewsData), slug });
      showToast("Berita berhasil diperbarui! ✅");
    }
    setSaving(false);
    setTimeout(() => router.push("/admin/news"), 1200);
  };

  return (
    <div>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">{isNew ? "Tambah Berita Baru" : "Edit Berita"}</h1>
          <p className="admin-page-subtitle">{isNew ? "Isi detail berita di bawah ini" : `Mengedit: ${form.title}`}</p>
        </div>
        <Link href="/admin/news" className="admin-btn admin-btn-secondary">
          <ArrowLeft size={16} /> Kembali
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Info Dasar */}
        <div className="admin-card" style={{ marginBottom: 20 }}>
          <div className="admin-card-header"><span className="admin-card-title">📰 Informasi Berita</span></div>
          <div className="admin-card-body">
            <div className="admin-form-grid">
              <div className="admin-form-group full">
                <label className="admin-form-label">Judul Berita *</label>
                <input className="admin-form-input" value={form.title} onChange={(e) => set("title", e.target.value)} placeholder="Judul artikel berita" required />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Kategori</label>
                <input className="admin-form-input" value={form.category} onChange={(e) => set("category", e.target.value)} placeholder="Product Launch / Partnership / Milestone" />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Tanggal *</label>
                <input className="admin-form-input" value={form.date} onChange={(e) => set("date", e.target.value)} placeholder="15 Agustus 2026" required />
              </div>
              <div className="admin-form-group full">
                <label className="admin-form-label">Lokasi</label>
                <input className="admin-form-input" value={form.location} onChange={(e) => set("location", e.target.value)} placeholder="Jakarta" />
              </div>
              <div className="admin-form-group full">
                <ImageUploader
                  label="Gambar Cover"
                  value={form.imageSrc}
                  onChange={(url) => set("imageSrc", url)}
                  folder="news"
                />
              </div>
              <div className="admin-form-group full">
                <label className="admin-form-label">Deskripsi Singkat *</label>
                <textarea className="admin-form-textarea" value={form.shortDesc} onChange={(e) => set("shortDesc", e.target.value)} placeholder="Ringkasan berita yang ditampilkan di kartu..." required />
              </div>
              <div className="admin-form-group full">
                <label className="admin-form-label">Konten Lengkap</label>
                <textarea
                  className="admin-form-textarea"
                  style={{ minHeight: 200 }}
                  value={form.content}
                  onChange={(e) => set("content", e.target.value)}
                  placeholder="Isi artikel lengkap. Gunakan \n\n untuk paragraf baru."
                />
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
          <Link href="/admin/news" className="admin-btn admin-btn-secondary">Batal</Link>
          <button type="submit" className="admin-btn admin-btn-primary" disabled={saving}>
            <Save size={16} /> {saving ? "Menyimpan..." : isNew ? "Simpan Berita" : "Perbarui Berita"}
          </button>
        </div>
      </form>

      {toast && (
        <div className="admin-toast-wrap">
          <div className={`admin-toast ${toast.type}`}>{toast.msg}</div>
        </div>
      )}
    </div>
  );
}

export default function AdminNewsFormPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminNewsFormContent />
    </Suspense>
  );
}