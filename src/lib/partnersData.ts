// Data mitra Gridwiz Re:Flow — Cafe & Restaurant dan Hotel & Resort
// Digunakan bersama oleh halaman /partners dan /partners/[slug]

export type Partner = {
  slug: string;
  category: "cafe" | "hotel";
  name: string;
  tagline_id: string;
  tagline_en: string;
  desc_id: string;
  desc_en: string;
  logo: string;           // path relatif dari /public
  coverImage: string;     // gambar cover untuk card & hero detail
  location: string;
  gmapsUrl?: string;
  website?: string;
  whatsapp?: string;
  ebikeCount?: string | number; // Jumlah unit e-bike yang tersedia di tenant
  stats?: {
    label_id: string;
    label_en: string;
    value: string;
  }[];
  benefits_id: string[];
  benefits_en: string[];
  about_id: string;
  about_en: string;
};

export const partners: Partner[] = [
  {
    slug: "madjoe",
    category: "cafe",
    name: "Madjoe",
    tagline_id: "Kafe modern di jantung Mataram",
    tagline_en: "Modern café at the heart of Mataram",
    desc_id: "Madjoe adalah destinasi kafe yang menawarkan pengalaman minum kopi premium sambil berkontribusi pada mobilitas hijau bersama Re:Flow.",
    desc_en: "Madjoe is a café destination offering a premium coffee experience while contributing to green mobility together with Re:Flow.",
    logo: "/images/partners/logo/madjoe.svg",
    coverImage: "/images/partners/space/madjoe.svg",
    location: "Mataram, Nusa Tenggara Barat",
    ebikeCount: "6",
    stats: [
      { label_id: "Armada E-Bike", label_en: "E-Bike Fleet", value: "6" },
      { label_id: "Perjalanan / Bulan", label_en: "Rides / Month", value: "320+" },
      { label_id: "CO₂ Terhemat", label_en: "CO₂ Saved", value: "18 kg" },
    ],
    benefits_id: [
      "6 unit E-Bike Re:Flow tersedia untuk tamu",
      "Stasiun pengisian daya di area parkir",
      "Diskon khusus untuk member Re:Flow",
      "Branding bersama di media sosial",
    ],
    benefits_en: [
      "6 Re:Flow E-Bike units available for guests",
      "Charging station in the parking area",
      "Special discounts for Re:Flow members",
      "Co-branding on social media",
    ],
    about_id: "Madjoe hadir sebagai ruang kopi yang nyaman dan estetis di Mataram. Bermitra dengan Re:Flow, Madjoe menghadirkan armada E-Bike kepada tamu sebagai alternatif transportasi ramah lingkungan untuk menjelajahi sudut-sudut kota Mataram.",
    about_en: "Madjoe presents itself as a comfortable and aesthetic coffee space in Mataram. Partnering with Re:Flow, Madjoe provides E-Bike fleets to guests as an eco-friendly transportation alternative to explore the corners of Mataram city.",
  },
  {
    slug: "eclair",
    category: "cafe",
    name: "Éclair",
    tagline_id: "Kafe elegan dengan sentuhan Eropa",
    tagline_en: "Elegant café with a European touch",
    desc_id: "Éclair menghadirkan pastri premium dan kopi artisan yang dipadukan dengan pengalaman mobilitas hijau untuk para pengunjung Lombok.",
    desc_en: "Éclair brings premium pastries and artisan coffee combined with green mobility experiences for Lombok visitors.",
    logo: "/images/partners/logo/eclair.svg",
    coverImage: "/images/partners/space/eclair.svg",
    location: "Senggigi, Lombok Barat",
    ebikeCount: "4",
    stats: [
      { label_id: "Armada E-Bike", label_en: "E-Bike Fleet", value: "4" },
      { label_id: "Perjalanan / Bulan", label_en: "Rides / Month", value: "215+" },
      { label_id: "CO₂ Terhemat", label_en: "CO₂ Saved", value: "12 kg" },
    ],
    benefits_id: [
      "4 unit E-Bike Re:Flow tersedia di lokasi",
      "Halaman khusus mitra di aplikasi Re:Flow",
      "Diskon 15% untuk pengguna aktif Re:Flow",
      "Dukungan marketing konten bersama",
    ],
    benefits_en: [
      "4 Re:Flow E-Bike units available on-site",
      "Dedicated partner page in the Re:Flow app",
      "15% discount for active Re:Flow users",
      "Joint content marketing support",
    ],
    about_id: "Éclair menawarkan pengalaman kafe Eropa di tepi pantai Senggigi. Dengan armada E-Bike Re:Flow, tamu dapat menjelajahi kawasan Senggigi dengan gaya sambil menjaga kelestarian alam Lombok.",
    about_en: "Éclair offers a European café experience on the shores of Senggigi. With Re:Flow's E-Bike fleet, guests can explore the Senggigi area in style while preserving the nature of Lombok.",
  },
  {
    slug: "bento-kopi",
    category: "cafe",
    name: "Bento Kopi",
    tagline_id: "Kopi lokal, mobilitas global",
    tagline_en: "Local coffee, global mobility",
    desc_id: "Bento Kopi menggabungkan cita rasa kopi lokal NTB terbaik dengan layanan E-Bike Re:Flow untuk pengalaman wisata yang tak terlupakan.",
    desc_en: "Bento Kopi combines the best local NTB coffee flavors with Re:Flow E-Bike services for an unforgettable tourism experience.",
    logo: "/images/partners/logo/bento.svg",
    coverImage: "/images/partners/space/bento.svg",
    location: "Mataram, Nusa Tenggara Barat",
    ebikeCount: "8",
    stats: [
      { label_id: "Armada E-Bike", label_en: "E-Bike Fleet", value: "8" },
      { label_id: "Perjalanan / Bulan", label_en: "Rides / Month", value: "480+" },
      { label_id: "CO₂ Terhemat", label_en: "CO₂ Saved", value: "26 kg" },
    ],
    benefits_id: [
      "8 unit E-Bike Re:Flow tersedia 24 jam",
      "Stasiun swap baterai eksklusif",
      "Program loyalty terpadu dengan Re:Flow",
      "Pelatihan staf dan dukungan operasional",
    ],
    benefits_en: [
      "8 Re:Flow E-Bike units available 24 hours",
      "Exclusive battery swap station",
      "Integrated loyalty program with Re:Flow",
      "Staff training and operational support",
    ],
    about_id: "Bento Kopi adalah kafe yang merayakan kekayaan biji kopi Nusa Tenggara Barat. Menjadi mitra Re:Flow dengan armada terbesar di antara mitra kafe, Bento Kopi berkomitmen pada visi pariwisata berkelanjutan.",
    about_en: "Bento Kopi is a café that celebrates the richness of West Nusa Tenggara coffee beans. Becoming a Re:Flow partner with the largest fleet among café partners, Bento Kopi commits to the vision of sustainable tourism.",
  },
  {
    slug: "merumata",
    category: "hotel",
    name: "Merumata",
    tagline_id: "Keanggunan di tepi pantai Senggigi",
    tagline_en: "Elegance on the shores of Senggigi",
    desc_id: "Merumata Resort menawarkan pengalaman menginap mewah yang dilengkapi dengan layanan mobilitas EV Re:Flow untuk setiap tamu.",
    desc_en: "Merumata Resort offers a luxurious stay experience complemented by Re:Flow EV mobility services for every guest.",
    logo: "/images/partners/logo/merumata.svg",
    coverImage: "/images/partners/space/merumata.svg",
    location: "Senggigi, Lombok Barat",
    ebikeCount: "8",
    stats: [
      { label_id: "Armada E-Motor", label_en: "E-Motor Fleet", value: "8" },
      { label_id: "Tamu / Bulan", label_en: "Guests / Month", value: "200+" },
      { label_id: "CO₂ Terhemat", label_en: "CO₂ Saved", value: "35 kg" },
    ],
    benefits_id: [
      "8 unit E-Motor Re:Flow untuk tamu resort",
      "Program wisata terintegrasi Senggigi",
      "Prioritas booking unit untuk tamu Merumata",
      "Dukungan concierge Re:Flow 24/7",
    ],
    benefits_en: [
      "8 Re:Flow E-Motor units for resort guests",
      "Integrated Senggigi tour programs",
      "Priority booking for Merumata guests",
      "24/7 Re:Flow concierge support",
    ],
    about_id: "Merumata Resort adalah destinasi hotel bintang lima di pantai Senggigi yang menawarkan pengalaman menginap tak terlupakan. Bermitra dengan Re:Flow, Merumata memberikan nilai tambah berupa layanan mobilitas EV eksklusif untuk setiap tamu.",
    about_en: "Merumata Resort is a five-star hotel destination on Senggigi beach that offers an unforgettable stay experience. Partnering with Re:Flow, Merumata adds value through exclusive EV mobility services for every guest.",
  },
  {
    slug: "aruna",
    category: "cafe",
    name: "Aruna",
    tagline_id: "Mitra Gridwiz - Aruna",
    tagline_en: "Gridwiz Partner - Aruna",
    desc_id: "Aruna adalah mitra Gridwiz.",
    desc_en: "Aruna is a Gridwiz partner.",
    logo: "/images/partners/logo/aruna.svg",
    coverImage: "/images/partners/space/aruna.svg",
    location: "Nusa Tenggara Barat",
    stats: [
      { label_id: "Armada", label_en: "Fleet", value: "TBA" }
    ],
    benefits_id: ["Benefit 1"],
    benefits_en: ["Benefit 1"],
    about_id: "Tentang Aruna",
    about_en: "About Aruna"
  },
  {
    slug: "deco",
    category: "cafe",
    name: "Deco",
    tagline_id: "Mitra Gridwiz - Deco",
    tagline_en: "Gridwiz Partner - Deco",
    desc_id: "Deco adalah mitra Gridwiz.",
    desc_en: "Deco is a Gridwiz partner.",
    logo: "/images/partners/logo/deco.svg",
    coverImage: "/images/partners/space/deco.svg",
    location: "Nusa Tenggara Barat",
    stats: [
      { label_id: "Armada", label_en: "Fleet", value: "TBA" }
    ],
    benefits_id: ["Benefit 1"],
    benefits_en: ["Benefit 1"],
    about_id: "Tentang Deco",
    about_en: "About Deco"
  },
  {
    slug: "esda",
    category: "cafe",
    name: "Esda",
    tagline_id: "Mitra Gridwiz - Esda",
    tagline_en: "Gridwiz Partner - Esda",
    desc_id: "Esda adalah mitra Gridwiz.",
    desc_en: "Esda is a Gridwiz partner.",
    logo: "/images/partners/logo/esda.svg",
    coverImage: "/images/partners/space/esda.svg",
    location: "Nusa Tenggara Barat",
    stats: [
      { label_id: "Armada", label_en: "Fleet", value: "TBA" }
    ],
    benefits_id: ["Benefit 1"],
    benefits_en: ["Benefit 1"],
    about_id: "Tentang Esda",
    about_en: "About Esda"
  },
  {
    slug: "gili1",
    category: "cafe",
    name: "Gili1",
    tagline_id: "Mitra Gridwiz - Gili1",
    tagline_en: "Gridwiz Partner - Gili1",
    desc_id: "Gili1 adalah mitra Gridwiz.",
    desc_en: "Gili1 is a Gridwiz partner.",
    logo: "/images/partners/logo/gili1.svg",
    coverImage: "/images/partners/space/gili1.svg",
    location: "Nusa Tenggara Barat",
    stats: [
      { label_id: "Armada", label_en: "Fleet", value: "TBA" }
    ],
    benefits_id: ["Benefit 1"],
    benefits_en: ["Benefit 1"],
    about_id: "Tentang Gili1",
    about_en: "About Gili1"
  },
  {
    slug: "gili2",
    category: "cafe",
    name: "Gili2",
    tagline_id: "Mitra Gridwiz - Gili2",
    tagline_en: "Gridwiz Partner - Gili2",
    desc_id: "Gili2 adalah mitra Gridwiz.",
    desc_en: "Gili2 is a Gridwiz partner.",
    logo: "/images/partners/logo/gili2.svg",
    coverImage: "/images/partners/space/gili2.svg",
    location: "Nusa Tenggara Barat",
    stats: [
      { label_id: "Armada", label_en: "Fleet", value: "TBA" }
    ],
    benefits_id: ["Benefit 1"],
    benefits_en: ["Benefit 1"],
    about_id: "Tentang Gili2",
    about_en: "About Gili2"
  },
  {
    slug: "hayafarama",
    category: "cafe",
    name: "Hayafarama",
    tagline_id: "Mitra Gridwiz - Hayafarama",
    tagline_en: "Gridwiz Partner - Hayafarama",
    desc_id: "Hayafarama adalah mitra Gridwiz.",
    desc_en: "Hayafarama is a Gridwiz partner.",
    logo: "/images/partners/logo/hayafarma.svg",
    coverImage: "/images/partners/space/hayafarama.svg",
    location: "Nusa Tenggara Barat",
    stats: [
      { label_id: "Armada", label_en: "Fleet", value: "TBA" }
    ],
    benefits_id: ["Benefit 1"],
    benefits_en: ["Benefit 1"],
    about_id: "Tentang Hayafarama",
    about_en: "About Hayafarama"
  },
  {
    slug: "kinta",
    category: "cafe",
    name: "Kinta",
    tagline_id: "Mitra Gridwiz - Kinta",
    tagline_en: "Gridwiz Partner - Kinta",
    desc_id: "Kinta adalah mitra Gridwiz.",
    desc_en: "Kinta is a Gridwiz partner.",
    logo: "/images/partners/logo/kinta.svg",
    coverImage: "/images/partners/space/kinta.svg",
    location: "Nusa Tenggara Barat",
    stats: [
      { label_id: "Armada", label_en: "Fleet", value: "TBA" }
    ],
    benefits_id: ["Benefit 1"],
    benefits_en: ["Benefit 1"],
    about_id: "Tentang Kinta",
    about_en: "About Kinta"
  },
  {
    slug: "matowa",
    category: "cafe",
    name: "Matowa",
    tagline_id: "Mitra Gridwiz - Matowa",
    tagline_en: "Gridwiz Partner - Matowa",
    desc_id: "Matowa adalah mitra Gridwiz.",
    desc_en: "Matowa is a Gridwiz partner.",
    logo: "/images/partners/logo/mattowa.svg",
    coverImage: "/images/partners/space/matowa.svg",
    location: "Nusa Tenggara Barat",
    stats: [
      { label_id: "Armada", label_en: "Fleet", value: "TBA" }
    ],
    benefits_id: ["Benefit 1"],
    benefits_en: ["Benefit 1"],
    about_id: "Tentang Matowa",
    about_en: "About Matowa"
  },
  {
    slug: "mayura",
    category: "cafe",
    name: "Mayura",
    tagline_id: "Mitra Gridwiz - Mayura",
    tagline_en: "Gridwiz Partner - Mayura",
    desc_id: "Mayura adalah mitra Gridwiz.",
    desc_en: "Mayura is a Gridwiz partner.",
    logo: "/images/partners/logo/mayura.svg",
    coverImage: "/images/partners/space/mayura.svg",
    location: "Nusa Tenggara Barat",
    stats: [
      { label_id: "Armada", label_en: "Fleet", value: "TBA" }
    ],
    benefits_id: ["Benefit 1"],
    benefits_en: ["Benefit 1"],
    about_id: "Tentang Mayura",
    about_en: "About Mayura"
  },
  {
    slug: "poltekpar",
    category: "cafe",
    name: "Poltekpar",
    tagline_id: "Mitra Gridwiz - Poltekpar",
    tagline_en: "Gridwiz Partner - Poltekpar",
    desc_id: "Poltekpar adalah mitra Gridwiz.",
    desc_en: "Poltekpar is a Gridwiz partner.",
    logo: "/images/partners/logo/poltekpar.svg",
    coverImage: "/images/partners/space/poltekpar.svg",
    location: "Nusa Tenggara Barat",
    stats: [
      { label_id: "Armada", label_en: "Fleet", value: "TBA" }
    ],
    benefits_id: ["Benefit 1"],
    benefits_en: ["Benefit 1"],
    about_id: "Tentang Poltekpar",
    about_en: "About Poltekpar"
  },
  {
    slug: "rplay",
    category: "cafe",
    name: "Rplay",
    tagline_id: "Mitra Gridwiz - Rplay",
    tagline_en: "Gridwiz Partner - Rplay",
    desc_id: "Rplay adalah mitra Gridwiz.",
    desc_en: "Rplay is a Gridwiz partner.",
    logo: "/images/partners/logo/rplay.svg",
    coverImage: "/images/partners/space/rplay.svg",
    location: "Nusa Tenggara Barat",
    stats: [
      { label_id: "Armada", label_en: "Fleet", value: "TBA" }
    ],
    benefits_id: ["Benefit 1"],
    benefits_en: ["Benefit 1"],
    about_id: "Tentang Rplay",
    about_en: "About Rplay"
  },
  {
    slug: "uin",
    category: "cafe",
    name: "Uin",
    tagline_id: "Mitra Gridwiz - Uin",
    tagline_en: "Gridwiz Partner - Uin",
    desc_id: "Uin adalah mitra Gridwiz.",
    desc_en: "Uin is a Gridwiz partner.",
    logo: "/images/partners/logo/uin.svg",
    coverImage: "/images/partners/space/uin.svg",
    location: "Nusa Tenggara Barat",
    stats: [
      { label_id: "Armada", label_en: "Fleet", value: "TBA" }
    ],
    benefits_id: ["Benefit 1"],
    benefits_en: ["Benefit 1"],
    about_id: "Tentang Uin",
    about_en: "About Uin"
  },
  {
    slug: "ummat",
    category: "cafe",
    name: "Ummat",
    tagline_id: "Mitra Gridwiz - Ummat",
    tagline_en: "Gridwiz Partner - Ummat",
    desc_id: "Ummat adalah mitra Gridwiz.",
    desc_en: "Ummat is a Gridwiz partner.",
    logo: "/images/partners/logo/ummat.svg",
    coverImage: "/images/partners/space/ummat.svg",
    location: "Nusa Tenggara Barat",
    stats: [
      { label_id: "Armada", label_en: "Fleet", value: "TBA" }
    ],
    benefits_id: ["Benefit 1"],
    benefits_en: ["Benefit 1"],
    about_id: "Tentang Ummat",
    about_en: "About Ummat"
  },
  {
    slug: "acibara",
    category: "cafe",
    name: "Acibara",
    tagline_id: "Mitra Gridwiz - Acibara",
    tagline_en: "Gridwiz Partner - Acibara",
    desc_id: "Acibara adalah mitra Gridwiz.",
    desc_en: "Acibara is a Gridwiz partner.",
    logo: "/images/partners/logo/acibara.svg",
    coverImage: "/images/partners/space/acibara.svg",
    location: "Nusa Tenggara Barat",
    stats: [
      { label_id: "Armada", label_en: "Fleet", value: "TBA" }
    ],
    benefits_id: ["Benefit 1"],
    benefits_en: ["Benefit 1"],
    about_id: "Tentang Acibara",
    about_en: "About Acibara"
  },
  {
    slug: "dapoersasak",
    category: "cafe",
    name: "Dapoersasak",
    tagline_id: "Mitra Gridwiz - Dapoersasak",
    tagline_en: "Gridwiz Partner - Dapoersasak",
    desc_id: "Dapoersasak adalah mitra Gridwiz.",
    desc_en: "Dapoersasak is a Gridwiz partner.",
    logo: "/images/partners/logo/dapoersasak.svg",
    coverImage: "/images/partners/space/dapoersasak.svg",
    location: "Nusa Tenggara Barat",
    stats: [
      { label_id: "Armada", label_en: "Fleet", value: "TBA" }
    ],
    benefits_id: ["Benefit 1"],
    benefits_en: ["Benefit 1"],
    about_id: "Tentang Dapoersasak",
    about_en: "About Dapoersasak"
  },
  {
    slug: "dcmmandalika",
    category: "cafe",
    name: "Dcmmandalika",
    tagline_id: "Mitra Gridwiz - Dcmmandalika",
    tagline_en: "Gridwiz Partner - Dcmmandalika",
    desc_id: "Dcmmandalika adalah mitra Gridwiz.",
    desc_en: "Dcmmandalika is a Gridwiz partner.",
    logo: "/images/partners/logo/dcmmandalika.svg",
    coverImage: "/images/partners/space/dcmmandalika.svg",
    location: "Nusa Tenggara Barat",
    stats: [
      { label_id: "Armada", label_en: "Fleet", value: "TBA" }
    ],
    benefits_id: ["Benefit 1"],
    benefits_en: ["Benefit 1"],
    about_id: "Tentang Dcmmandalika",
    about_en: "About Dcmmandalika"
  },
  {
    slug: "golkar",
    category: "cafe",
    name: "Golkar",
    tagline_id: "Mitra Gridwiz - Golkar",
    tagline_en: "Gridwiz Partner - Golkar",
    desc_id: "Golkar adalah mitra Gridwiz.",
    desc_en: "Golkar is a Gridwiz partner.",
    logo: "/images/partners/logo/golkar.svg",
    coverImage: "/images/partners/space/golkar.svg",
    location: "Nusa Tenggara Barat",
    stats: [
      { label_id: "Armada", label_en: "Fleet", value: "TBA" }
    ],
    benefits_id: ["Benefit 1"],
    benefits_en: ["Benefit 1"],
    about_id: "Tentang Golkar",
    about_en: "About Golkar"
  },
  {
    slug: "janjijiwa",
    category: "cafe",
    name: "Janjijiwa",
    tagline_id: "Mitra Gridwiz - Janjijiwa",
    tagline_en: "Gridwiz Partner - Janjijiwa",
    desc_id: "Janjijiwa adalah mitra Gridwiz.",
    desc_en: "Janjijiwa is a Gridwiz partner.",
    logo: "/images/partners/logo/janjijiwa.svg",
    coverImage: "/images/partners/space/janjijiwa.svg",
    location: "Nusa Tenggara Barat",
    stats: [
      { label_id: "Armada", label_en: "Fleet", value: "TBA" }
    ],
    benefits_id: ["Benefit 1"],
    benefits_en: ["Benefit 1"],
    about_id: "Tentang Janjijiwa",
    about_en: "About Janjijiwa"
  },
  {
    slug: "pinkot",
    category: "cafe",
    name: "Pinkot",
    tagline_id: "Mitra Gridwiz - Pinkot",
    tagline_en: "Gridwiz Partner - Pinkot",
    desc_id: "Pinkot adalah mitra Gridwiz.",
    desc_en: "Pinkot is a Gridwiz partner.",
    logo: "/images/partners/logo/pinkot.svg",
    coverImage: "/images/partners/space/pinkot.svg",
    location: "Nusa Tenggara Barat",
    stats: [
      { label_id: "Armada", label_en: "Fleet", value: "TBA" }
    ],
    benefits_id: ["Benefit 1"],
    benefits_en: ["Benefit 1"],
    about_id: "Tentang Pinkot",
    about_en: "About Pinkot"
  },
  {
    slug: "unram",
    category: "cafe",
    name: "Unram",
    tagline_id: "Mitra Gridwiz - Unram",
    tagline_en: "Gridwiz Partner - Unram",
    desc_id: "Unram adalah mitra Gridwiz.",
    desc_en: "Unram is a Gridwiz partner.",
    logo: "/images/partners/logo/unram.svg",
    coverImage: "/images/partners/space/unram.svg",
    location: "Nusa Tenggara Barat",
    stats: [
      { label_id: "Armada", label_en: "Fleet", value: "TBA" }
    ],
    benefits_id: ["Benefit 1"],
    benefits_en: ["Benefit 1"],
    about_id: "Tentang Unram",
    about_en: "About Unram"
  },
];


export function getPartnerBySlug(slug: string): Partner | undefined {
  return partners.find((p) => p.slug === slug);
}

export function getPartnersByCategory(category: "cafe" | "hotel"): Partner[] {
  return partners.filter((p) => p.category === category);
}
