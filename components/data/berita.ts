export type BeritaItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
  content: string[];
  date: string;
  category?: string;
  location?: string;
  readingTime?: string;
  highlights?: string[];
};

const beritaList: BeritaItem[] = [
  {
    slug: "kerja-sama-gridwiz-dan-brida",
    title: "Kerja Sama Gridwiz dan BRIDA NTB",
    description:
      "Kolaborasi strategis untuk mempercepat ekosistem transportasi listrik di NTB.",
    image: "https://drive.google.com/uc?export=view&id=1a2b3c4d5e6f7g8h9i",
    date: "2025-10-22",
    category: "Kerja Sama",
    location: "Mataram, NTB",
    content: [
      "Gridwiz resmi menandatangani nota kesepahaman dengan BRIDA NTB dalam pengembangan kendaraan listrik.",
      "Kerja sama ini mencakup pelatihan teknisi, penyediaan armada, dan studi kelayakan proyek percontohan.",
      "Langkah ini diharapkan mempercepat transisi menuju transportasi ramah lingkungan di wilayah Indonesia Timur.",
    ],
    highlights: [
      "Penandatanganan MoU di kantor BRIDA NTB",
      "Pelatihan teknisi kendaraan listrik",
      "Penyusunan rencana proyek percontohan",
    ],
  },
  {
    slug: "hut-golkar",
    title: "Kerja Sama Gridwiz dan BRIDA NTB",
    description:
      "Kolaborasi strategis untuk mempercepat ekosistem transportasi listrik di NTB.",
    image: "https://drive.google.com/uc?export=view&id=1a2b3c4d5e6f7g8h9i",
    date: "2025-10-22",
    category: "Kerja Sama",
    location: "Mataram, NTB",
    content: [
      "Gridwiz resmi menandatangani nota kesepahaman dengan BRIDA NTB dalam pengembangan kendaraan listrik.",
      "Kerja sama ini mencakup pelatihan teknisi, penyediaan armada, dan studi kelayakan proyek percontohan.",
      "Langkah ini diharapkan mempercepat transisi menuju transportasi ramah lingkungan di wilayah Indonesia Timur.",
    ],
    highlights: [
      "Penandatanganan MoU di kantor BRIDA NTB",
      "Pelatihan teknisi kendaraan listrik",
      "Penyusunan rencana proyek percontohan",
    ],
  },
];

export function findBeritaBySlug(slug: string) {
  return beritaList.find((b) => b.slug === slug);
}

export function beritaSlugs() {
  return beritaList.map((b) => b.slug);
}
