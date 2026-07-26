 "use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language";
import { driveImageUrl } from "utils/driveutils";

export default function Promo() {
  const { t } = useLanguage();

  return (
    <section className="bg-black text-white">
      <div className="relative min-h-screen bg-black py-20 px-20 overflow-hidden">
        <img
          src={driveImageUrl(
            "https://drive.google.com/file/d/1OD3mxFqQoYj_Iaznc8DfjNDekEgf1hGj/view?usp=sharing"
          )}
          alt="Promo Background"
          className="absolute inset-0 h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/20 to-black" />
      </div>

      <div className="flex flex-col gap-32 px-6 md:px-24 py-30">
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-16 lg:gap-32">
          <div className="shrink-0 relative w-[250px] h-[220px] md:w-[450px] md:h-[400px] overflow-visible flex justify-center">
            <img
              src={driveImageUrl(
                "https://drive.google.com/file/d/16DfcQMlwpox9dy2uJD-hXZ3hW5_7v68O/view?usp=sharing"
              )}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-blue-400">
              {t({ id: "Tarif Pelajar", en: "Student Rate" })}
            </h1>
            <h2 className="text-4xl font-extrabold text-white mb-6">
              {t({ id: "Saldo Minimal Rp. 10.000", en: "Minimum Balance Rp. 10,000" })}
            </h2>
            <p className="text-lg leading-relaxed text-gray-300 text-justify">
              {t({
                id: "Penyesuaian ini khusus ditujukan bagi pelajar yang telah melakukan verifikasi akun dengan kartu pelajar atau kartu mahasiswa mereka. Kami berharap tarif yang lebih terjangkau ini dapat mendukung mobilitas sehari-hari pelajar, sekaligus mendorong gaya hidup ramah lingkungan di kalangan generasi muda.",
                en: "This adjustment is specifically for students who have verified their accounts with a student ID card. We hope this more affordable rate supports daily student mobility while encouraging an environmentally friendly lifestyle among younger generations.",
              })}
            </p>
            <p className="mt-4 text-sm font-semibold text-yellow-400">
              {t({
                id: "Tarif Sewa: Rp 290/menit | Jeda: Rp 100/menit",
                en: "Rental Rate: Rp 290/minute | Pause: Rp 100/minute",
              })}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse justify-center items-center text-center md:text-left gap-16 lg:gap-32">
          <div className="shrink-0 relative w-[250px] h-[220px] md:w-[450px] md:h-[400px] overflow-visible flex justify-center">
            <img
              src={driveImageUrl(
                "https://drive.google.com/file/d/1med5LLzjbixsc2yIociM6hX_ApIQsmMp/view?usp=sharing"
              )}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-yellow-400">
              {t({ id: "Tarif Publik", en: "Public Rate" })}
            </h1>
            <h2 className="text-4xl font-extrabold text-white mb-6">
              {t({ id: "Saldo Minimal Rp. 13.000", en: "Minimum Balance Rp. 13,000" })}
            </h2>
            <p className="text-lg leading-relaxed text-gray-300 text-justify">
              {t({
                id: "Penurunan saldo minimal ini berlaku untuk seluruh pengguna umum yang telah terdaftar. Inisiatif ini adalah bagian dari komitmen Re:Flow untuk membuat layanan kami lebih mudah diakses oleh semua kalangan, sehingga setiap orang dapat menikmati kemudahan transportasi dengan sepeda listrik kami tanpa perlu mengeluarkan biaya awal yang besar.",
                en: "This lower minimum balance applies to all registered public users. The initiative is part of Re:Flow's commitment to making our service more accessible, so everyone can enjoy convenient electric bike transportation without a large upfront cost.",
              })}
            </p>
            <p className="mt-4 text-sm font-semibold text-blue-400">
              {t({
                id: "Tarif Sewa: Rp 390/menit | Jeda: Rp 150/menit",
                en: "Rental Rate: Rp 390/minute | Pause: Rp 150/minute",
              })}
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[600px] bg-cover bg-center flex items-center px-6 md:px-12">
        <img
          src={driveImageUrl(
            "https://drive.google.com/file/d/1suc-MLOB9BQjNEII-43NjXhemxZWpRd5/view?usp=sharing"
          )}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />

        <div className="relative z-10 max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t({
              id: "Jelajahi Mobilitas Hijau Bersama Gridwiz",
              en: "Explore Green Mobility with Gridwiz",
            })}
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-6">
            {t({
              id: "Solusi transportasi listrik modern yang efisien dan berkelanjutan untuk semua.",
              en: "Modern electric transportation solutions that are efficient and sustainable for everyone.",
            })}
          </p>
        </div>
      </div>

      <div className="w-full min-h-screen flex flex-col md:flex-row bg-white">
        <div
          className="flex-1 relative flex items-center justify-center bg-black py-16 px-6"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <div className="min-w-max md:min-w-md text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">
              {t({ id: "Harga Publik", en: "Public Pricing" })}
            </h2>
            <div className="space-y-3 text-lg">
              <div className="flex justify-between border-b border-gray-600 py-2">
                <span>{t({ id: "Membuka Kunci", en: "Unlocking" })}</span>
                <span>Rp 0</span>
              </div>
              <div className="flex justify-between border-b border-gray-600 py-2">
                <span>{t({ id: "Minimal Saldo", en: "Minimum Balance" })}</span>
                <span>Rp 13.000</span>
              </div>
              <div className="flex justify-between border-b border-gray-600 py-2">
                <span>{t({ id: "Tarif", en: "Rate" })}</span>
                <span>Rp 390/min</span>
              </div>
              <div className="flex justify-between border-b border-gray-600 py-2">
                <span>{t({ id: "Jeda", en: "Pause" })}</span>
                <span>Rp 150/min</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex-1 relative flex items-center justify-center bg-gray-50 py-16 px-6"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <div className="max-w-md md:min-w-md text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {t({ id: "Harga Pelajar", en: "Student Pricing" })}
            </h2>
            <div className="space-y-3 text-lg text-black">
              <div className="flex justify-between border-b border-gray-900 py-2">
                <span>{t({ id: "Membuka Kunci", en: "Unlocking" })}</span>
                <span>Rp 0</span>
              </div>
              <div className="flex justify-between border-b border-gray-900 py-2">
                <span>{t({ id: "Minimal Saldo", en: "Minimum Balance" })}</span>
                <span>Rp 10.000</span>
              </div>
              <div className="flex justify-between border-b border-gray-900 py-2">
                <span>{t({ id: "Tarif", en: "Rate" })}</span>
                <span>Rp 290/min</span>
              </div>
              <div className="flex justify-between border-b border-gray-900 py-2">
                <span>{t({ id: "Jeda", en: "Pause" })}</span>
                <span>Rp 100/min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
