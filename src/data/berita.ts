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
  {
    slug: "gridwiz-hut-golkar-61",
    title: "PT Gridwiz Berpartisipasi dalam HUT ke-61 Partai Golkar NTB",
    date: "2025-10-21",
    image:
      "https://stuproztnegtdvowxqvt.supabase.co/storage/v1/object/public/images/News/golkar.jpg",
    description:
      "PT Gridwiz turut memeriahkan Hari Ulang Tahun ke-61 Partai Golkar NTB melalui kegiatan sepeda bersama dan sosialisasi transportasi listrik ramah lingkungan di Kota Mataram.",
    location: "Mataram, NTB",
    category: "Kegiatan Sosial & Lingkungan",
    readingTime: "3 menit",
    highlights: [
      "Kegiatan sepeda bersama memperingati HUT ke-61 Partai Golkar.",
      "Partisipasi PT Gridwiz dalam kampanye penggunaan sepeda listrik.",
      "Sinergi antara dunia usaha dan organisasi politik untuk mendukung energi bersih.",
    ],
    content: [
      "Dalam rangka memperingati Hari Ulang Tahun (HUT) ke-61 Partai Golkar, Dewan Pimpinan Daerah (DPD) Partai Golkar NTB menggelar kegiatan sepeda bersama pada Sabtu sore di Kota Mataram. Kegiatan ini diikuti oleh kader partai, masyarakat umum, dan sejumlah mitra strategis, termasuk PT Gridwiz sebagai pendukung utama dalam kampanye transportasi ramah lingkungan.",
      "PT Gridwiz, perusahaan yang bergerak di bidang inovasi energi terbarukan dan mobilitas listrik, memanfaatkan momentum ini untuk memperkenalkan sepeda listrik sebagai solusi transportasi masa depan yang efisien, terjangkau, dan berkelanjutan. Melalui kegiatan ini, Gridwiz berharap masyarakat dapat semakin mengenal manfaat penggunaan kendaraan listrik dalam menekan emisi karbon dan menciptakan lingkungan yang lebih bersih.",
      "Ketua DPD Partai Golkar NTB menyampaikan apresiasi atas kehadiran PT Gridwiz yang ikut mendukung kegiatan ini. Ia menegaskan bahwa semangat HUT ke-61 Golkar bukan hanya untuk mempererat kebersamaan antaranggota, tetapi juga untuk berkontribusi nyata dalam isu-isu sosial dan lingkungan, termasuk transisi energi hijau di daerah.",
      "Suasana kegiatan berlangsung meriah dengan partisipasi aktif peserta dari berbagai kalangan. Selain bersepeda bersama, para peserta juga berkesempatan mencoba langsung sepeda listrik yang disediakan oleh PT Gridwiz. Kegiatan ini menjadi simbol sinergi antara dunia usaha dan masyarakat dalam mewujudkan masa depan transportasi yang lebih bersih dan berkelanjutan di Nusa Tenggara Barat.",
    ],
  },
];

export const beritaSlugs = (): string[] =>
  beritaItems.map((berita) => berita.slug);

export const findBeritaBySlug = (slug: string): BeritaItem | undefined =>
  beritaItems.find((berita) => berita.slug === slug);
