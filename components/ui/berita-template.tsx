"use client";

import { BeritaItem } from "data/berita";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import { driveImageUrl } from "utils/driveutils";

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));

const resolveImage = (source: string) => {
  if (
    source.includes("drive.google.com") ||
    source.includes("lh3.googleusercontent.com")
  ) {
    return driveImageUrl(source);
  }
  return source;
};

const resolveReadingTime = (berita: BeritaItem) => {
  if (berita.readingTime) return berita.readingTime;

  const words = berita.content
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(2, Math.round(words / 200));
  return `${minutes} menit baca`;
};

type Props = {
  berita: BeritaItem;
  baseUrl?: string;
};

export function BeritaDetailTemplate({
  berita,
  baseUrl = "https://gridwiz.id/berita",
}: Props) {
  const formattedDate = formatDate(berita.date);
  const readingTime = resolveReadingTime(berita);
  const heroImage = resolveImage(berita.image);

  const metadataItems = [
    {
      label: "Tanggal",
      value: formattedDate,
      icon: (
        <svg
          className="h-5 w-5 text-sky-300"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M8 3v2m8-2v2M4 9h16m-1 0v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9m12 4h-6" />
        </svg>
      ),
    },
    {
      label: "Durasi Baca",
      value: readingTime,
      icon: (
        <svg
          className="h-5 w-5 text-sky-300"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M12 6v6l3 2.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
    },
    berita.location
      ? {
          label: "Lokasi",
          value: berita.location,
          icon: (
            <svg
              className="h-5 w-5 text-sky-300"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M12 10a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
              <path d="M19.5 9.5c0 5.25-4.5 9.75-7.5 12-3-2.25-7.5-6.75-7.5-12a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          ),
        }
      : null,
  ].filter(Boolean) as { label: string; value: string; icon: JSX.Element }[];

  const shareLinks = [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        `${baseUrl}/${berita.slug}`
      )}&title=${encodeURIComponent(berita.title)}`,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(
        `${berita.title} — ${baseUrl}/${berita.slug}`
      )}`,
    },
    {
      label: "X (Twitter)",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `${berita.title} — ${baseUrl}/${berita.slug}`
      )}`,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-100">
      {/* HERO */}
      <div className="relative isolate overflow-hidden rounded-b-[48px] bg-slate-950/50">
        <div className="relative h-[72svh] min-h-[460px] overflow-hidden">
          <img
            src={driveImageUrl(heroImage)}
            alt={berita.title}
            className="absolute inset-0 w-full h-full object-cover object-bottom saturate-[1.05]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/56 to-slate-950/32" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent via-slate-950/40 to-slate-950" />
          <div className="absolute inset-x-0">
            <div className="mx-auto w-full max-w-6xl px-6 py-32 md:py-56">
              <Link
                href="/berita"
                className="inline-flex items-center gap-2 text-sm font-medium text-sky-200 transition hover:text-white"
              >
                <span aria-hidden="true">&larr;</span>
                Kembali ke Berita
              </Link>
              {berita.category && (
                <div className="mt-6 inline-flex items-center rounded-sm border border-sky-300/40 bg-sky-400/10 px-6 py-1.5 text-[10px] font-semibold uppercase tracking-[0.35em] text-sky-100">
                  {berita.category}
                </div>
              )}
              <h1 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                {berita.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base text-slate-200/90 sm:text-lg">
                {berita.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* METADATA */}
      <div className="relative mx-auto w-full max-w-6xl mt-6 md:px-6">
        <div className="overflow-hidden rounded-4xl md:border border-slate-800/70 bg-slate-950/80">
          <div className="grid md:divide-y divide-slate-800/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {metadataItems.map((item) => (
              <div key={item.label} className="flex items-center gap-4 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-500/10">
                  {item.icon}
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto my-16 grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="space-y-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Ringkasan Utama
          </p>
          <p className="mt-3 text-lg leading-relaxed text-slate-100 text-justify">
            {berita.description}
          </p>
          <hr className="border-t border-gray-300/32" />
          <div className="space-y-6 text-lg leading-relaxed text-slate-200">
            {berita.content.map((paragraph: string, i: number) => (
              <p key={i} className="text-justify">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share */}
          <div className="flex flex-wrap items-center justify-between gap-5 rounded-3xl border border-slate-800/60 bg-slate-950/60 p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Bagikan Artikel
              </p>
              <p className="mt-2 max-w-xl text-sm text-slate-300">
                Sebarkan kabar baik ini supaya semakin banyak pihak mendukung
                percepatan mobilitas listrik di Indonesia.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {shareLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700/75 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-sky-400/60 hover:text-white"
                >
                  <span className="inline-flex h-2 w-2 rounded-full bg-sky-400" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="space-y-6 lg:sticky lg:top-28">
          {berita.highlights && berita.highlights.length > 0 && (
            <div className="rounded-[28px] bg-slate-900/75 p-6">
              <h2 className="text-lg font-semibold text-white mb-5">
                Sorotan Pertemuan
              </h2>
              <ul className="space-y-4 text-sm text-slate-200">
                {berita.highlights.map((point) => (
                  <li
                    key={point}
                    className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-3"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-1 flex h-2.5 w-2.5 shrink-0 rounded-full bg-sky-400" />
                      <p>{point}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}
