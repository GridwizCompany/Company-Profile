"use client";

import OverviewSection from "@/components/ui/OverviewHome";
import { useLanguage, type LocalizedText } from "@/lib/language";
import { driveImageUrl } from "utils/driveutils";
import Image from "next/image";

export default function HomePage() {
  const { t } = useLanguage();
  const overviewData: {
    title: LocalizedText;
    description: LocalizedText;
    image: string;
    imagePosition: "left" | "right";
  }[] = [
    {
      title: {
        id: "Hemat Waktu dan Ramah Lingkungan",
        en: "Time-Saving and Environmentally Friendly",
      },
      description: {
        id: "Solusi mobilitas listrik Gridwiz (Re:Flow) memungkinkan Anda bergerak bebas dan cepat, melewati kepadatan lalu lintas dengan mudah. Dari e-bike hingga e-motor, setiap unit dirancang untuk perjalanan yang efisien, nyaman, dan ramah lingkungan.",
        en: "Gridwiz (Re:Flow) electric mobility solutions let you move freely and quickly through traffic. From e-bikes to e-motors, every unit is designed for efficient, comfortable, and environmentally friendly travel.",
      },
      image:
        "https://drive.google.com/file/d/1qtaNSU8uTP0GCuz7sEdNUrxwTrvh8G9m/view?usp=sharing",
      imagePosition: "left",
    },
    {
      title: {
        id: "Setiap perjalanan Anda berkontribusi pada lingkungan yang lebih sehat",
        en: "Every Ride Contributes to a Healthier Environment",
      },
      description: {
        id: "Setiap perjalanan menggunakan unit listrik Gridwiz adalah langkah nyata dalam mendukung keberlanjutan. Dengan solusi zero-emission, Anda tidak hanya bergerak dengan nyaman, tapi juga membantu mengurangi polusi udara dan jejak karbon.",
        en: "Every ride with a Gridwiz electric unit is a real step toward sustainability. With a zero-emission solution, you travel comfortably while helping reduce air pollution and carbon footprint.",
      },
      image:
        "https://drive.google.com/file/d/1XaijjMqpBeqD8-NdY3LkM60oyvkC_ITD/view?usp=sharing",
      imagePosition: "right",
    },
    {
      title: {
        id: "Sewa Praktis dan Aksesibilitas Tinggi",
        en: "Practical Rentals with High Accessibility",
      },
      description: {
        id: "Nikmati kebebasan untuk memilih moda yang sesuai kebutuhan: e-bike untuk perjalanan ringan dan e-motor untuk jarak lebih jauh atau operasional harian. Akses layanan dibuat praktis melalui aplikasi dan dukungan tim Re:Flow.",
        en: "Enjoy the freedom to choose the mobility mode that fits your needs: e-bike for lighter trips and e-motor for longer distances or daily operations. Access is kept practical through the app and Re:Flow support team.",
      },
      image:
        "https://drive.google.com/file/d/1W_XVVN9kmY9SdMIitlZNIifCAa0ly-4K/view?usp=sharing",
      imagePosition: "left",
    },
  ];

  return (
    <section className="text-gray-800">
      <div className="relative min-h-screen flex flex-col justify-end pb-20 px-12 md:items-start items-center text-center md:text-left">
        <img
          src={driveImageUrl(
            "https://drive.google.com/file/d/13XrNgIfH4lg68_p4I9k8AacqDqpn7bIs/view?usp=sharing"
          )}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-200 mb-6 leading-tight">
            Gridwiz Energy & Mobility
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 mb-8">
            {t({
              id: "Memanfaatkan inovasi teknologi untuk menghadirkan layanan mobilitas listrik: e-bike, e-motor, dan solusi energi bersih yang efisien",
              en: "Using technological innovation to deliver electric mobility services: e-bikes, e-motors, and efficient clean energy solutions",
            })}
          </p>

          <div className="flex items-center justify-center md:justify-start flex-wrap">
            <a
              href="https://apps.apple.com/gb/app/re-flow/id6741798337"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/appstore-badge.svg"
                alt="App Store"
                className="h-11 sm:h-14 w-auto hover:scale-105 transition-transform"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.gridwiz.ride&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/playstore-badge.svg"
                alt="Play Store"
                className="h-17 sm:h-21 w-auto hover:scale-105 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <OverviewSection sections={overviewData} />
      </div>

      <div className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.22),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.16),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Re:Flow Product Line
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              {t({
                id: "Bukan hanya sepeda listrik. Gridwiz menghadirkan e-motor dan EV charging.",
                en: "Not only electric bikes. Gridwiz provides e-motors and EV charging.",
              })}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              {t({
                id: "Re:Flow kini mencakup e-bike untuk akses cepat, e-motor untuk sewa fleksibel, dan EV charging yang disiapkan agar pembayaran dapat dilakukan melalui aplikasi.",
                en: "Re:Flow now covers e-bikes for quick access, e-motors for flexible rentals, and EV charging prepared for in-app payments.",
              })}
            </p>
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {[
                {
                  title: { id: "E-Bike Re:Flow", en: "Re:Flow E-Bike" },
                  image: "/ebike/reflow-ebike-lineup.jpeg",
                  badge: "Available",
                  body: {
                    id: "Cocok untuk perjalanan pendek, area kampus, kafe, hotel, dan titik publik.",
                    en: "Ideal for short trips, campuses, cafes, hotels, and public points.",
                  },
                },
                {
                  title: { id: "E-Motor Re:Flow", en: "Re:Flow E-Motor" },
                  image: "/emotor-cutout/e1/biru.png",
                  badge: "Available",
                  body: {
                    id: "Tersedia E1 dan E2 dengan GPS, free charging, rent biasa, dan rent to ownership.",
                    en: "Available in E1 and E2 with GPS, free charging, regular rental, and rent to ownership.",
                  },
                },
                {
                  title: { id: "EV Charging", en: "EV Charging" },
                  image: "/ev-charging/solar-ev-charger-blue.png",
                  badge: "Coming Soon",
                  body: {
                    id: "Charging station hitam premium untuk ekosistem kendaraan listrik, disiapkan dengan pembayaran melalui aplikasi.",
                    en: "Premium black charging station for the EV ecosystem, prepared with payment through the app.",
                  },
                },
              ].map((item) => (
                <div key={item.title.id} className="rounded-lg border border-white/12 bg-white/7 p-5">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="text-xl font-black">{t(item.title)}</h3>
                    <span className="rounded-full bg-cyan-300/14 px-3 py-1 text-[11px] font-black uppercase text-cyan-200">
                      {item.badge}
                    </span>
                  </div>
                  <div className="relative mb-4 h-36 overflow-hidden rounded-md bg-slate-900/50">
                    <img
                      src={item.image}
                      alt={t(item.title)}
                      className="h-full w-full object-contain p-2"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{t(item.body)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative min-h-[400px] md:min-h-[800px] flex flex-col 
    justify-center md:justify-center 
    items-center md:items-start 
    text-center md:text-left 
    px-6 sm:px-12 md:px-24 
    bg-black"
      >
        <img
          src={driveImageUrl(
            "https://drive.google.com/file/d/1JmW1s8NURtG8xbGo8Jiib1eaHo3JYqTR/view?usp=sharing"
          )}
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
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
      <div className="bg-gray-100 min-h-[500px] flex flex-col justify-center items-center py-16 md:py-32 text-center text-gray-900">
        <h3 className="text-4xl sm:text-5xl font-bold mb-12 md:mb-24 tracking-wide text-gray-900">
          {t({ id: "Layanan Kami", en: "Our Services" })}
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-16 max-w-6xl mx-auto px-6">
          {[
            {
              icon: "https://drive.google.com/file/d/1M3ujtN2wAYVMfEpaYWkWmaw42OsojBWR/view?usp=sharing",
              title: "Ramah Lingkungan",
              titleEn: "Eco-Friendly",
              desc: "Berkontribusi dalam pengurangan emisi karbon dan mendukung transportasi berkelanjutan yang sejalan dengan visi hijau Anda.",
              descEn:
                "Contribute to carbon emission reduction and support sustainable transportation aligned with your green vision.",
            },
            {
              icon: "https://drive.google.com/file/d/1f74vv7kgkCtv9jaQfdSYcvHHHFVYTmp8/view?usp=sharing",
              title: "Layanan Luas & Kolaboratif",
              titleEn: "Broad & Collaborative Services",
              desc: "Jaringan Gridwiz terus berkembang melalui kemitraan strategis dengan universitas, kafe, hotel, dan area publik utama.",
              descEn:
                "Gridwiz continues to expand through strategic partnerships with universities, cafes, hotels, and key public areas.",
            },
            {
              icon: "https://drive.google.com/file/d/1ZRRlpOiaeAzRtN1j8mpzkw7Y_51jsIRv/view?usp=sharing",
              title: "Akses Mudah via Aplikasi",
              titleEn: "Easy Access via App",
              desc: "Cukup unduh aplikasi, pindai barcode unit Re:Flow, dan mulai perjalanan dengan sistem kunci otomatis yang pintar.",
              descEn:
                "Simply download the app, scan the Re:Flow unit barcode, and start riding with a smart automatic locking system.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group bg-white/20 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex justify-center mb-6">
                <div className="p-5 rounded-full bg-white/10 group-hover:bg-white/30 transition-all duration-500">
                  <div className="relative h-24 w-24">
                    <img
                      src={driveImageUrl(item.icon)}
                      alt={t({ id: item.title, en: item.titleEn })}
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                      sizes="96px"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-500 transition-colors duration-500">
                {t({ id: item.title, en: item.titleEn })}
              </h4>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                {t({ id: item.desc, en: item.descEn })}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/produk-emotor"
              className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-md shadow-lg hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300"
            >
              {t({ id: "Lihat Produk E-Motor", en: "View E-Motor Products" })}
            </a>
            <a
              href="/panduan"
              className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-md shadow-lg hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300"
            >
              {t({ id: "Pelajari Lebih Lanjut", en: "Learn More" })}
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-5 sm:px-8 md:px-72 md:py-32 bg-white">
        <div className="w-full">
          <div className="relative w-full pb-[56.25%] h-0 overflow-hidden shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/-pdG06DBoN0?rel=0&modestbranding=1&playsinline=1"
              title="YouTube video player"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://www.youtube.com/watch?v=-pdG06DBoN0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              {t({ id: "Buka video di YouTube", en: "Open video on YouTube" })}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
