"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Coffee,
  GraduationCap,
  Palmtree,
  MoreHorizontal,
  ArrowRight,
  FileText,
  MapPin,
  ShieldCheck,
  Handshake,
  ClipboardList,
  Send,
} from "lucide-react";
import Footer from "../../component/Footer";
import { useLanguage } from "../../lib/useLanguage";
import "./partners.css";
import { Partner } from "../../lib/partnersData";
import AppCtaSection from "../../component/AppCtaSection";
import { useAdminData } from "../../context/AdminDataContext";

const ITEMS_PER_PAGE = 6;

const whyCards = () => [
  {
    icon: "/images/partners/caffe/fluent_guest-12-filled.png",
    title_id: "Guest Experience",
    title_en: "Guest Experience",
    desc_id: "Tingkatkan kepuasan tamu dengan layanan mobilitas EV premium.",
    desc_en: "Enhance guest satisfaction with premium EV mobility services.",
  },
  {
    icon: "/images/partners/caffe/icon-park-solid_peoples.png",
    title_id: "Pariwisata Berkelanjutan",
    title_en: "Sustainable Tourism",
    desc_id: "Berkontribusi nyata pada masa depan pariwisata Lombok yang hijau.",
    desc_en: "Contribute meaningfully to a greener Lombok tourism future.",
  },
  {
    icon: "/images/partners/caffe/bxs_gift.png",
    title_id: "Amenitas Tambahan",
    title_en: "Additional Amenity",
    desc_id: "Hadirkan fasilitas eksklusif berbasis EV tanpa biaya investasi besar.",
    desc_en: "Provide exclusive EV-based facilities without major investment costs.",
  },
  {
    icon: "/images/partners/caffe/ic_sharp-electric-bike.png",
    title_id: "Mobilitas Digital",
    title_en: "Tech-Enabled Mobility",
    desc_id: "Terhubung dengan ekosistem aplikasi cerdas Re:Flow.",
    desc_en: "Connected to Re:Flow's intelligent app ecosystem.",
  },
];

const trustedLogos = [
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

function PartnerCard({ partner, isId }: { partner: Partner; isId: boolean }) {
  return (
    <div className="pt-partner-card">
      {/* Cover Image */}
      <div className="pt-partner-card-img-wrap">
        <Image
          src={partner.coverImage}
          alt={partner.name}
          fill
          className="pt-partner-card-img"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        {/* Logo overlay */}
        <div className="pt-partner-card-logo-wrap">
          <Image
            src={partner.logo}
            alt={`${partner.name} Logo`}
            width={72}
            height={28}
            className="pt-partner-card-logo"
          />
        </div>
        {/* Category Badge */}
        <div className={`pt-partner-card-badge badge-${partner.category}`}>
          {partner.category === "cafe"
            ? (isId ? "Kafe & Restoran" : "Café & Restaurant")
            : partner.category === "hotel"
            ? (isId ? "Hotel & Resort" : "Hotel & Resort")
            : partner.category === "campus"
            ? (isId ? "Kampus" : "Campus")
            : partner.category === "gili"
            ? "Gili"
            : (isId ? "Lainnya" : "Others")}
        </div>
      </div>

      {/* Content */}
      <div className="pt-partner-card-body">
        <h3 className="pt-partner-card-name">{partner.name}</h3>
        <p className="pt-partner-card-desc">
          {isId ? partner.desc_id : partner.desc_en}
        </p>

        <div className="pt-partner-card-footer">
          <div className="pt-partner-card-location">
            <span>📍</span>
            <span>{partner.location.split(",")[0]}</span>
          </div>
          <Link href={`/partners/${partner.slug}`} className="pt-view-details-btn">
            {isId ? "Lihat Detail" : "View Details"}
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export type FilterCategory = "all" | "campus" | "cafe" | "hotel" | "gili" | "lainnya";

export default function PartnersPage() {
  const { language } = useLanguage();
  const isId = language === "id";
  const { partners } = useAdminData();

  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPartners = activeCategory === "all"
    ? partners
    : partners.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filteredPartners.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const visiblePartners = filteredPartners.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const handleCategoryChange = (cat: FilterCategory) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <main className="pt-page" style={{ paddingTop: "72px" }}>
      {/* =========================================================================
          HERO
          ========================================================================= */}
      <section className="pt-hero">
        <div className="pt-hero-overlay" />
        <Image
          src="/images/hero/bikefoto.png"
          alt="Re:Flow Partners Hero"
          fill
          className="pt-hero-img"
          priority
        />
        <div className="pt-hero-content">
          <div className="pt-hero-badge">Re:Flow Partner Program</div>
          <h1 className="pt-hero-title">
            {isId
              ? "Mobilitas Berkelanjutan untuk Kafe & Resort"
              : "Sustainable Mobility for Cafe & Resort"}
          </h1>
          <p className="pt-hero-desc">
            {isId
              ? "Tingkatkan pengalaman tamu Anda dengan kendaraan listrik premium sambil mendukung pariwisata berkelanjutan di Lombok."
              : "Enhance your guest experience with premium electric vehicle fleets while supporting sustainable tourism in Lombok."}
          </p>

          {/* App Download Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
              marginTop: "2.5rem"
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

      {/* =========================================================================
          WHY RE:FLOW
          ========================================================================= */}
      <section className="pt-why-section">
        <div className="pt-container">
          <div className="pt-section-header" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2 className="pt-section-title">{isId ? "Mengapa Re:Flow" : "Why Re:Flow"}</h2>
          </div>

          <div className="pt-why-grid">
            {whyCards().map((card, i) => (
              <div key={i} className="pt-why-card">
                <div className="pt-why-icon-box">
                  <Image src={card.icon} alt={card.title_en} width={52} height={52} className="pt-why-icon-img" />
                </div>
                <h3 className="pt-why-card-title">{isId ? card.title_id : card.title_en}</h3>
                <p className="pt-why-card-desc">{isId ? card.desc_id : card.desc_en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* =========================================================================
          PARTNERSHIP REGULATIONS
          ========================================================================= */}
      <section className="pt-regulation-section">
        <div className="pt-container">
          <div className="pt-section-header">
            <h2 className="pt-section-title">
              {isId ? "Regulasi Kemitraan" : "Partnership Regulations"}
            </h2>
            <p className="pt-regulation-subtitle">
              {isId
                ? "Berikut adalah persyaratan dan proses yang perlu dipenuhi untuk menjadi mitra resmi Re:Flow."
                : "Here are the requirements and process to become an official Re:Flow partner."}
            </p>
          </div>

          <div className="pt-regulation-grid">
            {/* Left: Requirements */}
            <div className="pt-regulation-requirements">
              <h3 className="pt-regulation-req-title">
                <ClipboardList size={22} color="#1565c0" />
                {isId ? "Persyaratan Mitra" : "Partner Requirements"}
              </h3>

              <div className="pt-regulation-req-card">
                <div className="pt-regulation-req-icon">
                  <Building2 size={20} />
                </div>
                <div className="pt-regulation-req-content">
                  <h4>{isId ? "Lokasi Properti Strategis" : "Strategic Property Location"}</h4>
                  <p>
                    {isId
                      ? "Memiliki properti di area wisata, kawasan hotel/resort, atau lokasi strategis lainnya di Lombok."
                      : "Own a property in a tourist area, hotel/resort district, or other strategic location in Lombok."}
                  </p>
                </div>
              </div>

              <div className="pt-regulation-req-card">
                <div className="pt-regulation-req-icon">
                  <MapPin size={20} />
                </div>
                <div className="pt-regulation-req-content">
                  <h4>{isId ? "Area Parkir Tersedia" : "Parking Area Available"}</h4>
                  <p>
                    {isId
                      ? "Menyediakan area parkir atau ruang khusus untuk penempatan stasiun Re:Flow (min. 6 m²)."
                      : "Provide a parking area or dedicated space for Re:Flow station placement (min. 6 sqm)."}
                  </p>
                </div>
              </div>

              <div className="pt-regulation-req-card">
                <div className="pt-regulation-req-icon">
                  <FileText size={20} />
                </div>
                <div className="pt-regulation-req-content">
                  <h4>{isId ? "Legalitas Usaha" : "Business Legality"}</h4>
                  <p>
                    {isId
                      ? "Memiliki dokumen legalitas usaha yang sah (SIUP, NIB, atau izin usaha pariwisata)."
                      : "Possess valid business legality documents (SIUP, NIB, or tourism business license)."}
                  </p>
                </div>
              </div>

              <div className="pt-regulation-req-card">
                <div className="pt-regulation-req-icon">
                  <ShieldCheck size={20} />
                </div>
                <div className="pt-regulation-req-content">
                  <h4>{isId ? "Komitmen Keberlanjutan" : "Sustainability Commitment"}</h4>
                  <p>
                    {isId
                      ? "Berkomitmen mendukung pariwisata berkelanjutan dan mobilitas ramah lingkungan di Lombok."
                      : "Committed to supporting sustainable tourism and eco-friendly mobility in Lombok."}
                  </p>
                </div>
              </div>

              <div className="pt-regulation-req-card">
                <div className="pt-regulation-req-icon">
                  <Handshake size={20} />
                </div>
                <div className="pt-regulation-req-content">
                  <h4>{isId ? "Perjanjian Kerjasama" : "Cooperation Agreement"}</h4>
                  <p>
                    {isId
                      ? "Bersedia menandatangani perjanjian kerjasama (MoU) dengan PT Gridwiz Energy & Mobility."
                      : "Willing to sign a cooperation agreement (MoU) with PT Gridwiz Energy & Mobility."}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Process Steps */}
            <div className="pt-regulation-process">
              <h3 className="pt-regulation-process-title">
                <Send size={22} color="#1565c0" />
                {isId ? "Proses Pendaftaran" : "Application Process"}
              </h3>

              <div className="pt-regulation-step">
                <div className="pt-regulation-step-line">
                  <div className="pt-regulation-step-dot">1</div>
                  <div className="pt-regulation-step-connector" />
                </div>
                <div className="pt-regulation-step-content">
                  <h4>{isId ? "Pengajuan Kerjasama" : "Cooperation Proposal Submission"}</h4>
                  <p>
                    {isId
                      ? "Isi formulir kerjasama dan lampirkan dokumen pendukung."
                      : "Fill out the cooperation proposal form and attach supporting documents."}
                  </p>
                </div>
              </div>

              <div className="pt-regulation-step">
                <div className="pt-regulation-step-line">
                  <div className="pt-regulation-step-dot">2</div>
                  <div className="pt-regulation-step-connector" />
                </div>
                <div className="pt-regulation-step-content">
                  <h4>{isId ? "Tinjauan & Survei Lokasi" : "Review & Site Survey"}</h4>
                  <p>
                    {isId
                      ? "Tim Gridwiz akan meninjau aplikasi Anda dan melakukan survei lokasi untuk memastikan kelayakan."
                      : "Gridwiz team will review your application and conduct a site survey to ensure feasibility."}
                  </p>
                </div>
              </div>

              <div className="pt-regulation-step">
                <div className="pt-regulation-step-line">
                  <div className="pt-regulation-step-dot">3</div>
                  <div className="pt-regulation-step-connector" />
                </div>
                <div className="pt-regulation-step-content">
                  <h4>{isId ? "Penandatanganan MoU" : "MoU Signing"}</h4>
                  <p>
                    {isId
                      ? "Setelah disetujui, kedua belah pihak menandatangani MoU yang mencakup hak, kewajiban, dan pembagian hasil."
                      : "Upon approval, both parties sign an MoU covering rights, obligations, and revenue sharing."}
                  </p>
                </div>
              </div>

              <div className="pt-regulation-step">
                <div className="pt-regulation-step-line">
                  <div className="pt-regulation-step-dot">4</div>
                  <div className="pt-regulation-step-connector" />
                </div>
                <div className="pt-regulation-step-content">
                  <h4>{isId ? "Instalasi & Peluncuran" : "Installation & Launch"}</h4>
                  <p>
                    {isId
                      ? "Gridwiz menginstal stasiun Re:Flow di properti Anda dan meluncurkan layanan. Anda siap menerima tamu!"
                      : "Gridwiz installs the Re:Flow station at your property and launches the service. You're ready to welcome guests!"}
                  </p>
                </div>
              </div>

              <div className="pt-regulation-step">
                <div className="pt-regulation-step-line">
                  <div className="pt-regulation-step-dot">5</div>
                  <div className="pt-regulation-step-connector" />
                </div>
                <div className="pt-regulation-step-content">
                  <h4>{isId ? "Monitoring & Dukungan Berkelanjutan" : "Ongoing Monitoring & Support"}</h4>
                  <p>
                    {isId
                      ? "Tim Gridwiz menyediakan monitoring operasional, pemeliharaan rutin, dan dukungan teknis secara berkelanjutan."
                      : "Gridwiz team provides operational monitoring, routine maintenance, and ongoing technical support."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="pt-regulation-cta">
            <div className="pt-regulation-cta-text">
              <h3>{isId ? "Siap Menjadi Mitra Re:Flow?" : "Ready to Become a Re:Flow Partner?"}</h3>
              <p>
                {isId
                  ? "Hubungi tim kami untuk konsultasi gratis dan mulai perjalanan kemitraan Anda hari ini."
                  : "Contact our team for a free consultation and start your partnership journey today."}
              </p>
            </div>
            <a href="https://wa.me/+6282144540304" target="_blank" rel="noopener noreferrer" className="pt-regulation-cta-btn">
              {isId ? "Hubungi Kami" : "Contact Us"}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TRUSTED BY (MARQUEE)
          ========================================================================= */}
      <section className="pt-trusted-section">
        <div className="pt-container" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2 className="pt-section-title">{isId ? "Dipercaya Oleh" : "Trusted By"}</h2>
        </div>
        <div className="pt-marquee-wrapper">
          <div className="pt-marquee-track">
            {[...trustedLogos, ...trustedLogos].map((logo, i) => (
              <div key={i} className="pt-marquee-item" aria-hidden={i >= trustedLogos.length}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={52}
                  style={{ height: "44px", width: "auto", objectFit: "contain", filter: "grayscale(20%)", transition: "filter 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(20%)")}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CASE STUDIES (Partner Cards)
          ========================================================================= */}
      <section id="case-studies" className="pt-cases-section">
        <div className="pt-container">
          <div className="pt-cases-header">
            <h2 className="pt-section-title">{isId ? "Mitra Kami" : "Our Partners"}</h2>

            {/* Category Filter Tabs */}
            <div className="pt-filter-tabs">
              <button
                className={`pt-filter-tab ${activeCategory === "all" ? "active" : ""}`}
                onClick={() => handleCategoryChange("all")}
              >
                {isId ? "Semua" : "All"}
              </button>
              <button
                className={`pt-filter-tab ${activeCategory === "campus" ? "active" : ""}`}
                onClick={() => handleCategoryChange("campus")}
              >
                <GraduationCap size={14} />
                {isId ? "Kampus" : "Campus"}
              </button>
              <button
                className={`pt-filter-tab ${activeCategory === "cafe" ? "active" : ""}`}
                onClick={() => handleCategoryChange("cafe")}
              >
                <Coffee size={14} />
                {isId ? "Kafe & Restoran" : "Café & Restaurant"}
              </button>
              <button
                className={`pt-filter-tab ${activeCategory === "hotel" ? "active" : ""}`}
                onClick={() => handleCategoryChange("hotel")}
              >
                <Building2 size={14} />
                {isId ? "Hotel & Resort" : "Hotel & Resort"}
              </button>
              <button
                className={`pt-filter-tab ${activeCategory === "gili" ? "active" : ""}`}
                onClick={() => handleCategoryChange("gili")}
              >
                <Palmtree size={14} />
                Gili
              </button>
              <button
                className={`pt-filter-tab ${activeCategory === "lainnya" ? "active" : ""}`}
                onClick={() => handleCategoryChange("lainnya")}
              >
                <MoreHorizontal size={14} />
                {isId ? "Lainnya" : "Others"}
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="pt-cards-grid">
            {visiblePartners.map((partner) => (
              <PartnerCard key={partner.slug} partner={partner} isId={isId} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pt-pagination">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  className={`pt-page-btn ${currentPage === i + 1 ? "active" : ""}`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* App CTA Section */}
      <AppCtaSection />

      <Footer />
    </main>
  );
}
