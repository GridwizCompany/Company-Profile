"use client";
import Partner from "@/components/ui/media-teks";
import Image from "next/image";
import {
  Bike,
  Coffee,
  Droplets,
  Leaf,
  Sparkles,
  Star,
  TreePalm,
  Waves,
  Wind,
} from "lucide-react";
import { driveImageUrl } from "utils/driveutils";

export default function HotelAndResort() {
  const promos = [
    {
      image:
        "https://drive.google.com/file/d/1Fh8peVGrb_V15pAewdVWrgJjD8m7Y65k/view?usp=sharing",
      title: "Aruna Hotel",
      description:
        "Aruna Hotel memadukan pesona alam Lombok dengan kenyamanan modern. Terletak di tepi pantai, Aruna berkomitmen pada prinsip pariwisata berkelanjutan melalui efisiensi energi, pengurangan plastik sekali pakai, dan dukungan terhadap produk lokal. Setiap tamu diajak menikmati pengalaman menginap yang tidak hanya nyaman, tetapi juga penuh kepedulian terhadap bumi.",
      features: [
        {
          icon: <TreePalm className="text-sky-500 w-6 h-6" />,
          text: "Taman Tropis Alami",
        },
        {
          icon: <Coffee className="text-sky-500 w-6 h-6" />,
          text: "Kopi Lombok Asli",
        },
        {
          icon: <Waves className="text-sky-500 w-6 h-6" />,
          text: "Akses Langsung ke Pantai",
        },
        {
          icon: <Star className="text-sky-500 w-6 h-6" />,
          text: "Layanan Ramah Lingkungan",
        },
      ],
    },
    {
      image:
        "https://drive.google.com/file/d/1mDxzbG101jjGg2dMU2GS90F4-2yvPWqS/view?usp=sharing",
      title: "Holiday Resort Lombok",
      description:
        "Holiday Resort Lombok menghadirkan keseimbangan antara kemewahan dan keasrian alam. Dengan lokasi di Senggigi yang dikelilingi pohon kelapa dan suara ombak, resort ini menggunakan bahan bangunan alami serta sistem pengolahan air berkelanjutan. Pengunjung dapat menikmati suasana tropis yang menenangkan tanpa meninggalkan tanggung jawab terhadap lingkungan.",
      features: [
        {
          icon: <Wind className="text-sky-500 w-6 h-6" />,
          text: "Udara Segar dari Alam",
        },
        {
          icon: <Droplets className="text-sky-500 w-6 h-6" />,
          text: "Kolam Air Bersih Alami",
        },
        {
          icon: <Leaf className="text-sky-500 w-6 h-6" />,
          text: "Desain Ramah Lingkungan",
        },
        {
          icon: <Bike className="text-sky-500 w-6 h-6" />,
          text: "Jalur Sepeda Pantai",
        },
      ],
      reverse: true,
    },
    {
      image:
        "https://drive.google.com/file/d/1t1ZpMI7ob6szg74NnlBmiCzeEBbGl4bx/view?usp=sharing",
      title: "Merumata Hotel",
      description:
        "Merumata Hotel menawarkan pengalaman menginap eksklusif dengan standar ramah lingkungan tinggi. Setiap detail — mulai dari pencahayaan hemat energi, bahan interior berkelanjutan, hingga kuliner berbasis bahan organik — dirancang untuk menciptakan keseimbangan antara kemewahan dan keberlanjutan. Di sini, elegansi bertemu dengan kepedulian terhadap bumi.",
      features: [
        {
          icon: <Sparkles className="text-sky-500 w-6 h-6" />,
          text: "Desain Interior Elegan",
        },
        {
          icon: <Star className="text-sky-500 w-6 h-6" />,
          text: "Pelayanan Premium",
        },
        {
          icon: <Leaf className="text-sky-500 w-6 h-6" />,
          text: "Bangunan Ramah Energi",
        },
        {
          icon: <Coffee className="text-sky-500 w-6 h-6" />,
          text: "Kuliner Organik Lokal",
        },
      ],
    },
  ];

  return (
    <section>
      <div className="relative min-h-screen bg-gradient-to-b from-cyan-100 via-sky-100 to-gray-200 text-gray-800 flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="absolute inset-0 overflow-hidden opacity-30 z-0">
          <Leaf className="absolute top-20 left-10 w-16 h-16 text-sky-300 animate-bounce-slow" />
          <Wind className="absolute top-40 right-20 w-20 h-20 text-sky-300 animate-spin-slow" />
          <Droplets className="absolute bottom-24 left-1/4 w-14 h-14 text-sky-300 animate-float" />
          <Bike className="absolute bottom-16 right-16 w-20 h-20 text-sky-300 animate-float-delayed" />
          <Sparkles className="absolute top-10 right-1/3 w-12 h-12 text-sky-300 animate-pulse-slow" />
        </div>

        <div className="relative w-full h-[600px] flex flex-col items-center justify-center text-center px-6 md:px-12 overflow-hidden">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20">
            <Image
              src={driveImageUrl(
                "https://drive.google.com/file/d/11P5UtOPu6v3Fh_Zcjd2RB4S6hnshdfVl/view?usp=sharing"
              )}
              alt="Logo Gridwiz"
              width={140}
              height={140}
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>

          <div className="relative z-10 max-w-4xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-sky-500 py-8">
              Hotel and Resort
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Re:Flow bekerja sama dengan berbagai hotel di Lombok untuk
              menghadirkan pengalaman menginap berkelanjutan — menggabungkan
              kenyamanan, keindahan alam, dan kepedulian terhadap lingkungan.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("promo-section");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="mt-10 px-8 py-3 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </div>
      <div className="relative max-h-[500px] min-h-[700px] bg-no-repeat bg-cover bg-center">
        <Image
          src={driveImageUrl(
            "https://drive.google.com/file/d/1M-rnxWZgRen5SpwvakNfBLqxk-3BlAKt/view?usp=sharing"
          )}
          alt={"title"}
          fill
          className="object-cover object-center w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div id="promo-section" className="bg-gray-200 py-16">
        {promos.map((promo, index) => (
          <Partner key={index} {...promo} />
        ))}
      </div>
    </section>
  );
}
