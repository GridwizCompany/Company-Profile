"use client";

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
}

export default function Partner({
  title,
  description,
  image,
  reverse = false,
  features = [],
  darkMode = false,
}: PartnerProps) {
  const textColor = darkMode ? "text-gray-300" : "text-gray-700";
  const subTextColor = darkMode ? "text-gray-300" : "text-gray-700";
  const titleColor = darkMode ? "text-white" : "text-sky-500";
  const iconColor = darkMode ? "text-sky-400" : "text-sky-500";
  const bgColor = darkMode ? "bg-black" : "bg-gray-200";

  return (
    <div
      className={`${bgColor} py-12 px-6 md:px-16 transition-colors duration-300`}
    >
      <div
        className={`max-w-6xl mx-auto flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } items-center gap-12`}
      >
        {/* Gambar */}
        <div className="flex-1 flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-full max-w-md object-contain rounded-lg"
          />
        </div>

        {/* Konten */}
        <div
          className={`flex-1 ${
            reverse ? "md:text-left md:pl-12" : "md:text-left md:pr-12"
          }`}
        >
          {/* Judul */}
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleColor}`}>
            {title}
          </h2>

          {/* Deskripsi */}
          <p
            className={`text-base sm:text-lg md:text-xl leading-relaxed mb-6 ${subTextColor} text-justify`}
          >
            {description}
          </p>

          {/* Fitur */}
          <div
            className={`grid grid-cols-2 gap-6 ${textColor} ${
              reverse ? "md:justify-items-start" : ""
            }`}
          >
            {features.map((item, index) => (
              <div
                key={index}
                className={` flex items-center gap-3 hover:text-sky-500 transition-colors duration-200`}
              >
                <span className={`${iconColor}`}>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
