"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Bike, Zap, BatteryCharging } from "lucide-react";
import { useLanguage } from "../lib/useLanguage";

const productDropdownItems = [
  {
    href: "/products/e-bike",
    icon: <Bike size={18} />,
    label_id: "E-Bike",
    label_en: "E-Bike",
    desc_id: "Sepeda listrik cerdas",
    desc_en: "Smart electric bicycle",
    color: "#29B6F6",
  },
  {
    href: "/products/e-motor",
    icon: <Zap size={18} />,
    label_id: "E-Motor",
    label_en: "E-Motor",
    desc_id: "Motor listrik bertenaga",
    desc_en: "Powerful electric motorcycle",
    color: "#29B6F6",
  },
  {
    href: "/products/ev-charging",
    icon: <BatteryCharging size={18} />,
    label_id: "EV Charging",
    label_en: "EV Charging",
    desc_id: "Infrastruktur pengisian daya",
    desc_en: "Smart charging infrastructure",
    color: "#29B6F6",
  },
];

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const isId = language === "id";

  // Hide navbar and show back button ONLY on detail pages (e.g., /news/slug, /events/id, /partners/id)
  const detailBases = ["/events", "/partners", "/news"];
  const isHiddenNavbarRoute = detailBases.some(base => 
    pathname.startsWith(`${base}/`) && pathname.length > `${base}/`.length
  ) || pathname.startsWith("/admin");

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsProductOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { label: isId ? "Mitra" : "Partners", href: "/partners" },
    { label: isId ? "Acara" : "Events", href: "/events" },
    { label: isId ? "Berita" : "News", href: "/news" },
    { label: isId ? "Tentang Kami" : "About", href: "/about" },
  ];

  if (isHiddenNavbarRoute) {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Brand / Logo */}
        <Link href="/" className="navbar-logo" onClick={() => setIsMobileOpen(false)}>
          <Image
            src="/images/logo/LOGO-GWE&M.png"
            alt="Gridwiz Logo"
            width={36}
            height={36}
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="navbar-menu">
          {/* Home */}
          <li>
            <Link
              href="/#home"
              className={pathname === "/" ? "active" : ""}
            >
              {isId ? "Beranda" : "Home"}
            </Link>
          </li>

          {/* Products Dropdown */}
          <li
            ref={dropdownRef}
            className="navbar-dropdown-parent"
            onMouseEnter={() => setIsProductOpen(true)}
            onMouseLeave={() => setIsProductOpen(false)}
          >
            <button
              className={`navbar-dropdown-trigger ${pathname.startsWith("/products") ? "active" : ""}`}
              onClick={() => setIsProductOpen(!isProductOpen)}
              aria-expanded={isProductOpen}
              aria-haspopup="true"
            >
              {isId ? "Produk" : "Products"}
              <ChevronDown
                size={14}
                style={{
                  transform: isProductOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.25s ease",
                }}
              />
            </button>

            {/* Dropdown Panel */}
            <div className={`navbar-dropdown-panel ${isProductOpen ? "open" : ""}`}>
              <div className="navbar-dropdown-arrow" />
              {productDropdownItems.map((item) => {
                const isItemActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`navbar-dropdown-item ${isItemActive ? "active" : ""}`}
                    onClick={() => setIsProductOpen(false)}
                  >
                    <span
                      className="navbar-dropdown-icon"
                      style={{ color: item.color, background: `${item.color}18` }}
                    >
                      {item.icon}
                    </span>
                    <span className="navbar-dropdown-text">
                      <span className="navbar-dropdown-label">
                        {isId ? item.label_id : item.label_en}
                      </span>
                      <span className="navbar-dropdown-desc">
                        {isId ? item.desc_id : item.desc_en}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </li>

          {/* Other links */}
          {menuItems.map((item, idx) => {
            const isActive = pathname === item.href;
            return (
              <li key={idx}>
                <Link
                  href={item.href}
                  className={isActive ? "active" : ""}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action Button & Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            aria-label="Toggle Language"
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "#fff",
              padding: "0.4rem 0.75rem",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "0.85rem",
              fontWeight: 600,
            }}
          >
            🌐 {language.toUpperCase()}
          </button>

          {/* Tombol CTA Desktop */}
          <Link href="/#contact" className="navbar-cta navbar-cta-desktop">
            {isId ? "Hubungi Kami" : "Contact Us"}
          </Link>

          {/* Hamburger Button (Mobile Only) */}
          <button
            className="navbar-hamburger"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileOpen && (
        <ul className="navbar-mobile-menu">
          <li>
            <Link
              href="/#home"
              onClick={() => setIsMobileOpen(false)}
              className={pathname === "/" ? "active" : ""}
            >
              {isId ? "Beranda" : "Home"}
            </Link>
          </li>

          {/* Mobile Products Accordion */}
          <li>
            <button
              className={`navbar-mobile-dropdown-trigger ${pathname.startsWith("/products") ? "active" : ""}`}
              onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
            >
              <span>{isId ? "Produk" : "Products"}</span>
              <ChevronDown
                size={16}
                style={{
                  transform: isMobileProductOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.25s ease",
                }}
              />
            </button>
            {isMobileProductOpen && (
              <ul className="navbar-mobile-submenu">
                {productDropdownItems.map((item) => {
                  const isItemActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => { setIsMobileOpen(false); setIsMobileProductOpen(false); }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.6rem",
                          backgroundColor: isItemActive ? "rgba(255, 255, 255, 0.16)" : "transparent",
                          border: isItemActive ? "1px solid rgba(255, 255, 255, 0.22)" : "1px solid transparent",
                          borderRadius: "6px",
                          padding: "0.5rem 0.75rem",
                          color: "#ffffff",
                          fontWeight: isItemActive ? 600 : 500,
                        }}
                      >
                        <span style={{ color: item.color }}>{item.icon}</span>
                        {isId ? item.label_id : item.label_en}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>

          {menuItems.map((item, idx) => {
            const isActive = pathname === item.href;
            return (
              <li key={idx}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={isActive ? "active" : ""}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}

          {/* Tombol CTA di Mobile Drawer */}
          <li style={{ paddingTop: "0.5rem" }}>
            <Link
              href="/#contact"
              className="navbar-cta"
              style={{ width: "100%", textAlign: "center" }}
              onClick={() => setIsMobileOpen(false)}
            >
              {isId ? "Hubungi Kami" : "Contact Us"}
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
