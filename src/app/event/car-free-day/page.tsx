"use client";
import { useState } from "react";
import { driveImageUrl } from "../../../utils/driveutils";
import Image from "next/image";

interface GalleryItem {
  imageSource: string;
}

const galleryItems: GalleryItem[] = [
  {
    imageSource:
      "https://drive.google.com/file/d/1S4QP1ATVBOLAvaLEDMt41NyKsM_tkV2I/view?usp=sharing",
  },
  {
    imageSource:
      "https://drive.google.com/file/d/1kp-h3svRwXuB5xB4nlwoOuBSMmkHl2ds/view?usp=sharing",
  },
  {
    imageSource:
      "https://drive.google.com/file/d/10ZVLSaqigedKVuJ8PrfVPVJQwPjYUEv3/view?usp=sharing",
  },
  {
    imageSource:
      "https://drive.google.com/file/d/1GS66G-8L0UhvD83qHgTn_xlgsti2bMWB/view?usp=sharing",
  },
  {
    imageSource:
      "https://drive.google.com/file/d/1y3A9c0EcoG0xVmBHn4XenGeK_mP8OAbW/view?usp=sharing",
  },
  {
    imageSource:
      "https://drive.google.com/file/d/1L0ZA4skcdqQ70d43Dor0UbiL0Nd2stsG/view?usp=sharing",
  },
];

export default function CarFreeDay() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === galleryItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };
  return (
    <section className="bg-white">
      <div className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={
              "https://stuproztnegtdvowxqvt.supabase.co/storage/v1/object/public/images/Event/cfd.jpg"
            }
            alt="Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            <span className="text-sky-400">Car</span>{" "}
            <span className="text-blue-500">Free Day</span>
          </h1>

          <p className="text-3xl md:text-5xl font-extrabold my-6 md:my-12">X</p>

          <img
            src={
              "https://stuproztnegtdvowxqvt.supabase.co/storage/v1/object/public/images/Logo/reflow-logo-white.png"
            }
            alt="Logo Gridwiz"
            className="object-contain drop-shadow-lg w-32 sm:w-40 md:w-48"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col h-full space-y-8 text-gray-700">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Car Free Day Bersama Re:Flow
            </h2>

            <p className="text-base md:text-lg leading-relaxed">
              Gridwiz Energy &amp; Mobility hadir di Car Free Day untuk mengajak
              masyarakat hidup lebih sehat, aktif, dan ramah lingkungan. Rasakan
              langsung pengalaman berkendara dengan sepeda listrik Re:Flow —
              solusi mobilitas bebas emisi untuk masa depan Indonesia yang lebih
              hijau.
            </p>

            <div className="flex-1 flex items-center rounded-3xl bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 text-white p-8 md:p-9 md:mt-8">
              <div>
                <p className="text-lg sm:text-xl italic leading-relaxed">
                  “Sebagai bagian dari komitmen terhadap mobilitas berkelanjutan
                  dan ramah lingkungan, Gridwiz E&amp;M turut meramaikan acara
                  Car Free Day (CFD) di Lombok.”
                </p>
                <p className="mt-4 text-sm uppercase tracking-wide text-white/80">
                  Gridwiz Energy &amp; Mobility
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-gray-200 bg-white p-8">
              <h3 className="text-3xl font-bold text-gray-900">
                Tujuan Kegiatan
              </h3>
              <p className="mt-3 text-base md:text-lg leading-relaxed">
                Re:Flow CFD menghadirkan ruang sehat yang bebas polusi sekaligus
                meningkatkan kesadaran akan mobilitas rendah emisi. Kegiatan ini
                mengajak komunitas dan institusi pendidikan untuk merasakan gaya
                hidup aktif, sehat, dan modern melalui teknologi sepeda listrik
                Re:Flow.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 ">
                <h4 className="text-2xl font-bold text-gray-900">
                  Test Ride Gratis
                </h4>
                <p className="mt-3 text-base md:text-lg leading-relaxed">
                  Pengunjung dapat mencoba langsung sepeda listrik Re:Flow di
                  area khusus yang steril dari kendaraan bermotor dan dibimbing
                  oleh tim Gridwiz.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 ">
                <h4 className="text-2xl font-bold text-gray-900">
                  Booth Interaktif
                </h4>
                <p className="mt-3 text-base md:text-lg leading-relaxed">
                  Eksplorasi demo Battery Charging Station, simulasi VR, hingga
                  zona foto tematik yang menghadirkan pengalaman ramah
                  lingkungan nan futuristik.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200  p-8 space-y-8 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">
                Gallery Car Free Day Re:Flow
              </h3>
              <p className="mt-2 text-gray-600 max-w-md text-lg">
                Jelajahi momen terbaik Car Free Day bersama Gridwiz Energy &amp;
                Mobility lewat dokumentasi eksklusif Re:Flow.
              </p>
            </div>
            <div className="inline-flex items-center justify-center rounded-sm bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md">
              Dokumentasi Re:Flow
            </div>
          </div>

          <div className="block sm:hidden relative">
            <div className="overflow-hidden relative">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {galleryItems.map((item, index) => (
                  <div
                    key={index}
                    className="min-w-full flex-shrink-0 md:rounded-3xl overflow-hidden bg-gray-100"
                  >
                    <img
                      src={driveImageUrl(item.imageSource)}
                      alt={`Gallery ${index + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              ›
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {galleryItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === currentIndex ? "bg-blue-600 w-5" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={driveImageUrl(item.imageSource)}
                    alt={`Gallery ${index + 1}`}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
