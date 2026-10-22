"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { useLanguage } from "../lib/useLanguage";

export default function Footer() {
  const { language } = useLanguage();
  const isId = language === "id";

  return (
    <footer id="contact" className="footer">
      {/* Top gradient separator */}
      <div className="footer-top-bar" />

      <div className="footer-inner">
        {/* ── Kolom 1: Brand ── */}
        <div className="footer-brand">
          <Image
            src="/images/logo/LOGO-GWE&M.png"
            alt="Gridwiz Logo"
            width={160}
            height={52}
            style={{ height: "48px", width: "auto", objectFit: "contain", marginBottom: "1.25rem" }}
          />
          <p className="footer-brand-desc">
            {isId
              ? "Ekosistem mobilitas listrik pintar yang mengintegrasikan kendaraan EV dengan aplikasi cerdas untuk Lombok yang lebih hijau."
              : "Smart electric mobility ecosystem integrating EVs with an intelligent app for a greener Lombok."}
          </p>

          {/* Social Media Icons */}
          <div className="footer-socials">
            {[
              { src: "/images/hero/icon/wa.png", alt: "WhatsApp", href: "https://wa.me/6282144540304" },
              { src: "/images/hero/icon/ig.png", alt: "Instagram", href: "https://www.instagram.com/reflow.gridwizenm" },
              { src: "/images/hero/icon/tt.png", alt: "TikTok", href: "https://www.tiktok.com/@relfow.gridwizenm" },
              { src: "/images/hero/icon/gmail.png", alt: "Gmail", href: "gridwizenergyandmobility@gmail.com" },
            ].map((s) => (
              <a
                key={s.alt}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label={s.alt}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={24}
                  height={24}
                  style={{ width: "22px", height: "22px", objectFit: "contain" }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* ── Kolom 2: Tautan Cepat ── */}
        <div className="footer-col">
          <h4 className="footer-col-title">{isId ? "Tautan Cepat" : "Quick Links"}</h4>
          <ul className="footer-links">
            <li><Link href="/">{isId ? "Beranda" : "Home"}</Link></li>
            <li><Link href="/#products">{isId ? "Produk" : "Products"}</Link></li>
            <li><Link href="/#services">{isId ? "Layanan" : "Services"}</Link></li>
            <li><Link href="/#news">{isId ? "Berita" : "News"}</Link></li>
            <li><Link href="/#partners">{isId ? "Mitra" : "Partners"}</Link></li>
          </ul>
        </div>

        {/* ── Kolom 3: Produk ── */}
        <div className="footer-col">
          <h4 className="footer-col-title">{isId ? "Produk" : "Products"}</h4>
          <ul className="footer-links">
            <li><Link href="/products/e-bike">E-Bike Re:Flow</Link></li>
            <li><Link href="/products/e-motor">E-Motor Re:Flow</Link></li>
            <li><Link href="/products/ev-charging">Ev Charging Re:Flow</Link></li>
            <li><Link href="/">ReFlow</Link></li>
          </ul>
        </div>

        {/* ── Kolom 4: Kontak ── */}
        <div className="footer-col">
          <h4 className="footer-col-title">{isId ? "Hubungi Kami" : "Contact Us"}</h4>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <MapPin size={16} color="#29B6F6" strokeWidth={2} />
              <span>Mataram, Nusa Tenggara Barat, Indonesia</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} color="#29B6F6" strokeWidth={2} />
              <a href="mailto:contact@gridwiz.id">gridwizenergyandmobility@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <Phone size={16} color="#29B6F6" strokeWidth={2} />
              <a href="tel:+6282144540304">+62 821-4454-0304</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} PT Gridwiz Energy and Mobility. All rights reserved.</span>
      </div>
    </footer>
  );
}
