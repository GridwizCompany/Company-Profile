"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { driveImageUrl } from "utils/driveutils";

type Section = {
  title: string;
  description: string;
  image: string;
  imagePosition?: "left" | "right";
};

interface OverviewSectionProps {
  sections?: Section[];
}

export default function OverviewSection({
  sections = [],
}: OverviewSectionProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % sections.length);
  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + sections.length) % sections.length);

  if (!sections.length) return null;

  return (
    <section className="py-24 px-6 sm:px-12 md:px-24">
      {!isMobile ? (
        <div className="space-y-24 max-w-7xl mx-auto">
          {sections.map((item, idx) => (
            <div
              key={idx}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                item.imagePosition === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`relative w-full h-[300px] md:h-[400px] ${
                  item.imagePosition === "right" ? "order-2" : "order-1"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="rounded-2xl shadow-lg object-cover"
                  priority
                />
              </div>

              <div
                className={`${
                  item.imagePosition === "right" ? "order-1" : "order-2"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {item.title}
                </h2>
                <p className="leading-relaxed mb-6 text-lg sm:text-xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative overflow-hidden max-w-md mx-auto">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {sections.map((item, idx) => (
              <div key={idx} className="min-w-full px-4">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img
                    src={driveImageUrl(item.image)}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
                    <p className="text-gray-700 mb-4 text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-2 mt-6">
            {sections.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === idx ? "scale-110 bg-blue-500" : "bg-gray-300"
                }`}
                onClick={() => setActiveIndex(idx)}
              ></button>
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white transition"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white transition"
          >
            ❯
          </button>
        </div>
      )}
    </section>
  );
}
