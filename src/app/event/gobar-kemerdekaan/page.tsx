const extractDriveId = (input: string) => {
  const trimmed = input.trim();
  const directPattern = /^[a-zA-Z0-9_-]+$/;
  if (directPattern.test(trimmed)) {
    return trimmed;
  }

  const bySlash = trimmed.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (bySlash?.[1]) {
    return bySlash[1];
  }

  const byQuery = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (byQuery?.[1]) {
    return byQuery[1];
  }

  const fallback = trimmed.split("/").filter(Boolean).pop();
  if (fallback) {
    return fallback.split("?")[0];
  }

  return trimmed;
};

const driveImageUrl = (source: string) => {
  const id = extractDriveId(source);
  return `https://lh3.googleusercontent.com/d/${id}=w1600-h900-no`;
};

type GalleryItem = {
  imageSource: string;
};

const galleryItems: GalleryItem[] = [
  {
    imageSource:
      "https://drive.google.com/file/d/1geOeL4N70QOWAvG1nFoHPOd7OWraAoyC/view?usp=sharing",
  },
  {
    imageSource:
      "https://drive.google.com/file/d/1h5K8rHtxpi_ockrq7lrjjQhsMFbVJKH4/view?usp=sharing",
  },
  {
    imageSource:
      "https://drive.google.com/file/d/1kFdvUGMF_z7NRnMwc6MkYaLMwZMj9gkF/view?usp=sharing",
  },
  {
    imageSource:
      "https://drive.google.com/file/d/1iSoqHV_a8t6cmu9_kotvsn-Au5D_O57i/view?usp=sharing",
  },
  {
    imageSource:
      "https://drive.google.com/file/d/16acB7VSybOxqelEg5RlpNRUfqxQ3cBS4/view?usp=sharing",
  },
  {
    imageSource:
      "https://drive.google.com/file/d/1cnIl4BYyhP7h5IRBoM1sqs6DrGAecfcN/view?usp=sharing",
  },
];

export default function GobarKemerdekaan() {
  return (
    <section>
      <div
        className="relative min-h-screen bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: 'url("/gobar-kemerdekaan.JPG")' }}
      >
        {/* Overlay hitam transparan */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Konten utama */}
        <div className="relative z-10 flex flex-col items-start justify-end min-h-screen text-white px-6 sm:px-12 md:px-16 lg:px-24 py-12 sm:py-16 gap-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            <span className="text-red-500">Gobar</span> Kemerdekaan
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 max-w-2xl leading-relaxed">
            Dalam semangat memperingati Hari Kemerdekaan ke-80 Republik
            Indonesia, Gridwiz Energy & Mobility mengajak masyarakat bergerak
            aktif dan peduli lingkungan melalui layanan sepeda listrik inovatif
            Re:Flow.
          </p>
        </div>
      </div>

      <div className="content bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
            <div className="space-y-6 text-gray-700">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                Tingkatkan semangat kemerdekaan
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Gobar Kemerdekaan menghadirkan gowes bareng bernuansa merah putih
                sebagai wujud syukur atas kemerdekaan Indonesia. Ratusan peserta
                dari komunitas, pelajar, hingga keluarga ikut meramaikan jalur
                ikonik Kota Mataram dengan sepeda listrik Re:Flow, menciptakan
                parade yang energik sekaligus ramah lingkungan.
              </p>
              <div className="rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-700 text-white p-8 shadow-xl">
                <p className="text-lg sm:text-xl italic leading-relaxed">
                  “Gowes Merdeka bukan sekadar perayaan, melainkan gerakan nyata
                  untuk menyalakan gaya hidup sehat, teknologi hijau, dan solidaritas
                  antar generasi.”
                </p>
                <p className="mt-4 text-sm uppercase tracking-wide text-white/80">
                  Gridwiz Energy &amp; Mobility
                </p>
              </div>
              <p className="text-base sm:text-lg leading-relaxed">
                Sepanjang acara, peserta menikmati edukasi mengenai teknologi
                baterai, fasilitas charging port, serta berbagai aktivitas tematik
                yang memperkuat rasa cinta tanah air. Semua tersaji dalam atmosfer
                meriah khas Agustus dengan dukungan mitra dan sponsor lokal.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="rounded-3xl border border-red-200 bg-red-50/70 p-8 shadow-lg shadow-red-100">
                <h3 className="text-xl font-semibold text-red-600">
                  Highlight Kegiatan
                </h3>
                <ul className="mt-4 space-y-3 text-sm sm:text-base text-red-900/90 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-500"></span>
                    Upacara singkat dan doa bersama sebelum start sebagai simbol
                    rasa syukur atas kemerdekaan.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-500"></span>
                    Parade gowes merah putih dengan ornamen bendera di setiap unit
                    Re:Flow dan atribut peserta.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-500"></span>
                    Finish line celebration dengan sesi hiburan, kuliner lokal,
                    dan pembagian doorprize bertema kemerdekaan.
                  </li>
                </ul>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Rute Kemerdekaan
                  </h4>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    Start Universitas Mataram &rarr; Jalan Pendidikan &rarr; Jalan
                    Majapahit &rarr; Finish Taman Loang Baloq dengan sejumlah pit stop
                    edukatif.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Support Re:Flow
                  </h4>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    Tim teknis Gridwiz memastikan unit siap pakai, plus demo Battery
                    Charging Station yang memperlihatkan ekosistem kendaraan listrik.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-white via-red-50 to-white p-10 shadow-lg">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-3">
                <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-600">
                  Nasionalisme
                </span>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Setiap peserta membawa atribut merah putih, menjadikan gowes ini
                  ajang parade cinta tanah air yang modern dan inklusif.
                </p>
              </div>
              <div className="space-y-3">
                <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-600">
                  Edukasi Hijau
                </span>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Workshop singkat mengenai mobilitas rendah emisi hadir di beberapa
                  titik agar masyarakat memahami manfaat Re:Flow lebih jauh.
                </p>
              </div>
              <div className="space-y-3">
                <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-600">
                  Kolaborasi
                </span>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Dukungan sponsor dan media partner menghadirkan booth interaktif
                  yang menambah pengalaman peserta sekaligus promosi brand lokal.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-lg">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Gallery Gobar Kemerdekaan
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Update tautan Google Drive di daftar bawah agar galeri selalu
                  menampilkan dokumentasi terbaru bernuansa merah putih.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-md">
                Dokumentasi Merdeka
              </div>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-2xl border border-red-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={driveImageUrl(item.imageSource)}
                      alt=""
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
