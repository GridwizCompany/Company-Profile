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

export default function Layanan() {
  const langkah = [
    {
      id: 1,
      judul: "Buka Kunci Sepeda",
      deskripsi: "Scan QR code pada sepeda menggunakan aplikasi Re:Flow.",
      ikon: <FaUnlockAlt className="w-10 h-10 mx-auto" />,
    },
    {
      id: 2,
      judul: "Cek Baterai",
      deskripsi: "Pastikan baterai sepeda cukup sebelum memulai perjalanan.",
      ikon: <FaBatteryHalf className="w-10 h-10 mx-auto" />,
    },
    {
      id: 3,
      judul: "Mulai Perjalanan",
      deskripsi:
        "Nikmati perjalananmu dan patuhi peraturan lalu lintas setempat.",
      ikon: <FaBicycle className="w-10 h-10 mx-auto" />,
    },
    {
      id: 4,
      judul: "Parkir & Kunci",
      deskripsi: "Parkirkan sepeda di area resmi dan kunci melalui aplikasi.",
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

  // Data statistik
  const statistik = [
    {
      icon: <FaUser className="text-3xl md:text-4xl text-blue-500" />,
      title: "11.100+ Pengguna",
      description:
        "Total perjalanan tercatat 18.660 kali, dengan pengguna aktif 11.100+ orang.",
    },
    {
      icon: <FaClock className="text-3xl md:text-4xl text-blue-500" />,
      title: "24,71 Menit",
      description: "Rata-rata durasi penggunaan sepeda listrik per perjalanan.",
    },
    {
      icon: <FaTicketAlt className="text-3xl md:text-4xl text-blue-500" />,
      title: "401.923 Kupon",
      description:
        "Sebanyak 401.923 kupon digunakan oleh pengguna selama periode ini.",
    },
  ];

  return (
    <section className="bg-black text-white py-32 md:pt-48">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          Re:Flow oleh Gridwiz E&M
        </h1>
        <p className="mt-4 text-center max-w-xl text-gray-300 text-lg md:text-xl">
          Re:Flow menghadirkan sepeda listrik (E-Bike) yang mudah, ramah
          lingkungan, dan efisien.
        </p>

        {/* Hero Image */}
        <div className="w-full h-60 md:h-[500px] mt-8 md:mt-32 overflow-hidden rounded-xl">
          <img src="ceo.JPG" alt="CEO" className="w-full h-full object-cover" />
        </div>

        {/* Ketercapaian & Kontribusi */}
        <div className="flex flex-col lg:flex-row gap-8 mt-12 md:mt-24 w-full">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ketercapaian Re:Flow
            </h2>
            <h3 className="text-xl md:text-2xl text-gray-300 mb-2">
              Februari - Oktober 2025
            </h3>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Dalam 9 bulan terakhir, sepeda listrik kami terus menunjukkan
              perkembangan positif. Masyarakat semakin antusias memanfaatkan
              moda transportasi ramah lingkungan.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Kontribusi Re:Flow
            </h2>
            <h3 className="text-xl md:text-2xl text-gray-300 mb-2">
              NTB Zero Emission 2050
            </h3>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Aktivitas pengguna mengurangi emisi karbon di NTB. Total jarak
              tempuh 70.000 km setara pengurangan 62.000 kg CO2, mendukung
              target zero emission NTB 2050.
            </p>
          </div>
        </div>

        {/* Image Kedua */}
        <div className="w-full h-60 md:h-[500px] mt-12 md:mt-24 overflow-hidden rounded-xl">
          <img
            src="riding-bike.JPG"
            alt="Riding Bike"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Statistik */}
        <div className="w-full mt-12 md:mt-24">
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div
              ref={statistikRef}
              className="flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
            >
              {statistik.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-full p-6 rounded-2xl shadow-lg snap-center"
                >
                  <div className="text-4xl mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center">
                    {stat.title}
                  </h3>
                  <p className="text-gray-300 text-lg md:text-xl text-center">
                    {stat.description}
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

          {/* Desktop Grid */}
          <div className="hidden md:flex flex-row justify-around gap-6 mt-6 w-full text-center">
            {statistik.map((stat, idx) => (
              <div
                key={idx}
                className="flex-1 flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-300"
              >
                {stat.icon}
                <h3 className="text-2xl md:text-3xl font-bold">{stat.title}</h3>
                <p className="text-gray-300 text-lg md:text-xl">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cara Menggunakan Sepeda */}
        <div className="w-full mt-12 md:mt-24 py-8 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex-1 w-full h-auto lg:h-[760px] rounded-xl overflow-hidden order-1 lg:order-2 mb-6 lg:mb-0">
              <img
                src="/how-to-use.JPG"
                alt="Cara Menggunakan"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="flex flex-col gap-4 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center lg:text-left">
                Cara Menggunakan Sepeda
              </h2>
              <p className="text-gray-300 mb-6 text-lg md:text-xl text-center lg:text-left">
                Ikuti langkah-langkah mudah berikut untuk menggunakan sepeda
                listrik Re:Flow dengan aman dan nyaman.
              </p>

              {/* Langkah Desktop */}
              <div className="hidden md:grid grid-cols-1 gap-6">
                {langkah.map((l) => (
                  <div
                    key={l.id}
                    className="p-6 shadow-lg flex items-start gap-4 hover:scale-105 transition-transform duration-300 md:items-center md:gap-5"
                  >
                    <div className="text-3xl md:text-4xl">{l.ikon}</div>
                    <div>
                      <h3 className="font-semibold text-lg md:text-xl">
                        {l.judul}
                      </h3>
                      <p className="text-gray-300 text-lg md:text-xl">
                        {l.deskripsi}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Langkah Mobile Carousel */}
              <div className="md:hidden">
                <div
                  ref={containerRef}
                  className="flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
                >
                  {langkah.map((l) => (
                    <div
                      key={l.id}
                      className="flex-shrink-0 w-full  p-6 rounded-2xl shadow-lg snap-center"
                    >
                      <div className="text-4xl mb-4 flex justify-center">
                        {l.ikon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-center">
                        {l.judul}
                      </h3>
                      <p className="text-gray-300 text-lg md:text-xl text-center">
                        {l.deskripsi}
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
