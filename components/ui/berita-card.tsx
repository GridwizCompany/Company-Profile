"use client";

import Link from "next/link";
import Image from "next/image";

interface BeritaCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  slug: string;
}

export default function BeritaCard({
  image,
  title,
  description,
  date,
  slug,
}: BeritaCardProps) {
  return (
    <Link
      href={`/berita/${slug}`}
      className="bg-gray-900 rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform w-full max-w-md"
    >
      <Image
        src={image}
        alt={title}
        height={200}
        width={200}
        className="h-56 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 text-sky-400">{title}</h3>
        <p className="text-gray-300 text-sm line-clamp-3">{description}</p>
        <p className="text-gray-500 text-xs mt-3">{date}</p>
      </div>
    </Link>
  );
}
