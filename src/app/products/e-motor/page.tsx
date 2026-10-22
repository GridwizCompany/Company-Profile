"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ChevronDown, Check, Smartphone, UserCheck, Bike, KeyRound } from "lucide-react";
import Footer from "../../../component/Footer";
import AppCtaSection from "../../../component/AppCtaSection";
import { useLanguage } from "../../../lib/useLanguage";
import "./e-motor.css";

// ── CountUp Hook ──
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

// ── E1 Color variants ──
const e1Variants = (isId: boolean) => [
  { color: "#1a1a1a", label: isId ? "Hitam" : "Black", image: "/images/products/emotor/product/E1-black.png" },
  { color: "#dab8a0ff", label: isId ? "Krim" : "Cream", image: "/images/products/emotor/product/E1-brown.png" },
  { color: "#0b576eff", label: isId ? "Biru" : "Blue", image: "/images/products/emotor/product/E1-green.png" },
  { color: "#9E9E9E", label: isId ? "Abu-abu" : "Grey", image: "/images/products/emotor/product/E1-grey.png" },
  { color: "#C62828", label: isId ? "Merah" : "Red", image: "/images/products/emotor/product/E1-red.png" },
  { color: "#F5F5F5", label: isId ? "Putih" : "White", image: "/images/products/emotor/product/E1-white.png" },
];

// ── E2 Color variants ──
const e2Variants = (isId: boolean) => [
  { color: "#1a1a1a", label: isId ? "Hitam" : "Black", image: "/images/products/emotor/product/E2-black.png" },
  { color: "#1565C0", label: isId ? "Biru" : "Blue", image: "/images/products/emotor/product/E2-blue.png" },
  { color: "#9E9E9E", label: isId ? "Abu-abu" : "Grey", image: "/images/products/emotor/product/E2-grey.png" },
  { color: "#6A1B9A", label: isId ? "Ungu" : "Purple", image: "/images/products/emotor/product/E2-purple.png" },
  { color: "#C62828", label: isId ? "Merah" : "Red", image: "/images/products/emotor/product/E2-red.png" },
  { color: "#F5F5F5", label: isId ? "Putih" : "White", image: "/images/products/emotor/product/E2-white.png" },
];

// ── FAQ Data ──
const faqs = (isId: boolean) => [
  {
    q: isId ? "Apa saja persyaratan untuk menyewa E-Motor?" : "What are the requirements to rent an E-Motor?",
    a: isId
      ? "Anda membutuhkan KTP/Paspor yang masih berlaku, SIM C yang valid, dan deposit sesuai pilihan paket sewa. Proses registrasi dilakukan melalui aplikasi ReFlow."
      : "You need a valid ID card/Passport, a valid driving license (SIM C), and a deposit based on the rental package. Registration is done through the ReFlow app.",
  },
  {
    q: isId ? "Berapa jangkauan baterai E-Motor Reflow?" : "What is the battery range of a Reflow E-Motor?",
    a: isId
      ? "E1 memiliki jangkauan hingga 140 km per pengisian penuh, sedangkan E2 dapat mencapai 100 km. Jangkauan aktual dapat bervariasi tergantung kondisi jalan dan gaya berkendara."
      : "E1 has a range of up to 140 km per full charge, while E2 can reach up to 100 km. Actual range may vary depending on road conditions and riding style.",
  },
  {
    q: isId ? "Bagaimana cara melakukan pengisian daya (charging) E-Motor?" : "How do I charge the Reflow E-Motor?",
    a: isId
      ? "Pengisian daya dapat dilakukan dengan mudah menggunakan charger portabel yang disertakan, cukup colokkan ke stopkontak listrik rumah tangga standar (220V). Waktu pengisian hingga penuh membutuhkan waktu sekitar 4–5 jam."
      : "Charging is effortless using the included portable charger, which plugs into any standard household outlet (220V). A full charge typically takes around 4–5 hours.",
  },
  {
    q: isId ? "Bagaimana cara kerja skema Sewa-Milik (Rent to Own)?" : "How does the Rent to Own scheme work?",
    a: isId
      ? "Dengan skema Sewa-Milik, Anda cukup membayar booking fee sebesar Rp 1.000.000 dan memilih tenor cicilan (12, 24, atau 36 bulan). Pembayaran dapat dilakukan harian, mingguan, atau bulanan. Setelah seluruh masa kontrak selesai, unit motor resmi beralih menjadi hak milik Anda sepenuhnya."
      : "With the Rent to Own scheme, simply pay a booking fee of Rp 1,000,000 and select your preferred term (12, 24, or 36 months) with daily, weekly, or monthly installments. Once the contract and payments are completed, full vehicle ownership is officially transferred to you.",
  },
  {
    q: isId ? "Apakah servis berkala dan perawatan unit ditanggung selama masa sewa?" : "Is routine maintenance and servicing included during the rental?",
    a: isId
      ? "Ya, perawatan berkala dan dukungan teknis ditangani langsung oleh tim teknisi profesional Gridwiz/ReFlow untuk memastikan performa motor selalu prima, aman, dan nyaman dikendarai."
      : "Yes, regular maintenance and technical support are handled directly by Gridwiz/ReFlow's professional technician team to ensure optimal performance and riding safety.",
  },
];

// ── Rental options ──
const rentalOptions = (isId: boolean) => ({
  e1: [
    { period: isId ? "Harian E1" : "Daily E1", note: isId ? "24 Jam" : "24 Hours", price: "Rp 50.000", deposit: "Rp 100.000" },
    { period: isId ? "Mingguan E1" : "Weekly E1", note: isId ? "7 Hari" : "7 Days", price: "Rp 266.000", deposit: "Rp 200.000" },
    { period: isId ? "Bulanan E1" : "Monthly E1", note: isId ? "Min. 30 Hari" : "Min. 30 Days", price: "Rp 930.000", deposit: "Rp 300.000" },
    { period: isId ? "Tahunan E1" : "Yearly E1", note: isId ? "365 Hari" : "365 Days", price: isId ? "Rp 825.000 per bulan" : "Rp 825.000 per month", deposit: "1.000.000" },],
  e2: [
    { period: isId ? "Harian E2" : "Daily E2", note: isId ? "24 Jam" : "24 Hours", price: "Rp 40.000", deposit: "100.000" },
    { period: isId ? "Mingguan E2" : "Weekly E2", note: isId ? "7 Hari" : "7 Days", price: "Rp 266.000", deposit: "200.000" },
    { period: isId ? "Bulanan E2" : "Monthly E2", note: isId ? "30 Hari" : "30 Days", price: "Rp 750.000", deposit: "Rp 300.000" },
    { period: isId ? "Tahunan E2" : "Yearly E2", note: isId ? "365 Hari" : "365 Days", price: isId ? "Rp 660.000 per bulan" : "Rp 660.000 per month", deposit: "1.000.000" },

  ],
});

// ── Own Scheme Data ──
const e1OwnScheme = (isId: boolean) => [
  { period: isId ? "12 Bulan" : "12 Month", bookingFee: "Rp 1.000.000", period1: isId ? "Bulanan" : "Monthly", monthly: "Rp 2.100.000", period2: isId ? "Mingguan" : "Weekly", weekly: "Rp 490.000", period3: isId ? "Harian" : "Daily", daily: "Rp 70.000" },
  { period: isId ? "24 Bulan" : "24 Month", bookingFee: "Rp 1.000.000", period1: isId ? "Bulanan" : "Monthly", monthly: "Rp 1.200.000", period2: isId ? "Mingguan" : "Weekly", weekly: "Rp 280.000", period3: isId ? "Harian" : "Daily", daily: "Rp 40.000" },
  { period: isId ? "36 Bulan" : "36 Month", bookingFee: "Rp 1.000.000", period1: isId ? "Bulanan" : "Monthly", monthly: "Rp 1.005.000", period2: isId ? "Mingguan" : "Weekly", weekly: "Rp 234.500", period3: isId ? "Harian" : "Daily", daily: "Rp 33.500" },
];

const e2OwnScheme = (isId: boolean) => [
  { period: isId ? "12 Bulan" : "12 Month", bookingFee: "Rp 1.000.000", period1: isId ? "Bulanan" : "Monthly", monthly: "Rp 1.530.000", period2: isId ? "Mingguan" : "Weekly", weekly: "Rp 357.000", period3: isId ? "Harian" : "Daily", daily: "Rp 51.000" },
  { period: isId ? "24 Bulan" : "24 Month", bookingFee: "Rp 1.000.000", period1: isId ? "Bulanan" : "Monthly", monthly: "Rp 960.000", period2: isId ? "Mingguan" : "Weekly", weekly: "Rp 224.000", period3: isId ? "Harian" : "Daily", daily: "Rp 32.000" },
  { period: isId ? "36 Bulan" : "36 Month", bookingFee: "Rp 1.000.000", period1: isId ? "Bulanan" : "Monthly", monthly: "Rp 810.000", period2: isId ? "Mingguan" : "Weekly", weekly: "Rp 189.000", period3: isId ? "Harian" : "Daily", daily: "Rp 27.000" },
];

// ── Reusable: Color Picker Carousel ──
function ColorCarousel({
  variants,
  modelName,
  specs,
}: {
  variants: any[];
  modelName: string;
  specs: { voltage: string; range: string; MaxSpeed: string };
}) {
  const { language } = useLanguage();
  const isId = language === "id";
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = (idx: number) => {
    if (isAnimating || idx === activeIdx) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIdx(idx);
      setIsAnimating(false);
    }, 180);
  };

  const prev = () => goTo((activeIdx - 1 + variants.length) % variants.length);
  const next = () => goTo((activeIdx + 1) % variants.length);

  return (
    <div className="em-carousel">
      {/* Model label */}
      <div className="em-carousel-label">{modelName}</div>

      {/* Motor Image */}
      <div className="em-carousel-stage">
        <button className="em-carousel-btn" onClick={prev} aria-label={isId ? "Warna sebelumnya" : "Previous color"}>
          <ChevronLeft size={22} />
        </button>

        <div className="em-carousel-img-wrap">
          <div
            className="em-carousel-glow"
            style={{ background: `radial-gradient(ellipse at center, ${variants[activeIdx].color}40 0%, transparent 70%)` }}
          />
          <Image
            key={activeIdx}
            src={variants[activeIdx].image}
            alt={`${modelName} - ${variants[activeIdx].label}`}
            width={680}
            height={420}
            className={`em-carousel-img ${isAnimating ? "fade-out" : "fade-in"}`}
            priority
          />
        </div>

        <button className="em-carousel-btn" onClick={next} aria-label={isId ? "Warna selanjutnya" : "Next color"}>
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Color Dots */}
      <div className="em-color-dots">
        {variants.map((v, i) => (
          <button
            key={i}
            className={`em-color-dot ${i === activeIdx ? "active" : ""}`}
            style={{
              background: v.color,
              border: v.color === "#F5F5F5" ? "2px solid #ccc" : "2px solid transparent",
              outline: i === activeIdx ? `3px solid ${v.color === "#F5F5F5" ? "#999" : v.color}` : "none",
              outlineOffset: "3px",
            }}
            onClick={() => goTo(i)}
            aria-label={`Select ${v.label}`}
            title={v.label}
          >
            {i === activeIdx && (
              <Check size={10} color={v.color === "#F5F5F5" ? "#333" : "#fff"} />
            )}
          </button>
        ))}
      </div>

      {/* Selected color name */}
      <div className="em-color-name">{variants[activeIdx].label}</div>

      {/* Specs row */}
      <div className="em-spec-row">
        <div className="em-spec-item">
          <span className="em-spec-val">{specs.voltage}</span>
          <span className="em-spec-key">{isId ? "Tegangan" : "Voltage"}</span>
        </div>
        <div className="em-spec-divider" />
        <div className="em-spec-item">
          <span className="em-spec-val">{specs.range}</span>
          <span className="em-spec-key">{isId ? "Jarak" : "Range"}</span>
        </div>
        <div className="em-spec-divider" />
        <div className="em-spec-item">
          <span className="em-spec-val">{specs.MaxSpeed}</span>
          <span className="em-spec-key">{isId ? "Kecepatan Maksimal" : "Max Speed"}</span>
        </div>
      </div>
    </div>
  );
}

// ── FAQ Accordion Item ──
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`em-faq-item ${open ? "open" : ""}`}>
      <button className="em-faq-question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <ChevronDown
          size={18}
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease", flexShrink: 0 }}
        />
      </button>
      {open && <div className="em-faq-answer">{a}</div>}
    </div>
  );
}

// ── Ride Today section with center-line animation ──
function RideTodaySection() {
  const { language } = useLanguage();
  const isId = language === "id";
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="em-ride-section" ref={sectionRef}>
      {/* Background gradient */}
      <div className="em-ride-bg" />

      <div className="em-ride-container">
        {/* Top badge */}
        <div className="em-ride-badge"> {isId ? "Sewa Sekarang · Miliki Nanti" : "Ride Today · Own it Later"}</div>

        {/* Main heading */}
        <h2 className="em-ride-heading">
          {isId ? "Sewa Sekarang," : "Rent Now,"}<br />
          <span className="em-ride-heading-accent">{isId ? "Miliki Nanti" : "Own it Later"}</span>
        </h2>
        <p className="em-ride-sub">
          {isId
            ? <>Mulai perjalanan Anda hari ini dengan sewa harian yang terjangkau,<br />dan ubah menjadi kepemilikan penuh kapan saja.</>
            : <>Start your journey today with affordable daily rentals,<br />and turn it into full ownership anytime.</>}
        </p>

        {/* Center line reveal animation */}
        <div className="em-ride-reveal-wrap">
          {/* Left content: RENT WITH 0 DOWN */}
          <div className={`em-ride-left ${visible ? "reveal-left" : ""}`}>
            <Image
              src="/images/products/emotor/rent0down.svg"
              alt="Rent with 0 Down"
              width={320}
              height={320}
              className="em-ride-rent-img"
              style={{ width: '100%', maxWidth: 320, height: 'auto' }}
            />
          </div>

          {/* Center vertical line */}
          <div className={`em-ride-center-line ${visible ? "line-grow" : ""}`}>
            <div className="em-ride-center-dot top" />
            <div className="em-ride-center-dot bottom" />
          </div>

          {/* Right content: Motor image */}
          <div className={`em-ride-right ${visible ? "reveal-right" : ""}`}>
            <div className="em-ride-img-wrap">
              <Image
                src="/images/products/emotor/e1ande2.png"
                alt="E1 and E2 Motor"
                width={540}
                height={360}
                className="em-ride-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════
//   MAIN PAGE
// ═══════════════════════════════════════════════════════
export default function EMotorPage() {
  const { language } = useLanguage();
  const isId = language === "id";

  const [activeModel, setActiveModel] = useState<"E1" | "E2">("E1");
  const [openFaqs, setOpenFaqs] = useState<boolean[]>(faqs(isId).map(() => false));

  // Stats counter animation
  const statsRef = useRef<HTMLElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const count10800 = useCountUp(10800, 1800, statsVisible);
  const count381 = useCountUp(381, 1800, statsVisible);   // represents 38.1 (×10)
  const count6712 = useCountUp(6712, 1800, statsVisible);
  const count83 = useCountUp(83, 1600, statsVisible);

  const toggleFaq = (i: number) => {
    setOpenFaqs((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  const currentFaqs = faqs(isId);
  const currentRentalOptions = rentalOptions(isId);
  const currentE1Scheme = e1OwnScheme(isId);
  const currentE2Scheme = e2OwnScheme(isId);
  const currentE1Variants = e1Variants(isId);
  const currentE2Variants = e2Variants(isId);

  return (
    <main className="em-page">
      {/* ─────────────── HERO ─────────────── */}
      <section className="em-hero">
        <div className="em-hero-overlay" />
        <Image
          src="/images/products/emotor/hero.png"
          alt="Reflow E-Motor Hero"
          fill
          className="em-hero-img"
          priority
        />
        <div className="em-hero-content">
          <div className="em-hero-badge">Reflow Products</div>
          <h1 className="em-hero-title">
            {isId ? "Reflow" : "Reflow"}<br />
            <span className="em-hero-accent">E-Motor</span>
          </h1>
          <p className="em-hero-desc">
            {isId ? <>Cara cerdas mobilitas harian. Bertenaga, efisien, dan nyaman untuk perjalanan Anda.</> : <>The smarter way to move everyday. Powered, efficient, and comfortable.</>}
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
        {/* Scroll indicator */}
        <div className="em-hero-scroll">
          <div className="em-hero-scroll-dot" />
        </div>
      </section>

      {/* ─────────────── WHY REFLOW SECTION ─────────────── */}
      <section className="em-why-section">
        <div className="em-container">
          <div className="em-section-header">
            <h2 className="em-section-title">{isId ? "Kenapa Reflow E-Motor" : "Why Reflow E-Motor"}</h2>
            <p className="em-section-sub">
              {isId ? "Pilihan terbaik untuk mobilitas cerdas, lebih bersih, dengan kenyamanan dan jarak tempuh tak tertandingi." : "The best choice for smarter, cleaner mobility with unrivaled comfort and range."}
            </p>
          </div>

          <div className="em-why-grid">
            <div className="em-why-card">
              <div className="em-why-icon">
                <Image src="/images/products/emotor/icon/eco.png" alt="Eco Friendly" width={56} height={56} />
              </div>
              <h3>{isId ? "Ramah Lingkungan" : "Eco Friendly"}</h3>
              <p>{isId ? "Perjalanan bebas emisi yang melindungi lingkungan asri Lombok untuk generasi mendatang." : "Zero emission rides that protect Lombok's pristine environment for generations to come."}</p>
            </div>
            <div className="em-why-card">
              <div className="em-why-icon">
                <Image src="/images/products/emotor/icon/longer.png" alt="Longer Range" width={56} height={56} />
              </div>
              <h3>{isId ? "Jarak Tempuh Lebih Jauh" : "Longer Range"}</h3>
              <p>{isId ? "Hingga 100 km per pengisian daya dengan teknologi baterai pintar untuk penjelajahan tanpa batas." : "Up to 100 km per charge with smart battery technology for worry-free exploration."}</p>
            </div>
            <div className="em-why-card">
              <div className="em-why-icon">
                <Image src="/images/products/emotor/icon/flexible.png" alt="Flexible" width={56} height={56} />
              </div>
              <h3>{isId ? "Sewa Fleksibel" : "Flexible Rental"}</h3>
              <p>{isId ? "Paket harian, mingguan, bulanan, atau tahunan — sewa sesuai cara dan kebutuhan Anda." : "Daily, weekly, monthly, or yearly plans — rent your way, on your terms."}</p>
            </div>
            <div className="em-why-card">
              <div className="em-why-icon">
                <Image src="/images/products/emotor/icon/reliable.png" alt="Reliable" width={56} height={56} />
              </div>
              <h3>{isId ? "Dukungan Terpercaya" : "Reliable Support"}</h3>
              <p>{isId ? "Bantuan jalan 24/7 dan jaringan stasiun penukaran baterai memastikan Anda terus melaju." : "24/7 roadside assistance and nationwide swap station network keeps you moving."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── STATS ─────────────── */}
      <section className="em-stats-section" ref={statsRef}>
        <div className="em-container">
          <div className="em-stats-grid">
            <div className="em-stat-item">
              <span className="em-stat-num">{count10800.toLocaleString()}+</span>
              <span className="em-stat-label">{isId ? "Total Perjalanan" : "Total Ride"}</span>
            </div>
            <div className="em-stat-item">
              <span className="em-stat-num">{(count381 / 10).toFixed(1)}t</span>
              <span className="em-stat-label">{isId ? "CO₂ Berkurang" : "CO₂ Reduced"}</span>
            </div>
            <div className="em-stat-item">
              <span className="em-stat-num">{count6712.toLocaleString()}</span>
              <span className="em-stat-num-sub">km</span>
              <span className="em-stat-label">{isId ? "Jarak Ditempuh" : "Distance Covered"}</span>
            </div>
            <div className="em-stat-item">
              <span className="em-stat-num">{count83}%</span>
              <span className="em-stat-label">{isId ? "Tingkat Kepuasan" : "Satisfaction Rate"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── CHOOSE YOUR RIDE (INTERACTIVE) ─────────────── */}
      <section id="choose-ride" className="em-choose-section">
        <div className="em-container">
          <div className="em-section-header">
            <h2 className="em-section-title">{isId ? "Pilih Kendaraan Anda" : "Choose Your Ride"}</h2>
            <p className="em-section-sub">{isId ? "Pilih model dan jelajahi varian warna" : "Select a model and explore the color variants"}</p>
          </div>

          {/* Model Tabs */}
          <div className="em-model-tabs">
            <button
              className={`em-model-tab ${activeModel === "E1" ? "active" : ""}`}
              onClick={() => setActiveModel("E1")}
            >
              <span className="em-model-tab-name">E1</span>
              <span className="em-model-tab-sub">{isId ? "Jarak Tempuh Lebih Jauh" : "Longer Range"}</span>
            </button>
            <button
              className={`em-model-tab ${activeModel === "E2" ? "active" : ""}`}
              onClick={() => setActiveModel("E2")}
            >
              <span className="em-model-tab-name">E2</span>
              <span className="em-model-tab-sub">{isId ? "Mobilitas Perkotaan" : "Urban Mobility"}</span>
            </button>
          </div>

          {/* Carousel */}
          <div className="em-carousel-row">
            {activeModel === "E1" ? (
              <ColorCarousel
                variants={currentE1Variants}
                modelName="Reflow E1"
                specs={{ voltage: "72V", range: "140 km", MaxSpeed: "70Km/Jam" }}
              />
            ) : (
              <ColorCarousel
                variants={currentE2Variants}
                modelName="Reflow E2"
                specs={{ voltage: "72V", range: "100 km", MaxSpeed: "60km/Jam" }}
              />
            )}

            {/* Model Info Card */}
            <div className="em-model-info">
              {activeModel === "E1" ? (
                <>
                  <div className="em-model-badge">E1 · {isId ? "Jarak Tempuh Harian" : "All Day Range"}</div>
                  <h3 className="em-model-name">Reflow E1</h3>
                  <p className="em-model-desc">
                    {isId ? "Performa lebih tinggi untuk jiwa yang suka tantangan. E1 hadir dengan torsi lebih bertenaga, desain sporty, dan 6 warna berani yang mencerminkan karakter kuat." : "Higher performance for adventurous souls. E1 comes with more powerful torque, a sporty design, and 6 bold colors that reflect a strong character."}
                    {/* {isId ? "Dirancang untuk perjalanan harian yang efisien dan nyaman. Motor listrik E1 hadir dengan desain elegan, jangkauan baterai optimal, dan pilihan 6 varian warna eksklusif." : "Designed for efficient and comfortable daily commuting. The E1 electric motor comes with an elegant design, optimal battery range, and 6 exclusive color variants."} */}
                  </p>
                  <ul className="em-model-features">
                    <li><Check size={14} /> {isId ? "Kapasitas Baterai 72V" : "72V Battery Capacity"}</li>
                    <li><Check size={14} /> {isId ? "Jangkauan hingga 140 km" : "Range up to 140 km"}</li>
                    <li><Check size={14} /> {isId ? "Topspeed 70Km/Jam" : "Topspeed 70Km/Jam"}</li>
                    <li><Check size={14} /> {isId ? "Pengisian 4–5 jam" : "4–5 hours charging"}</li>
                    <li><Check size={14} /> {isId ? "6 Pilihan warna" : "6 Color options"}</li>
                  </ul>
                  <a href="#rental" className="em-btn-primary">{isId ? "Sewa E1 Sekarang" : "Rent E1 Now"}</a>
                </>
              ) : (
                <>
                  <div className="em-model-badge" style={{ background: "linear-gradient(135deg, #1565C0, #00ADB5)" }}>E2 · {isId ? "Jagoan Perkotaan" : "Urban Beast"}</div>
                  <h3 className="em-model-name">Reflow E2</h3>
                  <p className="em-model-desc">
                    {isId ? "Dirancang untuk perjalanan harian yang efisien dan nyaman. Motor listrik E2 hadir dengan desain elegan, jangkauan baterai optimal, dan pilihan 6 varian warna eksklusif." : "Designed for efficient and comfortable daily commuting. The E2 electric motor comes with an elegant design, optimal battery range, and 6 exclusive color variants."}

                    {/* {isId ? "Performa lebih tinggi untuk jiwa yang suka tantangan. E2 hadir dengan torsi lebih bertenaga, desain sporty, dan 6 warna berani yang mencerminkan karakter kuat." : "Higher performance for adventurous souls. E2 comes with more powerful torque, a sporty design, and 6 bold colors that reflect a strong character."} */}
                  </p>
                  <ul className="em-model-features">
                    <li><Check size={14} /> {isId ? "Kapasitas Baterai 72V Tinggi" : "High 72V Battery Capacity"}</li>
                    <li><Check size={14} /> {isId ? "Jangkauan hingga 100 km" : "Range up to 100 km"}</li>
                    <li><Check size={14} /> {isId ? "Topspeed 70Km/Jam" : "Topspeed 70Km/Jam"}</li>
                    <li><Check size={14} /> {isId ? "Pengisian 4–5 jam" : "4–5 hours charging"}</li>
                    <li><Check size={14} /> {isId ? "6 Pilihan warna berani" : "6 Bold color options"}</li>
                  </ul>
                  <a href="#rental" className="em-btn-primary">{isId ? "Sewa E2 Sekarang" : "Rent E2 Now"}</a>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── RENTAL SECTION ─────────────── */}
      <section id="rental" className="em-rental-section">
        <div className="em-container">
          <div className="em-section-header">
            <h2 className="em-section-title" style={{ color: "#fff" }}>{isId ? "Pilihan Sewa" : "Rental Options"}</h2>
            <p className="em-section-sub" style={{ color: "rgba(255,255,255,0.75)" }}>
              {isId ? "Paket fleksibel untuk setiap kebutuhan dan anggaran" : "Flexible plans for every need and budget"}
            </p>
          </div>

          {/* Rental Requirements Cards */}
          <div className="em-rental-req-section">
            <div className="em-rental-req-header">
              <span className="em-rental-req-pill">{isId ? "Persyaratan Sewa" : "Rental Requirements"}</span>
              <h3 className="em-rental-req-title">{isId ? "Dokumen Yang Diperlukan" : "Required Documents"}</h3>
              <p className="em-rental-req-subtitle">
                {isId
                  ? "Siapkan 2 dokumen resmi berikut untuk proses verifikasi sewa yang cepat & mudah:"
                  : "Please prepare the following 2 official documents for a quick & easy rental verification:"}
              </p>
            </div>

            <div className="em-rental-req-grid">
              {/* ID Card Card */}
              <div className="em-rental-req-card">
                <div className="em-rental-req-icon-box">
                  <Image
                    src="/images/products/emotor/icon/idcard.png"
                    alt="ID Card"
                    width={40}
                    height={40}
                    className="em-rental-req-img"
                  />
                </div>
                <div className="em-rental-req-card-content">
                  <div className="em-rental-req-card-badge">{isId ? "Identitas Resmi" : "Official ID"}</div>
                  <h4 className="em-rental-req-card-title">{isId ? "KTP / Paspor" : "ID Card / Passport"}</h4>
                  <p className="em-rental-req-card-desc">
                    {isId
                      ? "Identitas resmi WNI (KTP asli) atau WNA (Paspor) yang masih aktif dan sah."
                      : "Original and valid government-issued national ID card or passport."}
                  </p>
                </div>
              </div>

              {/* Driving License Card */}
              <div className="em-rental-req-card">
                <div className="em-rental-req-icon-box">
                  <Image
                    src="/images/products/emotor/icon/driving.png"
                    alt="Driver License"
                    width={40}
                    height={40}
                    className="em-rental-req-img"
                  />
                </div>
                <div className="em-rental-req-card-content">
                  <div className="em-rental-req-card-badge">{isId ? "Izin Berkendara" : "Driver License"}</div>
                  <h4 className="em-rental-req-card-title">{isId ? "SIM C Aktif" : "Driver License (SIM C)"}</h4>
                  <p className="em-rental-req-card-desc">
                    {isId
                      ? "Surat Izin Mengemudi (SIM C) khusus sepeda motor yang masih berlaku."
                      : "Valid and active motorcycle driver license (SIM C or international)."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="em-rental-groups">
            {/* E1 Rental Group */}
            <div className="em-rental-group">
              <div className="em-rental-group-header">
                <span className="em-rental-model-badge">E1</span>
                <div>
                  <h3 className="em-rental-group-title">{isId ? "Paket Sewa Reflow E1" : "Reflow E1 Rental Plans"}</h3>
                  <p className="em-rental-group-sub">{isId ? "Pilihan durasi fleksibel dari harian hingga tahunan" : "Flexible duration options from daily to yearly"}</p>
                </div>
              </div>
              <div className="em-rental-cards">
                {currentRentalOptions.e1.map((r, i) => (
                  <div key={i} className="em-rental-card">
                    <div className="em-rental-card-period">{r.period}</div>
                    <div className="em-rental-card-note">{r.note}</div>
                    <div className="em-rental-card-price">{r.price}</div>
                    <div className="em-rental-card-deposit">
                      {isId ? "Deposit:" : "Deposit:"} <span>{r.deposit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* E2 Rental Group */}
            <div className="em-rental-group">
              <div className="em-rental-group-header">
                <span className="em-rental-model-badge em-rental-model-badge-e2">E2</span>
                <div>
                  <h3 className="em-rental-group-title">{isId ? "Paket Sewa Reflow E2" : "Reflow E2 Rental Plans"}</h3>
                  <p className="em-rental-group-sub">{isId ? "Pilihan durasi fleksibel dari harian hingga tahunan" : "Flexible duration options from daily to yearly"}</p>
                </div>
              </div>
              <div className="em-rental-cards">
                {currentRentalOptions.e2.map((r, i) => (
                  <div key={i} className="em-rental-card">
                    <div className="em-rental-card-period">{r.period}</div>
                    <div className="em-rental-card-note">{r.note}</div>
                    <div className="em-rental-card-price">{r.price}</div>
                    <div className="em-rental-card-deposit">
                      {isId ? "Deposit:" : "Deposit:"} <span>{r.deposit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="em-rental-cta">
            <a href="#contact" className="em-btn-white">{isId ? "Hubungi Kami untuk Sewa" : "Contact Us to Rent"}</a>
          </div>
        </div>
      </section>

      {/* ─────────────── RIDE TODAY OWN IT LATER ─────────────── */}
      <RideTodaySection />

      {/* ─────────────── OWN SCHEME TABLES ─────────────── */}
      <section className="em-own-section">
        <div className="em-container">
          <div className="em-section-header">
            <h2 className="em-section-title">{isId ? "Skema Sewa Hingga Menjadi Milik" : "Rent to Own Scheme"}</h2>
            <p className="em-section-sub">{isId ? "Cicilan fleksibel untuk menjadi pemilik E-Motor impian Anda" : "Flexible installments to own your dream E-Motor"}</p>
          </div>

          <div className="em-own-tables">
            {/* E1 Own Scheme */}
            <div className="em-own-table-wrap">
              <div className="em-own-table-header">
                <span className="em-own-badge">E1</span>
                <div>
                  <h3 className="em-own-title">{isId ? "Skema Hak Milik E1" : "E1 Rent to Own Scheme"}</h3>
                  <p className="em-own-subtitle">{isId ? "Pilihan tenor 12, 24, & 36 bulan" : "Available in 12, 24, & 36 month terms"}</p>
                </div>
              </div>
              <div className="em-own-table-scroll">
                <table className="em-own-table">
                  <thead>
                    <tr>
                      <th>{isId ? "Tenor" : "Tenor"}</th>
                      <th>Booking Fee</th>
                      <th>{isId ? "Bulanan" : "Monthly"}</th>
                      <th>{isId ? "Mingguan" : "Weekly"}</th>
                      <th>{isId ? "Harian" : "Daily"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentE1Scheme.map((r, i) => (
                      <tr key={i}>
                        <td><strong>{r.period}</strong></td>
                        <td className="em-price" style={{ color: "#E65100", fontWeight: 700 }}>{r.bookingFee}</td>
                        <td className="em-price">{r.monthly}</td>
                        <td className="em-price">{r.weekly}</td>
                        <td className="em-price">{r.daily}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ padding: "0.85rem 1.5rem", background: "#F8FAFF", borderTop: "1px solid #E8F0FA", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", color: "#5A7184" }}>
                <Check size={15} color="#1565C0" strokeWidth={2.5} />
                <span>{isId ? "Booking Fee Rp 1.000.000 berlaku untuk semua metode & opsi tenor." : "Booking Fee of Rp 1,000,000 applies to all methods & term options."}</span>
              </div>
            </div>

            {/* E2 Own Scheme */}
            <div className="em-own-table-wrap">
              <div className="em-own-table-header">
                <span className="em-own-badge em-own-badge-e2">E2</span>
                <div>
                  <h3 className="em-own-title">{isId ? "Skema Hak Milik E2" : "E2 Rent to Own Scheme"}</h3>
                  <p className="em-own-subtitle">{isId ? "Pilihan tenor 12, 24, & 36 bulan" : "Available in 12, 24, & 36 month terms"}</p>
                </div>
              </div>
              <div className="em-own-table-scroll">
                <table className="em-own-table">
                  <thead>
                    <tr>
                      <th>{isId ? "Tenor" : "Tenor"}</th>
                      <th>Booking Fee</th>
                      <th>{isId ? "Bulanan" : "Monthly"}</th>
                      <th>{isId ? "Mingguan" : "Weekly"}</th>
                      <th>{isId ? "Harian" : "Daily"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentE2Scheme.map((r, i) => (
                      <tr key={i}>
                        <td><strong>{r.period}</strong></td>
                        <td className="em-price" style={{ color: "#E65100", fontWeight: 700 }}>{r.bookingFee}</td>
                        <td className="em-price">{r.monthly}</td>
                        <td className="em-price">{r.weekly}</td>
                        <td className="em-price">{r.daily}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ padding: "0.85rem 1.5rem", background: "#F8FAFF", borderTop: "1px solid #E8F0FA", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", color: "#5A7184" }}>
                <Check size={15} color="#1565C0" strokeWidth={2.5} />
                <span>{isId ? "Booking Fee Rp 1.000.000 berlaku untuk semua metode & opsi tenor." : "Booking Fee of Rp 1,000,000 applies to all methods & term options."}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── HOW TO RENT ─────────────── */}
      <section className="em-howto-section">
        <div className="em-container">
          <div className="em-section-header">
            <h2 className="em-section-title">{isId ? "Cara Sewa E-Motor" : "How To Rent E-Motor"}</h2>
            <p className="em-section-sub">
              {isId ? "Proses sewa yang mudah dan cepat melalui aplikasi ReFlow" : "Easy and fast rental process through the ReFlow app"}
            </p>
          </div>

          <div className="em-howto-grid">
            {[
              {
                num: "01",
                icon: <Smartphone size={24} strokeWidth={2.2} />,
                title: isId ? "Unduh Aplikasi ReFlow" : "Download ReFlow App",
                desc: isId
                  ? "Dapatkan aplikasi di Google Play Store atau App Store secara gratis."
                  : "Get the app on Google Play Store or App Store for free.",
              },
              {
                num: "02",
                icon: <UserCheck size={24} strokeWidth={2.2} />,
                title: isId ? "Daftar & Verifikasi" : "Register & Verify",
                desc: isId
                  ? "Lengkapi profil akun dan unggah dokumen KTP/Paspor serta SIM C aktif."
                  : "Complete your profile and upload valid ID/Passport & SIM C documents.",
              },
              {
                num: "03",
                icon: <Bike size={24} strokeWidth={2.2} />,
                title: isId ? "Pilih Unit & Paket" : "Choose Unit & Plan",
                desc: isId
                  ? "Tentukan model E1 atau E2 dan durasi sewa yang sesuai kebutuhan Anda."
                  : "Select model E1 or E2 and your preferred rental duration.",
              },
              {
                num: "04",
                icon: <KeyRound size={24} strokeWidth={2.2} />,
                title: isId ? "Ambil & Mulai Jalan" : "Pick Up & Ride",
                desc: isId
                  ? "Ambil motor di stasiun terdekat dan nikmati kemudahan berkendara."
                  : "Pick up your motor at the nearest station and enjoy your ride.",
              },
            ].map((step, i) => (
              <div key={i} className="em-howto-card">
                <div className="em-howto-card-top">
                  <span className="em-howto-step-pill">{isId ? `Langkah ${step.num}` : `Step ${step.num}`}</span>
                  <div className="em-howto-icon-wrap">{step.icon}</div>
                </div>
                <h3 className="em-howto-card-title">{step.title}</h3>
                <p className="em-howto-card-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── INTERACTIVE EXPERIENCE ─────────────── */}
      <section className="em-interactive-section">
        <div className="em-container">
          <div className="em-interactive-grid">
            {/* Left Col */}
            <div className="em-interactive-left">
              <span className="em-interactive-tag">
                {isId ? "MOBILITAS LEBIH HEMAT" : "SMARTER MOBILITY"}
              </span>
              <h2 className="em-interactive-title">
                {isId
                  ? "Solusi Mobilitas Hemat & Efisien"
                  : "Smarter, Cheaper, Cleaner - Your Ride, Your Way"}
              </h2>
              <p className="em-interactive-desc">
                {isId
                  ? "Solusi mobilitas cerdas, hemat, dan ramah lingkungan. Temukan motor impian Anda, pilih paket sewa sesuai kebutuhan, dan mulailah perjalanan menyenangkan hanya dengan beberapa ketukan di aplikasi."
                  : "Smarter, cheaper, and greener mobility. Find your dream bike, choose a rental plan that suits you, and start your journey with just a few taps on the app."}
              </p>
            </div>

            {/* Mid Col: GIF */}
            <div className="em-interactive-mid">
              <img
                src="/video/products/emotor/emotor.gif"
                alt="E-Motor Interactive Experience"
                style={{
                  maxWidth: "500px",
                  width: "100%",
                  height: "100%",
                  borderRadius: "2rem",
                  boxShadow: "0 24px 60px rgba(0, 0, 0, 0)",
                  display: "block",
                  marginInline: "auto"
                }}
              />
            </div>

            {/* Right Col: Features & Store Badges */}
            <div className="em-interactive-right">
              <h3 className="em-interactive-app-title">Re:Flow Mobile Apps</h3>

              <ul className="em-interactive-list">
                <li className="em-interactive-item">
                  <Check size={18} strokeWidth={3} />
                  <span>{isId ? "Temukan motor terdekat" : "Find nearby motors easily"}</span>
                </li>
                <li className="em-interactive-item">
                  <Check size={18} strokeWidth={3} />
                  <span>{isId ? "Pindai QR untuk membuka" : "Scan QR code to unlock"}</span>
                </li>
                <li className="em-interactive-item">
                  <Check size={18} strokeWidth={3} />
                  <span>{isId ? "Pantau baterai & jarak" : "Monitor battery & range"}</span>
                </li>
                <li className="em-interactive-item">
                  <Check size={18} strokeWidth={3} />
                  <span>{isId ? "Riwayat transaksi aman" : "Secure transaction history"}</span>
                </li>
              </ul>

              {/* App Download Buttons (Enlarged & Shifted to Bottom-Left) */}
              <div className="em-interactive-badges">
                <a
                  href="https://apps.apple.com/gb/app/re-flow/id6741798337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="em-store-btn"
                >
                  <Image
                    src="/images/hero/appstore.png"
                    alt="Download on the App Store"
                    width={200}
                    height={65}
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.gridwiz.ride&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="em-store-btn"
                >
                  <Image
                    src="/images/hero/googleplay.png"
                    alt="Download on Play Store"
                    width={200}
                    height={65}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── FAQ ─────────────── */}
      <section className="em-faq-section">
        <div className="em-container" style={{ maxWidth: "760px" }}>
          <div className="em-section-header">
            <h2 className="em-section-title">{isId ? "Pertanyaan yang Sering Diajukan" : "Frequently Asked Questions"}</h2>
            <p className="em-section-sub">{isId ? "Semua yang perlu Anda ketahui tentang E-Motor Reflow" : "Everything you need to know about Reflow E-Motor"}</p>
          </div>

          <div className="em-faq-list">
            {currentFaqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= APP CTA ================= */}
      <AppCtaSection />

      {/* ================= FOOTER ================= */}
      <Footer />
    </main>
  );
}