"use client";

import { useRouter } from "next/navigation";
import { driveImageUrl } from "utils/driveutils";
import React from "react";
import Image from "next/image";

const beritaList = [
  {
    slug: "gridwiz-brida",
    image:
      "https://drive.google.com/file/d/18-SYhoGF-hbwSL3ILu4XK25D6gVBAbst/view?usp=sharing",
    title:
      "PT. Gridwiz Mengawali Kerja Sama Strategis, Dukung Inovasi Energi Terbarukan di NTB",
    description:
      "PT. Gridwiz Mengawali Kerja Sama Strategis, Dukung Inovasi Energi Terbarukan di NTB",
    date: "27 Agustus 2025",
    content:
      "Mataram – Menanggapi potensi besar di bidang energi terbarukan, PT. Gridwiz mengambil langkah awal dengan menawarkan kerja sama strategis kepada Pemerintah Provinsi Nusa Tenggara Barat (NTB). Dalam kunjungan resmi ke Badan Riset dan Inovasi Daerah (BRIDA) NTB pada Rabu, 27 Agustus 2025, perwakilan PT. Gridwiz mempresentasikan visi perusahaan untuk mendukung pengembangan teknologi listrik,  terutama yang berfokus pada transportasi ramah lingkungan. Perwakilan dari PT. Gridwiz diterima langsung oleh Kepala BRIDA NTB, I Gede Putu Aryadi, S.Sos., M.H., beserta timnya. Dalam pertemuan tersebut, PT. Gridwiz menjelaskan bagaimana produk sepeda listrik mereka dapat menjadi solusi mobilitas yang berkelanjutan dan inklusif di NTB",
  },
];

export default function BeritaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const router = useRouter();
  const resolvedParams = React.use(params);
  const berita = beritaList.find((b) => b.slug === resolvedParams.slug);

  if (!berita) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-700">
          Berita tidak ditemukan.
        </h2>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 pb-20">
      <div className="relative w-full h-[70vh] ">
        <Image
          src={driveImageUrl(berita.image)}
          alt="Contoh Gambar"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
          <h1 className="text-white md:text-5xl text-xl font-extrabold text-center max-w-5xl">
            {berita.title}
          </h1>
          <p className="text-gray-200 md:text-lg text-md mt-4">{berita.date}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12 space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line text-justify">
          {berita.content}
        </p>
        <button
          onClick={() => router.back()}
          className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all"
        >
          ← Kembali
        </button>
      </div>
    </section>
  );
}
