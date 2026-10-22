"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Check } from "lucide-react";
import Footer from "../../../component/Footer";
import AppCtaSection from "../../../component/AppCtaSection";
import { useLanguage } from "../../../lib/useLanguage";
import "./ev-charging.css";

// ── FAQ Data ──
const evcFaqs = (isId: boolean) => [
  {
    q: isId ? "Berapa tarif pengisian daya di stasiun E-Charging Re:Flow?" : "How much does it cost to charge at a Re:Flow E-Charging station?",
    a: isId
      ? "Tarif resmi pengisian daya adalah Rp 5.000 per 1000 Wh. Biaya dihitung otomatis berdasarkan jumlah energi yang dikonsumsi selama sesi pengisian dan ditampilkan secara real-time di aplikasi Re:Flow."
      : "The official charging rate is Rp 5,000 per 1,000 Wh. Costs are automatically calculated based on the energy consumed during the charging session and displayed in real-time on the Re:Flow app.",
  },
  {
    q: isId ? "Berapa lama waktu yang dibutuhkan untuk mengisi daya penuh?" : "How long does a full charge take?",
    a: isId
      ? "Waktu pengisian bervariasi tergantung kapasitas baterai kendaraan. Untuk E-Motor Reflow, pengisian penuh membutuhkan sekitar 4\u20135 jam melalui dual AC charging output yang tersedia di setiap stasiun."
      : "Charging time varies depending on the vehicle's battery capacity. For Reflow E-Motors, a full charge takes approximately 4\u20135 hours via the dual AC charging output available at each station.",
  },
  {
    q: isId ? "Bagaimana cara memulai sesi pengisian daya?" : "How do I start a charging session?",
    a: isId
      ? "Cukup buka aplikasi Re:Flow, pindai QR Code yang terdapat pada stasiun pengisian, hubungkan konektor ke kendaraan Anda, dan pengisian akan dimulai secara otomatis. Anda dapat memantau progres pengisian secara real-time di aplikasi."
      : "Simply open the Re:Flow app, scan the QR Code on the charging station, connect the charger to your vehicle, and charging begins automatically. You can monitor charging progress in real-time through the app.",
  },
  {
    q: isId ? "Apakah stasiun E-Charging Re:Flow menggunakan energi surya?" : "Does the Re:Flow E-Charging station use solar energy?",
    a: isId
      ? "Ya, setiap stasiun dilengkapi panel surya terintegrasi yang menghasilkan energi bersih untuk mendukung proses pengisian daya. Sistem ini juga dilengkapi penyimpanan energi (battery storage) sehingga tetap beroperasi optimal bahkan saat cuaca mendung."
      : "Yes, each station is equipped with integrated solar panels that generate clean energy to support the charging process. The system also features energy storage (battery storage) to maintain optimal operation even during cloudy weather.",
  },
  {
    q: isId ? "Apakah satu stasiun bisa mengisi dua kendaraan sekaligus?" : "Can one station charge two vehicles simultaneously?",
    a: isId
      ? "Ya, setiap stasiun E-Charging Re:Flow dilengkapi dual AC charging output yang memungkinkan pengisian dua kendaraan listrik secara bersamaan tanpa mengurangi kecepatan pengisian."
      : "Yes, each Re:Flow E-Charging station is equipped with dual AC charging outputs, allowing two electric vehicles to charge simultaneously without reducing charging speed.",
  },
];

// ── FAQ Accordion Item ──
function EvcFaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`evc-faq-item ${open ? "open" : ""}`}>
      <button className="evc-faq-question" onClick={() => setOpen(!open)}>
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
      {open && <div className="evc-faq-answer">{a}</div>}
    </div>
  );
}

export default function EVChargingPage() {
  const { language } = useLanguage();
  const isId = language === "id";

  return (
    <main className="evc-page">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="evc-hero">
        <div className="evc-hero-overlay" />
        <Image
          src="/images/products/evcharge/hero.png"
          alt="E-Charging Re:Flow Solar Panel"
          fill
          className="evc-hero-img"
          priority
        />

        <div className="evc-hero-content">
          {/* Re:Flow Product Badge */}
          <div className="evc-hero-badge">Re:Flow Product</div>

          {/* Main Title */}
          <h1 className="evc-hero-title">
            E-Charging<br /> Re:Flow
          </h1>

          {/* Subtitle */}
          <p className="evc-hero-desc">
            {isId
              ? "Smart Charging adalah solusi pengisian daya bertenaga surya cerdas yang dirancang untuk mendukung mobilitas motor listrik yang nyaman, terkoneksi, dan berkelanjutan."
              : "Smart Charging is a smart, solar-powered charging solution designed to support convenient, connected, and sustainable e-motor mobility."}
          </p>

          {/* App Store & Google Play Badges */}
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

        {/* Scroll Indicator */}
        <a href="#about" className="evc-hero-scroll">
          <span>{isId ? "Jelajahi Fitur Lengkap" : "Explore Whats Inside"}</span>
          <ChevronDown size={20} />
        </a>
      </section>

      {/* =========================================================================
          SECTION 1: ABOUT RE:FLOW E-CHARGING (INTRODUCTION)
          ========================================================================= */}
      <section id="about" className="evc-about-section">
        <div className="evc-container">
          <div className="evc-about-grid">
            {/* Left Content */}
            <div>
              <span className="evc-section-tag">
                {isId ? "TENTANG RE:FLOW E-CHARGING" : "ABOUT RE:FLOW E-CHARGING"}
              </span>
              <h2 className="evc-section-title">
                {isId
                  ? "Pengenalan Re:Flow E-Charging"
                  : "Introduction Re:Flow E-Charging"}
              </h2>

              <p className="evc-about-desc">
                {isId
                  ? "Re:Flow E-Charging adalah bagian dari pengembangan ekosistem mobilitas listrik Re:Flow oleh PT Gridwiz Energy & Mobility."
                  : "Re:Flow E-Charging is part of reflow electric mobility ecosystem development by PT Gridwiz Energy & Mobility"}
              </p>

              <p className="evc-about-desc">
                {isId
                  ? "Mengintegrasikan energi surya, penyimpanan energi, konversi daya, output pengisian daya AC ganda, dan akses digital ke dalam satu stasiun pengisian daya yang ringkas dan fleksibel untuk masa depan mobilitas."
                  : "It integrate solar energy, energy storage, power conversion, dual AC charging output, and digital access into one compact and flexible charging station for the future of mobility"}
              </p>
            </div>

            {/* Right Image: ev-spec.png */}
            <div className="evc-about-img-wrap">
              <Image
                src="/images/products/evcharge/ev-spec.png"
                alt="Re:Flow E-Charging Specifications"
                width={520}
                height={500}
                className="evc-about-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHY RE:FLOW E-CHARGING
          ========================================================================= */}
      {/* <section className="evc-why-section">
        <div className="evc-container">
          <div className="evc-why-header">
            <span className="evc-section-tag">
              {isId ? "MENGAPA RE:FLOW E-CHARGING" : "WHY RE:FLOW E-CHARGING"}
            </span>
            <h2 className="evc-section-title" style={{ marginBottom: 0 }}>
              {isId
                ? "Pengisian Daya yang Dirancang untuk Masa Depan"
                : "Charging Designed for the Future"}
            </h2>
          </div> */}

      {/* <div className="evc-why-grid">
            <div className="evc-why-item">
              <div className="evc-why-icon-box">
                <Image
                  src="/images/products/evcharge/icon/whyreflow/solar.png"
                  alt="Solar Integrated Energy"
                  width={48}
                  height={48}
                  className="evc-why-icon-img"
                />
              </div>
              <span className="evc-why-label">Solar Integrated Energy</span>
            </div>

            <div className="evc-why-item">
              <div className="evc-why-icon-box">
                <Image
                  src="/images/products/evcharge/icon/whyreflow/dual.png"
                  alt="Dual Charging"
                  width={48}
                  height={48}
                  className="evc-why-icon-img"
                />
              </div>
              <span className="evc-why-label">Dual Charging</span>
            </div>
            <div className="evc-why-item">
              <div className="evc-why-icon-box">
                <Image
                  src="/images/products/evcharge/icon/whyreflow/smart.png"
                  alt="Smart Digital Access"
                  width={48}
                  height={48}
                  className="evc-why-icon-img"
                />
              </div>
              <span className="evc-why-label">Smart Digital Access</span>
            </div>
            <div className="evc-why-item">
              <div className="evc-why-icon-box">
                <Image
                  src="/images/products/evcharge/icon/whyreflow/flexible.png"
                  alt="Flexible Deployment"
                  width={48}
                  height={48}
                  className="evc-why-icon-img"
                />
              </div>
              <span className="evc-why-label">Flexible Deployment</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* =========================================================================
          SECTION 3: BUILD WITH SMART TECHNOLOGY FOR BETTER PERFORMANCE
          ========================================================================= */}
      <section className="evc-smart-section">
        <div className="evc-container">
          <div className="evc-smart-header">
            <h2 className="evc-smart-header-title">
              {isId
                ? "Dibangun dengan Teknologi Pintar untuk Performa Lebih Baik"
                : "Build with Smart Technology for Better Performance"}
            </h2>
          </div>

          <div className="evc-smart-content-grid">
            {/* 6 Feature Cards */}
            <div className="evc-smart-cards-grid">
              {/* Card 1: Scan QR Code */}
              <div className="evc-smart-card">
                <div className="evc-smart-card-icon">
                  <Image
                    src="/images/products/evcharge/icon/buildwithsmart/scanQRcode.png"
                    alt="Scan QR Code"
                    width={38}
                    height={38}
                  />
                </div>
                <div>
                  <h3 className="evc-smart-card-title">Scan QR Code</h3>
                  <p className="evc-smart-card-desc">
                    {isId
                      ? "Energi panel surya untuk mendukung pengisian daya yang bersih dan efisien."
                      : "Solar Panel Energy to support clean and efficient charging"}
                  </p>
                </div>
              </div>

              {/* Card 2: Smart Monitoring */}
              <div className="evc-smart-card">
                <div className="evc-smart-card-icon">
                  <Image
                    src="/images/products/evcharge/icon/buildwithsmart/smartMonitoring.png"
                    alt="Smart Monitoring"
                    width={38}
                    height={38}
                  />
                </div>
                <div>
                  <h3 className="evc-smart-card-title">Smart Monitoring</h3>
                  <p className="evc-smart-card-desc">
                    {isId
                      ? "Pemantauan real-time dan sistem manajemen jarak jauh."
                      : "Real-time monitoring and remote management system"}
                  </p>
                </div>
              </div>

              {/* Card 3: Dual AC Charging */}
              <div className="evc-smart-card">
                <div className="evc-smart-card-icon">
                  <Image
                    src="/images/products/evcharge/icon/buildwithsmart/dual-ac-charge.png"
                    alt="Dual AC Charging"
                    width={38}
                    height={38}
                  />
                </div>
                <div>
                  <h3 className="evc-smart-card-title">Dual AC Charging</h3>
                  <p className="evc-smart-card-desc">
                    {isId
                      ? "Dua soket pengisian daya untuk pengisian paralel secara bersamaan."
                      : "Two charging sockets for parallel charging"}
                  </p>
                </div>
              </div>

              {/* Card 4: Outdoor Design */}
              <div className="evc-smart-card">
                <div className="evc-smart-card-icon">
                  <Image
                    src="/images/products/evcharge/icon/buildwithsmart/outdoorDesign.png"
                    alt="Outdoor Design"
                    width={38}
                    height={38}
                  />
                </div>
                <div>
                  <h3 className="evc-smart-card-title">Outdoor Design</h3>
                  <p className="evc-smart-card-desc">
                    {isId
                      ? "Kabinet tahan cuaca dengan komponen berkualitas tinggi dan awet."
                      : "Weather protected cabinet with durable components"}
                  </p>
                </div>
              </div>

              {/* Card 5: QR Base Access */}
              <div className="evc-smart-card">
                <div className="evc-smart-card-icon">
                  <Image
                    src="/images/products/evcharge/icon/buildwithsmart/QRbase.png"
                    alt="QR Base Access"
                    width={38}
                    height={38}
                  />
                </div>
                <div>
                  <h3 className="evc-smart-card-title">QR Base Access</h3>
                  <p className="evc-smart-card-desc">
                    {isId
                      ? "Akses aman dan cepat langsung melalui pemindaian QR Code."
                      : "Secure and quick access via QR Code"}
                  </p>
                </div>
              </div>

              {/* Card 6: Mobile Station */}
              <div className="evc-smart-card">
                <div className="evc-smart-card-icon">
                  <Image
                    src="/images/products/evcharge/icon/buildwithsmart/mobileStation.png"
                    alt="Mobile Station"
                    width={38}
                    height={38}
                  />
                </div>
                <div>
                  <h3 className="evc-smart-card-title">Mobile Station</h3>
                  <p className="evc-smart-card-desc">
                    {isId
                      ? "Dilengkapi dengan roda mobilitas untuk penempatan yang sangat fleksibel."
                      : "Equipped with mobility wheels for flexible deployment"}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: ev.png */}
            <div className="evc-smart-img-wrap">
              <Image
                src="/images/products/evcharge/ev.png"
                alt="Re:Flow E-Charging Station"
                width={420}
                height={520}
                className="evc-smart-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: HOW IT WORKS (SIMPLE CHARGING SMART EXPERIENCE)
          ========================================================================= */}
      <section className="evc-how-section">
        <div className="evc-container">
          <div className="evc-how-header">
            <span className="evc-section-tag">
              {isId ? "CARA KERJA" : "HOW IT WORKS"}
            </span>
            <h2 className="evc-section-title" style={{ marginBottom: 0 }}>
              {isId
                ? "Pengalaman Pengisian Daya Pintar & Mudah"
                : "Simple Charging Smart Experience"}
            </h2>
          </div>

          <div className="evc-how-grid">
            {/* Step 1 */}
            <div className="evc-how-card">
              <div className="evc-how-icon-wrap">
                <Image
                  src="/images/products/evcharge/icon/howitworks/scanQR.png"
                  alt="Scan QR Code"
                  width={44}
                  height={44}
                />
              </div>
              <h3 className="evc-how-title">Scan QR Code</h3>
            </div>

            {/* Step 2 */}
            <div className="evc-how-card">
              <div className="evc-how-icon-wrap">
                <Image
                  src="/images/products/evcharge/icon/howitworks/connect.png"
                  alt="Connect Your Charger"
                  width={44}
                  height={44}
                />
              </div>
              <h3 className="evc-how-title">Connect Your Charger</h3>
            </div>

            {/* Step 3 */}
            <div className="evc-how-card">
              <div className="evc-how-icon-wrap">
                <Image
                  src="/images/products/evcharge/icon/howitworks/smart.png"
                  alt="Start Charging"
                  width={44}
                  height={44}
                />
              </div>
              <h3 className="evc-how-title">{isId ? "Mulai Pengisian" : "Start Charging"}</h3>
            </div>

            {/* Step 4 */}
            <div className="evc-how-card">
              <div className="evc-how-icon-wrap">
                <Image
                  src="/images/products/evcharge/icon/howitworks/flexible.png"
                  alt="Monitor via App"
                  width={44}
                  height={44}
                />
              </div>
              <h3 className="evc-how-title">{isId ? "Pantau via Aplikasi" : "Monitor via App"}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CONNECTED EXPERIENCE (SMART BEYOND THE CHARGE)
          ========================================================================= */}
      <section className="evc-connected-section">
        <div className="evc-container">
          <div className="evc-connected-grid">
            {/* Left Col */}
            <div className="evc-connected-left">
              <span className="evc-section-tag">
                {isId ? "PENGALAMAN TERKONEKSI" : "CONNECTED EXPERIENCE"}
              </span>
              <h2 className="evc-section-title">
                {isId
                  ? "Cerdas Melampaui Pengisian Daya"
                  : "Smart Beyond the Charge"}
              </h2>
            </div>

            {/* Mid Col: mobile.png */}
            <div className="evc-connected-mid">
              <Image
                src="/video/products/echarging/echarging.gif"
                alt="E-Charging Tutorial"
                width={300}
                height={550}
                className="evc-connected-phone"
              />
            </div>

            {/* Right Col: Features & Store Badges */}
            <div className="evc-connected-right">
              <h3 className="evc-connected-app-title">Re:Flow Mobile Apps</h3>

              <ul className="evc-connected-list">
                <li className="evc-connected-item">
                  <Check size={18} strokeWidth={3} />
                  <span>Seamless Start Charging</span>
                </li>
                <li className="evc-connected-item">
                  <Check size={18} strokeWidth={3} />
                  <span>Real-time session monitoring</span>
                </li>
                <li className="evc-connected-item">
                  <Check size={18} strokeWidth={3} />
                  <span>Financial and transaction history</span>
                </li>
                <li className="evc-connected-item">
                  <Check size={18} strokeWidth={3} />
                  <span>Charging memory and receipts</span>
                </li>
              </ul>

              {/* App Download Buttons (Enlarged & Shifted to Bottom-Left) */}
              <div className="evc-connected-badges">
                <a
                  href="https://apps.apple.com/gb/app/re-flow/id6741798337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="evc-store-btn"
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
                  className="evc-store-btn"
                >
                  <Image
                    src="/images/hero/googleplay.png"
                    alt="Get it on Google Play"
                    width={160}
                    height={48}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: VISUAL MATERIAL APPLICATION
          ========================================================================= */}
      {/* <section className="evc-material-section">
        <div className="evc-container">
          <h2 className="evc-material-title">Visual Material Application</h2>

          <div className="evc-material-img-wrap">
            <Image
              src="/images/products/evcharge/visualMaterial.png"
              alt="Visual Material Application Panels"
              width={1050}
              height={380}
              className="evc-material-img"
            />
          </div>
        </div>
      </section> */}

      {/* =========================================================================
          SECTION 7: OFFICIAL CHARGING RATE
          ========================================================================= */}
      <section className="evc-pricing-section">
        <div className="evc-container" style={{ maxWidth: "760px" }}>
          <div className="evc-pricing-card">
            <div className="evc-pricing-icon">⚡</div>
            <div>
              <span className="evc-section-tag" style={{ marginBottom: "0.5rem", display: "inline-block" }}>
                {isId ? "TARIF PENGISIAN RESMI" : "OFFICIAL CHARGING RATE"}
              </span>
              <div className="evc-pricing-amount">
                Rp 5.000 <span className="evc-pricing-unit">/ 1000 Wh</span>
              </div>
              <p className="evc-pricing-note">
                {isId
                  ? "Biaya dihitung otomatis berdasarkan konsumsi energi aktual selama sesi pengisian dan ditampilkan real-time di aplikasi Re:Flow."
                  : "Costs are automatically calculated based on actual energy consumption during the charging session and displayed in real-time on the Re:Flow app."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: FAQ
          ========================================================================= */}
      <section className="evc-faq-section">
        <div className="evc-container" style={{ maxWidth: "760px" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="evc-section-tag">FAQ</span>
            <h2 className="evc-section-title">
              {isId ? "Pertanyaan yang Sering Diajukan" : "Frequently Asked Questions"}
            </h2>
          </div>

          <div className="evc-faq-list">
            {evcFaqs(isId).map((faq, i) => (
              <EvcFaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: CTA
          ========================================================================= */}
      <AppCtaSection />

      {/* =========================================================================
          FOOTER
          ========================================================================= */}
      <Footer />
    </main>
  );
}
