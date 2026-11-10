"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Edit2, Trash2, Calendar, MapPin, Users } from "lucide-react";
import { useAdminData } from "../../../context/AdminDataContext";
import "../admin.css";

export default function AdminEventsPage() {
  const { events, removeEvent } = useAdminData();
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;
    removeEvent(deleteTarget);
    setDeleteTarget(null);
    showToast("Event berhasil dihapus.");
  };

  return (
    <div>
      {/* Header */}
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Manage Events</h1>
          <p className="admin-page-subtitle">{events.length} event tersedia</p>
        </div>
        <Link href="/admin/events/edit?id=new" className="admin-btn admin-btn-primary">
          <Plus size={18} /> Tambah Event
        </Link>
      </div>

      {/* Table Card */}
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
                <th>Peserta</th>
                <th style={{ textAlign: "right" }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {events.map((ev) => (
                <tr key={ev.id}>
                  <td>
                    <div style={{ position: "relative", width: 56, height: 40, borderRadius: 6, overflow: "hidden", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {ev.imageSrc ? (
                        <Image src={ev.imageSrc} alt={ev.title} fill style={{ objectFit: "cover" }} onError={() => { }} />
                      ) : (
                        <Calendar size={16} color="#94a3b8" />
                      )}
                    </div>
                  </td>
                  <td style={{ fontWeight: 600, color: "#1e293b", maxWidth: 200 }}>
                    {ev.title}
                    {ev.subtitle && <div style={{ fontSize: ".75rem", color: "#94a3b8", fontWeight: 400, marginTop: 2 }}>{ev.subtitle}</div>}
                  </td>
                  <td><span className="admin-badge event">{ev.category}</span></td>
                  <td style={{ color: "#64748b", fontSize: ".85rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}><Calendar size={13} />{ev.date}</div>
                  </td>
                  <td style={{ color: "#64748b", fontSize: ".85rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}><MapPin size={13} />{ev.location}</div>
                  </td>
                  <td style={{ color: "#64748b", fontSize: ".85rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}><Users size={13} />{ev.participants}</div>
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                      <Link href={`/admin/events/edit?id=${ev.id}`} className="admin-btn admin-btn-edit admin-btn-sm">
                        <Edit2 size={14} /> Edit
                      </Link>
                      <button
                        className="admin-btn admin-btn-danger admin-btn-sm"
                        onClick={() => setDeleteTarget(ev.id)}
                      >
                        <Trash2 size={14} /> Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {events.length === 0 && (
                <tr>
                  <td colSpan={7}>
                    <div className="admin-empty">
                      <Calendar size={40} />
                      <p>Belum ada event. Klik &quot;Tambah Event&quot; untuk membuat event baru.</p>
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
            <h3>🗑️ Hapus Event?</h3>
            <p>
              Event &quot;<strong>{events.find((e) => e.id === deleteTarget)?.title}</strong>&quot; akan dihapus secara permanen.
              Tindakan ini tidak dapat dibatalkan.
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
