"use client";

import Image from "next/image";
import { useLanguage } from "../lib/useLanguage";
import "./AppCtaSection.css";

interface AppCtaSectionProps {
  id?: string;
  className?: string;
  kicker?: string;
  title?: string;
  desc?: string;
}

export default function AppCtaSection({
  id = "download-cta",
  className = "",
  kicker,
  title,
  desc,
}: AppCtaSectionProps) {
  const { language } = useLanguage();
  const isId = language === "id";

  const defaultKicker = isId
    ? "saatnya berkendara ramah lingkungan."
    : "it’s time to ride eco-friendly.";

  const defaultTitle = isId
    ? "Unduh Re:Flow dan Mulai Perjalanan Anda"
    : "Download Re:Flow and Begin Your Journey";

  const defaultDesc = isId
    ? "Nikmati perjalanan cerdas dan berkelanjutan di seluruh Lombok bersama Re:Flow"
    : "Enjoy smart, sustainable rides across Lombok with Re:Flow";

  return (
    <section id={id} className={`app-cta-section ${className}`}>
      <div className="app-cta-container">
        <div className="app-cta-card">
          {/* ── LEFT: QR Code & Store Badges ── */}
          <div className="app-cta-left">
            <div className="app-cta-qr-box">
              <Image
                src="/images/CTA/qr-app.png"
                alt="QR Code Re:Flow App"
                width={296}
                height={296}
                className="app-cta-qr-img"
              />
            </div>
            <div className="app-cta-badges">
              <a
                href="https://play.google.com/store/apps/details?id=com.gridwiz.ride&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="app-cta-badge-link"
                aria-label="Get it on Google Play"
              >
                <Image
                  src="/images/hero/googleplay.png"
                  alt="Get it on Google Play"
                  width={150}
                  height={45}
                  className="app-cta-badge-img"
                />
              </a>
              <a
                href="https://apps.apple.com/gb/app/re-flow/id6741798337"
                target="_blank"
                rel="noopener noreferrer"
                className="app-cta-badge-link"
                aria-label="Available on the App Store"
              >
                <Image
                  src="/images/hero/appstore.png"
                  alt="Available on the App Store"
                  width={150}
                  height={45}
                  className="app-cta-badge-img"
                />
              </a>
            </div>
          </div>

          {/* ── CENTER: Text Content ── */}
          <div className="app-cta-center">
            <p className="app-cta-kicker">{kicker || defaultKicker}</p>
            <h2 className="app-cta-title">{title || defaultTitle}</h2>
            <p className="app-cta-desc">{desc || defaultDesc}</p>
          </div>

          {/* ── RIGHT: 3D Pop-out Phone Mockup ── */}
          <div className="app-cta-right">
            <div className="app-cta-phone-wrap">
              <Image
                src="/images/CTA/mobile.png"
                alt="Re:Flow Mobile App"
                width={565}
                height={777}
                className="app-cta-phone-img"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
