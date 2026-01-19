"use client";

import { driveImageUrl } from "utils/driveutils";

export default function FreeRidePage() {
  const assets = [
    "https://drive.google.com/file/d/1fOMaCM-dsQsJixyK6MOP_N7gP8IJyXeW/view?usp=sharing", // Background 1
    "https://drive.google.com/file/d/1j8nppF4Q_0CM9vTisHQNu-74expqGq5J/view?usp=sharing", // Background 2
    "https://drive.google.com/file/d/1CXSD1TF4xWEo2jljf_i6roWLZ7YZINBB/view?usp=sharing", // Background 3
  ];

  return (
    <section className="w-full font-sans">
      {/* SECTION 1: HERO - GRATIS 30 MENIT */}
      <div className="relative w-full min-h-screen flex items-center justify-center text-center px-6">
        <img
          src={driveImageUrl(assets[0])}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
          alt="Re:Flow Promo"
        />
        <div className="relative z-10 bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
            <h1 className="text-6xl md:text-8xl font-black drop-shadow-lg tracking-tighter">
                <span className="text-orange-500">GRATIS</span> <br />
                <span className="text-sky-600">30 MENIT</span>
            </h1>
          <p className="text-2xl md:text-3xl font-bold bg-[#1F2A55] text-white inline-block px-6 py-2 mt-4 skew-x-[-10deg]">
            SETIAP HARI!
          </p>
        </div>
      </div>

      {/* SECTION 2: CARA PENGGUNAAN */}
      <div className="relative w-full min-h-screen flex items-center justify-center px-6 py-20">
        <img
          src={driveImageUrl(assets[1])}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />

        <div className="relative z-20 max-w-6xl mx-auto text-black">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2A55] uppercase">
              Cara Nikmati <span className="text-pink-600">Gowes Gratis</span>
            </h2>
            <p className="text-lg text-gray-600 mt-2">Semakin mudah, semakin ramah lingkungan.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-sky-500 text-center">
              <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold mb-3 uppercase">Cari Sepeda</h3>
              <p className="text-gray-600">Temukan titik parkir Re:Flow terdekat melalui peta di aplikasi.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-[#1F2A55] text-center">
              <div className="w-16 h-16 bg-blue-100 text-[#1F2A55] rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold mb-3 uppercase">Scan & Unlock</h3>
              <p className="text-gray-600">Scan QR Code pada sepeda. 30 menit pertama akan otomatis terpotong Rp 0.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-pink-500 text-center">
              <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold mb-3 uppercase">Selesaikan</h3>
              <p className="text-gray-600">Parkir di area resmi dan kunci kembali. Nikmati sisa saldo Anda!</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: KETENTUAN (Grid 2 Kolom) */}
      <div className="relative w-full min-h-screen flex items-center justify-center px-6 py-12">
        <img
          src={driveImageUrl(assets[2])}
          className="absolute inset-0 w-full h-full object-cover opacity-40 sm:opacity-100"
          referrerPolicy="no-referrer"
        />

        <div className="relative z-20 max-w-5xl mx-auto w-full bg-white/80 backdrop-blur-md p-10 rounded-[40px] shadow-2xl">
          <div className="inline-block bg-[#1F2A55] text-white px-6 py-2 rounded-full mb-8">
            <h3 className="text-xl font-bold uppercase tracking-widest">Ketentuan Program</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            <ul className="space-y-4">
              <li className="flex gap-4 items-center font-medium text-lg">
                <span className="text-sky-600">✔</span> Berlaku untuk seluruh pengguna terdaftar.
              </li>
              <li className="flex gap-4 items-center font-medium text-lg">
                <span className="text-sky-600">✔</span> Gratis 30 menit hanya berlaku 1x per hari.
              </li>
              <li className="flex gap-4 items-center font-medium text-lg">
                <span className="text-sky-600">✔</span> Reset kuota gratis dilakukan setiap pukul 00:00.
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex gap-4 items-center font-medium text-lg">
                <span className="text-pink-600">!</span> Menit ke-31 dan seterusnya berlaku tarif normal.
              </li>
              <li className="flex gap-4 items-center font-medium text-lg">
                <span className="text-pink-600">!</span> Pengguna wajib memarkir di zona resmi Re:Flow.
              </li>
              <li className="flex gap-4 items-center font-medium text-lg">
                <span className="text-pink-600">!</span> Promo ini dapat berubah sewaktu-waktu.
              </li>
            </ul>
          </div>

          <div className="mt-12 text-center border-t pt-8">
            <p className="text-gray-500 italic">"Gowes sehat, dompet hemat, bumi pun selamat."</p>
            <p className="font-bold text-[#1F2A55] mt-2">#ReflowEveryday #GreenMobility</p>
          </div>
        </div>
      </div>
    </section>
  );
}