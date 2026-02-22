"use client";
import Partner from "@/components/ui/media-teks";
import {
  Bike,
  Droplets,
  Leaf,
  Sparkles,
  Wind,
  Waves,
  TreePalm,
} from "lucide-react";
import { driveImageUrl } from "utils/driveutils";

export default function HotelAndResort() {
  const bgHero = "https://drive.google.com/file/d/1M-rnxWZgRen5SpwvakNfBLqxk-3BlAKt/view?usp=sharing";

  const promos = [
    {
      image: "https://drive.google.com/file/d/1Fh8peVGrb_V15pAewdVWrgJjD8m7Y65k/view?usp=sharing",
      title: "Aruna Hotel",
      description:
        "Aruna Hotel memadukan pesona alam Lombok dengan kenyamanan modern. Terletak di tepi pantai, Aruna berkomitmen pada prinsip pariwisata berkelanjutan melalui efisiensi energi dan pengurangan plastik sekali pakai.",
      darkMode: false,
    },
    {
      image: "https://drive.google.com/file/d/1mDxzbG101jjGg2dMU2GS90F4-2yvPWqS/view?usp=sharing",
      title: "Holiday Resort Lombok",
      description:
        "Holiday Resort Lombok menghadirkan keseimbangan antara kemewahan dan keasrian alam. Dengan lokasi di Senggigi yang dikelilingi pohon kelapa, resort ini menggunakan sistem pengolahan air berkelanjutan.",
      reverse: true,
      darkMode: false,
    },
    {
      image: "https://drive.google.com/file/d/1t1ZpMI7ob6szg74NnlBmiCzeEBbGl4bx/view?usp=sharing",
      title: "Merumata Hotel",
      description:
        "Merumata Hotel menawarkan pengalaman menginap eksklusif dengan standar ramah lingkungan tinggi. Mulai dari pencahayaan hemat energi hingga kuliner berbasis bahan organik.",
      darkMode: false,
    },
    {
      image: "https://drive.google.com/file/d/1WkNtVxd82AhMZnkwRrsTwOLnD-n1xkab/view?usp=sharing",
      title: "Sima Kuta Hotel",
      description:
        "Sima Kuta Hotel menghadirkan suasana tenang di tengah keindahan alam. Dikelilingi pemandangan pantai Kuta Mandalika yang menenangkan bagi wisatawan yang mencari ketenangan.",
      reverse: true,
      darkMode: false,
    },
    {
      image: "https://drive.google.com/file/d/14H78sbCeqdFTwED8_oGfhAM_fIgO0spU/view?usp=sharing",
      title: "Svarga Resort",
      description:
        "Svarga Resort menawarkan pengalaman liburan mewah dengan sentuhan budaya lokal yang kental. Perpaduan desain modern dan panorama alam yang memukau.",
      darkMode: false,
    },
    {
      image: "https://drive.google.com/file/d/1V2DwzdM0Ie-ZVtrD-jvwjCP0AGYuJw6s/view?usp=sharing",
      title: "Rajavilla Lombok Resort",
      description:
        "Rajavilla Lombok Resort dikenal sebagai destinasi penginapan eksklusif dengan pemandangan laut yang memukau, menghadirkan suasana elegan dan privasi tinggi.",
      reverse: true,
      darkMode: false,
    },
  ];

  return (
    <section className="bg-white">
      <div className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={driveImageUrl(bgHero)}
            alt="Hotel Resort Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute inset-0 overflow-hidden opacity-20 z-10 pointer-events-none">
          <TreePalm className="absolute top-20 left-10 w-16 h-16 text-white animate-bounce" />
          <Waves className="absolute bottom-40 right-10 w-20 h-20 text-white animate-pulse" />
          <Sparkles className="absolute top-1/4 right-1/4 w-12 h-12 text-white animate-pulse" />
        </div>

        <div className="relative z-20 w-full max-w-4xl text-center">
          <div className="flex justify-center mb-8">
            <img
              src={driveImageUrl("https://drive.google.com/file/d/11P5UtOPu6v3Fh_Zcjd2RB4S6hnshdfVl/view?usp=sharing")}
              alt="Logo Re:Flow"
              className="w-28 h-28 md:w-36 md:h-36 object-contain filter brightness-0 invert drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white leading-tight uppercase tracking-tighter mb-6">
            HOTEL & <span className="text-sky-400">RESORT</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Re:Flow bekerja sama dengan berbagai hotel di Lombok untuk menghadirkan pengalaman menginap berkelanjutan — menggabungkan kenyamanan, keindahan alam, dan kepedulian terhadap lingkungan.
          </p>

          <button
            onClick={() => document.getElementById("promo-section")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-10 px-10 py-4 bg-sky-500 hover:bg-sky-600 text-white font-black rounded-full shadow-2xl transition-all duration-300 transform hover:-translate-y-1 uppercase tracking-widest text-sm"
          >
            Lihat Daftar Partner
          </button>
        </div>
      </div>

      <div id="promo-section" className="bg-white py-16 md:py-32">
        <div className="text-center mb-20 px-4">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-widest">
            Our Official Partners
          </h2>
          <div className="h-1.5 w-24 bg-sky-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-16 md:space-y-32 max-w-7xl mx-auto">
          {promos.map((promo, index) => (
            <div key={index} className="px-4 transition-all duration-500 [&_*]:bg-transparent">
              <Partner {...promo} />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 py-24 text-center px-6 border-t border-gray-100">
        <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 uppercase">Jadilah Bagian dari Perubahan</h3>
        <p className="text-slate-500 max-w-xl mx-auto mb-10">Daftarkan Hotel atau Resort Anda sebagai mitra Re:Flow untuk mendukung pariwisata hijau di Lombok.</p>
        <a 
          href="https://wa.me/6282144540304" 
          target="_blank"
          className="inline-block px-8 py-4 bg-transparent border-2 border-sky-500 text-sky-600 font-black rounded-xl hover:bg-sky-500 hover:text-white transition-all shadow-lg"
        >
          HUBUNGI ADMIN RE:FLOW
        </a>
      </div>
    </section>
  );
}