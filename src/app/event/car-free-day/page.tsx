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
      "https://drive.google.com/file/d/1S4QP1ATVBOLAvaLEDMt41NyKsM_tkV2I/view?usp=sharing",
  },
  {
    imageSource:
      "https://drive.google.com/file/d/1kp-h3svRwXuB5xB4nlwoOuBSMmkHl2ds/view?usp=sharing",
  },
  {
    imageSource:
      "https://drive.google.com/file/d/10ZVLSaqigedKVuJ8PrfVPVJQwPjYUEv3/view?usp=sharing",
  },
  {
    imageSource:
      "https://drive.google.com/file/d/1GS66G-8L0UhvD83qHgTn_xlgsti2bMWB/view?usp=sharing",
  },
  {
    imageSource: "https://drive.google.com/file/d/1y3A9c0EcoG0xVmBHn4XenGeK_mP8OAbW/view?usp=sharing",
  },
  {
    imageSource: "https://drive.google.com/file/d/1L0ZA4skcdqQ70d43Dor0UbiL0Nd2stsG/view?usp=sharing",
  },
];

export default function CarFreeDay() {

  return (
    <section>
      <div
        className="relative min-h-screen bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: 'url("/cfd.jpg")' }}
      >
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Konten utama */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8">
            <span className="text-orange-500">Car</span>{" "}
            <span className="text-amber-500">Free Day</span>
          </h1>

          <p className="text-lg sm:text-2xl md:text-5xl font-extrabold text-gray-100 mb-8 max-w-xl">
            X
          </p>

          <img
            src="/logo/reflow-logo-white.png"
            alt="reflow-logo"
            className="w-32 sm:w-48 md:w-64 h-auto"
          />
        </div>
      </div>

      <div className="content bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] items-start">
            <div className="space-y-6 text-gray-700">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                Car Free Day Bersama Re:flow
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Gridwiz Energy &amp; Mobility hadir di Car Free Day untuk mengajak
                masyarakat hidup lebih sehat, aktif, dan ramah lingkungan. Rasakan
                langsung pengalaman berkendara dengan sepeda listrik Re:Flow —
                solusi mobilitas bebas emisi untuk masa depan Indonesia yang lebih
                hijau.
              </p>
              <div className="rounded-3xl bg-gradient-to-br from-orange-500 via-amber-500 to-rose-500 text-white p-8 shadow-xl">
                <p className="text-lg sm:text-xl italic leading-relaxed">
                  “Sebagai bagian dari komitmen terhadap mobilitas berkelanjutan
                  dan ramah lingkungan, Gridwiz E&amp;M turut meramaikan acara Car
                  Free Day (CFD) di Lombok.”
                </p>
                <p className="mt-4 text-sm uppercase tracking-wide text-white/80">
                  Gridwiz Energy &amp; Mobility
                </p>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="rounded-3xl border border-orange-100 bg-orange-50/60 p-8 shadow-lg shadow-orange-100">
                <h3 className="text-xl font-semibold text-orange-600">
                  Tujuan Kegiatan
                </h3>
                <p className="mt-3 text-sm sm:text-base text-orange-900/90 leading-relaxed">
                  Re:Flow CFD menghadirkan ruang sehat yang bebas polusi sekaligus
                  meningkatkan kesadaran akan mobilitas rendah emisi. Kegiatan ini
                  mengajak komunitas dan institusi pendidikan untuk merasakan gaya
                  hidup aktif, sehat, dan modern melalui teknologi sepeda listrik
                  Re:Flow.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Test Ride Gratis
                  </h4>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    Pengunjung dapat mencoba langsung sepeda listrik Re:Flow di
                    area khusus yang steril dari kendaraan bermotor dan dibimbing
                    oleh tim dari Gridwiz.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Booth Interaktif
                  </h4>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    Eksplorasi demo Battery Charging Station, simulasi VR, hingga
                    zona foto tematik yang menghadirkan pengalaman ramah lingkungan
                    nan futuristik.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-10 shadow-lg">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Gallery Car Free Day Re:Flow
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Jelajahi momen terbaik Car Free Day bersama Gridwiz Energy &amp;
                  Mobility lewat dokumentasi eksklusif Re:Flow.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-md">
                Dokumentasi Re:Flow
              </div>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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
