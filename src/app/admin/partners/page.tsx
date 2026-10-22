"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Edit2, Trash2, MapPin, Coffee, Building2, Bike } from "lucide-react";
import { useAdminData } from "../../../context/AdminDataContext";
import "../admin.css";

export default function AdminPartnersPage() {
  const { partners, removePartner } = useAdminData();
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "cafe" | "hotel">("all");
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;
    removePartner(deleteTarget);
    setDeleteTarget(null);
    showToast("Partner berhasil dihapus.");
  };

  const filtered = filter === "all" ? partners : partners.filter((p) => p.category === filter);

  return (
    <div>
      {/* Header */}
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Manage Partners</h1>
          <p className="admin-page-subtitle">{partners.length} mitra terdaftar</p>
        </div>
        <Link href="/admin/partners/edit?slug=new" className="admin-btn admin-btn-primary">
          <Plus size={18} /> Tambah Partner
        </Link>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        {(["all", "cafe", "hotel"] as const).map((cat) => (
          <button
            key={cat}
            className={`admin-btn admin-btn-sm ${filter === cat ? "admin-btn-primary" : "admin-btn-secondary"}`}
            onClick={() => setFilter(cat)}
          >
            {cat === "all" ? "Semua" : cat === "cafe" ? <><Coffee size={14} /> Café</> : <><Building2 size={14} /> Hotel</>}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="admin-card">
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Cover</th>
                <th>Nama</th>
                <th>Kategori</th>
                <th>E-Bike Tersedia</th>
                <th>Lokasi</th>
                <th style={{ textAlign: "right" }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.slug}>
                  <td>
                    <div style={{ position: "relative", width: 56, height: 40, borderRadius: 6, overflow: "hidden", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {p.coverImage ? (
                        <Image src={p.coverImage} alt={p.name} fill style={{ objectFit: "cover" }} />
                      ) : (
                        <Building2 size={16} color="#94a3b8" />
                      )}
                    </div>
                  </td>
                  <td style={{ fontWeight: 600, color: "#1e293b" }}>
                    {p.name}
                    <div style={{ fontSize: ".75rem", color: "#94a3b8", fontWeight: 400, marginTop: 2 }}>{p.tagline_id}</div>
                  </td>
                  <td>
                    <span className={`admin-badge ${p.category}`}>
                      {p.category === "cafe" ? "Café & Restoran" : "Hotel & Resort"}
                    </span>
                  </td>
                  <td>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        background: "#eff6ff",
                        color: "#1d4ed8",
                        padding: "4px 10px",
                        borderRadius: "999px",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                      }}
                    >
                      <Bike size={13} />
                      {p.ebikeCount !== undefined && p.ebikeCount !== ""
                        ? `${p.ebikeCount} Unit`
                        : (p.stats && p.stats.length > 0 && p.stats[0]?.value ? `${p.stats[0].value} Unit` : "-")}
                    </span>
                  </td>
                  <td style={{ color: "#64748b", fontSize: ".85rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}><MapPin size={13} />{p.location}</div>
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                      <Link href={`/admin/partners/edit?slug=${p.slug}`} className="admin-btn admin-btn-edit admin-btn-sm">
                        <Edit2 size={14} /> Edit
                      </Link>
                      <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => setDeleteTarget(p.slug)}>
                        <Trash2 size={14} /> Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6}>
                    <div className="admin-empty">
                      <Building2 size={40} />
                      <p>Belum ada partner di kategori ini.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Modal */}
      {deleteTarget && (
        <div className="admin-modal-overlay" onClick={() => setDeleteTarget(null)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <h3>🗑️ Hapus Partner?</h3>
            <p>
              Partner "<strong>{partners.find((p) => p.slug === deleteTarget)?.name}</strong>" akan dihapus secara permanen.
            </p>
            <div className="admin-modal-actions">
              <button className="admin-btn admin-btn-secondary" onClick={() => setDeleteTarget(null)}>Batal</button>
              <button className="admin-btn admin-btn-danger" onClick={confirmDelete}>Ya, Hapus</button>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div className="admin-toast-wrap">
          <div className={`admin-toast ${toast.type}`}>{toast.msg}</div>
        </div>
      )}
    </div>
  );
}
