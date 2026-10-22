"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Globe,
  Bike,
  Zap,
  BatteryCharging,
  Leaf,
} from "lucide-react";
import Footer from "../../../component/Footer";
import { useLanguage } from "../../../lib/useLanguage";
import "../partners.css";
import { getPartnersByCategory, Partner } from "../../../lib/partnersData";
import { useAdminData } from "../../../context/AdminDataContext";

function RelatedCard({ partner, isId }: { partner: Partner; isId: boolean }) {
  return (
    <Link href={`/partners/${partner.slug}`} className="pt-related-card">
      <div className="pt-related-card-img-wrap">
        {partner.coverImage && (
          <Image
            src={partner.coverImage}
            alt={partner.name}
            fill
            className="pt-related-card-img"
            sizes="(max-width: 768px) 100vw, 280px"
          />
        )}
      </div>
      <div className="pt-related-card-body">
        <h4 className="pt-related-card-name">{partner.name}</h4>
        <p className="pt-related-card-loc">
          <MapPin size={12} />
          {partner.location.split(",")[0]}
        </p>
        <span className="pt-related-card-cta">
          {isId ? "Lihat Detail" : "View Details"} <ArrowRight size={12} />
        </span>
      </div>
    </Link>
  );
}

export default function PartnerDetailClient({
  initialPartner,
  slug,
}: {
  initialPartner: Partner;
  slug: string;
}) {
  const { language } = useLanguage();
  const isId = language === "id";
  const { partners } = useAdminData();

  const partner = useMemo(() => {
    const found = partners.find((p) => p.slug === slug);
    return found || initialPartner;
  }, [partners, slug, initialPartner]);

  const related = useMemo(() => {
    const list = partners.length > 0 ? partners : getPartnersByCategory(partner.category);
    return list
      .filter((p) => p.category === partner.category && p.slug !== partner.slug)
      .slice(0, 3);
  }, [partners, partner.category, partner.slug]);

  const benefits = (isId ? partner.benefits_id : partner.benefits_en) || [];

  return (
    <main className="pt-page">
      {/* =========================================================================
          HERO / COVER SECTION
          ========================================================================= */}
      <section className="pt-detail-hero">
        <div className="pt-detail-hero-overlay" />
        {partner.coverImage && (
          <Image
            src={partner.coverImage}
            alt={partner.name}
            fill
            className="pt-detail-hero-img"
            priority
          />
        )}

        {/* Back Button */}
        <Link href="/partners" className="pt-detail-back-btn">
          <ArrowLeft size={16} />
          {isId ? "Semua Mitra" : "All Partners"}
        </Link>

        <div className="pt-container" style={{ position: "relative", zIndex: 2 }}>
          <div className="pt-detail-hero-content">
            {/* Logo */}
            {partner.logo && (
              <div className="pt-detail-hero-logo-wrap">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  width={140}
                  height={52}
                  style={{ maxHeight: "48px", width: "auto", objectFit: "contain" }}
                />
              </div>
            )}

            {/* Category Badge */}
            <div
              className={`pt-partner-card-badge ${partner.category === "cafe" ? "badge-cafe" : "badge-hotel"}`}
              style={{ position: "relative", inset: "auto", marginBottom: "1rem" }}
            >
              {partner.category === "cafe"
                ? isId ? "Kafe & Restoran" : "Café & Restaurant"
                : isId ? "Hotel & Resort" : "Hotel & Resort"}
            </div>

            <h1 className="pt-detail-hero-title">{partner.name}</h1>
            <p className="pt-detail-hero-tagline">
              {isId ? partner.tagline_id : partner.tagline_en}
            </p>

            {partner.gmapsUrl ? (
              <a href={partner.gmapsUrl} target="_blank" rel="noopener noreferrer" className="pt-detail-hero-location" style={{ textDecoration: 'none' }}>
                <MapPin size={16} />
                {partner.location}
              </a>
            ) : (
              <div className="pt-detail-hero-location">
                <MapPin size={16} />
                {partner.location}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN CONTENT GRID
          ========================================================================= */}
      <section className="pt-detail-main-section">
        <div className="pt-container">
          <div className="pt-detail-main-grid">
            {/* ── Left Column ── */}
            <div className="pt-detail-left">
              {/* About */}
              <div className="pt-detail-block">
                <h2 className="pt-detail-block-title">
                  {isId ? `Tentang ${partner.name}` : `About ${partner.name}`}
                </h2>
                <p className="pt-detail-block-desc">
                  {isId ? partner.about_id : partner.about_en}
                </p>
              </div>

              {/* Benefits */}
              <div className="pt-detail-block">
                <h2 className="pt-detail-block-title">
                  {isId ? "Yang Didapatkan Mitra" : "What Partners Get"}
                </h2>
                <ul className="pt-detail-benefits-list">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="pt-detail-benefit-item">
                      <CheckCircle2
                        size={18}
                        color="#1565C0"
                        strokeWidth={2}
                        className="pt-detail-benefit-icon"
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fleet */}
              <div className="pt-detail-block">
                <h2 className="pt-detail-block-title">
                  {isId ? "Armada yang Tersedia" : "Available Fleet"}
                </h2>
                <div className="pt-detail-fleet-grid">
                  {partner.category === "cafe" ? (
                    <div className="pt-detail-fleet-card">
                      <div className="pt-detail-fleet-icon">
                        <Bike size={28} color="#1565C0" />
                      </div>
                      <div className="pt-detail-fleet-label">
                        <span className="pt-detail-fleet-type">Re:Flow E-Bike</span>
                        <span className="pt-detail-fleet-unit">
                          {partner.ebikeCount !== undefined && partner.ebikeCount !== ""
                            ? `${partner.ebikeCount} ${isId ? "Unit Tersedia" : "Units Available"}`
                            : (partner.stats && partner.stats.length > 0 && partner.stats[0]?.value
                                ? `${partner.stats[0].value} ${isId ? "Unit Tersedia" : "Units Available"}`
                                : (isId ? "Tersedia" : "Available"))}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="pt-detail-fleet-card">
                        <div className="pt-detail-fleet-icon">
                          <Bike size={28} color="#1565C0" />
                        </div>
                        <div className="pt-detail-fleet-label">
                          <span className="pt-detail-fleet-type">Re:Flow E-Bike</span>
                          <span className="pt-detail-fleet-unit">
                            {partner.ebikeCount !== undefined && partner.ebikeCount !== ""
                              ? `${partner.ebikeCount} ${isId ? "Unit Tersedia" : "Units Available"}`
                              : (partner.stats && partner.stats.length > 0 && partner.stats[0]?.value
                                  ? `${partner.stats[0].value} ${isId ? "Unit Tersedia" : "Units Available"}`
                                  : (isId ? "Tersedia" : "Available"))}
                          </span>
                        </div>
                      </div>
                      <div className="pt-detail-fleet-card">
                        <div className="pt-detail-fleet-icon">
                          <Zap size={28} color="#00ADB5" />
                        </div>
                        <div className="pt-detail-fleet-label">
                          <span className="pt-detail-fleet-type">Re:Flow E-Motor</span>
                          <span className="pt-detail-fleet-unit">
                            {isId ? "Tersedia" : "Available"}
                          </span>
                        </div>
                      </div>
                      <div className="pt-detail-fleet-card">
                        <div className="pt-detail-fleet-icon">
                          <BatteryCharging size={28} color="#2E7D32" />
                        </div>
                        <div className="pt-detail-fleet-label">
                          <span className="pt-detail-fleet-type">EV Charging</span>
                          <span className="pt-detail-fleet-unit">
                            {isId ? "Stasiun" : "Station"}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* ── Right Column ── */}
            <div className="pt-detail-right">
              {/* Cover Image */}
              {partner.coverImage && (
                <div className="pt-detail-img-card">
                  <Image
                    src={partner.coverImage}
                    alt={partner.name}
                    width={520}
                    height={360}
                    className="pt-detail-img"
                  />
                </div>
              )}

              {/* Contact Card */}
              <div className="pt-detail-contact-card">
                <h3 className="pt-detail-contact-title">
                  {isId ? "Informasi Kontak" : "Contact Information"}
                </h3>
                <div className="pt-detail-contact-list">
                  <div className="pt-detail-contact-item">
                    <MapPin size={16} color="#1565C0" />
                    {partner.gmapsUrl ? (
                      <a href={partner.gmapsUrl} target="_blank" rel="noopener noreferrer">
                        {partner.location}
                      </a>
                    ) : (
                      <span>{partner.location}</span>
                    )}
                  </div>
                  {partner.whatsapp && (
                    <div className="pt-detail-contact-item">
                      <Phone size={16} color="#1565C0" />
                      <a
                        href={`https://wa.me/${partner.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {partner.whatsapp}
                      </a>
                    </div>
                  )}
                  {partner.website && (
                    <div className="pt-detail-contact-item">
                      <Globe size={16} color="#1565C0" />
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {partner.website.replace("https://", "")}
                      </a>
                    </div>
                  )}
                </div>
                <div className="pt-detail-contact-ctas">
                  <a
                    href="https://wa.me/6282144540304"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-detail-cta-primary"
                  >
                    {isId ? "Hubungi Re:Flow" : "Contact Re:Flow"}
                    <ArrowRight size={15} />
                  </a>
                  <Link href="/partners" className="pt-detail-cta-secondary">
                    {isId ? "← Lihat Semua Mitra" : "← All Partners"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          RELATED PARTNERS
          ========================================================================= */}
      {related.length > 0 && (
        <section className="pt-related-section">
          <div className="pt-container">
            <h2 className="pt-detail-block-title" style={{ marginBottom: "2.5rem" }}>
              {isId ? "Mitra Serupa Lainnya" : "Other Similar Partners"}
            </h2>
            <div className="pt-related-grid">
              {related.map((p) => (
                <RelatedCard key={p.slug} partner={p} isId={isId} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
