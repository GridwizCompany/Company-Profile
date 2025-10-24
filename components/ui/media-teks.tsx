"use client";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import { driveImageUrl } from "utils/driveutils";

type Feature = {
  icon: React.ReactNode;
  text: string;
};

interface PartnerProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  features?: Feature[];
  darkMode?: boolean;
  rating?: string;
  location?: string;
  maps?: String;
}

export default function Partner({
  title,
  description,
  image,
  reverse = false,
  features = [],
  darkMode = false,
  rating,
  location,
  maps,
}: PartnerProps) {
  const textColor = darkMode ? "text-gray-300" : "text-gray-700";
  const subTextColor = darkMode ? "text-gray-300" : "text-gray-700";
  const titleColor = darkMode ? "text-white" : "text-black";
  const iconColor = darkMode ? "text-sky-400" : "text-sky-500";
  const bgColor = darkMode ? "bg-black" : "bg-gray-200";

  return (
    <div
      className={`${bgColor}  md:py-12 px-6 md:px-16 transition-colors duration-300`}
    >
      <div
        className={`max-w-6xl mx-auto flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } items-center gap-8 md:gap-12`}
      >
        <div className="relative w-full max-w-md h-[350px] flex justify-center mt-16 md:mt-0 ">
          <Image
            src={driveImageUrl(image)}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div
          className={`flex-1 ${
            reverse ? "md:text-left md:pl-12" : "md:text-left md:pr-12"
          }`}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleColor}`}>
            {title}
          </h2>

          <p
            className={`text-base sm:text-lg md:text-xl leading-relaxed mb-6 ${subTextColor} text-justify`}
          >
            {description}
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            {rating && (
              <div className="flex items-center gap-2 text-yellow-400 font-semibold">
                <FaStar />
                <span className={`${textColor}`}>{rating}</span>
              </div>
            )}
          </div>

          <div>
            {location && (
              <a
                href={`https://${location}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-2 px-4 py-2 bg-sky-700 hover:bg-sky-600 text-white rounded-md transition"
              >
                <FaMapMarkerAlt />
                <span>{maps}</span>
              </a>
            )}
          </div>

          {features.length > 0 && (
            <div
              className={`grid grid-cols-2 gap-6 ${textColor} ${
                reverse ? "md:justify-items-start" : ""
              }`}
            >
              {features.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 hover:text-sky-500 transition-colors duration-200`}
                >
                  <span className={`${iconColor}`}>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
