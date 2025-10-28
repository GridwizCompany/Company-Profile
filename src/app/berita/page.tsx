"use client";
import { useState } from "react";
import Image from "next/image";
import BeritaCard from "@/components/ui/berita-card";
import { beritaItems } from "data/berita";

export default function BeritaPage() {
  const heroImage =
    "https://stuproztnegtdvowxqvt.supabase.co/storage/v1/object/public/images/News/bg-news.jpg";

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(beritaItems.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = beritaItems.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="bg-gray-950 text-white min-h-screen">
      <div className="relative w-full">
        <img
          src={heroImage}
          alt="Gridwiz News Hero"
          referrerPolicy="no-referrer"
          className="h-[60svh] w-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
          <Image
            src="https://stuproztnegtdvowxqvt.supabase.co/storage/v1/object/public/images/Logo/reflow-logo-white.png"
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

      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Artikel & Kegiatan Terbaru
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {currentItems.map((item) => (
            <BeritaCard
              key={item.slug}
              image={item.image}
              title={item.title}
              description={item.description}
              date={item.date}
              slug={item.slug}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 disabled:bg-gray-700 disabled:cursor-not-allowed transition"
            >
              {"<"} Sebelumnya
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
              Selanjutnya {">"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
