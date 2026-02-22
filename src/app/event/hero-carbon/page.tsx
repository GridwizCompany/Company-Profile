"use client";

import { driveImageUrl } from "utils/driveutils";

export default function BestRidersPage() {
  const riders = [
    "https://drive.google.com/file/d/1pMlJC3V6vzgohXpXhK7GJ4S__rgOB83M/view?usp=sharing",
    "https://drive.google.com/file/d/1j8nppF4Q_0CM9vTisHQNu-74expqGq5J/view?usp=sharing",
    "https://drive.google.com/file/d/1CXSD1TF4xWEo2jljf_i6roWLZ7YZINBB/view?usp=sharing",
  ];

  return (
    <section className="w-full">
      {/* SECTION 1: HERO - Sekarang dengan Judul Baru & Overlay Hitam */}
      <div className="relative w-full min-h-screen flex items-center justify-center text-center px-6">
        <img
          src={driveImageUrl(riders[0])}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Tambahan: Overlay Hitam Transparan */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Tambahan: Judul sesuai Pamflet */}
        <div className="relative z-20">
          <div className="bg-orange-500 text-white px-6 py-1 inline-block font-black text-xl md:text-2xl italic mb-4">
            CARBON HERO
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none uppercase">
            RE:FLOW RIDE <br />
            <span className="text-orange-500">CHALLENGE 2026</span>
          </h1>
        </div>
      </div>

{/* SECTION 2: HADIAH - Perbaikan Z-Index & Konten */}
<div className="relative w-full min-h-screen flex items-center justify-center px-6">
        <img
          src={driveImageUrl(riders[1])}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Overlay putih lembut agar teks hitam terbaca */}
        <div className="absolute inset-0 bg-white/60 z-10" />

        <div className="relative z-20 max-w-6xl mx-auto px-6 py-20 text-black">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-blue-900 uppercase">
              DICARI TOP <span className="text-orange-600">20 PENGGUNA</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-gray-800 mt-4 tracking-wide bg-orange-500/10 inline-block px-6 py-2 rounded-full border border-orange-500/20">
              Periode 18 Februari – 4 Maret
            </p>
          </div>

          <div className="mt-12 space-y-10">
            <h2 className="text-2xl md:text-3xl font-black text-blue-900 uppercase tracking-wide border-l-8 border-orange-500 pl-4">
              HADIAH CHALLENGE
            </h2>

            <div className="grid sm:grid-cols-2 gap-10">
              {/* HADIAH 1: VOUCHER INDOMARET */}
              <div className="relative">
                <div className="bg-[#1F2A55] text-white p-10 pt-16 rounded-3xl shadow-xl relative overflow-hidden min-h-[280px]">
                  {/* Shape dekorasi di belakang (z-0) */}
                  <div className="absolute -top-10 -right-10 w-64 h-48 bg-blue-400 rotate-12 opacity-30 rounded-3xl z-0" />
                  
                  {/* Konten di depan (z-10) */}
                  <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight leading-tight">
                      VOUCHER <br /> INDOMARET
                    </h3>
                    <p className="text-lg font-medium mb-2 italic opacity-90">Nominal Hingga</p>
                    <div className="inline-block bg-white text-[#1F2A55] font-black text-3xl md:text-4xl px-6 py-2 rounded-xl shadow-lg uppercase">
                      100K
                    </div>
                    <p className="mt-6 text-sm font-semibold italic opacity-80">
                      *Dapat ditukar di seluruh gerai Indomaret.
                    </p>
                  </div>
                </div>
              </div>

              {/* HADIAH 2: VOUCHER CAFE */}
              <div className="relative">
                <div className="bg-white text-[#1F2A55] p-10 pt-16 rounded-3xl shadow-xl border border-gray-200 relative overflow-hidden min-h-[280px]">
                  {/* Shape dekorasi di belakang (z-0) */}
                  <div className="absolute -bottom-14 -right-10 w-72 h-56 bg-lime-400 -rotate-6 opacity-40 rounded-3xl z-0" />
                  
                  {/* Konten di depan (z-10) */}
                  <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight leading-tight text-blue-900">
                      VOUCHER <br /> CAFE
                    </h3>
                    <p className="text-lg font-medium mb-2 italic">Nominal Hingga</p>
                    <div className="inline-block bg-lime-500 text-blue-900 font-black text-3xl md:text-4xl px-6 py-2 rounded-xl shadow-lg uppercase">
                      100K
                    </div>
                    <p className="mt-6 text-sm font-semibold italic text-gray-600">
                      *Berlaku di Cafe mitra strategis Re:Flow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden">
        <img
          src={driveImageUrl(riders[2])}
          className="absolute inset-0 w-full h-full object-cover opacity-60 sm:opacity-100"
          referrerPolicy="no-referrer"
        />

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* KIRI: Cara Mengikuti */}
            <div>
              <div className="inline-block bg-[#2b2b6b] text-white px-4 py-2 rounded-lg mb-4">
                <h3 className="text-base sm:text-lg font-semibold">
                  Cara Mengikuti
                </h3>
              </div>

              <ol className="space-y-6 sm:space-y-10 text-[#0f172a]">
                <li className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-semibold">
                      Gunakan sepeda <strong>Re:Flow</strong> secara rutin
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-semibold">
                      Pantau total pengurangan emisi karbon di aplikasi
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    {/* gambar: kolom di mobile */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <div className="w-full sm:w-1/2 bg-white rounded-2xl shadow-md overflow-hidden p-2">
                        <img
                          src={driveImageUrl(
                            "https://drive.google.com/file/d/1f809h0vuH3jFpm0I1hOPZlfP03-HEFJm/view?usp=sharing"
                          )}
                          className=" w-full h-auto object-contain bg-white"
                        />
                      </div>

                      <div className="hidden sm:block text-4xl font-bold text-[#0f172a]">
                        →
                      </div>

                      <div className="w-full sm:w-1/2 bg-white rounded-2xl shadow-md overflow-hidden p-2">
                        <img
                          src={driveImageUrl(
                            "https://drive.google.com/file/d/1Ssew8N-jA2stMj8MQw0ua_KvxVprdhCW/view?usp=sharing"
                          )}
                          className="w-full h-auto object-contain bg-white"
                        />
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 mt-3 sm:mt-4">
                      Buka menu <strong>Perjalanan Saya</strong> untuk melihat
                      angka pengurangan emisi.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-semibold">
                      Pastikan berada dalam 20 rider dengan pengurangan emisi
                      tertinggi
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* KANAN: Ketentuan */}
            <div>
              <div className="inline-block bg-[#2b2b6b] text-white px-4 py-2 rounded-lg mb-4">
                <h3 className="text-base sm:text-lg font-semibold">
                  Ketentuan
                </h3>
              </div>

              <ol className="space-y-6 sm:space-y-10 text-[#0f172a]">
                {/** Ulangi format list item => setiap item responsive */}
                <li className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-semibold">
                      Terbuka bagi seluruh pengguna sepeda Re:Flow, baik pelajar
                      maupun publik.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-semibold">
                      20 rider dengan pengurangan emisi karbon tertinggi berhak
                      memperoleh hadiah.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-semibold">
                      Peringkat dihitung dari total pengurangan emisi tertinggi
                      dalam sistem Re:Flow.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-semibold">
                      Periode penghitungan berlangsung 18 Februari–4 Maret 2026.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    5
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-semibold">
                      Tim Re:Flow berhak melakukan verifikasi terhadap seluruh
                      data penggunaan.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    6
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-semibold">
                      Penyalahgunaan sistem atau manipulasi data dapat
                      menyebabkan diskualifikasi.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    7
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-semibold">
                      Pengumuman pemenang dilakukan melalui Instagram
                      @reflow.gridwizenm.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    8
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-semibold">
                      Semua voucher mengikuti aturan masing-masing mitra.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    9
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-semibold">
                      Hadiah diberikan dalam bentuk Voucher, bukan uang
                      tunai dan tidak dapat ditukar dengan uang tunai.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 items-start text-sm opacity-80">
                  <span className="shrink-0 w-10 h-10"></span>
                  <p>
                    Re:Flow berhak mengubah ketentuan tanpa pemberitahuan.
                    Keputusan final tidak dapat diganggu gugat.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
