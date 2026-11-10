"use client";

import Link from "next/link";
import { Calendar, Newspaper, Handshake, ArrowRight, TrendingUp } from "lucide-react";
import { useAdminData } from "../../../context/AdminDataContext";
import "../admin.css";

export default function AdminDashboardPage() {
  const { events, news, partners } = useAdminData();

  const stats = [
    {
      label: "Total Events",
      value: events.length,
      icon: Calendar,
      color: "green",
      href: "/admin/events",
    },
    {
      label: "Total Berita",
      value: news.length,
      icon: Newspaper,
      color: "purple",
      href: "/admin/news",
    },
    {
      label: "Total Partners",
      value: partners.length,
      icon: Handshake,
      color: "blue",
      href: "/admin/partners",
    },
    {
      label: "Konten Total",
      value: events.length + news.length + partners.length,
      icon: TrendingUp,
      color: "orange",
      href: "#",
    },
  ];

  return (
    <div>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Selamat Datang, Admin 👋</h1>
          <p className="admin-page-subtitle">Kelola konten Events, News, dan Partners dari sini.</p>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="admin-stats-grid">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="admin-stat-card">
            <div className={`admin-stat-icon ${color}`}>
              <Icon size={24} />
            </div>
            <div>
              <div className="admin-stat-value">{value}</div>
              <div className="admin-stat-label">{label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
        {[
          { label: "Kelola Events", desc: `${events.length} event aktif`, icon: Calendar, color: "#22c55e", href: "/admin/events" },
          { label: "Kelola Berita", desc: `${news.length} artikel`, icon: Newspaper, color: "#a855f7", href: "/admin/news" },
          { label: "Kelola Partners", desc: `${partners.length} mitra`, icon: Handshake, color: "#3b82f6", href: "/admin/partners" },
        ].map(({ label, desc, icon: Icon, color, href }) => (
          <div key={label} className="admin-card">
            <div className="admin-card-body">
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${color}20`, color, display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  <Icon size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "1rem", color: "#1e293b" }}>{label}</div>
                  <div style={{ fontSize: ".8rem", color: "#64748b" }}>{desc}</div>
                </div>
              </div>
              <Link href={href} className="admin-btn admin-btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Buka Halaman <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Events preview */}
      <div className="admin-card" style={{ marginTop: 24 }}>
        <div className="admin-card-header">
          <span className="admin-card-title">Event Terbaru</span>
          <Link href="/admin/events" className="admin-btn admin-btn-secondary admin-btn-sm">
            Lihat Semua <ArrowRight size={14} />
          </Link>
        </div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Judul</th>
                <th>Kategori</th>
                <th>Tanggal</th>
                <th>Lokasi</th>
              </tr>
            </thead>
            <tbody>
              {events.slice(0, 3).map((ev) => (
                <tr key={ev.id}>
                  <td style={{ fontWeight: 500 }}>{ev.title}</td>
                  <td><span className="admin-badge event">{ev.category}</span></td>
                  <td>{ev.date}</td>
                  <td>{ev.location}</td>
                </tr>
              ))}
              {events.length === 0 && (
                <tr><td colSpan={4} style={{ textAlign: "center", color: "#94a3b8", padding: "32px" }}>Belum ada event</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
