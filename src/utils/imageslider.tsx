"use client";
import { useState, useEffect, SetStateAction } from "react";
import { driveImageUrl } from "../utils/driveutils";

type GalleryItem = {
  imageSource: string;
  // add other fields here if your items include more properties
};

interface GallerySectionProps {
  galleryItems: GalleryItem[];
}

export default function GallerySection({ galleryItems }: GallerySectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Geser otomatis tiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === galleryItems.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryItems.length]);

  // Fungsi geser manual
  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <div className="rounded-3xl border border-gray-200 bg-gray-50 p-10 shadow-lg space-y-8">
      {/* Carousel container */}
      <div className="relative w-full overflow-hidden rounded-2xl">
        {/* Wrapper slide */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${galleryItems.length * 100}%`,
          }}
        >
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 relative aspect-[4/3] bg-gray-100"
            >
              <img
                src={driveImageUrl(item.imageSource)}
                alt={`Gallery ${index + 1}`}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {galleryItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-blue-600 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
