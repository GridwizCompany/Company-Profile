"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Edit2, Trash2, Calendar, MapPin, Tag } from "lucide-react";
import { useAdminData } from "../../../context/AdminDataContext";
import "../admin.css";

export default function AdminNewsPage() {
  const { news, removeNews } = useAdminData();
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;
    removeNews(deleteTarget);
    setDeleteTarget(null);
    showToast("Berita berhasil dihapus.");
  };

  return (
    <div>
      {/* Header */}
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Manage News</h1>
          <p className="admin-page-subtitle">{news.length} artikel tersedia</p>
        </div>
        <Link href="/admin/news/edit?id=new" className="admin-btn admin-btn-primary">
          <Plus size={18} /> Tambah Berita
        </Link>
      </div>

      {/* Table */}
      <div className="admin-card">
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Thumbnail</th>
                <th>Judul</th>
                <th>Kategori</th>
                <th>Tanggal</th>
                <th>Lokasi</th>
                <th style={{ textAlign: "right" }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {news.map((n) => (
                <tr key={n.id}>
                  <td>
                    <div style={{ position: "relative", width: 56, height: 40, borderRadius: 6, overflow: "hidden", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {n.imageSrc ? (
                        <Image src={n.imageSrc} alt={n.title} fill style={{ objectFit: "cover" }} />
                      ) : (
                        <Tag size={16} color="#94a3b8" />
                      )}
                    </div>
                  </td>
                  <td style={{ fontWeight: 600, color: "#1e293b", maxWidth: 240 }}>
                    {n.title}
                    <div style={{ fontSize: ".75rem", color: "#94a3b8", fontWeight: 400, marginTop: 2, lineHeight: 1.4 }}>
                      {n.shortDesc.slice(0, 80)}…
                    </div>
                  </td>
                  <td><span className="admin-badge news">{n.category}</span></td>
                  <td style={{ color: "#64748b", fontSize: ".85rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}><Calendar size={13} />{n.date}</div>
                  </td>
                  <td style={{ color: "#64748b", fontSize: ".85rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}><MapPin size={13} />{n.location}</div>
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                      <Link href={`/admin/news/edit?id=${n.id}`} className="admin-btn admin-btn-edit admin-btn-sm">
                        <Edit2 size={14} /> Edit
                      </Link>
                      <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => setDeleteTarget(n.id)}>
                        <Trash2 size={14} /> Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {news.length === 0 && (
                <tr>
                  <td colSpan={6}>
                    <div className="admin-empty">
                      <Tag size={40} />
                      <p>Belum ada berita. Klik &quot;Tambah Berita&quot; untuk mulai.</p>
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
            <h3>🗑️ Hapus Berita?</h3>
            <p>
              Berita &quot;<strong>{news.find((n) => n.id === deleteTarget)?.title}</strong>&quot; akan dihapus secara permanen.
            </p>
            <div className="admin-modal-actions">
              <button className="admin-btn admin-btn-secondary" onClick={() => setDeleteTarget(null)}>Batal</button>
              <button className="admin-btn admin-btn-danger" onClick={confirmDelete}>Ya, Hapus</button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="admin-toast-wrap">
          <div className={`admin-toast ${toast.type}`}>{toast.msg}</div>
        </div>
      )}
    </div>
  );
}