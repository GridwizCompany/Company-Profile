export interface BeritaItem {
  slug: string;
  title: string;
  date: string;
  image: string;
  description: string;
  content: string[];
  location?: string;
  category?: string;
  highlights?: string[];
  readingTime?: string;
}

export const beritaItems: BeritaItem[] = [
  {
    slug: "gridwiz-brida",
    title:
      "PT Gridwiz Mengawali Kerja Sama Strategis untuk Mendukung Inovasi Energi Terbarukan di NTB",
    date: "2025-08-27",
    image:
      "https://stuproztnegtdvowxqvt.supabase.co/storage/v1/object/public/images/News/brida.jpeg",
    description:
      "PT Gridwiz menawarkan kolaborasi strategis kepada BRIDA NTB untuk mempercepat adopsi teknologi transportasi listrik yang ramah lingkungan di seluruh provinsi.",
    location: "Mataram, NTB",
    category: "Kemitraan Strategis",
    readingTime: "2 menit",
    highlights: [
      "Presentasi visi transportasi listrik yang inklusif dan efisien.",
      "Dukungan BRIDA NTB terhadap inovasi energi terbarukan daerah.",
      "Pemetaan peluang pilot project untuk sepeda listrik Gridwiz.",
    ],
    content: [
      "Menanggapi potensi besar di bidang energi terbarukan, PT Gridwiz mengajukan kerja sama strategis kepada Pemerintah Provinsi Nusa Tenggara Barat (NTB). Dalam kunjungan resmi ke Badan Riset dan Inovasi Daerah (BRIDA) NTB pada Rabu, 27 Agustus 2025, tim Gridwiz mempresentasikan visi perusahaan untuk memperluas pemanfaatan teknologi transportasi listrik yang ramah lingkungan.",
      "Kepala BRIDA NTB, I Gede Putu Aryadi, S.Sos., M.H., beserta jajaran menerima langsung kedatangan perwakilan Gridwiz. Pertemuan berlangsung hangat dan konstruktif, membahas peluang kolaborasi penelitian, implementasi proyek percontohan sepeda listrik, serta dukungan kebijakan daerah yang dapat mempercepat ekosistem mobilitas hijau.",
      "Dalam sesi diskusi, Gridwiz memaparkan rencana jangka menengah yang mencakup penyediaan infrastruktur pengisian daya, pelatihan teknisi lokal, dan pengembangan layanan purna jual. BRIDA NTB merespons positif dengan menekankan pentingnya inovasi yang sejalan dengan kebutuhan masyarakat dan potensi ekonomi daerah.",
      "Melalui kemitraan ini, Gridwiz berharap dapat menghadirkan solusi transportasi listrik yang terjangkau, inklusif, dan berdampak sosial tinggi. Kolaborasi ini juga membuka jalan bagi pengembangan riset terapan di sektor energi baru terbarukan yang relevan bagi NTB.",
    ],
  },

  
];

export const beritaSlugs = (): string[] =>
  beritaItems.map((berita) => berita.slug);

export const findBeritaBySlug = (slug: string): BeritaItem | undefined =>
  beritaItems.find((berita) => berita.slug === slug);
