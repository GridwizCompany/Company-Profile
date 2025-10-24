"use client";
import { useState } from "react";
import BeritaCard from "@/components/ui/berita-card";
import { driveImageUrl } from "utils/driveutils";
import Image from "next/image";

export default function BeritaPage() {
  const image =
    "https://drive.google.com/file/d/1feUGmfo5qQ_USoWOs6T2lmxflEDB5yfK/view?usp=sharing";

  const beritaList = [
    {
      slug: "gridwiz-brida",
      image:
        "https://drive.google.com/file/d/18-SYhoGF-hbwSL3ILu4XK25D6gVBAbst/view?usp=sharing",
      title: "Gridwiz menjalin kerja sama dengan BRIDA Provinsi NTB",
      description:
        "Mataram – Menanggapi potensi besar di bidang energi terbarukan, PT. Gridwiz mengambil langkah awal dengan menawarkan kerja sama strategis kepada Pemerintah Provinsi Nusa Tenggara Barat (NTB). Dalam kunjungan resmi ke Badan Riset dan Inovasi Daerah (BRIDA) NTB pada Rabu, 27 Agustus 2025, perwakilan PT. Gridwiz mempresentasikan visi perusahaan untuk mendukung pengembangan teknologi listrik, terutama yang berfokus pada transportasi ramah lingkungan. Perwakilan dari PT. Gridwiz diterima langsung oleh Kepala BRIDA NTB, I Gede Putu Aryadi, S.Sos., M.H., beserta timnya. Dalam pertemuan tersebut, PT. Gridwiz menjelaskan bagaimana produk sepeda listrik mereka dapat menjadi solusi mobilitas yang berkelanjutan dan inklusif di NTB",
      date: "2025-10-20",
    },
  ];

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(beritaList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = beritaList.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <section className="bg-gray-950 text-white min-h-screen">
      <div className="relative w-full">
        <img
          src={driveImageUrl(image)}
          alt="Gambar Hero"
          referrerPolicy="no-referrer"
          className="h-[60svh] w-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
          <Image
            src={driveImageUrl(
              "https://drive.google.com/file/d/1Ozc3JZk7sL8lLJAk2CDQ7ZN57Oor4EcJ/view?usp=sharing"
            )}
            alt="Logo Gridwiz"
            width={140}
            height={140}
            className="w-40 mb-8"
            priority
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold max-w-3xl leading-tight">
            Berita Terbaru <span className="text-sky-400">Gridwiz</span>
          </h1>
          <p className="text-gray-300 mt-4 max-w-xl text-base sm:text-lg">
            Ikuti kabar terbaru seputar inovasi, kegiatan, dan kolaborasi kami
            dalam mendorong mobilitas hijau di seluruh Indonesia.
          </p>
        </div>
      </div>

      {/* ===== LIST BERITA ===== */}
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Artikel & Kegiatan Terbaru
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {currentItems.map((item, index) => (
            <BeritaCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              date={item.date}
              slug={item.slug}
            />
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 disabled:bg-gray-700 disabled:cursor-not-allowed transition"
          >
            ← Sebelumnya
          </button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className={`w-10 h-10 rounded-lg ${
                  currentPage === i + 1
                    ? "bg-sky-500 text-white"
                    : "bg-gray-800 hover:bg-gray-700"
                } transition`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 disabled:bg-gray-700 disabled:cursor-not-allowed transition"
          >
            Selanjutnya →
          </button>
        </div>
      </div>
    </section>
  );
}
