import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { driveImageUrl } from "utils/driveutils";
import { beritaSlugs, findBeritaBySlug, type BeritaItem } from "data/berita";
import { JSX } from "react";

type BeritaPageProps = {
  params: Promise<{ slug: string }>;
};

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
  if (berita.readingTime) {
    return berita.readingTime;
  }

  const words = berita.content
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const minutes = Math.max(2, Math.round(words / 200));
  return `${minutes} menit baca`;
};

export function generateStaticParams() {
  return beritaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BeritaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const berita = findBeritaBySlug(slug);
  if (!berita) {
    return {
      title: "Berita tidak ditemukan | Gridwiz",
      description: "Konten yang Anda cari tidak tersedia.",
    };
  }

  const image = resolveImage(berita.image);

  return {
    title: `${berita.title} | Berita Gridwiz`,
    description: berita.description,
    openGraph: {
      title: berita.title,
      description: berita.description,
      type: "article",
      locale: "id_ID",
      publishedTime: new Date(berita.date).toISOString(),
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: berita.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: berita.title,
      description: berita.description,
      images: [image],
    },
  };
}

export default async function BeritaDetailPage({ params }: BeritaPageProps) {
  const { slug } = await params;
  const beritaData = findBeritaBySlug(slug);

  if (!beritaData) {
    notFound();
  }

  const berita = beritaData;
  const formattedDate = formatDate(berita.date);
  const readingTime = resolveReadingTime(berita);
  const heroImage = resolveImage(berita.image);
  const metadataItems = [
    {
      label: "Tanggal",
      value: formattedDate,
      icon: (
        <svg
          aria-hidden="true"
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
          aria-hidden="true"
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
              aria-hidden="true"
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
  ].filter(
    (
      item
    ): item is {
      label: string;
      value: string;
      icon: JSX.Element;
    } => Boolean(item)
  );
  const shareLinks = [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        `https://gridwiz.id/berita/${slug}`
      )}&title=${encodeURIComponent(berita.title)}`,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(
        `${berita.title} — https://gridwiz.id/berita/${slug}`
      )}`,
    },
    {
      label: "X (Twitter)",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `${berita.title} — https://gridwiz.id/berita/${slug}`
      )}`,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div
        className="pointer-events-none absolute left-1/2 top-[-40svh] h-[80svh] w-[80svh] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[140px]"
        aria-hidden="true"
      />
      <div className="relative isolate overflow-hidden rounded-b-[48px]  bg-slate-950/50">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_55%)]"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-[-35svh] h-[72svh] w-[72svh] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[210px]"
          aria-hidden="true"
        />
        <div className="relative h-[72svh] min-h-[460px] overflow-hidden">
          <Image
            src={heroImage}
            alt={berita.title}
            fill
            className="object-cover object-bottom saturate-[1.05]"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/56 to-slate-950/32"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950"
            aria-hidden="true"
          />
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
                <div className="mt-6 inline-flex items-center mx-2 rounded-sm border border-sky-300/40 bg-sky-400/10 px-6 py-1.5 text-[10px] font-semibold uppercase tracking-[0.35em] text-sky-100 shadow-[0_0_45px_rgba(56,189,248,0.28)]">
                  {berita.category}
                </div>
              )}
              <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl md:leading-tight">
                {berita.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base text-slate-200/90 sm:text-lg">
                {berita.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-4">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-slate-950 via-slate-950/80 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl md:px-6">
          <div className="overflow-hidden rounded-[32px] md:border border-slate-800/70 bg-slate-950/80">
            <div className="grid md:divide-y divide-slate-800/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:divide-slate-800/60">
              {metadataItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl md:border border-sky-400/30 bg-sky-500/10">
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
        <div className="relative mx-auto my-16 grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="relative overflow-hidden md:rounded-[36px] md:p-10">
            <div
              className="absolute -right-16 top-10 h-56 w-56 rounded-full md:bg-sky-500/12 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute -left-14 bottom-0 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative space-y-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Ringkasan Utama
                </p>
                <p className="mt-3 text-lg leading-relaxed text-slate-100 text-justify">
                  {berita.description}
                </p>
              </div>
              <hr className="border-t border-gray-300/32" />
              <div className="space-y-6 text-lg leading-relaxed text-slate-200">
                {berita.content.map((paragraph, index) => (
                  <p key={index} className="text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="grid gap-6 rounded-3xl md:border md:border-sky-500/20 md:bg-gradient-to-br from-sky-500/10 via-slate-900/80 to-slate-900/60 md:p-6 text-slate-100 md:grid-cols-2">
                <div>
                  <h2 className="text-lg font-semibold text-sky-100">
                    Dampak yang Diharapkan
                  </h2>
                  <p className="mt-3 text-base text-sky-50/90 text-justify">
                    Kolaborasi ini membuka peluang implementasi teknologi
                    transportasi listrik Gridwiz, mulai dari penyediaan armada,
                    pelatihan teknisi lokal, hingga studi kelayakan untuk proyek
                    percontohan di NTB.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-sky-100">
                    Fokus Pelaksanaan
                  </h3>
                  <p className="mt-3 text-base text-sky-50/90 text-justify">
                    Gridwiz bersama BRIDA memprioritaskan pendampingan teknis
                    dan kesiapan ekosistem agar manfaat transportasi listrik
                    dapat dirasakan merata oleh masyarakat.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-5 rounded-3xl border border-slate-800/60 bg-slate-950/60 p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    Bagikan Artikel
                  </p>
                  <p className="mt-2 max-w-xl text-sm text-slate-300">
                    Sebarkan kabar baik ini supaya semakin banyak pihak
                    mendukung percepatan mobilitas listrik di Indonesia.
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
                      <span
                        aria-hidden="true"
                        className="inline-flex h-2 w-2 rounded-full bg-sky-400"
                      />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/tentang"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-sky-400 to-blue-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:from-sky-400 hover:via-sky-300 hover:to-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                Pelajari Lebih Jauh Misi Gridwiz
              </Link>
            </div>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start mb-8">
            {berita.highlights && berita.highlights.length > 0 && (
              <div className="relative overflow-hidden rounded-[28px]  bg-slate-900/75 p-6 ">
                <div
                  className="absolute -right-16 top-1/3 h-32 w-32 rounded-full bg-sky-500/15 blur-3xl"
                  aria-hidden="true"
                />
                <div
                  className="absolute left-6 top-6 h-12 w-12 rounded-full border border-sky-400/40 bg-sky-500/10"
                  aria-hidden="true"
                />
                <div className="relative space-y-7">
                  <h2 className="text-lg font-semibold text-white">
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
              </div>
            )}
            <div className="overflow-hidden rounded-[28px] border border-slate-800/70 bg-gradient-to-br from-slate-900/85 via-slate-950/75 to-slate-900/65 p-6 text-sm text-slate-300">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Rencana Lanjutan
              </h3>
              <p className="mt-3 leading-relaxed">
                Gridwiz dan BRIDA NTB menyiapkan kerangka kerja bersama untuk
                memvalidasi kebutuhan masyarakat, memperkuat kemampuan teknis,
                dan memastikan kesiapan infrastruktur pendukung mobilitas hijau
                di kawasan timur Indonesia.
              </p>
            </div>
            <div className="rounded-[28px] border border-slate-800/70 bg-gradient-to-br from-slate-900/85 via-slate-950/75 to-slate-900/65 p-6 text-sm text-slate-100 ">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-100/80">
                Hubungi Kami
              </h3>
              <p className="mt-3 leading-relaxed text-slate-100/90">
                Tertarik menjalin kolaborasi serupa? Tim Gridwiz siap berdiskusi
                untuk menghadirkan solusi transportasi listrik yang relevan bagi
                daerah Anda.
              </p>
              <Link
                href="/kontak"
                className="mt-5 inline-flex items-center justify-center rounded-full border border-slate-100/50 px-5 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-sky-500/20"
              >
                Jadwalkan Diskusi
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
