"use client";
import { useState, useRef, useEffect } from "react";
import {
  FaUser,
  FaClock,
  FaTicketAlt,
  FaBatteryHalf,
  FaBicycle,
  FaLock,
  FaUnlockAlt,
} from "react-icons/fa";
import { useLanguage } from "@/lib/language";
import { driveImageUrl } from "utils/driveutils";

export default function Layanan() {
  const { t } = useLanguage();
  const langkah = [
    {
      id: 1,
      judul: { id: "Buka Kunci Sepeda", en: "Unlock the Bike" },
      deskripsi: {
        id: "Scan QR code pada sepeda menggunakan aplikasi Re:Flow.",
        en: "Scan the QR code on the bike using the Re:Flow app.",
      },
      ikon: <FaUnlockAlt className="w-10 h-10 mx-auto" />,
    },
    {
      id: 2,
      judul: { id: "Cek Baterai", en: "Check the Battery" },
      deskripsi: {
        id: "Pastikan baterai sepeda cukup sebelum memulai perjalanan.",
        en: "Make sure the bike has enough battery before starting your ride.",
      },
      ikon: <FaBatteryHalf className="w-10 h-10 mx-auto" />,
    },
    {
      id: 3,
      judul: { id: "Mulai Perjalanan", en: "Start Riding" },
      deskripsi: {
        id: "Nikmati perjalananmu dan patuhi peraturan lalu lintas setempat.",
        en: "Enjoy your ride and follow local traffic rules.",
      },
      ikon: <FaBicycle className="w-10 h-10 mx-auto" />,
    },
    {
      id: 4,
      judul: { id: "Parkir & Kunci", en: "Park & Lock" },
      deskripsi: {
        id: "Parkirkan sepeda di area resmi dan kunci melalui aplikasi.",
        en: "Park the bike in an official area and lock it through the app.",
      },
      ikon: <FaLock className="w-10 h-10 mx-auto" />,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentStatistik, setCurrentStatistik] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const statistikRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;

    const itemWidth = container.firstElementChild?.clientWidth ?? 1;
    const gap = 16;
    const index = Math.round(scrollLeft / (itemWidth + gap));
    setCurrentIndex(index);
  };

  const handleStatistikScroll = () => {
    if (!statistikRef.current) return;
    const container = statistikRef.current;
    const scrollLeft = container.scrollLeft;

    const itemWidth = container.firstElementChild?.clientWidth ?? 1;
    const gap = 16;
    const index = Math.round(scrollLeft / (itemWidth + gap));
    setCurrentStatistik(index);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const container = statistikRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleStatistikScroll, {
      passive: true,
    });
    return () => container.removeEventListener("scroll", handleStatistikScroll);
  }, []);

  const statistik = [
    {
      icon: <FaUser className="text-3xl md:text-4xl text-blue-500" />,
      title: { id: "11.100+ Pengguna", en: "11,100+ Users" },
      description: {
        id: "Total perjalanan tercatat 18.660 kali, dengan pengguna aktif 11.100+ orang.",
        en: "A total of 18,660 trips have been recorded, with more than 11,100 active users.",
      },
    },
    {
      icon: <FaClock className="text-3xl md:text-4xl text-blue-500" />,
      title: { id: "24,71 Menit", en: "24.71 Minutes" },
      description: {
        id: "Rata-rata durasi penggunaan sepeda listrik per perjalanan.",
        en: "Average electric bike usage duration per trip.",
      },
    },
    {
      icon: <FaTicketAlt className="text-3xl md:text-4xl text-blue-500" />,
      title: { id: "401.923 Kupon", en: "401,923 Coupons" },
      description: {
        id: "Sebanyak 401.923 kupon digunakan oleh pengguna selama periode ini.",
        en: "A total of 401,923 coupons were used by riders during this period.",
      },
    },
  ];

  return (
    <section className="bg-black text-white py-32 md:pt-48">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center">
          Re:Flow oleh Gridwiz E&M
        </h1>
        <p className="mt-4 text-center max-w-xl text-gray-300 text-lg md:text-xl">
          {t({
            id: "Re:Flow menghadirkan sepeda listrik (E-Bike) yang mudah, ramah lingkungan, dan efisien.",
            en: "Re:Flow provides electric bikes that are easy to use, environmentally friendly, and efficient.",
          })}
        </p>

        <div className="w-full h-60 md:h-[500px] mt-8 md:mt-32 overflow-hidden rounded-xl">
          <img
            src={driveImageUrl(
              "https://drive.google.com/file/d/1uDXuK3ljHXw8Y6Ye84Ao1F4Bza8Hcd5v/view?usp=drive_link"
            )}
            alt="CEO"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto py-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold  mb-6">
              {t({
                id: "Bersepeda Lebih Mudah, Hidup Lebih Hijau Bersama ",
                en: "Ride Easier, Live Greener with ",
              })}
              <span className="text-sky-600">Re:Flow</span>
            </h1>
            <p className=" text-lg leading-relaxed mb-8 text-justify">
              {t({
                id: "Re:flow adalah layanan penyewaan sepeda listrik terintegrasi aplikasi digital, memungkinkan pengguna memesan, menyewa, dan membayar secara mudah. Dirancang untuk menghadirkan mobilitas yang praktis, efisien, dan ramah lingkungan.",
                en: "Re:Flow is an electric bike rental service integrated with a digital app, allowing users to book, rent, and pay easily. It is designed to deliver practical, efficient, and environmentally friendly mobility.",
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

          <div className="flex-1 grid grid-rows-3 gap-6 text-center md:text-left">
            <div className="bg-white/10 rounded-2xl p-6 shadow-md hover:shadow-lg hover:bg-white/15 transition">
              <h3 className="text-lg md:text-xl font-bold text-sky-400 mb-2">
                {t({ id: "Hemat", en: "Affordable" })}
              </h3>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed text-justify">
                {t({
                  id: "Nikmati transportasi dengan biaya lebih rendah dibanding kendaraan konvensional.",
                  en: "Enjoy transportation at a lower cost than conventional vehicles.",
                })}
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 shadow-md hover:shadow-lg hover:bg-white/15 transition">
              <h3 className="text-lg md:text-xl font-bold text-green-400 mb-2">
                {t({ id: "Ramah Lingkungan", en: "Eco-Friendly" })}
              </h3>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed text-justify">
                {t({
                  id: "Menggunakan energi listrik tanpa emisi karbon, mendukung udara yang lebih bersih dan sehat.",
                  en: "Powered by electricity with no carbon emissions, supporting cleaner and healthier air.",
                })}
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 shadow-md hover:shadow-lg hover:bg-white/15 transition">
              <h3 className="text-lg md:text-xl font-bold text-yellow-400 mb-2">
                {t({ id: "Cepat & Praktis", en: "Fast & Practical" })}
              </h3>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed text-justify">
                {t({
                  id: "Sewa sepeda cukup lewat aplikasi Re:Flow, tanpa antre, tanpa ribet, langsung siap digunakan.",
                  en: "Rent a bike directly through the Re:Flow app with no queue, no hassle, and ready to ride.",
                })}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-60 md:h-[500px] overflow-hidden rounded-xl">
          <img
            src={driveImageUrl(
              "https://drive.google.com/file/d/13ttTcx8WvYzJmu_YTOgWV_TfibFdQ3OV/view?usp=sharing"
            )}
            alt="Riding Bike"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 w-full mt-12 md:mt-24">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {t({ id: "Ketercapaian Re:Flow", en: "Re:Flow Achievements" })}
            </h2>
            <h3 className="text-xl md:text-2xl text-gray-300 mb-2">
              {t({ id: "Februari - Oktober 2025", en: "February - October 2025" })}
            </h3>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-justify">
              {t({
                id: "Dalam 9 bulan terakhir, sepeda listrik kami terus menunjukkan perkembangan positif. Masyarakat semakin antusias memanfaatkan moda transportasi ramah lingkungan.",
                en: "Over the last 9 months, our electric bikes have continued to show positive growth. Communities are increasingly enthusiastic about using environmentally friendly transportation.",
              })}
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {t({ id: "Kontribusi Re:Flow", en: "Re:Flow Contribution" })}
            </h2>
            <h3 className="text-xl md:text-2xl text-gray-300 mb-2">
              NTB Zero Emission 2050
            </h3>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-justify">
              {t({
                id: "Aktivitas pengguna mengurangi emisi karbon di NTB. Total jarak tempuh 70.000 km setara pengurangan 62.000 kg CO2, mendukung target zero emission NTB 2050.",
                en: "User activity helps reduce carbon emissions in NTB. A total travel distance of 70,000 km equals a reduction of 62,000 kg of CO2, supporting NTB's 2050 zero emission target.",
              })}
            </p>
          </div>
        </div>

        <div className="w-full mt-12 md:mt-24">
          <div className="md:hidden">
            <div
              ref={statistikRef}
              className="flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
            >
              {statistik.map((stat, idx) => (
                <div
                  key={idx}
                  className="shrink-0 w-full p-6 rounded-2xl shadow-lg snap-center"
                >
                  <div className="text-4xl mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center">
                    {t(stat.title)}
                  </h3>
                  <p className="text-gray-300 text-lg md:text-xl text-center">
                    {t(stat.description)}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-2 gap-2">
              {statistik.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentStatistik === idx ? "bg-blue-500" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="hidden md:flex flex-row justify-around gap-6 mt-6 w-full text-center">
            {statistik.map((stat, idx) => (
              <div
                key={idx}
                className="flex-1 flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-300"
              >
                {stat.icon}
                <h3 className="text-2xl md:text-3xl font-bold">{t(stat.title)}</h3>
                <p className="text-gray-300 text-lg md:text-xl">
                  {t(stat.description)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full mt-12 md:mt-24 py-8 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex-1 w-full h-auto lg:h-[760px] rounded-xl overflow-hidden order-1 lg:order-2 mb-6 lg:mb-0">
              <img
                src={driveImageUrl(
                  "https://drive.google.com/file/d/10Io8nFaAW5VsOPLvPiyIVCeEB9UN9wKN/view?usp=sharing"
                )}
                alt="Cara Menggunakan"
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex flex-col gap-4 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center lg:text-left">
                {t({ id: "Cara Menggunakan Sepeda", en: "How to Use the Bike" })}
              </h2>
              <p className="text-gray-300 mb-6 text-lg md:text-xl text-center lg:text-left">
                {t({
                  id: "Ikuti langkah-langkah mudah berikut untuk menggunakan sepeda listrik Re:Flow dengan aman dan nyaman.",
                  en: "Follow these simple steps to use a Re:Flow electric bike safely and comfortably.",
                })}
              </p>

              <div className="hidden md:grid grid-cols-1 gap-6">
                {langkah.map((l) => (
                  <div
                    key={l.id}
                    className="p-6 shadow-lg flex items-start gap-4 hover:scale-105 transition-transform duration-300 md:items-center md:gap-5"
                  >
                    <div className="text-3xl md:text-4xl">{l.ikon}</div>
                    <div>
                      <h3 className="font-semibold text-lg md:text-xl">
                        {t(l.judul)}
                      </h3>
                      <p className="text-gray-300 text-lg md:text-xl">
                        {t(l.deskripsi)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="md:hidden">
                <div
                  ref={containerRef}
                  className="flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
                >
                  {langkah.map((l) => (
                    <div
                      key={l.id}
                      className="shrink-0 w-full  p-6 rounded-2xl shadow-lg snap-center"
                    >
                      <div className="text-4xl mb-4 flex justify-center">
                        {l.ikon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-center">
                        {t(l.judul)}
                      </h3>
                      <p className="text-gray-300 text-lg md:text-xl text-center">
                        {t(l.deskripsi)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mt-2 gap-2">
                  {langkah.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentIndex === idx ? "bg-blue-500" : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
