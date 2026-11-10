"use client";

import { Suspense, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Plus, X } from "lucide-react";
import { useAdminData } from "../../../../context/AdminDataContext";
import { Partner, PartnerCategory } from "../../../../lib/partnersData";
import ImageUploader from "../../../../component/ImageUploader";
import "../../admin.css";

type FormState = Partner;

const EMPTY: FormState = {
  slug: "",
  category: "cafe",
  name: "",
  tagline_id: "",
  tagline_en: "",
  desc_id: "",
  desc_en: "",
  logo: "",
  coverImage: "",
  location: "",
  website: "",
  whatsapp: "",
  gmapsUrl: "",
  ebikeCount: "",
  stats: [],
  benefits_id: [""],
  benefits_en: [""],
  about_id: "",
  about_en: "",
};

function AdminPartnerFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams?.get("slug") || "new";
  const isNew = slug === "new";

  const { partners, addPartner, updatePartner } = useAdminData();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!isNew) {
      const p = partners.find((p) => p.slug === slug);
      if (p) {
        setForm({
          ...p,
          ebikeCount: p.ebikeCount !== undefined && p.ebikeCount !== ""
            ? String(p.ebikeCount)
            : (p.stats && p.stats.length > 0 && p.stats[0]?.value ? p.stats[0].value : ""),
          benefits_id: p.benefits_id || [""],
          benefits_en: p.benefits_en || [""],
        });
      }
    }
  }, [slug, isNew, partners]);

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.location) {
      showToast("Nama dan lokasi wajib diisi.", "error");
      return;
    }
    setSaving(true);
    await new Promise((r) => setTimeout(r, 400));

    const statsData = form.ebikeCount
      ? [{ label_id: "Armada E-Bike", label_en: "E-Bike Fleet", value: String(form.ebikeCount) }]
      : (form.stats || []);

    const payload = {
      ...form,
      ebikeCount: form.ebikeCount,
      stats: statsData,
    };

    if (isNew) {
      addPartner(payload);
      showToast("Partner berhasil ditambahkan! ✅");
    } else {
      updatePartner({ ...payload, slug });
      showToast("Partner berhasil diperbarui! ✅");
    }
    setSaving(false);
    setTimeout(() => router.push("/admin/partners"), 1200);
  };

  // ── Benefits helpers ──────────────────────────────────────────────────────
  const updateBenefitId = (i: number, val: string) => { const arr = [...(form.benefits_id || [])]; arr[i] = val; set("benefits_id", arr); };
  const addBenefitId = () => set("benefits_id", [...(form.benefits_id || []), ""]);
  const removeBenefitId = (i: number) => set("benefits_id", (form.benefits_id || []).filter((_, idx) => idx !== i));

  const updateBenefitEn = (i: number, val: string) => { const arr = [...(form.benefits_en || [])]; arr[i] = val; set("benefits_en", arr); };
  const addBenefitEn = () => set("benefits_en", [...(form.benefits_en || []), ""]);
  const removeBenefitEn = (i: number) => set("benefits_en", (form.benefits_en || []).filter((_, idx) => idx !== i));

  return (
    <div>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">{isNew ? "Tambah Partner Baru" : "Edit Partner"}</h1>
          <p className="admin-page-subtitle">{isNew ? "Isi detail partner di bawah" : `Mengedit: ${form.name}`}</p>
        </div>
        <Link href="/admin/partners" className="admin-btn admin-btn-secondary"><ArrowLeft size={16} /> Kembali</Link>
      </div>

      <form onSubmit={handleSubmit}>
        {/* ── Info Dasar ────────────────────────────────── */}
        <div className="admin-card" style={{ marginBottom: 20 }}>
          <div className="admin-card-header"><span className="admin-card-title">🤝 Informasi Dasar</span></div>
          <div className="admin-card-body">
            <div className="admin-form-grid">
              <div className="admin-form-group">
                <label className="admin-form-label">Nama Partner *</label>
                <input className="admin-form-input" value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Nama mitra" required />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Kategori</label>
                <select className="admin-form-select" value={form.category} onChange={(e) => set("category", e.target.value as PartnerCategory)}>
                  <option value="campus">Campus / Kampus</option>
                  <option value="cafe">Café & Restoran</option>
                  <option value="hotel">Hotel & Resort</option>
                  <option value="gili">Gili</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Jumlah E-Bike Tersedia</label>
                <input
                  type="number"
                  min="0"
                  className="admin-form-input"
                  value={form.ebikeCount ?? ""}
                  onChange={(e) => set("ebikeCount", e.target.value)}
                  placeholder="Contoh: 6"
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Tagline (ID)</label>
                <input className="admin-form-input" value={form.tagline_id} onChange={(e) => set("tagline_id", e.target.value)} placeholder="Tagline dalam Bahasa Indonesia" />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Tagline (EN)</label>
                <input className="admin-form-input" value={form.tagline_en} onChange={(e) => set("tagline_en", e.target.value)} placeholder="Tagline in English" />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Lokasi *</label>
                <input className="admin-form-input" value={form.location} onChange={(e) => set("location", e.target.value)} placeholder="Mataram, Nusa Tenggara Barat" required />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Link Gmaps</label>
                <input className="admin-form-input" value={form.gmapsUrl || ""} onChange={(e) => set("gmapsUrl", e.target.value)} placeholder="https://maps.app.goo.gl/..." />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Website</label>
                <input className="admin-form-input" value={form.website || ""} onChange={(e) => set("website", e.target.value)} placeholder="https://example.com" />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">WhatsApp</label>
                <input className="admin-form-input" value={form.whatsapp || ""} onChange={(e) => set("whatsapp", e.target.value)} placeholder="+62812..." />
              </div>
              <div className="admin-form-group">
                <ImageUploader
                  label="Logo"
                  value={form.logo}
                  onChange={(url) => set("logo", url)}
                  folder="partners"
                />
              </div>
              <div className="admin-form-group full">
                <ImageUploader
                  label="Cover Image"
                  value={form.coverImage}
                  onChange={(url) => set("coverImage", url)}
                  folder="partners"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Deskripsi ─────────────────────────────────── */}
        <div className="admin-card" style={{ marginBottom: 20 }}>
          <div className="admin-card-header"><span className="admin-card-title">📝 Deskripsi</span></div>
          <div className="admin-card-body">
            <div className="admin-form-grid">
              <div className="admin-form-group full">
                <label className="admin-form-label">Deskripsi (ID)</label>
                <textarea className="admin-form-textarea" value={form.desc_id} onChange={(e) => set("desc_id", e.target.value)} placeholder="Deskripsi singkat dalam Bahasa Indonesia" />
              </div>
              <div className="admin-form-group full">
                <label className="admin-form-label">Deskripsi (EN)</label>
                <textarea className="admin-form-textarea" value={form.desc_en} onChange={(e) => set("desc_en", e.target.value)} placeholder="Short description in English" />
              </div>
              <div className="admin-form-group full">
                <label className="admin-form-label">Tentang Mitra (ID)</label>
                <textarea className="admin-form-textarea" style={{ minHeight: 120 }} value={form.about_id} onChange={(e) => set("about_id", e.target.value)} placeholder="Paragraf panjang tentang mitra (ID)" />
              </div>
              <div className="admin-form-group full">
                <label className="admin-form-label">Tentang Mitra (EN)</label>
                <textarea className="admin-form-textarea" style={{ minHeight: 120 }} value={form.about_en} onChange={(e) => set("about_en", e.target.value)} placeholder="Long paragraph about partner (EN)" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Benefits ──────────────────────────────────── */}
        <div className="admin-card" style={{ marginBottom: 24 }}>
          <div className="admin-card-header"><span className="admin-card-title">✅ Benefits</span></div>
          <div className="admin-card-body">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div>
                <p className="admin-section-title">Bahasa Indonesia</p>
                {(form.benefits_id || []).map((b, i) => (
                  <div key={i} className="admin-array-row">
                    <input className="admin-form-input" placeholder="Benefit ke-(i+1)" value={b} onChange={(e) => updateBenefitId(i, e.target.value)} />
                    <button type="button" className="admin-remove-row-btn" onClick={() => removeBenefitId(i)}><X size={16} /></button>
                  </div>
                ))}
                <button type="button" className="admin-add-row-btn" onClick={addBenefitId}><Plus size={14} /> Tambah</button>
              </div>
              <div>
                <p className="admin-section-title">English</p>
                {(form.benefits_en || []).map((b, i) => (
                  <div key={i} className="admin-array-row">
                    <input className="admin-form-input" placeholder={`Benefit #${i+1} (EN)`} value={b} onChange={(e) => updateBenefitEn(i, e.target.value)} />
                    <button type="button" className="admin-remove-row-btn" onClick={() => removeBenefitEn(i)}><X size={16} /></button>
                  </div>
                ))}
                <button type="button" className="admin-add-row-btn" onClick={addBenefitEn}><Plus size={14} /> Add</button>
              </div>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
          <Link href="/admin/partners" className="admin-btn admin-btn-secondary">Batal</Link>
          <button type="submit" className="admin-btn admin-btn-primary" disabled={saving}>
            <Save size={16} /> {saving ? "Menyimpan..." : isNew ? "Simpan Partner" : "Perbarui Partner"}
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

export default function AdminPartnerFormPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminPartnerFormContent />
    </Suspense>
  );
}
