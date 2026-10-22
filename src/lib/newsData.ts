export interface NewsData {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  category: string;
  date: string;
  location: string;
  imageSrc: string;
  content: string;
}

export const newsData: NewsData[] = [
  {
    id: "1",
    slug: "gridwiz-luncurkan-ebike-terbaru",
    title: "Gridwiz Luncurkan E-Bike Terbaru untuk Mobilitas Perkotaan",
    shortDesc: "Gridwiz secara resmi meluncurkan lini E-Bike terbarunya yang dirancang khusus untuk memenuhi kebutuhan mobilitas masyarakat perkotaan dengan desain modern dan ramah lingkungan.",
    category: "Product Launch",
    date: "15 Agustus 2026",
    location: "Jakarta",
    imageSrc: "/images/events/hero.png",
    content: "Gridwiz terus berinovasi dalam menghadirkan solusi mobilitas hijau. Pada tanggal 15 Agustus 2026, kami resmi meluncurkan lini E-Bike terbaru yang dilengkapi dengan baterai tahan lama dan fitur pintar yang terhubung langsung dengan aplikasi Re:Flow. \n\nE-Bike ini tidak hanya menawarkan kenyamanan berkendara di area perkotaan yang padat, tetapi juga dirancang dengan material ringan dan kuat. Dengan hadirnya produk ini, kami berharap dapat semakin mendorong transisi masyarakat menuju gaya hidup yang lebih berkelanjutan dan mengurangi jejak karbon."
  },
  {
    id: "2",
    slug: "kolaborasi-reflow-dengan-pemerintah-ntb",
    title: "Kolaborasi Re:Flow dan Pemerintah NTB Dukung Pariwisata Hijau",
    shortDesc: "Dalam upaya mendukung pariwisata hijau berkelanjutan, Re:Flow menjalin kerja sama strategis dengan Pemerintah Provinsi NTB untuk menyediakan stasiun E-Bike di berbagai titik wisata.",
    category: "Partnership",
    date: "02 September 2026",
    location: "Mataram, NTB",
    imageSrc: "/images/events/gobarSunset.png",
    content: "Pariwisata berkelanjutan menjadi fokus utama di Nusa Tenggara Barat. Bekerja sama dengan Pemerintah Provinsi NTB, Re:Flow kini hadir di berbagai destinasi wisata utama seperti Senggigi, Mandalika, dan Sembalun. \n\nKolaborasi ini memungkinkan para wisatawan untuk menyewa E-Bike Re:Flow dengan mudah, menjelajahi keindahan alam Lombok tanpa menghasilkan emisi gas buang. Kami berkomitmen untuk terus berekspansi dan mendukung visi pemerintah menjadikan NTB sebagai salah satu pelopor destinasi pariwisata hijau di Indonesia."
  },
  {
    id: "3",
    slug: "capai-1000-pengguna-aktif",
    title: "Aplikasi Re:Flow Capai 1.000 Pengguna Aktif di Bulan Pertama",
    shortDesc: "Sebuah pencapaian luar biasa bagi Re:Flow, aplikasi penyewaan E-Bike kami berhasil menembus angka 1.000 pengguna aktif hanya dalam waktu satu bulan setelah peluncuran.",
    category: "Milestone",
    date: "20 September 2026",
    location: "Lombok Barat",
    imageSrc: "/images/products/ebike.png",
    content: "Antusiasme masyarakat terhadap solusi mobilitas yang ditawarkan Gridwiz dan Re:Flow sangat tinggi. Di bulan pertama operasional penuhnya, aplikasi Re:Flow berhasil digunakan oleh lebih dari 1.000 pengguna aktif yang melakukan peminjaman harian.\n\nPencapaian ini membuktikan bahwa kesadaran akan pentingnya mobilitas ramah lingkungan semakin meningkat. Kami berterima kasih atas dukungan semua pihak dan berjanji akan terus meningkatkan kualitas layanan serta memperbanyak armada kendaraan listrik di masa mendatang."
  }
];

export function getNewsBySlug(slug: string): NewsData | undefined {
  return newsData.find((news) => news.slug === slug);
}
