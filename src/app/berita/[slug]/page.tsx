import { BeritaDetailTemplate } from "@/components/ui/berita-template";
import { beritaSlugs, findBeritaBySlug } from "data/berita";
import { notFound } from "next/navigation";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return beritaSlugs().map((slug) => ({ slug } as Params));
}

type PageProps = {
  params: Promise<Params>;
};

export default async function BeritaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const berita = findBeritaBySlug(slug);
  if (!berita) return notFound();

  return <BeritaDetailTemplate berita={berita} />;
}
