import { BeritaDetailTemplate } from "@/components/ui/berita-template";
import { beritaSlugs, findBeritaBySlug } from "data/berita";
import { notFound } from "next/navigation";

type PageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return beritaSlugs().map((slug) => ({ slug }));
}

export default async function BeritaDetailPage({ params }: PageProps) {
  const berita = findBeritaBySlug(params.slug);
  if (!berita) return notFound();

  return <BeritaDetailTemplate berita={berita} />;
}
