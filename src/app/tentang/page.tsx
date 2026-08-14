"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language";
import { driveImageUrl } from "../../utils/driveutils";

export default function AboutUs() {
  const { t } = useLanguage();
  const structure =
    "https://drive.google.com/file/d/1Moi1rw4OQlipRNnaLKzvQNmN6gNffVwW/view?usp=sharing";

  return (
    <div className="text-gray-900">
      <div className="relative w-full h-screen flex items-center justify-center">
        <video
          className="w-full h-full object-cover"
          src="/company-video-.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-32">
          <div className="flex flex-col justify-between">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t({ id: "Visi", en: "Vision" })}
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl text-lg md:text-xl text-justify">
              {t({
                id: "Menjadi pelopor solusi mobilitas mikro ramah lingkungan berbasis teknologi di Indonesia, dengan jangkauan yang inklusif dan berdampak sosial.",
                en: "To become a pioneer of technology-based, environmentally friendly micro-mobility solutions in Indonesia, with inclusive reach and meaningful social impact.",
              })}
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t({ id: "Misi", en: "Mission" })}
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 max-w-2xl text-lg md:text-xl text-justify">
              <li>
                {t({
                  id: "Mendorong gaya hidup aktif dan sadar lingkungan di masyarakat urban.",
                  en: "Encourage an active and environmentally conscious lifestyle in urban communities.",
                })}
              </li>
              <li>
                {t({
                  id: "Menyediakan layanan transportasi hijau yang efisien, aman, dan mudah diakses.",
                  en: "Provide green transportation services that are efficient, safe, and easy to access.",
                })}
              </li>
              <li>
                {t({
                  id: "Mengembangkan ekosistem mobilitas berkelanjutan melalui teknologi dan kolaborasi lintas sektor.",
                  en: "Develop a sustainable mobility ecosystem through technology and cross-sector collaboration.",
                })}
              </li>
              <li>
                {t({
                  id: "Meningkatkan kesadaran masyarakat akan pentingnya mobilitas berkelanjutan melalui kegiatan edukatif dan partisipatif.",
                  en: "Increase public awareness of sustainable mobility through educational and participatory activities.",
                })}
              </li>
            </ul>
          </div>

          <div className="flex justify-center items-center">
            <img
              src={driveImageUrl(
                "https://drive.google.com/file/d/11P5UtOPu6v3Fh_Zcjd2RB4S6hnshdfVl/view?usp=drive_link"
              )}
              alt="Logo Gridwiz"
              className="object-contain drop-shadow-lg"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-16 bg-linear-to-b from-red-50 via-white to-white">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center rounded-full bg-red-100 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-red-600">
              {t({ id: "Struktur Organisasi", en: "Organizational Structure" })}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Gridwiz Leadership &amp; Team
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              {t({
                id: "Sinergi lintas divisi menjaga operasional Re:Flow tetap gesit, inovatif, dan berorientasi pada pelayanan terbaik bagi pengguna serta mitra.",
                en: "Cross-division synergy keeps Re:Flow operations agile, innovative, and focused on delivering the best service for users and partners.",
              })}
            </p>
          </div>

          <div>
            <img
              src={driveImageUrl(structure)}
              alt="Gambar dari Google Drive"
              referrerPolicy="no-referrer"
              className="w-full h-auto"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-slate-950 px-6 py-24 text-white md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-3xl">
            <span className="inline-flex rounded-full bg-cyan-400/12 px-4 py-2 text-sm font-bold uppercase tracking-wide text-cyan-200">
              {t({ id: "Produk Kami", en: "Our Products" })}
            </span>
            <h2 className="mt-5 text-3xl md:text-5xl font-black leading-tight">
              {t({
                id: "Ekosistem Re:Flow mencakup e-bike, e-motor, dan EV charging.",
                en: "The Re:Flow ecosystem covers e-bikes, e-motors, and EV charging.",
              })}
            </h2>
            <p className="mt-5 text-base md:text-lg leading-8 text-slate-300">
              {t({
                id: "Kami membangun layanan mobilitas listrik yang mudah dipahami pengguna: pilih unit sesuai kebutuhan, gunakan dengan aman, dan dukung perjalanan rendah emisi di Lombok.",
                en: "We build electric mobility services that are easy for users to understand: choose the right unit, ride safely, and support low-emission travel in Lombok.",
              })}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-lg border border-white/12 bg-white/7 p-6">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h3 className="text-2xl font-black">E-Bike Re:Flow</h3>
                <span className="rounded-full bg-cyan-300/14 px-3 py-1 text-[11px] font-black uppercase text-cyan-200">
                  Available
                </span>
              </div>
              <div className="relative mb-6 h-48 overflow-hidden rounded-md bg-slate-900/60">
                <img
                  src="/ebike/reflow-ebike-lineup.jpeg"
                  alt="E-Bike Re:Flow"
                  className="h-full w-full object-contain p-3"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {t({
                  id: "Kurang lebih 700 sepeda listrik tersedia di berbagai titik Lombok untuk perjalanan pendek, aktivitas harian, area publik, kampus, kafe, hotel, dan resort.",
                  en: "Approximately 700 electric bikes are available across Lombok for short trips, daily activities, public areas, campuses, cafes, hotels, and resorts.",
                })}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-md bg-white/8 p-4">
                  <p className="font-black text-cyan-200">700+</p>
                  <p className="mt-1 text-slate-400">E-Bike</p>
                </div>
                <div className="rounded-md bg-white/8 p-4">
                  <p className="font-black text-cyan-200">App</p>
                  <p className="mt-1 text-slate-400">Scan QR</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-cyan-300/30 bg-cyan-300/10 p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-black">E-Motor Re:Flow</h3>
                <span className="rounded-full bg-cyan-300/18 px-3 py-1 text-[11px] font-black uppercase text-cyan-100">
                  Available
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                {t({
                  id: "E-motor E1 dan E2 hadir untuk kebutuhan jarak lebih jauh, operasional harian, serta skema sewa fleksibel: rent biasa dan rent to ownership.",
                  en: "E1 and E2 e-motors support longer distances, daily operations, and flexible rental schemes: regular rental and rent to ownership.",
                })}
              </p>
              <div className="relative mt-6 aspect-[4/3]">
                <Image
                  src="/emotor-cutout/e2/silver.png"
                  alt="Re:Flow E-Motor E2"
                  fill
                  sizes="(max-width: 1024px) 92vw, 360px"
                  className="object-contain drop-shadow-[0_24px_34px_rgba(0,0,0,0.35)]"
                />
              </div>
              <a
                href="/produk-emotor"
                className="mt-5 inline-flex rounded-md bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-200"
              >
                {t({ id: "Lihat Detail E-Motor", en: "View E-Motor Details" })}
              </a>
            </div>

            <div className="rounded-lg border border-white/12 bg-white/7 p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-black">EV Charging</h3>
                <span className="rounded-full bg-amber-300/18 px-3 py-1 text-[11px] font-black uppercase text-amber-100">
                  Coming Soon
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {t({
                  id: "Charging station hitam premium sedang disiapkan untuk memperluas ekosistem kendaraan listrik Gridwiz. Nantinya pengguna dapat melakukan pembayaran langsung melalui aplikasi.",
                  en: "A premium black charging station is being prepared to expand Gridwiz's electric vehicle ecosystem. Users will be able to pay directly through the app.",
                })}
              </p>
              <div className="relative mt-6 h-56 overflow-hidden rounded-md bg-black/40">
                <Image
                  src="/ev-charging/solar-ev-charger-blue.png"
                  alt="Solar EV Charging Station"
                  fill
                  sizes="(max-width: 1024px) 92vw, 360px"
                  className="object-contain"
                />
              </div>
              <div className="mt-5 grid gap-3 text-sm font-semibold text-slate-200">
                <p className="rounded-md bg-white/8 px-4 py-3">
                  {t({ id: "Pembayaran via aplikasi", en: "In-app payment" })}
                </p>
                <p className="rounded-md bg-white/8 px-4 py-3">Clean energy infrastructure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-16 flex justify-center">
            <img
              src={driveImageUrl(
                "https://drive.google.com/file/d/14NPGJBCtehRDd10CuOtDrhjdpY1TeJG7/view?usp=drive_link"
              )}
              className="w-full h-auto object-cover"
              alt="Solar PV"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 flex justify-center items-center gap-3 mx-auto">
            Solar PV (Photovoltaic)
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify">
            {t({
              id: "Sebagai bagian dari komitmen kami dalam menciptakan ekosistem transportasi ramah lingkungan, Re:flow memanfaatkan energi matahari melalui pengembangan infrastruktur khusus berupa Solar PV (Pembangkit Listrik Tenaga Surya) yang terintegrasi dengan Battery Charging Station (BCS). Infrastruktur ini mendukung proses pengisian daya unit mobilitas listrik Re:Flow menggunakan energi terbarukan. Dengan memanfaatkan sinar matahari sebagai sumber energi utama, sistem ini mampu mengurangi ketergantungan pada listrik konvensional serta menekan jejak karbon yang dihasilkan selama proses pengisian daya.",
              en: "As part of our commitment to creating an environmentally friendly transportation ecosystem, Re:Flow uses solar energy through dedicated Solar PV infrastructure integrated with Battery Charging Stations (BCS). This infrastructure supports Re:Flow electric mobility charging using renewable energy. By using sunlight as the primary energy source, the system reduces dependence on conventional electricity and lowers the carbon footprint generated during charging.",
            })}
          </p>
        </div>
      </section>
    </div>
  );
}
