"use client";

import Image from "next/image";
import { useLanguage } from "../../lib/useLanguage";
import Footer from "../../component/Footer";
import AppCtaSection from "../../component/AppCtaSection";
import CountUp from "../../component/CountUp";
import "./about.css";
import {
  Smartphone,
  Leaf,
  CheckCircle2,
  Bike,
  Zap,
  BatteryCharging,
  Mail,
  Map,
  Landmark,
  Building2,
  Gauge,
  ArrowUpRight,
  Sparkles,
  MapPin,
  MessageSquare,
  Clock,
} from "lucide-react";

const partnerLogos = [
  { src: "/images/partners/logo/acibara.svg", alt: "Acibara" },
  { src: "/images/partners/logo/aruna.svg", alt: "Aruna" },
  { src: "/images/partners/logo/bento.svg", alt: "Bento" },
  { src: "/images/partners/logo/dapoersasak.svg", alt: "Dapoersasak" },
  { src: "/images/partners/logo/dcmmandalika.svg", alt: "Dcmmandalika" },
  { src: "/images/partners/logo/deco.svg", alt: "Deco" },
  { src: "/images/partners/logo/esda.svg", alt: "Esda" },
  { src: "/images/partners/logo/golkar.svg", alt: "Golkar" },
  { src: "/images/partners/logo/hayafarma.svg", alt: "Hayafarma" },
  { src: "/images/partners/logo/janjijiwa.svg", alt: "Janjijiwa" },
  { src: "/images/partners/logo/kinta.svg", alt: "Kinta" },
  { src: "/images/partners/logo/madjoe.svg", alt: "Madjoe" },
  { src: "/images/partners/logo/mattowa.svg", alt: "Mattowa" },
  { src: "/images/partners/logo/mayura.svg", alt: "Mayura" },
  { src: "/images/partners/logo/merumata.svg", alt: "Merumata" },
  { src: "/images/partners/logo/pinkot.svg", alt: "Pinkot" },
  { src: "/images/partners/logo/poltekpar.svg", alt: "Poltekpar" },
  { src: "/images/partners/logo/rplay.svg", alt: "Rplay" },
  { src: "/images/partners/logo/uin.svg", alt: "Uin" },
  { src: "/images/partners/logo/ummat.svg", alt: "Ummat" },
  { src: "/images/partners/logo/unram.svg", alt: "Unram" },
];

export default function AboutPage() {
  const { language } = useLanguage();
  const isId = language === "id";

  return (
    <main style={{ paddingTop: "72px" }}>
      {/* 1. HERO SECTION */}
      <section className="about-hero-section">

        <Image
          src="/images/hero/hero.png"
          alt="Lombok Landscape"
          fill
          className="about-hero-bg"
          priority
        />
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <h1 className="about-hero-title">
            {isId ? (
              <>
                Menggerakkan Ekosistem <br />
                <span>Mobilitas Berkelanjutan</span> Lombok
              </>
            ) : (
              <>
                Powering Lombok&apos;s <br />
                <span>Sustainable Mobility</span> Ecosystem
              </>
            )}
          </h1>
          <p className="about-hero-desc">
            {isId
              ? "PT Gridwiz Energy & Mobility adalah pionir platform mobilitas mikro pintar terintegrasi, menghubungkan industri perhotelan premium dengan transportasi bebas emisi di seluruh Lombok."
              : "PT Gridwiz Energy & Mobility is a pioneer in integrated smart micro-mobility platforms, connecting premium hospitality with zero-emission transportation across the island."}
          </p>

          {/* App Download Buttons */}
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

      {/* 2. IMPACT NUMBERS — Unified Horizon Ribbon */}
      <section className="about-impact-section">
        <div className="pt-container">
          <div className="about-impact-bar">
            {/* Metric 1: CO2 */}
            <div className="about-impact-item">
              <div className="about-impact-icon-pill about-impact-icon-pill--green">
                <Leaf size={22} strokeWidth={2.2} />
              </div>
              <div className="about-impact-content">
                <h3 className="about-impact-num">
                  <CountUp end={8.832} suffix="+" separator="." duration={2800} />
                </h3>
                <p className="about-impact-label">
                  {isId ? "kg Emisi CO2 Ditekan" : "kg CO2 Offset"}
                </p>
                <span className="about-impact-sub">
                  {isId ? "Reduksi jejak karbon pariwisata" : "Reduced tourism carbon footprint"}
                </span>
              </div>
            </div>

            <div className="about-impact-divider" aria-hidden="true" />

            {/* Metric 2: Green KM */}
            <div className="about-impact-item">
              <div className="about-impact-icon-pill about-impact-icon-pill--blue">
                <Gauge size={22} strokeWidth={2.2} />
              </div>
              <div className="about-impact-content">
                <h3 className="about-impact-num">
                  <CountUp end={60.915} suffix="+" separator="." duration={3000} />
                </h3>
                <p className="about-impact-label">
                  {isId ? "Kilometer Hijau Ditempuh" : "Green Kilometers"}
                </p>
                <span className="about-impact-sub">
                  {isId ? "Jarak jelajah tanpa emisi fosil" : "Clean zero-emission travel distance"}
                </span>
              </div>
            </div>

            <div className="about-impact-divider" aria-hidden="true" />

            {/* Metric 3: Hotel Partners */}
            <div className="about-impact-item">
              <div className="about-impact-icon-pill about-impact-icon-pill--amber">
                <Building2 size={22} strokeWidth={2.2} />
              </div>
              <div className="about-impact-content">
                <h3 className="about-impact-num">
                  <CountUp end={32} suffix="+" duration={2000} />
                </h3>
                <p className="about-impact-label">
                  {isId ? "Mitra Hotel & Resort" : "Hotel & Resort Partners"}
                </p>
                <span className="about-impact-sub">
                  {isId ? "Mendukung standar Green Hotel" : "Empowering green hospitality"}
                </span>
              </div>
            </div>

            <div className="about-impact-divider" aria-hidden="true" />

            {/* Metric 4: App Integration */}
            <div className="about-impact-item">
              <div className="about-impact-icon-pill about-impact-icon-pill--cyan">
                <Smartphone size={22} strokeWidth={2.2} />
              </div>
              <div className="about-impact-content">
                <h3 className="about-impact-num">
                  <CountUp end={100} suffix="%" duration={2200} />
                </h3>
                <p className="about-impact-label">
                  {isId ? "Terkoneksi Aplikasi" : "App-Connected Fleet"}
                </p>
                <span className="about-impact-sub">
                  {isId ? "IoT GPS & unlock QR instan" : "Real-time IoT & QR unlock"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY & PURPOSE */}
      <section className="about-story-section">
        <div className="pt-container">
          <div className="about-story-grid">
            <div className="about-story-img-wrap">
              <Image
                src="/images/events/gobarPoltekpar.png"
                alt="Our Story"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="about-story-content">
              <h2>{isId ? "Kisah & Tujuan Kami" : "Our Story & Purpose"}</h2>
              <p>
                {isId
                  ? "Berasal dari Mataram, NTB, PT Gridwiz Energy & Mobility hadir untuk menjawab tantangan pariwisata berkelanjutan di Lombok. Kami percaya bahwa keindahan alam harus dijaga untuk generasi mendatang."
                  : "Originating from Mataram, NTB, PT Gridwiz Energy & Mobility is here to answer the challenges of sustainable tourism in Lombok. We believe that natural beauty must be preserved for future generations."}
              </p>
              <p>
                {isId
                  ? "Dengan menghubungkan hotel-hotel bintang lima melalui ekosistem mobilitas bebas emisi (Re:Flow), kami berkomitmen untuk mendukung standar Green Hotel dan menjadikan Lombok sebagai pionir destinasi wisata hijau kelas dunia."
                  : "By connecting five-star hotels through a zero-emission mobility ecosystem (Re:Flow), we are committed to supporting Green Hotel standards and making Lombok a pioneer in world-class green tourism destinations."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 WHY LOMBOK */}
      <section className="about-lombok-section">
        <div className="pt-container">
          <div className="about-lombok-header">
            <span className="about-lombok-kicker">
              {isId ? "Mengapa Lombok?" : "Why Lombok?"}
            </span>
            <h2>{isId ? "Destinasi Strategis untuk Mobilitas Hijau" : "A Strategic Destination for Green Mobility"}</h2>
            <p>
              {isId
                ? "Lombok bukan hanya pulau wisata — ini adalah ekosistem ideal untuk revolusi transportasi berkelanjutan."
                : "Lombok is not just a tourism island — it's the ideal ecosystem for a sustainable transportation revolution."}
            </p>
          </div>

          <div className="about-lombok-grid">
            <div className="about-lombok-card">
              <div className="about-lombok-card-icon"><Map size={26} color="#059669" /></div>
              <div>
                <h3>{isId ? "Destinasi Wisata Dunia" : "World-Class Tourism"}</h3>
                <p>
                  {isId
                    ? "Mandalika, Gili Islands, dan Kuta Lombok menarik jutaan wisatawan internasional yang menghargai sustainable travel."
                    : "Mandalika, Gili Islands, and Kuta Lombok attract millions of international tourists who value sustainable travel."}
                </p>
              </div>
            </div>
            <div className="about-lombok-card">
              <div className="about-lombok-card-icon"><Landmark size={26} color="#059669" /></div>
              <div>
                <h3>{isId ? "Dukungan Pemerintah" : "Government Support"}</h3>
                <p>
                  {isId
                    ? "Program KEK Mandalika dan inisiatif green tourism NTB memberikan landasan kuat untuk ekosistem EV."
                    : "The Mandalika SEZ program and NTB green tourism initiatives provide a strong foundation for EV ecosystems."}
                </p>
              </div>
            </div>
            <div className="about-lombok-card">
              <div className="about-lombok-card-icon"><Zap size={26} color="#059669" /></div>
              <div>
                <h3>{isId ? "Potensi Infrastruktur EV" : "EV Infrastructure Potential"}</h3>
                <p>
                  {isId
                    ? "Jarak antar destinasi yang ideal untuk mikro-mobilitas, dengan potensi pengembangan charging network di seluruh pulau."
                    : "Ideal distances between destinations for micro-mobility, with potential for island-wide charging network expansion."}
                </p>
              </div>
            </div>
            <div className="about-lombok-card">
              <div className="about-lombok-card-icon"><Leaf size={26} color="#059669" /></div>
              <div>
                <h3>{isId ? "Pelestarian Alam" : "Nature Preservation"}</h3>
                <p>
                  {isId
                    ? "Keindahan alam Lombok yang pristine membutuhkan solusi transportasi yang tidak merusak lingkungan — dan itulah misi kami."
                    : "Lombok's pristine natural beauty needs transportation solutions that don't harm the environment — and that's our mission."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISI & MISI */}
      <section className="about-vismis-section">
        <div className="pt-container">
          <div className="about-vismis-header">
            <span className="about-vismis-kicker">
              {isId ? "Arah & Tujuan Kami" : "Our Direction & Purpose"}
            </span>
            <h2 className="about-vismis-title">
              {isId ? "Visi & Misi" : "Vision & Mission"}
            </h2>
          </div>

          <div className="about-vismis-grid">
            {/* VISI */}
            <div className="about-vismis-card about-vismis-card--vision">
              <div className="about-vismis-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M2 12S5 5 12 5s10 7 10 7-3 7-10 7S2 12 2 12z" />
                </svg>
              </div>
              <h3 className="about-vismis-card-label">
                {isId ? "Visi" : "Vision"}
              </h3>
              <p className="about-vismis-card-text">
                {isId
                  ? "Menjadi pelopor solusi mobilitas mikro ramah lingkungan berbasis teknologi di Indonesia, dengan jangkauan yang inklusif dan berdampak sosial."
                  : "To be a pioneer in technology-based eco-friendly micro-mobility solutions in Indonesia, with inclusive reach and social impact."}
              </p>
            </div>

            {/* MISI */}
            <div className="about-vismis-card about-vismis-card--mission">
              <div className="about-vismis-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="about-vismis-card-label">
                {isId ? "Misi" : "Mission"}
              </h3>
              <ul className="about-vismis-mission-list">
                <li>
                  <CheckCircle2 size={18} className="about-vismis-check" />
                  <span>
                    {isId
                      ? "Mendorong gaya hidup aktif dan sadar lingkungan di masyarakat urban."
                      : "Encourage an active and environmentally conscious lifestyle in urban communities."}
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="about-vismis-check" />
                  <span>
                    {isId
                      ? "Menyediakan layanan transportasi hijau yang efisien, aman, dan mudah diakses."
                      : "Provide efficient, safe, and accessible green transportation services."}
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="about-vismis-check" />
                  <span>
                    {isId
                      ? "Mengembangkan ekosistem mobilitas berkelanjutan melalui teknologi dan kolaborasi lintas sektor."
                      : "Develop a sustainable mobility ecosystem through technology and cross-sector collaboration."}
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="about-vismis-check" />
                  <span>
                    {isId
                      ? "Meningkatkan kesadaran masyarakat akan pentingnya mobilitas berkelanjutan melalui kegiatan edukatif dan partisipatif."
                      : "Raise public awareness about the importance of sustainable mobility through educational and participatory activities."}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. STRUKTUR ORGANISASI */}
      <section className="about-team-section">
        <div className="pt-container">
          <div className="about-orgchart-header">
            <span className="about-orgchart-kicker">
              {isId ? "Struktur Organisasi" : "Organizational Structure"}
            </span>
            <h2 className="about-orgchart-title">
              Gridwiz Leadership &amp; Team
            </h2>
            <p className="about-orgchart-sub">
              {isId
                ? "Sinergi lintas divisi menjaga operasional Re:Flow tetap gesit, inovatif, dan berorientasi pada pelayanan terbaik bagi pengguna serta mitra."
                : "Cross-division synergy keeps Re:Flow operations agile, innovative, and focused on delivering the best service for users and partners."}
            </p>
          </div>

          <div className="about-org-tree" style={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              src="/images/about/CompanyStructure.svg"
              alt="Gridwiz Company Structure"
              width={1200}
              height={800}
              className="about-org-structure-img"
              style={{ width: '100%', maxWidth: 1200, height: 'auto' }}
            />
          </div>
        </div>
      </section>



      {/* 6. TECHNOLOGY & INFRASTRUCTURE ECOSYSTEM */}
      <section className="about-tech-section">
        <div className="pt-container">
          <div className="about-tech-header" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <h2>Technology &amp; Infrastructure</h2>
            <p style={{ color: "#9CA3AF", fontSize: "1.125rem" }}>
              {isId
                ? "Tiga lini produk utama yang dikendalikan oleh sistem manajemen terpusat (CMS) dan aplikasi mobile Re:Flow."
                : "Three main product lines driven by a centralized management system (CMS) and the Re:Flow mobile app."}
            </p>
          </div>
          <div className="about-tech-grid">
            <div className="about-tech-card">
              <div className="about-tech-card-img">
                <Image
                  src="/images/products/ebike.png"
                  alt="E-Bike Ecosystem"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="about-tech-card-body">
                <div className="about-tech-icon about-tech-icon--blue">
                  <Bike size={22} color="#fff" />
                </div>
                <h3>E-Bike Ecosystem</h3>
                <p>
                  {isId
                    ? "Sepeda listrik pintar dengan GPS IoT, alarm anti-pencurian, dan unlock QR melalui aplikasi Re:Flow — tersedia di App Store dan Play Store."
                    : "Smart electric bikes featuring IoT GPS tracking, anti-theft alarms, and seamless QR-unlock via the Re:Flow App available on App Store and Play Store."}
                </p>
              </div>
            </div>
            <div className="about-tech-card">
              <div className="about-tech-card-img">
                <Image
                  src="/images/products/emotor.png"
                  alt="E-Motor Fleet"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="about-tech-card-body">
                <div className="about-tech-icon about-tech-icon--green">
                  <Zap size={22} color="#fff" />
                </div>
                <h3>E-Motor Fleet</h3>
                <p>
                  {isId
                    ? "Motor listrik performa tinggi untuk rute wisata jarak jauh. Didukung pemantauan baterai pintar dan diagnostik kendaraan jarak jauh."
                    : "High-performance electric motorcycles designed for longer tourism routes. Supported by smart battery monitoring and remote vehicle diagnostics."}
                </p>
              </div>
            </div>
            <div className="about-tech-card">
              <div className="about-tech-card-img">
                <Image
                  src="/images/products/evcharge.png"
                  alt="E-Charging Hubs"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="about-tech-card-body">
                <div className="about-tech-icon about-tech-icon--amber">
                  <BatteryCharging size={22} color="#fff" />
                </div>
                <h3>E-Charging Hubs</h3>
                <p>
                  {isId
                    ? "Infrastruktur pengisian strategis di seluruh mitra resort premium, memastikan kesiapan 24/7 dan pelacakan konsumsi energi otomatis."
                    : "Strategic charging infrastructure deployed across premium resort partners, ensuring 24/7 readiness and automated energy consumption tracking."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUR PARTNERS — Logo Marquee */}
      <section className="about-partner-section">
        <div className="pt-container">
          <div className="about-partner-header">
            <span className="about-partner-kicker">
              {isId ? "Mitra Kami" : "Our Partners"}
            </span>
            <h2>{isId ? "Dipercaya oleh Mitra Terbaik" : "Trusted by Leading Partners"}</h2>
            <p>
              {isId
                ? "Kami berkolaborasi dengan pemimpin industri hospitality untuk mendefinisikan ulang pengalaman tamu."
                : "We collaborate with hospitality industry leaders to redefine the guest experience."}
            </p>
          </div>
        </div>

        <div className="about-marquee-wrapper">
          <div className="about-marquee-track">
            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
              <div key={i} className="about-marquee-item" aria-hidden={i >= partnerLogos.length}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={52}
                  style={{ height: "44px", width: "auto", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="pt-container">
          <div className="about-partner-count">
            <div className="about-partner-stat">
              <span className="about-partner-stat-num">21+</span>
              <span className="about-partner-stat-label">
                {isId ? "Mitra Aktif" : "Active Partners"}
              </span>
            </div>
            <div className="about-partner-stat">
              <span className="about-partner-stat-num">5</span>
              <span className="about-partner-stat-label">
                {isId ? "Kategori" : "Categories"}
              </span>
            </div>
            <div className="about-partner-stat">
              <span className="about-partner-stat-num">100%</span>
              <span className="about-partner-stat-label">
                {isId ? "Lokasi Parkir" : "Parking Location"}
              </span>
            </div>
          </div>
        </div>
      </section>



      {/* 8. CONTACT SECTION — Fluid Open Architecture */}
      <section className="about-contact-section">
        {/* Ambient atmospheric glows */}
        <div className="about-contact-glow about-contact-glow--left" aria-hidden="true" />
        <div className="about-contact-glow about-contact-glow--right" aria-hidden="true" />

        <div className="pt-container about-contact-container">
          <div className="about-contact-grid">
            {/* Left: Narrative & Trust */}
            <div className="about-contact-intro">
              <div className="about-contact-live-badge">
                <span className="about-contact-pulse-dot" />
                <span>
                  {isId ? "Kemitraan Aktif — Respon Cepat" : "Active Partnerships — Fast Response"}
                </span>
              </div>

              <h2 className="about-contact-title">
                {isId ? (
                  <>
                    Mari Wujudkan Pariwisata Hijau <br />
                    <span className="about-contact-gradient-text">Bersama Gridwiz</span>
                  </>
                ) : (
                  <>
                    Pioneer Lombok&apos;s Clean Mobility <br />
                    <span className="about-contact-gradient-text">Together With Us</span>
                  </>
                )}
              </h2>

              <p className="about-contact-desc">
                {isId
                  ? "Tertarik mengintegrasikan armada Re:Flow di resort Anda, menjalin kemitraan institusi, atau berdiskusi seputar infrastruktur EV? Tim kami di Mataram siap memberikan solusi terbaik."
                  : "Interested in deploying Re:Flow fleets at your resort, exploring institutional partnerships, or learning about our EV infrastructure? Our team in Mataram is ready to assist you."}
              </p>

              {/* Trust & Presence points */}
              <div className="about-contact-meta">
                <div className="about-contact-meta-item">
                  <MapPin size={18} className="about-contact-meta-icon" />
                  <span>Mataram, Lombok, NTB</span>
                </div>
                <div className="about-contact-meta-item">
                  <Clock size={18} className="about-contact-meta-icon" />
                  <span>{isId ? "Respon Whatsap pada jam 08:00pm - 08:00am" : "WhatsApp Response at 08:00pm - 08:00am"}</span>
                </div>
                <div className="about-contact-meta-item">
                  <Sparkles size={18} className="about-contact-meta-icon" />
                  <span>{isId ? "Konsultasi Kemitraan Gratis" : "Free Partnership Consultation"}</span>
                </div>
              </div>
            </div>

            {/* Right: Direct Interactive Channels (Sleek Glass Capsules) */}
            <div className="about-contact-actions">
              <a
                href="https://wa.me/6282144540304"
                target="_blank"
                rel="noopener noreferrer"
                className="about-contact-action-row about-contact-action-row--wa"
              >
                <div className="about-contact-action-icon-wrap about-contact-action-icon-wrap--wa">
                  <MessageSquare size={24} />
                </div>
                <div className="about-contact-action-body">
                  <span className="about-contact-action-tag">
                    {isId ? "WhatsApp Langsung" : "Direct WhatsApp"}
                  </span>
                  <span className="about-contact-action-main">+62 821-4454-0304</span>
                  <span className="about-contact-action-sub">
                    {isId ? "Chat cepat dengan tim operasional kami" : "Chat directly with our operations team"}
                  </span>
                </div>
                <div className="about-contact-action-arrow">
                  <ArrowUpRight size={22} />
                </div>
              </a>

              <a
                href="mailto:gridwizenergyandmobility@gmail.com"
                className="about-contact-action-row about-contact-action-row--mail"
              >
                <div className="about-contact-action-icon-wrap about-contact-action-icon-wrap--mail">
                  <Mail size={24} />
                </div>
                <div className="about-contact-action-body">
                  <span className="about-contact-action-tag">
                    {isId ? "Inquiry Resmi & Proposal" : "Official Inquiry & Proposal"}
                  </span>
                  <span className="about-contact-action-main">gridwizenergyandmobility@gmail.com</span>
                  <span className="about-contact-action-sub">
                    {isId ? "Kirimkan rencana kemitraan Anda" : "Send us your partnership proposal"}
                  </span>
                </div>
                <div className="about-contact-action-arrow">
                  <ArrowUpRight size={22} />
                </div>
              </a>
            </div>
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
