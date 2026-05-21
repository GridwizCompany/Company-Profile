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
      {/* SECTION 1: HERO / PENGUMUMAN */}
      <div className="relative w-full min-h-screen flex items-center justify-center text-center px-6 pt-24 overflow-hidden">
        <img
          src={driveImageUrl(riders[0])}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
          alt="Re:Flow Rider"
        />

        <div className="absolute inset-0 bg-white/80 z-10" />

        <div className="relative z-20 max-w-6xl mx-auto">

          <h1 className="text-6xl md:text-8xl font-black text-[#20296B] leading-none uppercase mb-8">
            PENGUMUMAN!
          </h1>

          <div className="inline-block bg-orange-500 text-white px-8 py-3 font-bold text-3xl md:text-5xl italic mb-8">
            Kami Mencari:
          </div>

          <div className="bg-white/90 border-8 border-[#20296B] rounded-[2rem] px-8 py-12 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <span className="text-8xl md:text-[12rem] font-black italic text-orange-500 leading-none drop-shadow-xl">
                100
              </span>

              <div className="text-center md:text-left">
                <h2 className="text-6xl md:text-8xl font-black text-[#20296B] leading-none">
                  Rider
                </h2>
                <h3 className="text-5xl md:text-7xl font-black text-orange-500 leading-none">
                  Terbaik
                </h3>
              </div>
            </div>

            <p className="mt-8 text-2xl md:text-4xl font-black text-[#003B7A] leading-tight">
              yang berkontribusi{" "}
              <span className="underline decoration-[#20296B]">mengurangi</span>
            </p>
            <p className="text-2xl md:text-4xl font-black text-orange-500 leading-tight">
              Emisi Karbon bersama Re:Flow
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: HADIAH */}
      <div className="relative w-full min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <img
          src={driveImageUrl(riders[1])}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
          alt="Re:Flow Challenge"
        />

        <div className="absolute inset-0 bg-white/70 z-10" />

        <div className="relative z-20 max-w-6xl mx-auto px-6 py-20 text-black">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-7xl font-black tracking-tight text-[#20296B] uppercase">
              DICARI <span className="text-orange-500">100 RIDER TERBAIK</span>
            </h1>

            <p className="text-xl md:text-2xl font-bold text-gray-800 mt-6 tracking-wide bg-orange-500/10 inline-block px-6 py-3 rounded-full border border-orange-500/20">
              Periode 18–31 Mei 2026
            </p>
          </div>

          <div className="bg-[#003B7A] text-white p-8 md:p-12 rounded-3xl shadow-2xl border-4 border-white relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-orange-500 rotate-12 opacity-40 rounded-3xl" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Total Hadiah Jutaan Rupiah!!!
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">
                <div className="bg-white text-[#003B7A] p-8 rounded-2xl shadow-xl">
                  <h3 className="text-3xl md:text-4xl font-black mb-4">
                    Untuk 100 Rider Terbaik
                  </h3>
                  <p className="text-lg font-semibold text-gray-700">
                    Hadiah diberikan kepada rider dengan kontribusi pengurangan
                    emisi karbon terbaik selama periode campaign.
                  </p>
                </div>

                <div className="bg-orange-500 text-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-3xl md:text-4xl font-black mb-4">
                    S&K Berlaku
                  </h3>
                  <p className="text-lg font-semibold">
                    Semua hadiah dan mekanisme mengikuti ketentuan yang berlaku
                    dari Re:Flow.
                  </p>
                </div>
              </div>

              <div className="mt-10 bg-red-600 text-white px-6 py-4 rounded-xl font-bold text-sm md:text-base">
                *Event ini dapat dihentikan kapan saja sesuai kebijakan
                perusahaan.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: CARA MENGIKUTI & KETENTUAN */}
      <div className="relative w-full min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden">
        <img
          src={driveImageUrl(riders[2])}
          className="absolute inset-0 w-full h-full object-cover opacity-50 sm:opacity-80"
          referrerPolicy="no-referrer"
          alt="Cara Mengikuti Re:Flow"
        />

        <div className="absolute inset-0 bg-white/75 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* KIRI: Cara Mengikuti */}
            <div className="bg-white/90 p-6 md:p-8 rounded-3xl shadow-xl">
              <div className="inline-block bg-[#20296B] text-white px-5 py-3 rounded-lg mb-6">
                <h3 className="text-lg sm:text-xl font-black">
                  Cara Mengikuti
                </h3>
              </div>

              <ol className="space-y-6 text-[#0f172a]">
                <li className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-500 flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    1
                  </div>
                  <p className="text-base sm:text-lg font-semibold">
                    Gunakan sepeda <strong>Re:Flow</strong> selama periode
                    campaign.
                  </p>
                </li>

                <li className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-500 flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    2
                  </div>
                  <p className="text-base sm:text-lg font-semibold">
                    Kumpulkan kontribusi pengurangan emisi karbon sebanyak
                    mungkin.
                  </p>
                </li>

                <li className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-500 flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <div className="w-full sm:w-1/2 bg-white rounded-2xl shadow-md overflow-hidden p-2">
                        <img
                          src={driveImageUrl(
                            "https://drive.google.com/file/d/1f809h0vuH3jFpm0I1hOPZlfP03-HEFJm/view?usp=sharing"
                          )}
                          className="w-full h-auto object-contain bg-white"
                          alt="Menu Perjalanan Saya"
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
                          alt="Data Pengurangan Emisi"
                        />
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 mt-3 sm:mt-4">
                      Pantau data pengurangan emisi melalui menu{" "}
                      <strong>Perjalanan Saya</strong>.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-500 flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    4
                  </div>
                  <p className="text-base sm:text-lg font-semibold">
                    Pastikan kamu masuk dalam{" "}
                    <strong>100 Rider Terbaik</strong> yang berkontribusi
                    mengurangi emisi karbon bersama Re:Flow.
                  </p>
                </li>
              </ol>
            </div>

            {/* KANAN: Ketentuan */}
            <div className="bg-white/90 p-6 md:p-8 rounded-3xl shadow-xl">
              <div className="inline-block bg-[#20296B] text-white px-5 py-3 rounded-lg mb-6">
                <h3 className="text-lg sm:text-xl font-black">Ketentuan</h3>
              </div>

              <ol className="space-y-6 text-[#0f172a]">
                <li className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#20296B] flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    1
                  </div>
                  <p className="text-base sm:text-lg font-semibold">
                    Campaign berlaku untuk pengguna sepeda Re:Flow.
                  </p>
                </li>

                <li className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#20296B] flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    2
                  </div>
                  <p className="text-base sm:text-lg font-semibold">
                    Periode campaign berlangsung pada{" "}
                    <strong>18–31 Mei 2026</strong>.
                  </p>
                </li>

                <li className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#20296B] flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    3
                  </div>
                  <p className="text-base sm:text-lg font-semibold">
                    Peringkat ditentukan berdasarkan kontribusi pengurangan emisi
                    karbon bersama Re:Flow.
                  </p>
                </li>

                <li className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#20296B] flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    4
                  </div>
                  <p className="text-base sm:text-lg font-semibold">
                    100 rider terbaik berkesempatan mendapatkan hadiah dengan
                    total jutaan rupiah.
                  </p>
                </li>

                <li className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#20296B] flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    5
                  </div>
                  <p className="text-base sm:text-lg font-semibold">
                    Syarat dan ketentuan berlaku.
                  </p>
                </li>

                <li className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#20296B] flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    6
                  </div>
                  <p className="text-base sm:text-lg font-semibold">
                    Event ini dapat dihentikan kapan saja sesuai kebijakan
                    perusahaan.
                  </p>
                </li>

                <li className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#20296B] flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    7
                  </div>
                  <p className="text-base sm:text-lg font-semibold">
                    Informasi resmi dapat dilihat melalui Instagram{" "}
                    <strong>@reflow.gridwizenm</strong> dan website{" "}
                    <strong>gridwizenm.com</strong>.
                  </p>
                </li>

                <li className="flex gap-4 items-start text-sm opacity-80 pt-4 border-t border-gray-300">
                  <span className="shrink-0 w-10 h-10"></span>
                  <p>
                    Keputusan perusahaan bersifat final dan tidak dapat diganggu
                    gugat.
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