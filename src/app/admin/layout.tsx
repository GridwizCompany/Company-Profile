"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard, Calendar, Newspaper, Handshake, LogOut, ChevronRight, Menu, X
} from "lucide-react";
import { isAdminLoggedIn, adminLogout } from "../../lib/adminStore";
import "../admin/admin.css";

const NAV_ITEMS = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/events",    label: "Events",    icon: Calendar },
  { href: "/admin/news",      label: "News",      icon: Newspaper },
  { href: "/admin/partners",  label: "Partners",  icon: Handshake },
];

const PAGE_TITLES: Record<string, string> = {
  "/admin/dashboard": "Dashboard",
  "/admin/events":    "Manage Events",
  "/admin/news":      "Manage News",
  "/admin/partners":  "Manage Partners",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router   = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/admin/login") { setChecked(true); return; }
    if (!isAdminLoggedIn()) {
      window.location.href = "/admin/login";
      return;
    }
    setChecked(true);
  }, [pathname, router]);

  // Close sidebar on route change in mobile view
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  if (!checked) return null;
  if (pathname === "/admin/login") return <>{children}</>;

  const title = Object.entries(PAGE_TITLES).find(([key]) => pathname.startsWith(key))?.[1] ?? "Admin";

  const handleLogout = () => {
    adminLogout();
    window.location.href = "/admin/login";
  };

  return (
    <div className="admin-root">
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          className="admin-sidebar-backdrop"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="admin-sidebar-logo">
          <div className="admin-brand-wrap">
            <Image
              src="/images/logo/LOGO-GWE&M.png"
              alt="Gridwiz Logo"
              width={140}
              height={34}
              priority
              style={{ objectFit: "contain", height: "30px", width: "auto" }}
            />
          </div>
          <span>Admin Panel</span>
        </div>

        <nav className="admin-nav">
          <div className="admin-nav-section">Menu</div>
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`admin-nav-link ${pathname.startsWith(href) ? "active" : ""}`}
            >
              <Icon size={18} />
              {label}
              {pathname.startsWith(href) && <ChevronRight size={14} style={{ marginLeft: "auto" }} />}
            </Link>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <button className="admin-nav-link admin-btn-danger" onClick={handleLogout} style={{ width: "100%", color: "#f87171" }}>
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="admin-main">
        {/* Topbar */}
        <header className="admin-topbar">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              type="button"
              className="admin-mobile-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle Navigation"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <span className="admin-topbar-title">{title}</span>
          </div>
          <div className="admin-topbar-right">
            <div className="admin-topbar-logo-badge">
              <Image
                src="/images/logo/LOGO-GWE&M.png"
                alt="Gridwiz Logo"
                width={130}
                height={30}
                priority
                style={{ objectFit: "contain", height: "26px", width: "auto" }}
              />
            </div>
            <div className="admin-user-info">
              <div className="admin-user-name">Admin</div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="admin-content">{children}</main>
      </div>
    </div>
  );
}
