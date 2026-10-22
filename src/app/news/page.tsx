"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Tag, Search, ArrowRight } from "lucide-react";
import Footer from "../../component/Footer";
import { useAdminData } from "../../context/AdminDataContext";
import "./news.css";
import { useLanguage } from "../../lib/useLanguage";

export default function NewsPage() {
  const { language } = useLanguage();
  const isId = language === "id";
  const { news: newsData } = useAdminData();

  // Search & filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Extract unique categories from data
  const categories = useMemo(() => {
    const cats = Array.from(new Set(newsData.map((n) => n.category)));
    return ["All", ...cats];
  }, [newsData]);

  // Filter news based on search + category
  const filteredNews = useMemo(() => {
    return newsData.filter((news) => {
      const matchesCategory =
        activeCategory === "All" || news.category === activeCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        query === "" ||
        news.title.toLowerCase().includes(query) ||
        news.shortDesc.toLowerCase().includes(query) ||
        news.category.toLowerCase().includes(query) ||
        news.location.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [newsData, activeCategory, searchQuery]);

  return (
    <main className="pt-page" style={{ paddingTop: "72px" }}>
      {/* =========================================================================
          HERO
          ========================================================================= */}
      <section className="pt-hero">
        <div className="pt-hero-overlay" />
        <Image
          src="/images/events/gobarHoliday.png"
          alt="Gridwiz News Hero"
          fill
          className="pt-hero-img"
          priority
        />
        <div className="pt-hero-content">
          <div className="news-hero-badge">{isId ? "Berita Terbaru" : "Latest News"}</div>
          <h1 className="pt-hero-title">
            {isId ? "Kabar Terkini Gridwiz" : "Gridwiz Updates"}
          </h1>
          <p className="pt-hero-desc">
            {isId
              ? "Dapatkan informasi terbaru mengenai inovasi produk, acara komunitas, dan pencapaian Gridwiz serta Re:Flow dalam mewujudkan mobilitas berkelanjutan."
              : "Get the latest information about product innovations, community events, and the achievements of Gridwiz and Re:Flow in realizing sustainable mobility."}
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

      {/* =========================================================================
          CONTENT SECTION
          ========================================================================= */}
      <section className="pt-cases-section" style={{ padding: "4rem 0" }}>
        <div className="pt-container">
          <div className="pt-cases-header">
            <h2 className="pt-section-title">{isId ? "Berita & Artikel" : "News & Articles"}</h2>
          </div>
          <p style={{ maxWidth: "800px", margin: "0 auto 3rem auto", color: "#4B5563", fontSize: "1.1rem", lineHeight: "1.6", textAlign: "center" }}>
            {isId
              ? "Ikuti terus perkembangan terbaru kami dan mari bersama-sama melangkah menuju masa depan yang lebih hijau."
              : "Keep up with our latest developments and let's step towards a greener future together."}
          </p>

          {/* Filter & Search */}
          <div className="events-filter-bar">
            {/* Category filter buttons */}
            <div className="events-category-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`events-cat-btn ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search input */}
            <div className="events-search-wrap">
              <Search className="events-search-icon" size={20} />
              <input
                type="text"
                placeholder={isId ? "Cari berita..." : "Search news..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="events-search-input"
              />
            </div>
          </div>

          {/* News Cards Grid */}
          {filteredNews.length > 0 ? (
            <div className="pt-cards-grid">
              {filteredNews.map((news) => (
                <div key={news.id} className="pt-partner-card">
                  {/* Cover Image */}
                  <div className="pt-partner-card-img-wrap">
                    <Image src={news.imageSrc} alt={news.title} fill className="pt-partner-card-img" />
                    <div className="pt-partner-card-badge badge-hotel">
                      {news.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-partner-card-body">
                    <h3 className="pt-partner-card-name" style={{ marginBottom: "12px", fontSize: "1.1rem" }}>{news.title}</h3>
                    <p style={{ color: "#6B7280", fontSize: "0.9rem", marginBottom: "16px", lineHeight: "1.5" }}>
                      {news.shortDesc}
                    </p>
                    
                    <div className="pt-partner-card-desc" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Calendar size={16} color="#4A6080" /> <span>{news.date}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <MapPin size={16} color="#4A6080" /> <span>{news.location}</span>
                      </div>
                    </div>

                    <div className="pt-partner-card-footer">
                      <div className="pt-partner-card-location"></div>
                      <Link href={`/news/${news.slug}`} className="pt-view-details-btn">
                        {isId ? "Lihat Detail" : "View Details"}
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="events-empty-state">
              <Search size={48} strokeWidth={1.5} />
              <h3>{isId ? "Berita tidak ditemukan" : "No news found"}</h3>
              <p>{isId ? "Coba ubah pencarian atau filter Anda." : "Try adjusting your search or filter to find what you're looking for."}</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
