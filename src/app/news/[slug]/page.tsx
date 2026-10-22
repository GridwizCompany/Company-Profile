import { newsData, NewsData } from "../../../lib/newsData";
import NewsDetailClient from "./NewsDetailClient";

export function generateStaticParams() {
  return newsData.map((news) => ({
    slug: news.slug,
  }));
}

export default async function NewsDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const staticNews = newsData.find((n) => n.slug === slug);

  // Jika tidak ditemukan di static seed, berikan fallback objek agar client context di browser bisa membaca dari localStorage
  const fallbackNews: NewsData = staticNews || {
    id: `dyn_${slug}`,
    slug,
    title: slug,
    shortDesc: "",
    category: "News",
    date: "",
    location: "",
    imageSrc: "/images/events/hero.png",
    content: "",
  };

  return <NewsDetailClient initialNews={fallbackNews} slug={slug} />;
}
