import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { driveImageUrl } from "utils/driveutils";
import {
  beritaSlugs,
  findBeritaBySlug,
  type BeritaItem,
} from "data/berita";

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

export default async function BeritaDetailPage({
  params,
}: BeritaPageProps) {
  const { slug } = await params;
  const beritaData = findBeritaBySlug(slug);

  if (!beritaData) {
    notFound();
  }

  const berita = beritaData;
  const formattedDate = formatDate(berita.date);
  const readingTime = resolveReadingTime(berita);
  const heroImage = resolveImage(berita.image);

  return (
    <section className="bg-slate-950 text-slate-100 pb-24">
      <div className="relative h-[60svh] min-h-[420px]">
        <Image
          src={heroImage}
          alt={berita.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-black/40" />
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-5xl px-6 pb-16">
            <Link
              href="/berita"
              className="inline-flex items-center gap-2 text-sm text-sky-300 transition hover:text-sky-200"
            >
              <span aria-hidden="true">&larr;</span>
              Semua Berita
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-300">
              {berita.category && (
                <span className="rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1 text-sky-200">
                  {berita.category}
                </span>
              )}
              <div className="flex flex-wrap items-center gap-3">
                <span>{formattedDate}</span>
                <span
                  className="h-1 w-1 rounded-full bg-slate-500"
                  aria-hidden="true"
                />
                <span>{readingTime}</span>
                {berita.location && (
                  <>
                    <span
                      className="h-1 w-1 rounded-full bg-slate-500"
                      aria-hidden="true"
                    />
                    <span>{berita.location}</span>
                  </>
                )}
              </div>
            </div>
            <h1 className="mt-6 text-3xl font-extrabold leading-tight md:text-5xl">
              {berita.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="relative -mt-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="rounded-3xl bg-slate-900/80 p-8 shadow-2xl ring-1 ring-slate-800/60 backdrop-blur">
            <p className="text-lg font-semibold leading-relaxed text-slate-100">
              {berita.description}
            </p>
            <div className="mt-6 space-y-6 text-lg leading-relaxed text-slate-200">
              {berita.content.map((paragraph, index) => (
                <p key={index} className="text-justify">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-sky-500/30 bg-sky-500/10 p-6 text-sky-100">
              <h2 className="text-xl font-semibold">Dampak yang Diharapkan</h2>
              <p className="mt-3 text-base text-sky-50/90">
                Kolaborasi ini membuka peluang implementasi teknologi transportasi listrik Gridwiz,
                mulai dari penyediaan armada, pelatihan teknisi lokal, hingga studi kelayakan untuk proyek percontohan di NTB.
              </p>
            </div>

            <Link
              href="/tentang"
              className="mt-12 inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              Pelajari Misi Gridwiz
            </Link>
          </article>

          <aside className="space-y-6">
            {berita.highlights && berita.highlights.length > 0 && (
              <div className="rounded-3xl bg-slate-900/60 p-6 ring-1 ring-slate-800/60 backdrop-blur">
                <h2 className="text-xl font-semibold text-white">
                  Sorotan Pertemuan
                </h2>
                <ul className="mt-4 space-y-4 text-sm text-slate-200">
                  {berita.highlights.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6 text-sm text-slate-300">
              <h3 className="text-lg font-semibold text-white">Rencana Lanjutan</h3>
              <p className="mt-3">
                Gridwiz dan BRIDA NTB akan menyiapkan kerangka kerja bersama untuk memvalidasi kebutuhan masyarakat dan memastikan kesiapan infrastruktur pendukung mobilitas hijau.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
