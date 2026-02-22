"use client";
import Partner from "@/components/ui/media-teks";
import {
  Bike,
  Coffee,
  Droplets,
  Leaf,
  Sparkles,
  Star,
  Wind,
} from "lucide-react";
import { driveImageUrl } from "utils/driveutils";

export default function CafeAndRestaurant() {
  const bgHero = "https://drive.google.com/file/d/1b-r9yJtFSls8WxkkVFDu7cHFx8tojTnm/view?usp=sharing";

  const promos = [
    {
      image: "https://drive.google.com/file/d/1d-kgi5_bSV-MXJQLR0ApNKg1KLv1Rzh6/view?usp=sharing",
      title: "Bento Kopi",
      description:
        "Nongkrong yang nyaman di Bento Kopi. Gunakan Re:Flow untuk menuju lokasi dan dapatkan promo menarik sebagai bagian dari komunitas ramah lingkungan.",
      features: [
        { icon: <Coffee className="w-5 h-5 md:w-6 md:h-6 text-sky-600" />, text: "Tempat nongkrong asik" },
      ],
      darkMode: false, 
    },
    {
      image: "https://drive.google.com/file/d/1wZzqMs3NybqDCAGb3dzQnz6afU-_ryF8/view?usp=sharing",
      title: "Modjoe",
      description:
        "Suasana santai dan menu pilihan menanti Anda di Modjoe. Dukung gaya hidup sehat dengan bersepeda dan nikmati apresiasi khusus dari kami.",
      features: [
        { icon: <Leaf className="w-5 h-5 md:w-6 md:h-6 text-green-600" />, text: "Gaya hidup sehat" },
      ],
      reverse: true,
      darkMode: false,
    },
    {
      image: "https://drive.google.com/file/d/16zSlBySqlymdFvPLgokTsXpz5cAqaKTk/view?usp=sharing",
      title: "Éclair Café",
      description:
        "Manjakan diri dengan pastry dan kopi premium di Éclair Café. Kami banyak hadiah bagi pengguna Re:Flow yang peduli terhadap pengurangan emisi.",
      features: [
        { icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />, text: "Premium Pastry & Coffee" },
      ],
      darkMode: false,
    },
    {
      image: "https://drive.google.com/file/d/1Gl8qj_9EhWJnlLpj6vCeoB6ks40oeE2F/view?usp=sharing",
      title: "UTTARA",
      description:
        "UTTARA menghadirkan ketenangan di tengah hiruk-pikuk kota. Dukung gaya hidup sehat dengan bersepeda dan nikmati apresiasi khusus dari kami.",
      features: [
        { icon: <Leaf className="w-5 h-5 md:w-6 md:h-6 text-green-600" />, text: "Vibe kafe menenangkan" },
      ],
      reverse: true,
      darkMode: false,
    },
    {
      image: "https://drive.google.com/file/d/1SL7ASjbFNYzV6ngsCAYUTVDZwPsDIpn7/view?usp=sharing",
      title: "Subr",
      description:
        "Temukan cita rasa unik di Subr. Kami bangga menjadi bagian dari mitra Re:Flow dalam menciptakan ekosistem transportasi berkelanjutan di Lombok.",
      features: [
        { icon: <Bike className="w-5 h-5 md:w-6 md:h-6 text-sky-600" />, text: "Dukungan emisi rendah" },
      ],
      darkMode: false,
    },
  ];

  return (
    <section className="bg-white">
      {/* HERO SECTION */}
      <div className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <img
          src={driveImageUrl(bgHero)}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        <div className="absolute inset-0 overflow-hidden opacity-30 z-20">
          <Leaf className="absolute top-20 left-10 w-12 h-12 text-white animate-bounce" />
          <Bike className="absolute bottom-20 right-16 w-14 h-14 text-white animate-pulse" />
        </div>

        <div className="relative z-30 w-full max-w-4xl">
          <div className="flex justify-center mb-6">
            <img
              src={driveImageUrl("https://drive.google.com/file/d/1Ozc3JZk7sL8lLJAk2CDQ7ZN57Oor4EcJ/view?usp=sharing")}
              alt="Logo Re:Flow"
              className="w-24 h-24 md:w-32 md:h-32 object-contain filter brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-tight uppercase tracking-tighter">
            CAFE & <span className="text-sky-400">RESTAURANT</span>
          </h1>
          
          <p className="mt-6 text-sm sm:text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Re:Flow berkolaborasi dengan mitra terpilih di Lombok untuk menghadirkan pengalaman kuliner berkelanjutan yang mendukung gaya hidup hijau.
          </p>

          <button
            onClick={() => document.getElementById("promo-section")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-10 px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-black rounded-full shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-sm"
          >
            Jelajahi Mitra Kami
          </button>
        </div>
      </div>

      {/* PROMO SECTION - Menghapus background abu-abu */}
      <div id="promo-section" className="bg-white py-16 md:py-32">
        <div className="text-center mb-20 px-4">
          <div className="inline-block bg-sky-100 text-sky-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Our Partners
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-widest">Official Partner Cafe</h2>
          <div className="h-1.5 w-24 bg-sky-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-16 md:space-y-32 max-w-7xl mx-auto">
          {promos.map((promo, index) => (
            <div key={index} className="px-4">
              <Partner {...promo} />
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER CTA */}
      <div className="bg-white py-20 text-center px-6 border-t border-gray-100">
        <p className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-4">Ingin Menjadi Mitra Kami?</p>
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-8">Bergabunglah dalam Ekosistem Re:Flow</h3>
        <a 
          href="https://wa.me/6282144540304" 
          target="_blank"
          className="inline-block px-8 py-4 border-2 border-sky-500 text-sky-600 font-black rounded-xl hover:bg-sky-500 hover:text-white transition-all shadow-sm"
        >
          HUBUNGI ADMIN
        </a>
      </div>
    </section>
  );
}