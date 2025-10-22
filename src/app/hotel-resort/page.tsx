"use client";
import Partner from "@/components/ui/media-teks";
import Image from "next/image";
import { useEffect, useState } from "react";
import { driveImageUrl } from "utils/driveutils";

export default function HotelResort() {
  const [showPopup, setShowPopup] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);
  const [allowPlay, setAllowPlay] = useState(false);

  const videoId = "RrFkEv5ysIM";

  useEffect(() => {
    setShowPopup(true);

    const timer = setTimeout(() => {
      setShowCloseButton(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const hotelImage =
    "https://drive.google.com/file/d/1-426yT5xHU4GGKjt3yV91bOHzO2p9slb/view?usp=sharing";

  const overviewData: {
    title: string;
    description: string;
    image: string;
    imagePosition: "left" | "right";
    rating?: string;
    location?: string;
    maps?: string;
  }[] = [
    {
      title: "Wisata Pura Batu Bolong",
      description:
        "Pura Batu Bolong adalah salah satu destinasi wisata spiritual dan alam yang paling ikonik di Lombok. Terletak di tepi Pantai Senggigi, pura ini didirikan di atas batu karang besar yang menjorok langsung ke laut.",
      image: "/hotel/batu-bolong.jpg",
      imagePosition: "left",
      rating: "4.5/5",
      location: "maps.app.goo.gl/KeKyVgs4fmina7bt5",
      maps: "Lokasi Pura Batu Bolong",
    },
    {
      title: "Alberto Cafe",
      description:
        "Cafe Alberto adalah salah satu restoran tepi pantai paling terkenal di Senggigi, Lombok, yang menawarkan perpaduan hidangan Italia, seafood segar, dan menu internasional lainnya dengan suasana yang elegan dan romantis.",
      image: "/hotel/Alberto.jpg",
      imagePosition: "right",
      rating: "4.3/5",
      location: "maps.app.goo.gl/FVpaNhBDBsCb4rcu6",
      maps: "Lokasi Alberto Cafe",
    },
    {
      title: "MENTEZ",
      description:
        "Mentez Art Gallery adalah galeri seni terkemuka di kawasan Senggigi, Lombok, yang menjadi surga bagi para pecinta seni dan kolektor. Galeri ini secara khusus memamerkan berbagai karya seni lukis yang menawan, seringkali menampilkan gaya khas seniman lokal yang berfokus pada kehidupan, budaya, dan keindahan alam Pulau Lombok.",
      image: "/hotel/mentez.jpg",
      imagePosition: "left",
      rating: "4.7/5",
      location: "maps.app.goo.gl/BD8XyZGoxcfhSpXG7",
      maps: "Lokasi Pura MENTEZ",
    },
    {
      title: "Pantai Kerandangan",
      description:
        "Pantai Kerandangan memancarkan pesona alam yang otentik dan menenangkan, menjadikannya permata tersembunyi yang damai di dekat kawasan Senggigi. Keindahan pantai ini terletak pada kontras antara pasir putih kecokelatan yang lembut dengan hijaunya deretan pepohonan di sepanjang garis pantai, menciptakan suasana yang lebih teduh dan asri dibandingkan pantai-pantai komersil lainnya.",
      image: "/hotel/Pantai-Kerandangan.jpg",
      imagePosition: "right",
      rating: "4.8/5",
      location: "maps.app.goo.gl/uD8ZKwdo5chuzBPw5",
      maps: "Lokasi Pantai Kerandangan",
    },
    {
      title: "Beach Club Lombok by Bale Solah",
      description:
        "Beach Club Lombok by Bale Solah, sebuah permata elegan yang menawarkan kombinasi sempurna antara resort bintang empat dan beach club premium di kawasan Senggigi.",
      image: "/hotel/beach-club-lombok.jpg",
      imagePosition: "left",
      rating: "4.4/5",
      location: "maps.app.goo.gl/DPznhDPa7KXxMAxt7",
      maps: "Lokasi Beach Club Lombok by Bale Solah",
    },
    {
      title: "Pantai Tanjung Bias",
      description:
        "Pantai Tanjung Bias, sebuah destinasi yang menawarkan perpaduan sempurna antara keindahan alam, wisata kuliner, dan kegiatan rekreasi keluarga di Desa Senteluk, Lombok Barat.",
      image: "/hotel/pantai-tanjung-bias.jpg",
      imagePosition: "right",
      rating: "4.5/5",
      location: "maps.app.goo.gl/vUQfHwMUphj6wywt9",
      maps: "Lokasi Pantai Tanjung Bias",
    },
    {
      title: "Pantai Kecinan",
      description:
        "Pantai Kecinan di Lombok Utara, sebuah permata yang menyajikan ketenangan dengan panorama alam yang menawan dan suasana damai. Daya tarik utama pantai ini adalah pasir putihnya yang lembut dan bersih serta air laut yang jernih dengan ombak yang sangat tenang, menjadikannya sangat aman dan ideal untuk berenang, bermain air bersama keluarga, bahkan menjadi spot populer untuk snorkeling dan menyelam karena kekayaan terumbu karang di bawah lautnya.",
      image: "/hotel/pantai-kecinan.jpg",
      imagePosition: "left",
      rating: "4.5/5",
      location: "maps.app.goo.gl/pAxoWsfbmDkpxN9W9",
      maps: "Lokasi Pantai Kecinan",
    },
  ];

  return (
    <section>
      {/* Popup Video */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-sm bg-black rounded-2xl overflow-hidden shadow-2xl aspect-[9/16]">
            {/* Tombol Close muncul setelah 10 detik */}
            {showCloseButton && (
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-2 right-2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition"
              >
                ✕
              </button>
            )}

            {/* Tombol tap untuk memulai dengan suara */}
            {!allowPlay && (
              <button
                onClick={() => setAllowPlay(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-lg font-semibold"
              >
                🔊 Tap to Play with Sound
              </button>
            )}

            {/* Video YouTube */}
            {allowPlay ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&disablekb=1&modestbranding=1&rel=0`}
                title="YouTube Shorts player"
                allow="autoplay; encrypted-media"
                className="w-full h-full rounded-2xl"
              ></iframe>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&disablekb=1&modestbranding=1&rel=0`}
                title="YouTube Shorts preview"
                allow="autoplay; encrypted-media"
                className="w-full h-full rounded-2xl"
              ></iframe>
            )}
          </div>
        </div>
      )}

      <div className="relative max-w-screen min-h-screen overflow-hidden">
        {/* Background fullscreen */}
        <Image
          src={driveImageUrl(hotelImage)}
          alt="Hotel"
          fill
          className="object-cover"
          sizes="100vw"
        />

        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center justify-center md:items-end md:justify-start px-4 md:pb-24 md:pl-24">
          <div className="text-center md:text-left max-w-3xl text-white drop-shadow-lg space-y-4">
            <h1 className="text-xl sm:text-2xl md:text-5xl font-bold">
              Kunjungi Wisata Terbaik Di Sekitar Senggigi Bersama Re:Flow
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Kini Re:Flow hadir di area perhotelan untuk meningkatkan keseruan
              berlibur dan memudahkan eksplorasi area sekitar hotel.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-200">
        {overviewData.map((promo, index) => (
          <Partner key={index} {...promo} />
        ))}
      </div>
    </section>
  );
}
