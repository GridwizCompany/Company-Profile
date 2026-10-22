"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "../lib/useLanguage";
import "./ScrollToTop.css";

export default function ScrollToTop() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const isId = language === "id";
  const tooltipText = isId ? "Kembali ke atas" : "Back to top";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      // Tampilkan tombol saat scroll melebihi 300px
      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Hitung persentase scroll
      if (docHeight > 0) {
        const progress = Math.min(
          100,
          Math.max(0, (scrollY / docHeight) * 100)
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Lingkaran SVG: r = 22, circumference = 2 * PI * 22 ≈ 138.23
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`scroll-to-top-container ${isVisible ? "visible" : ""}`}
      aria-hidden={!isVisible}
    >
      <span className="scroll-to-top-tooltip" role="tooltip">
        {tooltipText}
      </span>
      <button
        type="button"
        onClick={scrollToTop}
        className="scroll-to-top-btn"
        aria-label={tooltipText}
        title={tooltipText}
      >
        <svg
          className="scroll-progress-svg"
          viewBox="0 0 50 50"
          aria-hidden="true"
        >
          {/* Background circle track */}
          <circle
            className="scroll-progress-bg"
            cx="25"
            cy="25"
            r={radius}
            strokeWidth="3"
            fill="none"
          />
          {/* Active progress indicator */}
          <circle
            className="scroll-progress-indicator"
            cx="25"
            cy="25"
            r={radius}
            strokeWidth="3"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>

        <span className="scroll-icon-wrapper">
          <ArrowUp className="scroll-icon" />
        </span>
      </button>
    </div>
  );
}
