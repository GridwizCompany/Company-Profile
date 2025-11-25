"use client";

import { driveImageUrl } from "utils/driveutils";

export default function BestRidersPage() {
  const riders = [
    "https://drive.google.com/file/d/1fOMaCM-dsQsJixyK6MOP_N7gP8IJyXeW/view?usp=sharing",
    "https://drive.google.com/file/d/1j8nppF4Q_0CM9vTisHQNu-74expqGq5J/view?usp=sharing",
    "https://drive.google.com/file/d/1CXSD1TF4xWEo2jljf_i6roWLZ7YZINBB/view?usp=sharing",
  ];

  return (
    <section className="w-full">
      <div className="relative w-full min-h-screen flex items-center justify-center text-center px-6">
        <img
          src={driveImageUrl(riders[0])}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative w-full min-h-screen flex items-center justify-center px-6">
        <img
          src={driveImageUrl(riders[1])}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />

        <div className="relative z-20 max-w-6xl mx-auto px-6 py-20 text-black">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wider text-gray-800 uppercase">
              Jadilah Bagian dari <span className="text-sky-700">100</span>
              <br />
              Rider Terbaik Re:Flow
            </h1>
            <p className="text-xl md:text-2xl font-bold text-red-600 mt-4 tracking-wide">
              Periode 1 – 31 Desember
            </p>
          </div>

          <div className="mt-12 space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-pink-700 uppercase tracking-wide">
                Hadiah Utama
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="relative">
                <div className="bg-[#1F2A55] text-white p-10 pt-16 rounded-3xl shadow-xl relative overflow-hidden min-h-[260px]">
                  <div className="absolute -top-15 -right-10 w-60 h-40 bg-sky-400 -rotate-12 opacity-60 rounded-3xl z-0" />
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-wide">
                    BEASISWA <br /> PENDIDIKAN
                  </h3>
                  <p className="text-lg md:text-xl font-medium mb-1">Senilai</p>
                  <div className="inline-block bg-white text-[#1F2A55] font-bold text-3xl md:text-4xl px-6 py-2 rounded-xl shadow-md">
                    Rp 3.000.000
                  </div>
                  <p className="mt-6 text-sm md:text-base leading-relaxed text-white z-20">
                    Untuk 1 rider terbaik berdasarkan pengurangan emisi
                    tertinggi.
                  </p>
                  <p className="mt-3 text-xs font-semibold opacity-80">
                    *S&K Berlaku
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white text-[#1F2A55] p-10 pt-16 rounded-3xl shadow-xl border border-gray-200 relative overflow-hidden min-h-[260px]">
                  <div className="absolute -bottom-14 -right-10 w-64 h-48 bg-pink-400 rotate-6 opacity-40 rounded-3xl" />
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-wide text-pink-700">
                    VOUCHER <br /> LAINNYA
                  </h3>
                  <p className="text-lg md:text-xl font-medium mb-1">
                    Nominal hingga
                  </p>
                  <div className="inline-block bg-pink-600 text-white font-bold text-3xl md:text-4xl px-6 py-2 rounded-xl shadow-md">
                    JUTAAN RUPIAH
                  </div>
                  <p className="mt-6 text-sm md:text-base leading-relaxed">
                    Berlaku di hotel & cafe mitra Re:Flow.
                  </p>
                  <p className="mt-3 text-xs font-semibold text-gray-600">
                    *Mengikuti aturan masing-masing mitra
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-screen flex items-center justify-center px-6 overflow-hidden">
        <img
          src={driveImageUrl(riders[2])}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="inline-block bg-[#2b2b6b] text-white px-5 py-2 rounded-lg mb-6">
                <h3 className="text-lg font-semibold">Cara Mengikuti</h3>
              </div>

              <ol className="space-y-10 text-[#0f172a]">
                <li className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-xl font-bold">
                    1
                  </div>
                  <div className="flex-1 flex items-center">
                    <p className="text-lg font-semibold">
                      Gunakan sepeda <strong>Re:Flow</strong> secara rutin
                    </p>
                  </div>
                </li>

                <li className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-xl font-bold">
                    2
                  </div>
                  <div className="flex-1 flex items-center">
                    <p className="text-lg font-semibold">
                      Pantau total pengurangan emisi karbon di aplikasi
                    </p>
                  </div>
                </li>

                <li className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-xl font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-6">
                      <div className="w-1/2 sm:w-1/3 bg-white rounded-2xl shadow-md overflow-hidden">
                        <img
                          src={driveImageUrl(
                            "https://drive.google.com/file/d/1f809h0vuH3jFpm0I1hOPZlfP03-HEFJm/view?usp=sharing"
                          )}
                          className="w-full h-[360px] object-cover"
                        />
                      </div>
                      <div className="hidden sm:block text-4xl font-bold text-[#0f172a]">
                        →
                      </div>
                      <div className="w-1/2 sm:w-1/3 bg-white rounded-2xl shadow-md overflow-hidden">
                        <img
                          src={driveImageUrl(
                            "https://drive.google.com/file/d/1Ssew8N-jA2stMj8MQw0ua_KvxVprdhCW/view?usp=sharing"
                          )}
                          className="w-full h-[360px] object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mt-4">
                      Buka menu <strong>Perjalanan Saya</strong> untuk melihat
                      angka pengurangan emisi.
                    </p>
                  </div>
                </li>

                <li className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-xl font-bold">
                    4
                  </div>
                  <div className="flex-1 flex items-center">
                    <p className="text-lg font-semibold">
                      Pastikan berada dalam 100 rider dengan pengurangan emisi
                      tertinggi
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div>
              <div className="inline-block bg-[#2b2b6b] text-white px-5 py-2 rounded-lg mb-6">
                <h3 className="text-lg font-semibold">Ketentuan</h3>
              </div>

              <ol className="space-y-10 text-[#0f172a]">
                <li className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-xl font-bold">
                    1
                  </div>
                  <div className="flex-1 flex items-center">
                    <p className="text-lg font-semibold">
                      Terbuka bagi seluruh pengguna sepeda Re:Flow, baik pelajar
                      maupun publik.
                    </p>
                  </div>
                </li>

                <li className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-xl font-bold">
                    2
                  </div>
                  <div className="flex-1 flex items-center">
                    <p className="text-lg font-semibold">
                      100 rider dengan pengurangan emisi karbon tertinggi berhak
                      memperoleh hadiah.
                    </p>
                  </div>
                </li>

                <li className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-xl font-bold">
                    3
                  </div>
                  <div className="flex-1 flex items-center">
                    <p className="text-lg font-semibold">
                      Peringkat dihitung dari total pengurangan emisi tertinggi
                      dalam sistem Re:Flow.
                    </p>
                  </div>
                </li>

                <li className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-xl font-bold">
                    4
                  </div>
                  <div className="flex-1 flex items-center">
                    <p className="text-lg font-semibold">
                      Periode penghitungan berlangsung 1–31 Desember 2025.
                    </p>
                  </div>
                </li>

                <li className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-xl font-bold">
                    5
                  </div>
                  <div className="flex-1 flex items-center">
                    <p className="text-lg font-semibold">
                      Tim Re:Flow berhak melakukan verifikasi terhadap seluruh
                      data penggunaan.
                    </p>
                  </div>
                </li>

                <li className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-xl font-bold">
                    6
                  </div>
                  <div className="flex-1 flex items-center">
                    <p className="text-lg font-semibold">
                      Penyalahgunaan sistem atau manipulasi data dapat
                      menyebabkan diskualifikasi.
                    </p>
                  </div>
                </li>

                <li className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-xl font-bold">
                    7
                  </div>
                  <div className="flex-1 flex items-center">
                    <p className="text-lg font-semibold">
                      Pengumuman pemenang dilakukan melalui Instagram
                      @reflow.gridwizenm.
                    </p>
                  </div>
                </li>

                <li className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-xl font-bold">
                    8
                  </div>
                  <div className="flex-1 flex items-center">
                    <p className="text-lg font-semibold">
                      Semua voucher mengikuti aturan masing-masing mitra.
                    </p>
                  </div>
                </li>

                <li className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#173a8a] flex items-center justify-center text-white text-xl font-bold">
                    9
                  </div>
                  <div className="flex-1 flex items-center">
                    <p className="text-lg font-semibold">
                      Beasiswa diberikan sebagai bantuan pendidikan, bukan uang
                      tunai bebas.
                    </p>
                  </div>
                </li>

                <li className="flex gap-6 text-sm opacity-80">
                  <span className="shrink-0 w-12 h-12"></span>
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
