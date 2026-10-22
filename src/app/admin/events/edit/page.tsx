"use client";

import { Suspense, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Plus, X, Save } from "lucide-react";
import { useAdminData } from "../../../../context/AdminDataContext";
import { EventData } from "../../../../lib/eventsData";
import { EVENT_PARTNERS_LIST } from "../../../../lib/partnersList";
import ImageUploader from "../../../../component/ImageUploader";
import "../../admin.css";

type FormState = Omit<EventData, "id"> & { id?: string };

const EMPTY: FormState = {
  slug: "", title: "", subtitle: "", category: "Community Event",
  date: "", location: "", participants: 0, imageSrc: "",
  eventType: "", organizedBy: "",
  objectives: [], happenings: [], impacts: [], gallery: [], partners: [],
};

function AdminEventFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams?.get("id") || "new";
  const isNew = id === "new";

  const { events, addEvent, updateEvent } = useAdminData();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!isNew) {
      const ev = events.find((e) => e.id === id);
      if (ev) setForm({ ...ev, partners: ev.partners || [] });
    }
  }, [id, isNew, events]);

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const set = (key: keyof FormState, value: unknown) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.date || !form.location) {
      showToast("Judul, tanggal, dan lokasi wajib diisi.", "error");
      return;
    }
    setSaving(true);
    await new Promise((r) => setTimeout(r, 400));

    const generatedSlug = form.title.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    const slug = (!isNew && form.slug) ? form.slug : (generatedSlug || `event-${Date.now()}`);

    if (isNew) {
      addEvent({ ...form, slug });
      showToast("Event berhasil ditambahkan! ✅");
    } else {
      updateEvent({ ...(form as EventData), slug });
      showToast("Event berhasil diperbarui! ✅");
    }
    setSaving(false);
    setTimeout(() => router.push("/admin/events"), 1200);
  };

  // ── Array field helpers ────────────────────────────────────────────────
  const addObjective = () => set("objectives", [...(form.objectives || []), { title: "", desc: "" }]);
  const updateObjective = (i: number, key: "title" | "desc", val: string) => {
    const arr = [...(form.objectives || [])];
    arr[i] = { ...arr[i], [key]: val };
    set("objectives", arr);
  };
  const removeObjective = (i: number) => set("objectives", (form.objectives || []).filter((_, idx) => idx !== i));

  const addHappening = () => set("happenings", [...(form.happenings || []), { title: "", imageSrc: "" }]);
  const updateHappening = (i: number, key: "title" | "imageSrc", val: string) => {
    const arr = [...(form.happenings || [])];
    arr[i] = { ...arr[i], [key]: val };
    set("happenings", arr);
  };
  const removeHappening = (i: number) => set("happenings", (form.happenings || []).filter((_, idx) => idx !== i));

  const updateImpactValue = (index: number, val: string) => {
    const fixed = ["Participant", "Total Ride"];
    const arr = fixed.map((label, i) => ({
      label,
      value: i === index ? val : (form.impacts?.[i]?.value ?? ""),
    }));
    set("impacts", arr);
  };

  const addGallery = () => {
    if ((form.gallery || []).length >= 5) {
      showToast("Maksimal 5 foto dokumentasi diperbolehkan.", "error");
      return;
    }
    set("gallery", [...(form.gallery || []), ""]);
  };
  const updateGallery = (i: number, val: string) => {
    const arr = [...(form.gallery || [])];
    arr[i] = val;
    set("gallery", arr);
  };
  const removeGallery = (i: number) => set("gallery", (form.gallery || []).filter((_, idx) => idx !== i));

  return (
    <div>
      {/* Header */}
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">{isNew ? "Tambah Event Baru" : "Edit Event"}</h1>
          <p className="admin-page-subtitle">{isNew ? "Isi detail event di bawah ini" : `Mengedit: ${form.title}`}</p>
        </div>
        <Link href="/admin/events" className="admin-btn admin-btn-secondary">
          <ArrowLeft size={16} /> Kembali
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        {/* ── Info Dasar ─────────────────────────────────── */}
        <div className="admin-card" style={{ marginBottom: 20 }}>
          <div className="admin-card-header"><span className="admin-card-title">📋 Informasi Dasar</span></div>
          <div className="admin-card-body">
            <div className="admin-form-grid">
              <div className="admin-form-group full">
                <label className="admin-form-label">Judul Event *</label>
                <input className="admin-form-input" value={form.title} onChange={(e) => set("title", e.target.value)} placeholder="e.g. Gowes Bareng Re:Flow" required />
              </div>
              <div className="admin-form-group full">
                <label className="admin-form-label">Subtitle</label>
                <input className="admin-form-input" value={form.subtitle || ""} onChange={(e) => set("subtitle", e.target.value)} placeholder="Deskripsi singkat event" />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Kategori</label>
                <input className="admin-form-input" value={form.category} onChange={(e) => set("category", e.target.value)} placeholder="Community Event" />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Tanggal *</label>
                <input className="admin-form-input" value={form.date} onChange={(e) => set("date", e.target.value)} placeholder="18 July 2026" required />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Lokasi *</label>
                <input className="admin-form-input" value={form.location} onChange={(e) => set("location", e.target.value)} placeholder="Mataram, Lombok" required />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Jumlah Peserta</label>
                <input type="number" className="admin-form-input" value={form.participants} onChange={(e) => set("participants", Number(e.target.value))} placeholder="100" />
              </div>
              <div className="admin-form-group full">
                <label className="admin-form-label">Tipe Event</label>
                <input className="admin-form-input" value={form.eventType || ""} onChange={(e) => set("eventType", e.target.value)} placeholder="Community Ride, Escort Event" />
              </div>
              <div className="admin-form-group full">
                <label className="admin-form-label">Diorganisir Oleh</label>
                <input className="admin-form-input" value={form.organizedBy || ""} onChange={(e) => set("organizedBy", e.target.value)} placeholder="Re:Flow, GRIDWIZ" />
              </div>
              <div className="admin-form-group full">
                <ImageUploader
                  label="Gambar Cover"
                  value={form.imageSrc}
                  onChange={(url) => set("imageSrc", url)}
                  required
                  folder="events"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Event Partners ───────────────────────────── */}
        <div className="admin-card" style={{ marginBottom: 20 }}>
          <div className="admin-card-header">
            <span className="admin-card-title">🤝 Event Partners (Kolaborasi Mitra)</span>
            <span style={{ fontSize: "0.8rem", color: "#64748b" }}>
              {(form.partners || []).length} partner dipilih (Opsional)
            </span>
          </div>
          <div className="admin-card-body">
            <p style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "1rem" }}>
              Centang partner yang berkolaborasi dalam event ini. Anda bisa memilih lebih dari satu partner atau mengosongkannya. Jika dikosongkan, bagian partner tidak akan muncul di halaman event.
            </p>
            <div className="admin-partners-checklist-grid">
              {EVENT_PARTNERS_LIST.map((partner) => {
                const isChecked = (form.partners || []).includes(partner.id);
                return (
                  <label key={partner.id} className={`admin-partner-checkbox-item ${isChecked ? "selected" : ""}`}>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => {
                        const current = form.partners || [];
                        if (e.target.checked) {
                          set("partners", [...current, partner.id]);
                        } else {
                          set("partners", current.filter((pid) => pid !== partner.id));
                        }
                      }}
                    />
                    <span className="admin-partner-name">{partner.name}</span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Objectives ────────────────────────────────── */}
        <div className="admin-card" style={{ marginBottom: 20 }}>
          <div className="admin-card-header"><span className="admin-card-title">🎯 Objectives</span></div>
          <div className="admin-card-body">
            {(form.objectives || []).map((obj, i) => (
              <div key={i} className="admin-array-row">
                <input className="admin-form-input" placeholder="Judul" value={obj.title} onChange={(e) => updateObjective(i, "title", e.target.value)} />
                <input className="admin-form-input" placeholder="Deskripsi" value={obj.desc} onChange={(e) => updateObjective(i, "desc", e.target.value)} />
                <button type="button" className="admin-remove-row-btn" onClick={() => removeObjective(i)}><X size={16} /></button>
              </div>
            ))}
            <button type="button" className="admin-add-row-btn" onClick={addObjective}><Plus size={14} /> Tambah Objective</button>
          </div>
        </div>

        {/* ── Happenings ────────────────────────────────── */}
        <div className="admin-card" style={{ marginBottom: 20 }}>
          <div className="admin-card-header"><span className="admin-card-title">📸 What Happened</span></div>
          <div className="admin-card-body">
            {(form.happenings || []).map((h, i) => (
              <div key={i} style={{ border: "1px solid #E2E8F0", borderRadius: 10, padding: "1rem", marginBottom: "0.75rem", position: "relative" }}>
                <button type="button" className="admin-remove-row-btn" onClick={() => removeHappening(i)} style={{ position: "absolute", top: 10, right: 10 }}><X size={16} /></button>
                <input className="admin-form-input" placeholder="Judul fase" value={h.title} onChange={(e) => updateHappening(i, "title", e.target.value)} style={{ marginBottom: "0.5rem" }} />
                <ImageUploader label="Foto" value={h.imageSrc} onChange={(url) => updateHappening(i, "imageSrc", url)} folder="events" />
              </div>
            ))}
            <button type="button" className="admin-add-row-btn" onClick={addHappening}><Plus size={14} /> Tambah Happening</button>
          </div>
        </div>

        {/* ── Impacts ───────────────────────────────────── */}
        <div className="admin-card" style={{ marginBottom: 20 }}>
          <div className="admin-card-header"><span className="admin-card-title">📊 Impact Stats</span></div>
          <div className="admin-card-body">
            <p style={{ fontSize: "0.82rem", color: "#6B7280", marginBottom: "0.75rem" }}>
              Hanya 2 data impact yang tersedia: <strong>Participant</strong> dan <strong>Total Ride</strong>.
            </p>
            {["Participant", "Total Ride"].map((label, i) => (
              <div key={label} className="admin-array-row">
                <input
                  className="admin-form-input"
                  value={label}
                  readOnly
                  style={{ background: "#F3F4F6", color: "#6B7280", cursor: "not-allowed", flex: "0 0 160px" }}
                />
                <input
                  className="admin-form-input"
                  placeholder={i === 0 ? "e.g. 40+" : "e.g. 45Km"}
                  value={form.impacts?.[i]?.value ?? ""}
                  onChange={(e) => updateImpactValue(i, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Gallery ───────────────────────────────────── */}
        <div className="admin-card" style={{ marginBottom: 24 }}>
          <div className="admin-card-header"><span className="admin-card-title">🖼️ Gallery</span></div>
          <div className="admin-card-body">
            <p style={{ fontSize: "0.82rem", color: "#6B7280", marginBottom: "0.75rem" }}>Maksimal 5 foto dokumentasi.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem" }}>
              {(form.gallery || []).map((img, i) => (
                <div key={i} style={{ border: "1px solid #E2E8F0", borderRadius: 10, padding: "0.75rem", position: "relative" }}>
                  <button type="button" className="admin-remove-row-btn" onClick={() => removeGallery(i)} style={{ position: "absolute", top: 8, right: 8, zIndex: 1 }}><X size={16} /></button>
                  <ImageUploader label={`Foto ${i + 1}`} value={img} onChange={(url) => updateGallery(i, url)} folder="events" />
                </div>
              ))}
            </div>
            <button type="button" className="admin-add-row-btn" onClick={addGallery}><Plus size={14} /> Tambah Foto</button>
          </div>
        </div>

        {/* Submit */}
        <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
          <Link href="/admin/events" className="admin-btn admin-btn-secondary">Batal</Link>
          <button type="submit" className="admin-btn admin-btn-primary" disabled={saving}>
            <Save size={16} /> {saving ? "Menyimpan..." : isNew ? "Simpan Event" : "Perbarui Event"}
          </button>
        </div>
      </form>

      {/* Toast */}
      {toast && (
        <div className="admin-toast-wrap">
          <div className={`admin-toast ${toast.type}`}>{toast.msg}</div>
        </div>
      )}
    </div>
  );
}

export default function AdminEventFormPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminEventFormContent />
    </Suspense>
  );
}
