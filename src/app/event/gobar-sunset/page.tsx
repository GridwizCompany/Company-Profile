"use client";
import { useState } from "react";
import { driveImageUrl } from "../../../utils/driveutils";

type GalleryItem = {
  imageSource: string;
};

const galleryItems: GalleryItem[] = [
  {
    imageSource:
      "https://drive.google.com/file/d/1ulHW8EcQxvWP_-4DizJ5u308dOtRFU_v/view?usp=sharing",
  },
  {
    imageSource:
      "https://drive.google.com/file/d/1TNficZYSSp8vB6lNaBv4LmW13EF2KGx3/view?usp=sharing",
  },
  {
    imageSource:
      "https://drive.google.com/file/d/1QUHrfK-2RMJJcYr_u5iPE2QJqnF1tCx4/view?usp=sharing",
  },
  {
    imageSource:
      "https://drive.google.com/file/d/1Mi-ZnyP8-Gt7C95BoL-Oo1hCRxyOLZkZ/view?usp=sharing",
  },
  {
    imageSource:
      "https://drive.google.com/file/d/1Fj6Pj-eaGpvzFHcBy4l12I-CV8VVgNBg/view?usp=sharing",
  },
  {
    imageSource:
      "https://drive.google.com/file/d/1HN20bT8ZIGoTktS64s1Dh9k8fEeupJ32/view?usp=sharing",
  },
];

export default function GobarSunset() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.clientWidth;
    const newIndex = Math.round(scrollLeft / width);
    setActiveIndex(newIndex);
  };
  return (
    <section>
      {/* Hero Section */}
      <div
        className="relative min-h-screen bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: 'url("/gobar-sunset.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-6 sm:px-12 md:px-24 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-amber-500">
            <span className="text-orange-500">Gobar</span> Sunset
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl mb-32 leading-relaxed">
            Dalam semangat kebersamaan dan menikmati indahnya senja, Gridwiz
            Energy & Mobility mengajak masyarakat untuk bergabung dalam
            <span className="font-semibold text-amber-400"> Gobar Sunset</span>.
            Mari bersepeda bersama dengan layanan sepeda listrik inovatif
            <span className="font-semibold text-orange-400"> Re:Flow</span>,
            sambil menikmati suasana sore yang hangat, sehat, dan ramah
            lingkungan.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="content bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {/* Deskripsi dan Agenda */}
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
            {/* Kiri */}
            <div className="flex flex-col h-full space-y-6 text-gray-700">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                Gowes Senja Bareng Re:Flow
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                Gobar Sunset menghadirkan pengalaman gowes santai di Kota
                Mataram saat langit memerah. Didukung sepeda listrik Re:Flow,
                seluruh peserta dapat menikmati rute yang nyaman tanpa rasa
                lelah berlebihan. Momen ini menjadi cara seru menutup hari
                dengan aktivitas fisik ringan, udara segar, dan energi positif
                bersama komunitas. Selain menikmati panorama sunset, peserta
                diajak eksplorasi teknologi kendaraan listrik Gridwiz,
                berinteraksi dengan komunitas lokal, dan merasakan hospitality
                premium melalui rangkaian aktivitas tematik di titik perhentian.
              </p>

              <div className="flex-1 flex items-center rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white p-8 md:p-9 md:mt-8">
                <div>
                  <p className="text-base md:text-lg italic leading-relaxed">
                    “Sebagai bagian dari komitmen terhadap mobilitas
                    berkelanjutan dan ramah lingkungan, Gridwiz E&amp;M turut
                    meramaikan acara Car Free Day (CFD) di Lombok.”
                  </p>
                  <p className="mt-4 text-sm uppercase tracking-wide text-white/80">
                    Gridwiz Energy &amp; Mobility
                  </p>
                </div>
              </div>
            </div>

            {/* Kanan */}
            <div className="grid gap-6">
              <div className="rounded-3xl border border-orange-100 bg-orange-50/60 p-8">
                <h3 className="text-2xl font-semibold text-orange-600">
                  Agenda Kegiatan
                </h3>
                <ul className="mt-4 space-y-3 text-base md:text-lg text-orange-900/90 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-orange-500"></span>
                    Briefing &amp; safety check sebelum gowes senja dimulai.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-orange-500"></span>
                    Gowes santai sambil menikmati jalur sunset favorit di
                    Mataram.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-orange-500"></span>
                    Cooling spot dengan sesi foto, live music ringan, dan jamuan
                    sehat.
                  </li>
                </ul>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h4 className="text-xl md:text-2xl font-semibold text-gray-900">
                    Sunset Route
                  </h4>
                  <p className="mt-2 text-base md:text-lg text-gray-600 leading-relaxed">
                    Rute curated melewati spot ikonik sehingga peserta menikmati
                    senja Lombok dari berbagai sudut terbaik.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h4 className="text-xl md:text-2xl font-semibold text-gray-900">
                    Re:Flow Experience
                  </h4>
                  <p className="mt-2 text-base md:text-lg text-gray-600 leading-relaxed">
                    Unit sepeda listrik disiapkan penuh dengan dukungan teknisi
                    Gridwiz sehingga perjalanan terasa aman dan effortless.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section: 3 Kolom Informasi */}
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-10">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Komunitas",
                  desc: "Gobar Sunset mempertemukan pegiat sepeda, warga, dan wisatawan untuk merayakan gaya hidup sehat sambil membangun relasi baru.",
                },
                {
                  title: "Edukasi",
                  desc: "Tim Gridwiz memperkenalkan teknologi baterai dan fitur Re:Flow sebagai solusi mobilitas ramah lingkungan untuk kebutuhan harian.",
                },
                {
                  title: "Hospitality",
                  desc: "Setelah gowes, peserta disambut zona chill dengan minuman segar, light bites, dan sesi musik santai yang menambah ambience senja.",
                },
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <span className="inline-flex items-center rounded-full  py-1 text-base md:text-lg font-bold uppercase tracking-wide text-orange-600">
                    {item.title}
                  </span>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Galeri dengan carousel + dots */}
          <div className="rounded-3xl border border-gray-200 bg-white p-10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Gallery Gobar Sunset
                </h3>
                <p className="mt-2 text-gray-600 max-w-md text-base md:text-lg">
                  Dokumentasi kemeriahan acara Gobar Sunset Re:Flow yang penuh
                  semangat dan warna.
                </p>
              </div>
              <div className="inline-flex items-center justify-center rounded-sm bg-red-600 px-5 py-2 text-sm font-bold text-white shadow-md">
                Dokumentasi Sunset
              </div>
            </div>

            {/* Carousel Mobile + Grid Desktop */}
            <div
              className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible"
              onScroll={handleScroll}
            >
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 sm:w-auto rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg snap-center"
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

            {/* Dots Navigation */}
            <div className="flex justify-center mt-4 sm:hidden">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  className={`mx-1 h-2 w-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-red-600 scale-125"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
