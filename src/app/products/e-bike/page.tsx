"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  MapPin,
  Check,
  ArrowRight,
  Smartphone,
  Calendar,
  Zap,
  Leaf,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import Footer from "../../../component/Footer";
import AppCtaSection from "../../../component/AppCtaSection";
import { useLanguage } from "../../../lib/useLanguage";
import "./e-bike.css";

// ── FAQ Data ──
const ebikeFaqs = (isId: boolean) => [
  {
    q: isId ? "Bagaimana cara mulai menyewa E-Bike Re:Flow?" : "How do I start renting a Re:Flow E-Bike?",
    a: isId
      ? "Cukup unduh aplikasi Re:Flow di App Store atau Google Play, lakukan registrasi singkat, lalu scan kode QR pada stang sepeda listrik untuk membuka kunci pintar (smart-lock) dan memulai perjalanan Anda secara instan."
      : "Simply download the Re:Flow app from the App Store or Google Play, complete a quick registration, and scan the QR code on the e-bike handlebar to unlock the smart-lock and begin your ride instantly.",
  },
  {
    q: isId ? "Di mana saya bisa mengambil dan mengembalikan sepeda?" : "Where can I pick up and return the e-bike?",
    a: isId
      ? "Anda dapat menemukan armada E-Bike di berbagai titik mitra parkir Re:Flow di seluruh Lombok melalui peta dalam aplikasi. Setelah selesai, parkir sepeda di zona yang telah ditentukan dan kunci kembali smart-lock untuk mengakhiri sesi sewa."
      : "You can find E-Bikes at designated partner parking points Re:Flow across Lombok via the in-app map. When finished, park the bike in an authorized parking zone and lock the smart-lock to end your session.",
  },
  {
    q: isId ? "Berapa kecepatan maksimal dan jarak tempuh baterai?" : "What is the top speed and battery range?",
    a: isId
      ? "E-Bike Re:Flow dirancang dengan kecepatan maksimal aman 25 km/jam dan jarak tempuh hingga 30 km per pengisian penuh, sangat ideal untuk berkeliling kota mataram, kawasan wisata, maupun mobilitas harian."
      : "Re:Flow E-Bikes are designed with a safe top speed of 25 km/h and a range of up to 30 km on a single full charge, making them ideal for touring around Mataram City, tourist attractions, or daily commutes.",
  },
  {
    q: isId ? "Bagaimana sistem tarif dan metode pembayarannya?" : "How does the pricing and payment system work?",
    a: isId
      ? "Kami menyediakan tarif fleksibel mulai dari paket per menit hingga langganan harian, mingguan, dan bulanan. Pembayaran didukung lewat berbagai e-wallet, QRIS, kartu kredit/debit, atau saldo Re:Flow."
      : "We offer flexible rates from pay-per-minute options to daily, weekly, and monthly passes. Payments are supported via e-wallets, QRIS, credit/debit cards, or your Re:Flow balance.",
  },
  {
    q: isId ? "Apa yang harus dilakukan jika baterai melemah saat perjalanan?" : "What should I do if the battery runs low during my ride?",
    a: isId
      ? "Anda dapat memarkir dan mengakhiri sewa di Re:Flow Hub terdekat untuk berganti ke unit baru yang terisi penuh, atau menghubungi tim bantuan kami melalui fitur Live Chat 24/7 di aplikasi jika memerlukan bantuan di lokasi."
      : "You can park and end your ride at the nearest Re:Flow Hub to switch to a fully charged bike, or contact our support team via the 24/7 in-app Live Chat for roadside assistance.",
  },
  {
    q: isId ? "Apakah ada batasan usia atau aturan keselamatan berkendara?" : "Are there age limits or safety regulations?",
    a: isId
      ? "Pengguna minimal berusia 12 tahun. Kami sangat menganjurkan penggunaan helm keselamatan, selalu mematuhi rambu lalu lintas, dan menjaga kapasitas maksimal 1 pengendara per sepeda demi keamanan."
      : "Riders must be at least 12 years old. We strongly recommend wearing a safety helmet, obeying all local traffic rules, and strictly maintaining one rider per bike for your safety.",
  },
];

// ── FAQ Accordion Item ──
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`ebike-faq-item ${open ? "open" : ""}`}>
      <button className="ebike-faq-question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <ChevronDown
          size={18}
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            flexShrink: 0,
            color: open ? "#29B6F6" : "#0F4068",
          }}
        />
      </button>
      {open && <div className="ebike-faq-answer">{a}</div>}
    </div>
  );
}

// ── Hook Counter Angka yang Handal & Aman ──
function useCountUp(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

export default function EBikePage() {
  const { language } = useLanguage();
  const isId = language === "id";

  // Intersection Observer untuk memicu animasi CountUp
  const statsRef = useRef<HTMLElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.25 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Nilai counter sesuai implementation plan: 10.800+, 38.1t, 6.712, 83 jam
  const countRides = useCountUp(2737, 1800, statsVisible);
  const countCo2 = useCountUp(89, 1800, statsVisible); // Dibagi 10 menjadi 38.1
  const countUsers = useCountUp(6712, 1800, statsVisible);
  const countHours = useCountUp(700, 1800, statsVisible);

  return (
    <main className="ebike-page">
      {/* ── 1. HERO SECTION ── */}
      <section className="ebike-hero">
        <div className="ebike-hero-overlay" />
        <Image
          src="/images/products/ebike/hhero.png"
          alt="E-Bike Re:Flow Hero"
          fill
          className="ebike-hero-img"
          priority
        />
        <div className="ebike-hero-content">
          <div className="ebike-hero-badge">Re:Flow Product</div>
          <h1 className="ebike-hero-title">
            E-Bike<br /> Re:Flow
          </h1>
          <p className="ebike-hero-desc">
            {isId
              ? "Berbagi sepeda listrik pintar untuk mobilitas berkelanjutan dan praktis di Lombok."
              : "Smart electric bike sharing for sustainable and practical mobility in Lombok."}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://apps.apple.com/gb/app/re-flow/id6741798337"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                transition: "transform 0.2s ease, filter 0.2s ease",
                filter: "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.35))",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <Image
                src="/images/hero/appstore.png"
                alt="Download on the App Store"
                width={200}
                height={65}
                style={{
                  height: "58px",
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
                priority
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.gridwiz.ride&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                transition: "transform 0.2s ease, filter 0.2s ease",
                filter: "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.35))",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <Image
                src="/images/hero/googleplay.png"
                alt="Get it on Google Play"
                width={200}
                height={65}
                style={{
                  height: "58px",
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
                priority
              />
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. BRIEF OVERVIEW SECTION ── */}
      <section className="ebike-overview-section">
        <div className="ebike-container">
          <div className="ebike-overview-grid">
            <div>
              <span className="ebike-section-pill">
                {isId ? "Pengenalan" : "Overview"}
              </span>
              <h2 className="ebike-overview-title">
                {isId
                  ? "E-Bike Re:Flow untuk Lombok yang Lebih Bersih"
                  : "E-Bike Re:Flow for a Cleaner Lombok"}
              </h2>
              <p className="ebike-overview-desc">
                {isId
                  ? "Re:Flow by Gridwiz Energy & Mobility memperkenalkan pengembangan sepeda listrik (E-Bike) yang mudah digunakan, ramah lingkungan, dan efisien untuk mobilitas sehari-hari di Lombok. Nikmati kebebasan menjelajah pulau tanpa jejak emisi karbon dengan teknologi yang terkoneksi langsung ke ponsel Anda."
                  : "Re:Flow by Gridwiz Energy & Mobility introduces the development of electric bicycles (E-Bikes) that are easy to use, environmentally friendly, and efficient for daily mobility in Lombok. Enjoy the freedom of exploring the island with zero carbon footprint through direct smartphone-connected technology."}
              </p>
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginTop: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#0F4068", fontWeight: 600 }}>
                  <Leaf size={20} color="#2E7D32" />
                  <span>{isId ? "100% Bebas Emisi" : "100% Zero Emission"}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#0F4068", fontWeight: 600 }}>
                  <ShieldCheck size={20} color="#1565C0" />
                  <span>{isId ? "Aman & Nyaman" : "Safe & Reliable"}</span>
                </div>
              </div>
            </div>

            <div className="ebike-overview-img-wrap">
              <Image
                src="/images/products/ebike/ebikefoto.png"
                alt="E-Bike Re:Flow Unit"
                width={620}
                height={420}
                className="ebike-overview-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. HOW TO RENT E-BIKE ── */}
      <section id="how-to-rent" className="ebike-howto-section">
        <div className="ebike-container">
          <div className="ebike-section-header">
            <span className="ebike-section-pill">
              {isId ? "Panduan Sewa" : "Rental Guide"}
            </span>
            <h2 className="ebike-section-title">
              {isId ? "Cara Sewa E-Bike" : "How To Rent E-Bike"}
            </h2>
            <p className="ebike-section-sub">
              {isId
                ? "Hanya 4 langkah mudah untuk mulai menjelajah bersama armada sepeda pintar Re:Flow"
                : "Just 4 easy steps to start exploring with the Re:Flow smart bicycle fleet"}
            </p>
          </div>

          {/* 4 Langkah Horizontal dengan Icon Lokal */}
          <div className="ebike-howto-steps-row">
            {/* Step 1 */}
            <div className="ebike-howto-step-item">
              <div className="ebike-howto-icon-circle">
                <Image
                  src="/images/products/ebike/icon/download.png"
                  alt="Download ReFlow Apps"
                  width={36}
                  height={36}
                  className="ebike-howto-icon-img"
                />
              </div>
              <h3 className="ebike-howto-step-title">
                {isId ? "Unduh Aplikasi ReFlow" : "Download Reflow Apps"}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#6A7D94" }}>
                {isId ? "Langkah 01" : "Step 01"}
              </p>
            </div>

            <div className="ebike-howto-arrow">
              <ArrowRight size={24} />
            </div>

            {/* Step 2 */}
            <div className="ebike-howto-step-item">
              <div className="ebike-howto-icon-circle">
                <Image
                  src="/images/products/ebike/icon/bike.png"
                  alt="Find a E-Bike Re:Flow"
                  width={36}
                  height={36}
                  className="ebike-howto-icon-img"
                />
              </div>
              <h3 className="ebike-howto-step-title">
                {isId ? "Temukan E-Bike Re:Flow" : "Find a E-Bike Re:Flow"}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#6A7D94" }}>
                {isId ? "Langkah 02" : "Step 02"}
              </p>
            </div>

            <div className="ebike-howto-arrow">
              <ArrowRight size={24} />
            </div>

            {/* Step 3 */}
            <div className="ebike-howto-step-item">
              <div className="ebike-howto-icon-circle">
                <Image
                  src="/images/products/ebike/icon/qr.png"
                  alt="Scan and Unlock E-Bike"
                  width={36}
                  height={36}
                  className="ebike-howto-icon-img"
                />
              </div>
              <h3 className="ebike-howto-step-title">
                {isId ? "Pindai & Buka Kunci" : "Scan and Unlock E-Bike"}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#6A7D94" }}>
                {isId ? "Langkah 03" : "Step 03"}
              </p>
            </div>

            <div className="ebike-howto-arrow">
              <ArrowRight size={24} />
            </div>

            {/* Step 4 */}
            <div className="ebike-howto-step-item">
              <div className="ebike-howto-icon-circle">
                <Image
                  src="/images/products/ebike/icon/ride.png"
                  alt="Ride and Return"
                  width={36}
                  height={36}
                  className="ebike-howto-icon-img"
                />
              </div>
              <h3 className="ebike-howto-step-title">
                {isId ? "Berkendara & Kembalikan" : "Ride and Return"}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#6A7D94" }}>
                {isId ? "Langkah 04" : "Step 04"}
              </p>
            </div>
          </div>

          {/* Interactive Video / Phone Mockup Container */}
          <div className="ebike-interactive-section">
            <div className="ebike-interactive-grid">
              {/* Left Col */}
              <div className="ebike-interactive-left">
                <span className="ebike-interactive-tag">
                  {isId ? "PENGALAMAN TERKONEKSI" : "CONNECTED EXPERIENCE"}
                </span>
                <h2 className="ebike-interactive-title">
                  {isId
                    ? "Sewa Cepat & Mudah dari Aplikasi Ponsel"
                    : "Quick & Easy Rental from Mobile App"}
                </h2>
                <p className="ebike-interactive-desc">
                  {isId
                    ? "Cukup satu sentuhan untuk menemukan stasiun terdekat, memindai QR code, dan langsung menikmati perjalanan."
                    : "Just a single tap to locate nearby stations, scan the QR code, and immediately enjoy your ride."}
                </p>
              </div>

              {/* Mid Col: GIF */}
              <div className="ebike-interactive-mid">
                <img
                  src="/video/products/ebike/ebike.gif"
                  alt="E-Bike Interactive Experience"
                  style={{
                    maxWidth: "340px",
                    width: "100%",
                    height: "auto",
                    borderRadius: "2rem",
                    boxShadow: "0 24px 60px rgba(0, 0, 0, 0)",
                    display: "block",
                    marginInline: "auto"
                  }}
                />
              </div>

              {/* Right Col: Features & Store Badges */}
              <div className="ebike-interactive-right">
                <h3 className="ebike-interactive-app-title">Re:Flow Mobile Apps</h3>

                <ul className="ebike-interactive-list">
                  <li className="ebike-interactive-item">
                    <Check size={18} strokeWidth={3} />
                    <span>{isId ? "Temukan sepeda terdekat" : "Find nearby bikes easily"}</span>
                  </li>
                  <li className="ebike-interactive-item">
                    <Check size={18} strokeWidth={3} />
                    <span>{isId ? "Pindai QR untuk membuka" : "Scan QR code to unlock"}</span>
                  </li>
                  <li className="ebike-interactive-item">
                    <Check size={18} strokeWidth={3} />
                    <span>{isId ? "Pantau baterai & jarak" : "Monitor battery & range"}</span>
                  </li>
                  <li className="ebike-interactive-item">
                    <Check size={18} strokeWidth={3} />
                    <span>{isId ? "Riwayat transaksi aman" : "Secure transaction history"}</span>
                  </li>
                </ul>

                {/* App Download Buttons (Enlarged & Shifted to Bottom-Left) */}
                <div className="ebike-interactive-badges">
                  <a
                    href="https://apps.apple.com/gb/app/re-flow/id6741798337"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ebike-store-btn"
                  >
                    <Image
                      src="/images/hero/appstore.png"
                      alt="Download on the App Store"
                      width={160}
                      height={48}
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.gridwiz.ride&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ebike-store-btn"
                  >
                    <Image
                      src="/images/hero/googleplay.png"
                      alt="Download on Play Store"
                      width={160}
                      height={48}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHY CHOOSE US ── */}
      <section className="ebike-why-section">
        <div className="ebike-container">
          <div className="ebike-section-header">
            <span className="ebike-section-pill">
              {isId ? "Keunggulan" : "Why Choose Us"}
            </span>
            <h2 className="ebike-section-title">
              {isId ? "Kenapa Memilih Kami" : "Why Choose Us"}
            </h2>
            <p className="ebike-section-sub">
              {isId
                ? "Solusi mobilitas modern yang dirancang khusus untuk kenyamanan Anda dan kelestarian Lombok."
                : "Modern mobility solution purpose-built for your comfort and the preservation of Lombok."}
            </p>
          </div>

          <div className="ebike-why-grid">
            {/* Fitur 1: Smart App */}
            <div className="ebike-why-card">
              <div className="ebike-why-icon-wrap">
                <Smartphone size={32} />
              </div>
              <h3 className="ebike-why-card-title">
                {isId ? "Aplikasi Pintar" : "Smart App"}
              </h3>
              <p className="ebike-why-card-desc">
                {isId
                  ? "Kemudahan kontrol, pemesanan, dan buka kunci otomatis langsung dari smartphone Anda."
                  : "Seamless control, quick booking, and instant automated unlock right from your phone."}
              </p>
            </div>

            {/* Fitur 2: Flexible Rental */}
            <div className="ebike-why-card">
              <div className="ebike-why-icon-wrap">
                <Calendar size={32} />
              </div>
              <h3 className="ebike-why-card-title">
                {isId ? "Sewa Fleksibel" : "Flexible Rental"}
              </h3>
              <p className="ebike-why-card-desc">
                {isId
                  ? "Pilihan sewa fleksibel sesuai kebutuhan Anda: per menit, per jam, harian, mingguan sampai bulanan."
                  : "Flexible rental options tailored to your needs: per minute, per hour, daily, weekly, or monthly."}
              </p>
            </div>

            {/* Fitur 3: Low Emission */}
            <div className="ebike-why-card">
              <div className="ebike-why-icon-wrap">
                <Zap size={32} />
              </div>
              <h3 className="ebike-why-card-title">
                {isId ? "Bebas Emisi" : "Low Emission"}
              </h3>
              <p className="ebike-why-card-desc">
                {isId
                  ? "100% ramah lingkungan bebas polusi udara demi menjaga keindahan dan kemurnian alam Lombok."
                  : "100% eco-friendly zero-emission rides preserving the beauty and purity of Lombok."}
              </p>
            </div>

            {/* Fitur 4: Accessible Location */}
            <div className="ebike-why-card">
              <div className="ebike-why-icon-wrap">
                <MapPin size={32} />
              </div>
              <h3 className="ebike-why-card-title">
                {isId ? "Lokasi Strategis" : "Accessible Location"}
              </h3>
              <p className="ebike-why-card-desc">
                {isId
                  ? "Parking E-Bike tersebar di cafe & restaurant , hotel & resort premium, dan titik strategis lainnya."
                  : "E-Bike parking is spread across cafes & restaurants, premium hotels & resorts, and other strategic locations."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. ANIMATED STATS SECTION ── */}
      <section className="ebike-stats-section" ref={statsRef}>
        <div className="ebike-container">
          <div className="ebike-stats-grid">
            <div className="ebike-stat-item">
              <span className="ebike-stat-num">
                {countRides.toLocaleString()}<span className="ebike-stat-num-accent">+</span>
              </span>
              <span className="ebike-stat-label">
                {isId ? "Total Perjalanan" : "Total Ride"}
              </span>
            </div>

            <div className="ebike-stat-item">
              <span className="ebike-stat-num">
                {(countCo2 / 10).toFixed(1)}<span className="ebike-stat-num-accent">t</span>
              </span>
              <span className="ebike-stat-label">
                {isId ? "Reduksi CO₂" : "CO₂ Reduction"}
              </span>
            </div>

            <div className="ebike-stat-item">
              <span className="ebike-stat-num">
                {countUsers.toLocaleString()}
              </span>
              <span className="ebike-stat-label">
                {isId ? "Pengguna Aktif" : "Active User"}
              </span>
            </div>

            <div className="ebike-stat-item">
              <span className="ebike-stat-num">
                {countHours}<span className="ebike-stat-num-accent"> {isId ? "+" : "+"}</span>
              </span>
              <span className="ebike-stat-label">
                {isId ? "Unit Sepeda" : "Unit E-Bike"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PRICING SECTION (3 SKEMA UTAMA) ── */}
      <section id="pricing" className="ebike-pricing-section">
        <div className="ebike-container">
          <div className="ebike-section-header">
            <span className="ebike-section-pill">
              {isId ? "Skema Harga" : "Pricing Plans"}
            </span>
            <h2 className="ebike-section-title">
              {isId ? "Pricing E-Bike Re:Flow" : "E-Bike Re:Flow Pricing"}
            </h2>
            <p className="ebike-section-sub">
              {isId
                ? "Pilihan paket tarif hemat dan transparan sesuai kebutuhan perjalanan Anda"
                : "Transparent and affordable rate options designed for your journey"}
            </p>
          </div>

          <div className="ebike-pricing-cards">
            {/* Public Card */}
            <div className="ebike-pricing-card ebike-card-public">
              <h3 className="ebike-pricing-title">{isId ? "Publik" : "Public"}</h3>
              <p className="ebike-pricing-sub">
                {isId ? "Non-pemegang kartu / Pengguna umum" : "Non-cardholders / General public"}
              </p>
              <div className="ebike-pricing-price">
                Rp 390{" "}
                <span style={{ fontSize: "1rem", fontWeight: 500, color: "#6A7D94" }}>
                  / {isId ? "menit" : "min"}
                </span>
              </div>
              <ul className="ebike-pricing-features">
                <li className="ebike-pricing-feature-item">
                  <Check size={16} color="#D87D38" strokeWidth={2.5} />
                  <span>{isId ? "Buka kunci cepat lewat aplikasi" : "Quick unlock via mobile app"}</span>
                </li>
                <li className="ebike-pricing-feature-item">
                  <Check size={16} color="#D87D38" strokeWidth={2.5} />
                  <span>{isId ? "Bayar sesuai durasi pemakaian" : "Pay as you go per minute"}</span>
                </li>
                <li className="ebike-pricing-feature-item">
                  <Check size={16} color="#D87D38" strokeWidth={2.5} />
                  <span>{isId ? "Akses ke seluruh lokasi parkir Re:Flow" : "Access to all Re:Flow parking spots"}</span>
                </li>
                <li className="ebike-pricing-feature-item">
                  <Check size={16} color="#D87D38" strokeWidth={2.5} />
                  <span>{isId ? "Dukungan bantuan setiap hari" : "Everyday customer support"}</span>
                </li>
              </ul>
              <a href="#download" className="ebike-pricing-btn">
                {isId ? "Pilih Public" : "Select Public"}
              </a>
            </div>

            {/* Student Card */}
            <div className="ebike-pricing-card ebike-card-student">
              <h3 className="ebike-pricing-title">{isId ? "Mahasiswa" : "Student"}</h3>
              <p className="ebike-pricing-sub">
                {isId
                  ? "Khusus pelajar & mahasiswa dengan kartu aktif"
                  : "Active students with valid Student ID"}
              </p>
              <div className="ebike-pricing-price">
                Rp 290{" "}
                <span style={{ fontSize: "1rem", fontWeight: 500, color: "#6A7D94" }}>
                  / {isId ? "menit" : "min"}
                </span>
              </div>
              <ul className="ebike-pricing-features">
                <li className="ebike-pricing-feature-item">
                  <Check size={16} color="#2E7D32" strokeWidth={2.5} />
                  <span>{isId ? "Tarif khusus bersubsidi pelajar" : "Subsidized student rate"}</span>
                </li>
                <li className="ebike-pricing-feature-item">
                  <Check size={16} color="#2E7D32" strokeWidth={2.5} />
                  <span>{isId ? "Verifikasi kartu pelajar instan" : "Instant Student ID verification"}</span>
                </li>
                <li className="ebike-pricing-feature-item">
                  <Check size={16} color="#2E7D32" strokeWidth={2.5} />
                  <span>{isId ? "Akses bebas di lokasi sekitar kampus" : "Free access riding around campus area"}</span>
                </li>
                <li className="ebike-pricing-feature-item">
                  <Check size={16} color="#2E7D32" strokeWidth={2.5} />
                  <span>{isId ? "Harga lebih hemat" : "More affordable price"}</span>
                </li>
              </ul>
              <a href="#download" className="ebike-pricing-btn">
                {isId ? "Pilih Student" : "Select Student"}
              </a>
            </div>

            {/* Membership Card */}
            <div className="ebike-pricing-card ebike-card-member">
              <div className="ebike-pricing-ribbon">
                {isId ? "Hemat 37%" : "Save 37%"}
              </div>
              <h3 className="ebike-pricing-title">{isId ? "Member" : "Member"}</h3>
              <p className="ebike-pricing-sub">
                {isId
                  ? "Akses penuh & tarif termurah untuk langganan"
                  : "Full access & lowest rates with subscription"}
              </p>
              <div className="ebike-pricing-price">
                Rp 10.000{" "}
                <span style={{ fontSize: "1rem", fontWeight: 500, color: "#6A7D94" }}>
                  / {isId ? "jam" : "hr"}
                </span>
              </div>
              <ul className="ebike-pricing-features">
                <li className="ebike-pricing-feature-item">
                  <Check size={16} color="#0F4068" strokeWidth={2.5} />
                  <span>{isId ? "Tarif terhemat untuk perjalanan rutin" : "Lowest rate for regular rides"}</span>
                </li>
                <li className="ebike-pricing-feature-item">
                  <Check size={16} color="#0F4068" strokeWidth={2.5} />
                  <span>{isId ? "Bebas biaya sewa" : "Zero rental cost"}</span>
                </li>
                <li className="ebike-pricing-feature-item">
                  <Check size={16} color="#0F4068" strokeWidth={2.5} />
                  <span>{isId ? "Bisa akses seluruh area parkir Re:Flow" : "Access to all Re:Flow parking areas"}</span>
                </li>
                <li className="ebike-pricing-feature-item">
                  <Check size={16} color="#0F4068" strokeWidth={2.5} />
                  <span>{isId ? "Bisa parkir di luar area parkir resmi Re:Flow" : "Can park outside Re:Flow official parking areas"}</span>
                </li>
              </ul>
              <a href="#download" className="ebike-pricing-btn">
                {isId ? "Pilih Member" : "Select Member"}
              </a>
            </div>
          </div>

          {/* ── 7. MEMBERSHIP TIERS SECTION ── */}
          <div>
            <h3 className="ebike-tiers-title">
              {isId ? "Membership E-Bike Re:Flow" : "E-Bike Re:Flow Membership"}
            </h3>
            <div className="ebike-tiers-grid">
              {/* Hourly */}
              <div className="ebike-tier-card" style={{ position: "relative" }}>
                <div style={{ position: "absolute", top: 0, right: 0, backgroundColor: "#E3F2FD", color: "#1565C0", padding: "4px 12px", borderBottomLeftRadius: "12px", borderTopRightRadius: "12px", fontSize: "0.75rem", fontWeight: 700 }}>
                  {isId ? "Hemat 37%" : "Save 37%"}
                </div>
                <div className="ebike-tier-period">{isId ? "Per Jam" : "Hourly"}</div>
                <div className="ebike-tier-sub">{isId ? "Durasi 1 Jam" : "1 Hour Duration"}</div>
                <div className="ebike-tier-price">Rp 10.000</div>
              </div>

              {/* Daily */}
              <div className="ebike-tier-card">
                <div className="ebike-tier-period">{isId ? "Per Hari" : "Daily"}</div>
                <div className="ebike-tier-sub">{isId ? "Durasi 1 Hari" : "1 Day Duration"}</div>
                <div className="ebike-tier-price">Rp 30.000</div>
                <div style={{ fontSize: "0.75rem", color: "#bbbbbb", fontWeight: 600, marginTop: "0.5rem", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                  <Check size={14} /> {isId ? "Bebas parkir di luar lokasi parkir" : "Flexible parking anywhere"}
                </div>
              </div>

              {/* Weekly */}
              <div className="ebike-tier-card">
                <div className="ebike-tier-period">{isId ? "Per Minggu" : "Weekly"}</div>
                <div className="ebike-tier-sub">{isId ? "Durasi 7 Hari" : "7 Days Duration"}</div>
                <div className="ebike-tier-price">Rp 120.000</div>
                <div style={{ fontSize: "0.75rem", color: "#bbbbbb", fontWeight: 600, marginTop: "0.5rem", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                  <Check size={14} /> {isId ? "Bebas parkir di luar lokasi parkir" : "Flexible parking anywhere"}
                </div>
              </div>

              {/* Monthly */}
              <div className="ebike-tier-card">
                <div className="ebike-tier-period">{isId ? "Per Bulan" : "Monthly"}</div>
                <div className="ebike-tier-sub">{isId ? "Durasi 30 Hari" : "30 Days Duration"}</div>
                <div className="ebike-tier-price">Rp 360.000</div>
                <div style={{ fontSize: "0.75rem", color: "#bbbbbb", fontWeight: 600, marginTop: "0.5rem", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                  <Check size={14} /> {isId ? "Bebas parkir di luar lokasi parkir" : "Flexible parking anywhere"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. FAQ SECTION ── */}
      <section className="ebike-faq-section">
        <div className="ebike-container" style={{ maxWidth: "760px" }}>
          <div className="ebike-section-header">
            <span className="ebike-section-pill">FAQ</span>
            <h2 className="ebike-section-title">
              {isId ? "Pertanyaan yang Sering Diajukan" : "Frequently Asked Questions"}
            </h2>
            <p className="ebike-section-sub">
              {isId
                ? "Semua yang perlu Anda ketahui tentang layanan E-Bike Re:Flow"
                : "Everything you need to know about the Re:Flow E-Bike service"}
            </p>
          </div>

          <div className="ebike-faq-list">
            {ebikeFaqs(isId).map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. APP DOWNLOAD BANNER ── */}
      <AppCtaSection />

      {/* ── 10. FOOTER ── */}
      <Footer />
    </main>
  );
}
