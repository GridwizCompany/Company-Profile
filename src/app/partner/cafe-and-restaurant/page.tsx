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
  Wind,
} from "lucide-react";
import { driveImageUrl } from "utils/driveutils";

export default function CafeAndRestaurant() {
  const promos = [
    {
      image:
        "https://drive.google.com/file/d/17bSA6IvwrBa1B4Uj4lyN-h9Dw14KHVTx/view?usp=sharing",
      title: "Miyago",
      description:
        "Nikmati suasana hangat di Miyago. Datang bersepeda dengan Re:Flow dan dapatkan potongan harga 10% sebagai bentuk dukungan terhadap gaya hidup hijau.",
      features: [
        { icon: <Bike className="w-6 h-6" />, text: "Akses dengan Re:Flow" },
        {
          icon: <Star className="w-6 h-6" />,
          text: "Diskon 10% untuk pengguna Re:Flow",
        },
      ],
      darkMode: true,
    },
    {
      image:
        "https://drive.google.com/file/d/1JisHjCdcoVpS0V-7IWdiwu-tR72jfOsR/view?usp=sharing",
      title: "Éclair Café",
      description:
        "Rasakan aroma kopi dan manisnya pastry di Éclair Café yang penuh kehangatan. Pengguna Re:Flow menikmati diskon 10% sebagai bentuk apresiasi.",
      features: [
        { icon: <Leaf className="w-6 h-6" />, text: "Kafe berkonsep hijau" },
        {
          icon: <Coffee className="w-6 h-6" />,
          text: "Diskon 10% untuk pesepeda Re:Flow",
        },
      ],
      reverse: true,
      darkMode: true,
    },
    {
      image:
        "https://drive.google.com/file/d/171CmSp2hzXnHnMFI--EDXSc9eEsx81A8/view?usp=sharing",
      title: "Tuwa Kawa",
      description:
        "Nikmati kopi lokal Lombok dalam suasana alami di Tuwa Kawa. Pengguna Re:Flow berhak atas potongan 10% sambil menikmati cita rasa Nusantara.",
      features: [
        {
          icon: <Coffee className="w-6 h-6" />,
          text: "Kopi lokal khas Lombok",
        },
        {
          icon: <Bike className="w-6 h-6" />,
          text: "Diskon 10% bagi pengguna Re:Flow",
        },
      ],
      darkMode: true,
    },
    {
      image:
        "https://drive.google.com/file/d/1ldpZhgy3dPcbE_xZ1c8_zpJvvBN4mXNk/view?usp=sharing",
      title: "IT’s Milk",
      description:
        "Segarkan hari dengan susu murni dari IT’s Milk! Datang bersepeda menggunakan Re:Flow dan nikmati potongan harga 10% untuk setiap pembelian.",
      features: [
        { icon: <Droplets className="w-6 h-6" />, text: "Susu segar alami" },
        {
          icon: <Star className="w-6 h-6" />,
          text: "Diskon 10% untuk pelanggan Re:Flow",
        },
      ],
      reverse: true,
      darkMode: true,
    },
    {
      image:
        "https://drive.google.com/file/d/1jQqYlqco2a05wEltJF80u17dbpbLyzCO/view?usp=sharing",
      title: "UTTARA",
      description:
        "Rasakan ketenangan di UTTARA Café. Datang bersepeda dengan Re:Flow dan nikmati es teh gratis sebagai bentuk penghargaan untuk transportasi ramah lingkungan.",
      features: [
        {
          icon: <Sparkles className="w-6 h-6" />,
          text: "Es teh gratis untuk pengguna Re:Flow",
        },
        {
          icon: <Leaf className="w-6 h-6" />,
          text: "Nuansa kafe yang menenangkan",
        },
      ],
      darkMode: true,
    },
  ];

  return (
    <section>
      <div className="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="absolute inset-0 overflow-hidden opacity-20 z-0">
          <Leaf className="absolute top-20 left-10 w-16 h-16 text-sky-400 animate-bounce-slow" />
          <Wind className="absolute top-40 right-20 w-20 h-20 text-sky-400 animate-spin-slow" />
          <Droplets className="absolute bottom-24 left-1/4 w-14 h-14 text-sky-400 animate-float" />
          <Bike className="absolute bottom-16 right-16 w-20 h-20 text-sky-400 animate-float-delayed" />
          <Sparkles className="absolute top-10 right-1/3 w-12 h-12 text-sky-400 animate-pulse-slow" />
        </div>

        <div className="relative w-full h-[600px] flex flex-col items-center justify-center text-center px-6 md:px-12 overflow-hidden">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20">
            <Image
              src={driveImageUrl(
                "https://drive.google.com/file/d/1Ozc3JZk7sL8lLJAk2CDQ7ZN57Oor4EcJ/view?usp=sharing"
              )}
              alt="Logo Gridwiz"
              width={140}
              height={140}
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>

          <div className="relative z-10 max-w-4xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white py-8 text-center">
              Cafe and Restaurant
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Re:Flow berkolaborasi dengan berbagai cafe dan restoran di Lombok
              untuk menghadirkan pengalaman kuliner berkelanjutan yang mendukung
              gaya hidup hijau.
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
            "https://drive.google.com/file/d/1b-r9yJtFSls8WxkkVFDu7cHFx8tojTnm/view?usp=sharing"
          )}
          alt={"title"}
          fill
          className="object-cover object-center w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div id="promo-section" className="bg-black py-32">
        {promos.map((promo, index) => (
          <Partner key={index} {...promo} />
        ))}
      </div>
    </section>
  );
}
