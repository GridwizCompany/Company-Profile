"use client";
import Partner from "@/components/ui/media-teks";
import Image from "next/image";
import { useEffect, useState } from "react";
import { driveImageUrl } from "utils/driveutils";

export default function HotelResort() {
  const hotelImage =
    "https://stuproztnegtdvowxqvt.supabase.co/storage/v1/object/public/images/Top%20Destination/bg-destination.JPG";

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
      image:
        "https://drive.google.com/file/d/1bBosYHlXQFSgrnrd9oYWXLQDByzA2gsI/view?usp=sharing",
      imagePosition: "left",
      rating: "4.5/5",
      location: "maps.app.goo.gl/KeKyVgs4fmina7bt5",
      maps: "Lokasi Pura Batu Bolong",
    },
    {
      title: "Alberto Cafe",
      description:
        "Cafe Alberto adalah salah satu restoran tepi pantai paling terkenal di Senggigi, Lombok, yang menawarkan perpaduan hidangan Italia, seafood segar, dan menu internasional lainnya dengan suasana yang elegan dan romantis.",
      image:
        "https://drive.google.com/file/d/1lr6RNkAeyEDPwUIJC9mVWgp9IryBlgO_/view?usp=sharing",
      imagePosition: "right",
      rating: "4.3/5",
      location: "maps.app.goo.gl/FVpaNhBDBsCb4rcu6",
      maps: "Lokasi Alberto Cafe",
    },
    {
      title: "MENTEZ",
      description:
        "Mentez Art Gallery adalah galeri seni terkemuka di kawasan Senggigi, Lombok, yang menjadi surga bagi para pecinta seni dan kolektor. Galeri ini secara khusus memamerkan berbagai karya seni lukis yang menawan, seringkali menampilkan gaya khas seniman lokal yang berfokus pada kehidupan, budaya, dan keindahan alam Pulau Lombok.",
      image:
        "https://drive.google.com/file/d/1RgcHVtPTHTr3sTDmr-QgoE4bq-peK3-m/view?usp=sharing",
      imagePosition: "left",
      rating: "4.7/5",
      location: "maps.app.goo.gl/BD8XyZGoxcfhSpXG7",
      maps: "Lokasi Pura MENTEZ",
    },
    {
      title: "Pantai Kerandangan",
      description:
        "Pantai Kerandangan memancarkan pesona alam yang otentik dan menenangkan, menjadikannya permata tersembunyi yang damai di dekat kawasan Senggigi. Keindahan pantai ini terletak pada kontras antara pasir putih kecokelatan yang lembut dengan hijaunya deretan pepohonan di sepanjang garis pantai, menciptakan suasana yang lebih teduh dan asri dibandingkan pantai-pantai komersil lainnya.",
      image:
        "https://drive.google.com/file/d/1BgTSq4QtkRnMiZaArMFJcE6LmMvdgIHq/view?usp=sharing",
      imagePosition: "right",
      rating: "4.8/5",
      location: "maps.app.goo.gl/uD8ZKwdo5chuzBPw5",
      maps: "Lokasi Pantai Kerandangan",
    },
    {
      title: "Beach Club Lombok by Bale Solah",
      description:
        "Beach Club Lombok by Bale Solah, sebuah permata elegan yang menawarkan kombinasi sempurna antara resort bintang empat dan beach club premium di kawasan Senggigi.",
      image:
        "https://drive.google.com/file/d/1_aTMQijkTxq4_XRcWPXuh8EjaouaJRe1/view?usp=sharing",
      imagePosition: "left",
      rating: "4.4/5",
      location: "maps.app.goo.gl/DPznhDPa7KXxMAxt7",
      maps: "Lokasi Beach Club Lombok by Bale Solah",
    },
    {
      title: "Pantai Tanjung Bias",
      description:
        "Pantai Tanjung Bias, sebuah destinasi yang menawarkan perpaduan sempurna antara keindahan alam, wisata kuliner, dan kegiatan rekreasi keluarga di Desa Senteluk, Lombok Barat.",
      image:
        "https://drive.google.com/file/d/1IGeynpPU6dv3t3uy_BBlxw7VZODr_QOE/view?usp=sharing",
      imagePosition: "right",
      rating: "4.5/5",
      location: "maps.app.goo.gl/vUQfHwMUphj6wywt9",
      maps: "Lokasi Pantai Tanjung Bias",
    },
    {
      title: "Pantai Kecinan",
      description:
        "Pantai Kecinan di Lombok Utara, sebuah permata yang menyajikan ketenangan dengan panorama alam yang menawan dan suasana damai. Daya tarik utama pantai ini adalah pasir putihnya yang lembut dan bersih serta air laut yang jernih dengan ombak yang sangat tenang, menjadikannya sangat aman dan ideal untuk berenang, bermain air bersama keluarga, bahkan menjadi spot populer untuk snorkeling dan menyelam karena kekayaan terumbu karang di bawah lautnya.",
      image:
        "https://drive.google.com/file/d/1osmTM7QRgR8mimjqBBKK92faHbdZC49k/view?usp=sharing",
      imagePosition: "left",
      rating: "4.5/5",
      location: "maps.app.goo.gl/pAxoWsfbmDkpxN9W9",
      maps: "Lokasi Pantai Kecinan",
    },
  ];

  return (
    <section>
      <div className="relative max-w-screen min-h-screen overflow-hidden">
        <div className="relative w-full min-h-screen overflow-hidden">
          <img
            src={driveImageUrl(
              "https://drive.google.com/file/d/1WNmm3FZwShu3rQs6pJ-TwbccFJ-uwKi8/view?usp=sharing"
            )}
            alt="Hotel"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="absolute inset-0 bg-black/60"></div>

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

      <div className="flex justify-center py-5 sm:px-8 md:px-72 md:py-32 bg-white">
        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/jav1rwlGkjU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
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
