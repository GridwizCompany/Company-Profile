import { partners, getPartnerBySlug, Partner } from "../../../lib/partnersData";
import PartnerDetailClient from "./PartnerDetailClient";

// Generate static params untuk semua slug mitra (required untuk SSG output: "export")
export function generateStaticParams() {
  return partners.map((partner) => ({ slug: partner.slug }));
}

export default async function PartnerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const staticPartner = getPartnerBySlug(slug);

  // Berikan fallback objek agar client context (useAdminData) bisa membaca data dinamis dari admin
  const fallbackPartner: Partner = staticPartner || {
    slug,
    category: "cafe",
    name: slug,
    tagline_id: "",
    tagline_en: "",
    desc_id: "",
    desc_en: "",
    logo: "/images/partners/logo/madjoe.svg",
    coverImage: "/images/partners/space/madjoe.svg",
    location: "",
    ebikeCount: "",
    stats: [],
    benefits_id: [],
    benefits_en: [],
    about_id: "",
    about_en: "",
  };

  return <PartnerDetailClient initialPartner={fallbackPartner} slug={slug} />;
}
