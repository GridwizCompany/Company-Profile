"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductRowProps {
  index: string;
  title: string;
  imageSrc: string;
  buttonText: string;
  buttonHref?: string;
}

export default function ProductRow({
  index,
  title,
  imageSrc,
  buttonText,
  buttonHref = "#contact",
}: ProductRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const currentRef = rowRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={rowRef}
      className={`product-interactive-row ${
        isRevealed ? "revealed-state" : "hidden-state"
      }`}
    >
      <div className="product-stage">
        {/* Sisi Kiri: Angka Indeks & Teks Judul */}
        <div className="product-text-side">
          <span className="product-number-badge">{index}</span>
          <h3 className="product-title-text">{title}</h3>
        </div>

        {/* Sumbu Tengah: Garis Vertikal Divider Reveal */}
        <div className="product-divider-line" />

        {/* Sisi Kanan: Gambar Produk */}
        <div className="product-image-side">
          <div className="product-image-wrapper">
            <Image
              src={imageSrc}
              alt={title}
              width={340}
              height={220}
              priority
            />
          </div>
        </div>
      </div>

      {/* Tombol Explore di Bawah */}
      <Link href={buttonHref} className="product-explore-btn">
        <span>{buttonText}</span>
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
