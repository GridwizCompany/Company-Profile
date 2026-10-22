"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import { EventData } from "../../../lib/eventsData";
import { useAdminData } from "../../../context/AdminDataContext";
import { getPartnerById, getPartnerLogo } from "../../../lib/partnersList";
import Footer from "../../../component/Footer";
import "../events.css";

export default function EventDetailClient({
  initialEvent,
  slug,
}: {
  initialEvent: EventData;
  slug: string;
}) {
  const { events } = useAdminData();

  // Ambil event terbaru dari admin context jika tersedia
  const event = useMemo(() => {
    const found = events.find((e) => e.slug === slug || e.id === initialEvent.id);
    return found || initialEvent;
  }, [events, slug, initialEvent]);

  // Related events
  const relatedEvents = useMemo(() => {
    const list = events.length > 0 ? events : [initialEvent];
    return list.filter((e) => e.slug !== event.slug).slice(0, 3);
  }, [events, event.slug, initialEvent]);

  const hasPartners = Array.isArray(event.partners) && event.partners.length > 0;

  return (
    <main className="pt-page">
      {/* =========================================================================
          HERO
          ========================================================================= */}
      <section className="pt-detail-hero">
        <div className="pt-detail-hero-overlay" />
        <Image
          src={event.imageSrc}
          alt={event.title}
          fill
          className="pt-detail-hero-img"
          priority
        />

        {/* Back Button */}
        <Link href="/events" className="pt-detail-back-btn">
          <ArrowLeft size={16} />
          All Events
        </Link>

        <div className="pt-container" style={{ position: "relative", zIndex: 2 }}>
          <div className="pt-detail-hero-content">
            <div className="pt-partner-card-badge badge-cafe" style={{ position: "relative", inset: "auto", marginBottom: "1rem" }}>
              {event.category}
            </div>

            <h1 className="pt-detail-hero-title">{event.title}</h1>

            {event.subtitle && (
              <p className="pt-detail-hero-tagline">{event.subtitle}</p>
            )}

            <div className="pt-detail-hero-location" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calendar size={18} /> {event.date}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={18} /> {event.location}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STATS STRIP
          ========================================================================= */}
      <section className="pt-detail-stats-strip">
        <div className="pt-container">
          <div className="pt-detail-stats-grid">
            <div className="pt-detail-stat-card">
              <div className="pt-detail-stat-value" style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <Users size={24} /> {event.participants}
              </div>
              <div className="pt-detail-stat-label">Participants</div>
            </div>
            {event.eventType && (
              <div className="pt-detail-stat-card">
                <div className="pt-detail-stat-value" style={{ fontSize: '1.2rem', whiteSpace: 'pre-wrap', lineHeight: 1.2 }}>
                  {event.eventType.split(', ').join('\n')}
                </div>
                <div className="pt-detail-stat-label">Event Type</div>
              </div>
            )}
            {event.organizedBy && (
              <div className="pt-detail-stat-card">
                <div className="pt-detail-stat-value" style={{ fontSize: '1.2rem', whiteSpace: 'pre-wrap', lineHeight: 1.2 }}>
                  {event.organizedBy.split(', ').join('\n')}
                </div>
                <div className="pt-detail-stat-label">Organized By</div>
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
              {/* Event Overview */}
              <div className="pt-detail-block">
                <h2 className="pt-detail-block-title">Event Overview</h2>
                <p className="pt-detail-block-desc">
                  GEBER Re:Flow is a community ride that brings together Re:Flow users to explore Lombok using electric vehicles. This activity is designed to introduce the experience of sustainable mobility through shared journeys, community activities, and local destination exploration.
                </p>
                <div style={{ position: "relative", height: "300px", borderRadius: "12px", overflow: "hidden", marginTop: "1.5rem" }}>
                  <Image src={event.imageSrc} alt="Overview" fill style={{ objectFit: "cover" }} />
                </div>
              </div>

              {/* Objectives */}
              {event.objectives && event.objectives.length > 0 && (
                <div className="pt-detail-block">
                  <h2 className="pt-detail-block-title">Our Objective</h2>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
                    {event.objectives.map((obj, i) => (
                      <div key={i} style={{ display: "flex", gap: "1rem", backgroundColor: "#F9FAFB", padding: "1.5rem", borderRadius: "12px", border: "1px solid #E5E7EB" }}>
                        <div style={{ backgroundColor: "#1565C0", color: "#FFF", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "8px", fontWeight: "bold", fontSize: "1.2rem", flexShrink: 0 }}>
                          {i + 1}
                        </div>
                        <div>
                          <h4 style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#1F2937", marginBottom: "0.25rem" }}>{obj.title}</h4>
                          <p style={{ color: "#4B5563", fontSize: "0.95rem", margin: 0 }}>{obj.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* What Happened */}
              {event.happenings && event.happenings.length > 0 && (
                <div className="pt-detail-block">
                  <h2 className="pt-detail-block-title">What Happened</h2>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
                    {event.happenings.map((h, i) => (
                      <div key={i}>
                        <div style={{ position: "relative", height: "140px", borderRadius: "8px", overflow: "hidden", marginBottom: "0.5rem" }}>
                          <Image src={h.imageSrc} alt={h.title} fill style={{ objectFit: "cover" }} />
                        </div>
                        <h4 style={{ fontSize: "0.95rem", fontWeight: "600", color: "#1F2937", textAlign: "center" }}>{h.title}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Right Column ── */}
            <div className="pt-detail-right">
              {/* Impact Card */}
              {event.impacts && event.impacts.length > 0 && (
                <div className="pt-detail-contact-card" style={{ marginBottom: "2rem", textAlign: "center" }}>
                  <h3 className="pt-detail-contact-title" style={{ fontSize: "1.5rem" }}>THE IMPACT</h3>
                  <p style={{ color: "#4B5563", marginBottom: "1.5rem", fontWeight: "600" }}>More Than Just a Ride</p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {event.impacts.map((imp, i) => (
                      <div key={i} style={{ backgroundColor: "#F3F4F6", padding: "1rem", borderRadius: "8px" }}>
                        <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#1565C0" }}>{imp.value}</div>
                        <div style={{ color: "#4B5563", fontSize: "0.9rem", fontWeight: "500" }}>{imp.label}</div>
                      </div>
                    ))}
                  </div>

                  <p style={{ marginTop: "1.5rem", color: "#4B5563", fontSize: "0.95rem", fontStyle: "italic" }}>
                    Bringing people together through sustainable mobility
                  </p>
                </div>
              )}

              {/* Event Gallery */}
              {event.gallery && event.gallery.length > 0 && (
                <div className="pt-detail-contact-card" style={{ marginBottom: "2rem" }}>
                  <h3 className="pt-detail-contact-title">Event Gallery</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                    {event.gallery.map((src, i) => (
                      <div key={i} style={{ position: "relative", height: "100px", borderRadius: "6px", overflow: "hidden" }}>
                        <Image src={src} alt="Gallery image" fill style={{ objectFit: "cover" }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Event Partners: HANYA TAMPIL JIKA PARTNER DIPILIH */}
              {hasPartners && (
                <div className="pt-detail-contact-card">
                  <h3 className="pt-detail-contact-title">Event Partners</h3>
                  <p style={{ color: "#4B5563", fontSize: "0.85rem", marginBottom: "1rem" }}>In collaboration with</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", justifyContent: "center", alignItems: "center" }}>
                    {(event.partners || []).map((pid, i) => {
                      const logoSrc = getPartnerLogo(pid);
                      const partnerObj = getPartnerById(pid);
                      const name = partnerObj?.name || pid;
                      return (
                        <div
                          key={`${pid}-${i}`}
                          title={name}
                          style={{
                            position: "relative",
                            width: "75px",
                            height: "44px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Image
                            src={logoSrc}
                            alt={name}
                            fill
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          RELATED EVENTS
          ========================================================================= */}
      {relatedEvents.length > 0 && (
        <section className="pt-related-section">
          <div className="pt-container">
            <h2 className="pt-detail-block-title" style={{ marginBottom: "2.5rem" }}>
              Related Events
            </h2>
            <div className="pt-related-grid">
              {relatedEvents.map((ev) => (
                <Link href={`/events/${ev.slug}`} key={ev.slug} className="pt-related-card">
                  <div className="pt-related-card-img-wrap">
                    <Image
                      src={ev.imageSrc}
                      alt={ev.title}
                      fill
                      className="pt-related-card-img"
                      sizes="(max-width: 768px) 100vw, 280px"
                    />
                  </div>
                  <div className="pt-related-card-body">
                    <h4 className="pt-related-card-name">{ev.title}</h4>
                    <p className="pt-related-card-loc">
                      <Calendar size={12} />
                      {ev.date}
                    </p>
                    <span className="pt-related-card-cta">
                      View Event <ArrowRight size={12} />
                    </span>
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
