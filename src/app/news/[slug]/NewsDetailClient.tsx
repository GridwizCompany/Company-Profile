"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Tag, ArrowRight } from "lucide-react";
import { NewsData } from "../../../lib/newsData";
import { useAdminData } from "../../../context/AdminDataContext";
import Footer from "../../../component/Footer";
import "../news.css";

export default function NewsDetailClient({
  initialNews,
  slug,
}: {
  initialNews: NewsData;
  slug: string;
}) {
  const { news } = useAdminData();

  // Ambil berita terbaru dari admin context jika tersedia
  const newsItem = useMemo(() => {
    const found = news.find((n) => n.slug === slug || n.id === initialNews.id);
    return found || initialNews;
  }, [news, slug, initialNews]);

  // Related news (excluding current one)
  const relatedNews = useMemo(() => {
    const list = news.length > 0 ? news : [initialNews];
    return list.filter((n) => n.slug !== newsItem.slug).slice(0, 3);
  }, [news, newsItem.slug, initialNews]);

  return (
    <main className="pt-page">
      {/* =========================================================================
          HERO
          ========================================================================= */}
      <section className="pt-detail-hero">
        <div className="pt-detail-hero-overlay" />
        {newsItem.imageSrc && (
          <Image
            src={newsItem.imageSrc}
            alt={newsItem.title}
            fill
            className="pt-detail-hero-img"
            priority
          />
        )}

        {/* Back Button */}
        <Link href="/news" className="pt-detail-back-btn">
          <ArrowLeft size={16} />
          Kembali ke Berita
        </Link>

        <div className="pt-container" style={{ position: "relative", zIndex: 2 }}>
          <div className="pt-detail-hero-content">
            <div className="news-hero-badge" style={{ position: "relative", inset: "auto", marginBottom: "1rem" }}>
              {newsItem.category}
            </div>

            <h1 className="pt-detail-hero-title">{newsItem.title}</h1>

            <div className="pt-detail-hero-location" style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Calendar size={18} /> {newsItem.date}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <MapPin size={18} /> {newsItem.location}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN CONTENT GRID
          ========================================================================= */}
      <section className="pt-detail-main-section">
        <div className="pt-container">
          <div className="pt-detail-main-grid">

            {/* ── Left Column (Content) ── */}
            <div className="pt-detail-left">
              <div className="pt-detail-block">
                <div
                  className="news-content"
                  style={{
                    color: "#374151",
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                    whiteSpace: "pre-line"
                  }}
                >
                  {newsItem.content}
                </div>
              </div>
            </div>

            {/* ── Right Column (Sidebar) ── */}
            <div className="pt-detail-right">
              {/* Info Card */}
              <div className="pt-detail-contact-card">
                <h3 className="pt-detail-contact-title">Informasi Berita</h3>
                <ul className="pt-detail-contact-list">
                  <li className="pt-detail-contact-item">
                    <Tag size={18} />
                    <div>
                      <span>Kategori</span>
                      <strong>{newsItem.category}</strong>
                    </div>
                  </li>
                  <li className="pt-detail-contact-item">
                    <Calendar size={18} />
                    <div>
                      <span>Tanggal Publikasi</span>
                      <strong>{newsItem.date}</strong>
                    </div>
                  </li>
                  <li className="pt-detail-contact-item">
                    <MapPin size={18} />
                    <div>
                      <span>Lokasi</span>
                      <strong>{newsItem.location}</strong>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          RELATED NEWS
          ========================================================================= */}
      {relatedNews.length > 0 && (
        <section className="pt-related-section">
          <div className="pt-container">
            <h2 className="pt-section-title" style={{ marginBottom: "2.5rem" }}>
              Berita Lainnya
            </h2>
            <div className="pt-related-grid">
              {relatedNews.map((related) => (
                <Link href={`/news/${related.slug}`} key={related.slug} className="pt-related-card">
                  <div className="pt-related-card-img-wrap">
                    {related.imageSrc && (
                      <Image
                        src={related.imageSrc}
                        alt={related.title}
                        fill
                        className="pt-related-card-img"
                      />
                    )}
                  </div>
                  <div className="pt-related-card-body">
                    <h3 className="pt-related-card-name">{related.title}</h3>
                    <div className="pt-related-card-loc">
                      <Calendar size={14} /> {related.date}
                    </div>
                    <div className="pt-related-card-cta">
                      Baca Berita <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
