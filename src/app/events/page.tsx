"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Users, Search, ArrowRight } from "lucide-react";
import Footer from "../../component/Footer";
import { useAdminData } from "../../context/AdminDataContext";
import AppCtaSection from "../../component/AppCtaSection";
import "./events.css";

export default function EventsPage() {
  const { events: eventsData } = useAdminData();

  // Search & filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Extract unique categories from data
  const categories = useMemo(() => {
    const cats = Array.from(new Set(eventsData.map((e) => e.category)));
    return ["All", ...cats];
  }, [eventsData]);

  // Filter events based on search + category
  const filteredEvents = useMemo(() => {
    return eventsData.filter((event) => {
      const matchesCategory =
        activeCategory === "All" || event.category === activeCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        query === "" ||
        event.title.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query) ||
        (event.subtitle && event.subtitle.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [eventsData, activeCategory, searchQuery]);

  return (
    <main className="pt-page" style={{ paddingTop: "72px" }}>
      {/* =========================================================================
          HERO
          ========================================================================= */}
      <section className="pt-hero">
        <div className="pt-hero-overlay" />
        <Image
          src="/images/events/hero.png"
          alt="Re:Flow Events Hero"
          fill
          className="pt-hero-img"
          priority
        />
        <div className="pt-hero-content">
          <div className="pt-hero-badge">Re:Flow Events</div>
          <h1 className="pt-hero-title">
            Event Re: Flow
          </h1>
          <p className="pt-hero-desc">
            Bergabunglah dalam setiap perjalanan bersama Re:Flow — platform mobilitas elektrik Gridwiz yang menghadirkan pengalaman berkendara lebih cerdas, lebih hijau, dan lebih menyenangkan.
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
            <h2 className="pt-section-title">Event Re:Flow</h2>
          </div>
          <p style={{ maxWidth: "800px", margin: "0 auto 3rem auto", color: "#4B5563", fontSize: "1.1rem", lineHeight: "1.6", textAlign: "center" }}>
            Temukan berbagai event seru yang dihadirkan Re:Flow — dari komunitas berkendara, peluncuran produk, hingga workshop mobilitas hijau. Jadilah bagian dari gerakan bersama kami.
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
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="events-search-input"
              />
            </div>
          </div>

          {/* Event Cards Grid */}
          {filteredEvents.length > 0 ? (
            <div className="pt-cards-grid">
              {filteredEvents.map((event) => (
                <div key={event.id} className="pt-partner-card">
                  {/* Cover Image */}
                  <div className="pt-partner-card-img-wrap">
                    <Image src={event.imageSrc} alt={event.title} fill className="pt-partner-card-img" />
                    <div className="pt-partner-card-badge badge-cafe">
                      {event.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-partner-card-body">
                    <h3 className="pt-partner-card-name">{event.title}</h3>
                    <div className="pt-partner-card-desc" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Calendar size={16} color="#4A6080" /> <span>{event.date}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <MapPin size={16} color="#4A6080" /> <span>{event.location}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Users size={16} color="#4A6080" /> <span>{event.participants} Participants</span>
                      </div>
                    </div>

                    <div className="pt-partner-card-footer">
                      <div className="pt-partner-card-location"></div>
                      <Link href={`/events/${event.slug}`} className="pt-view-details-btn">
                        View Details
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
              <h3>No events found</h3>
              <p>Try adjusting your search or filter to find what you&apos;re looking for.</p>
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