"use client";
import { useState } from "react";
import { driveImageUrl } from "../../../utils/driveutils";

type GalleryItem = {
  imageSource: string;
};

const galleryItems: GalleryItem[] = [
  {
    imageSource:
      "https://drive.google.com/file/d/1geOeL4N70QOWAvG1nFoHPOd7OWraAoyC/view?usp=sharing",
  },
  {
    imageSource:
      "https://drive.google.com/file/d/1h5K8rHtxpi_ockrq7lrjjQhsMFbVJKH4/view?usp=sharing",
  },
  {
    imageSource:
      "https://drive.google.com/file/d/1kFdvUGMF_z7NRnMwc6MkYaLMwZMj9gkF/view?usp=sharing",
  },
  {
    imageSource:
      "https://drive.google.com/file/d/1iSoqHV_a8t6cmu9_kotvsn-Au5D_O57i/view?usp=sharing",
  },
  {
    imageSource:
      "https://drive.google.com/file/d/16acB7VSybOxqelEg5RlpNRUfqxQ3cBS4/view?usp=sharing",
  },
  {
    imageSource:
      "https://drive.google.com/file/d/1cnIl4BYyhP7h5IRBoM1sqs6DrGAecfcN/view?usp=sharing",
  },
];

export default function GobarKemerdekaan() {
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
        style={{ backgroundImage: 'url("/gobar-kemerdekaan.JPG")' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col items-start justify-end min-h-screen text-white px-6 sm:px-12 md:px-16 lg:px-24 py-12 sm:py-16 gap-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            <span className="text-red-500">Gobar</span> Kemerdekaan
          </h1>

          <p className="text-base md:text-lg  text-gray-100 mb-6 max-w-2xl leading-relaxed">
            Dalam semangat memperingati Hari Kemerdekaan ke-80 Republik
            Indonesia, Gridwiz Energy & Mobility mengajak masyarakat bergerak
            aktif dan peduli lingkungan melalui layanan sepeda listrik inovatif
            Re:Flow.
          </p>
        </div>
      </div>

      {/* Konten Utama */}
      <div className="content bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {/* Bagian 1 */}
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
            <div className="space-y-6 text-gray-700">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Tingkatkan Semangat Kemerdekaan
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                Gobar Kemerdekaan menghadirkan gowes bareng bernuansa merah
                putih sebagai wujud syukur atas kemerdekaan Indonesia. Ratusan
                peserta dari komunitas, pelajar, hingga keluarga ikut meramaikan
                jalur ikonik Kota Mataram dengan sepeda listrik Re:Flow.
                Sepanjang acara, peserta menikmati edukasi mengenai teknologi
                baterai, fasilitas charging port, serta berbagai aktivitas
                tematik yang memperkuat rasa cinta tanah air.
              </p>
              <div className="rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-700 text-white p-8 shadow-xl">
                <p className="text-lg md:text-xl italic leading-relaxed">
                  “Gowes Merdeka bukan sekadar perayaan, melainkan gerakan nyata
                  untuk menyalakan gaya hidup sehat, teknologi hijau, dan
                  solidaritas antar generasi.”
                </p>
                <p className="mt-4 text-sm uppercase tracking-wide text-white/80">
                  Gridwiz Energy &amp; Mobility
                </p>
              </div>
            </div>

            <div className="grid gap-6 h-full">
              <div className="rounded-3xl border border-red-200 bg-red-50/70 p-10 h-full flex flex-col justify-center">
                <h3 className="text-base  sm:text-lg md:text-xl font-bold text-red-600">
                  Highlight Kegiatan
                </h3>
                <ul className="mt-4 space-y-3 text-base md:text-lg text-red-900/90 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-500"></span>
                    Upacara singkat dan doa bersama sebelum start sebagai simbol
                    rasa syukur atas kemerdekaan.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-500"></span>
                    Parade gowes merah putih dengan ornamen bendera di setiap
                    unit Re:Flow dan atribut peserta.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-500"></span>
                    Finish line celebration dengan sesi hiburan, kuliner lokal,
                    dan doorprize bertema kemerdekaan.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Nilai Kegiatan */}
          <div className="rounded-3xl border-2 border-gray-200 bg-gradient-to-br from-white via-red-50 to-white p-10">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-3">
                <span className="inline-flex items-center rounded-full  py-1 text-base md:text-lg font-bold uppercase tracking-wide text-red-600">
                  Nasionalisme
                </span>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Peserta membawa atribut merah putih, menjadikan gowes ini
                  ajang parade cinta tanah air yang modern dan inklusif.
                </p>
              </div>
              <div className="space-y-3">
                <span className="inline-flex items-center rounded-full  py-1 text-base md:text-lg font-bold uppercase tracking-wide text-red-600">
                  Edukasi Hijau
                </span>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Workshop mobilitas rendah emisi agar masyarakat memahami
                  manfaat Re:Flow lebih jauh.
                </p>
              </div>
              <div className="space-y-3">
                <span className="inline-flex items-center rounded-full  py-1 text-base md:text-lg font-bold uppercase tracking-wide text-red-600">
                  Kolaborasi
                </span>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Dukungan sponsor dan media partner menghadirkan booth
                  interaktif yang menambah pengalaman peserta.
                </p>
              </div>
            </div>
          </div>

          {/* Galeri dengan carousel + dots */}
          <div className="rounded-3xl border border-gray-200 bg-white p-10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Gallery Gobar Kemerdekaan
                </h3>
                <p className="mt-2 text-gray-600 max-w-md text-base md:text-lg">
                  Dokumentasi kemeriahan acara Gobar Kemerdekaan Re:Flow yang
                  penuh semangat dan warna.
                </p>
              </div>
              <div className="inline-flex items-center justify-center rounded-sm bg-red-600 px-5 py-2 text-sm font-bold text-white shadow-md">
                Dokumentasi Merdeka
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
