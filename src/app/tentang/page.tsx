"use client";

const organization = {
  ceo: {
    title: "CEO",
    name: "Dr. Shin Seoungha",
  },
  directors: [
    {
      title: "Director of Service",
      name: "Victor Lee",
      teams: [
        {
          title: "IT Team Leader",
          subtitle: "Social Media Analyst & Interns",
        },
        {
          title: "Business Analyst",
          subtitle: "Interns",
        },
      ],
    },
    {
      title: "Director of Operational",
      name: "Alfiyah Umi",
      teams: [
        {
          title: "Hardware Team",
          subtitle: "Interns",
        },
        {
          title: "Admin",
          subtitle: "Interns",
        },
      ],
    },
  ],
};

export default function AboutUs() {
  return (
    <div className="text-gray-900">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <video
          className="w-full h-full object-cover"
          src="company-video-.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Visi & Misi */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-32">
          {/* Teks */}
          <div className="flex flex-col justify-between">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visi</h2>
            <p className="text-gray-700 mb-6 max-w-2xl text-lg md:text-xl">
              Menjadi pelopor solusi mobilitas mikro ramah lingkungan berbasis
              teknologi di Indonesia, dengan jangkauan yang inklusif dan
              berdampak sosial.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">Misi</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 max-w-2xl text-lg md:text-xl">
              <li>
                Mendorong gaya hidup aktif dan sadar lingkungan di masyarakat
                urban.
              </li>
              <li>
                Menyediakan layanan transportasi hijau yang efisien, aman, dan
                mudah diakses.
              </li>
              <li>
                Mengembangkan ekosistem mobilitas berkelanjutan melalui
                teknologi dan kolaborasi lintas sektor.
              </li>
              <li>
                Meningkatkan kesadaran masyarakat akan pentingnya mobilitas
                berkelanjutan melalui kegiatan edukatif dan partisipatif.
              </li>
            </ul>
          </div>

          {/* Gambar */}
          <div className="flex justify-center items-center">
            <img
              src="/logo/reflow-logo-black.png"
              alt="Visi Misi"
              className="w-full max-w-lg rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-red-50 via-white to-white">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center rounded-full bg-red-100 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-red-600">
              Struktur Organisasi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Gridwiz Leadership &amp; Team
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Sinergi lintas divisi menjaga operasional Re:Flow tetap gesit,
              inovatif, dan berorientasi pada pelayanan terbaik bagi pengguna
              serta mitra.
            </p>
          </div>

          <div className="flex flex-col items-center gap-16">
            <div className="flex flex-col items-center gap-6">
              <div className="rounded-3xl border border-red-200 bg-white/80 px-8 py-6 text-center shadow-lg shadow-red-100 backdrop-blur">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-red-500">
                  {organization.ceo.title}
                </p>
                <p className="mt-2 text-2xl font-semibold text-gray-900">
                  {organization.ceo.name}
                </p>
              </div>
              <div className="hidden md:block h-16 w-px bg-red-200" />
            </div>

            <div className="relative w-full max-w-5xl">
              <div className="hidden md:block absolute top-0 left-0 right-0 h-0.5 bg-red-200" />
              <div className="grid w-full gap-12 md:grid-cols-2 md:pt-16">
                {organization.directors.map((director) => (
                  <div
                    key={director.title}
                    className="relative flex flex-col items-center gap-6 text-center"
                  >
                    <div className="hidden md:block absolute -top-16 left-1/2 h-16 w-px -translate-x-1/2 bg-red-200" />
                    <div className="rounded-3xl border border-red-200 bg-white/90 px-6 py-5 shadow-md shadow-red-100 backdrop-blur-sm">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
                        {director.title}
                      </p>
                      <p className="mt-2 text-xl font-semibold text-gray-900">
                        {director.name}
                      </p>
                    </div>
                    <div className="hidden md:block h-8 w-px bg-red-200" />
                    <div className="relative w-full max-w-md">
                      <div className="hidden md:block absolute top-0 left-0 right-0 h-0.5 bg-red-200" />
                      <div className="hidden md:block absolute top-0 left-[25%] h-10 w-0.5 -translate-x-1/2 transform bg-red-200" />
                      <div className="hidden md:block absolute top-0 left-[75%] h-10 w-0.5 -translate-x-1/2 transform bg-red-200" />
                      <div className="grid w-full gap-6 pt-10 sm:grid-cols-2">
                        {director.teams.map((team) => (
                          <div
                            key={team.title}
                            className="flex flex-col items-center gap-4 text-center"
                          >
                            <div className="hidden md:block h-6 w-px bg-red-200" />
                            <div className="w-full rounded-2xl border border-red-100 bg-white px-5 py-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                              <h4 className="text-lg font-semibold text-gray-900">
                                {team.title}
                              </h4>
                              <p className="mt-2 text-sm text-gray-500">
                                {team.subtitle}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produk Kami */}
      <section className="py-24 px-6 md:px-16 bg-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex justify-center items-center gap-3 mx-auto">
            Produk Kami
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto mb-6 text-lg md:text-xl">
            Re:Flow menghadirkan sepeda listrik modern yang mudah digunakan,
            efisien, dan ramah lingkungan. Saat ini, kami memiliki kurang lebih{" "}
            <strong>700 sepeda listrik</strong> yang tersebar di berbagai titik
            di Lombok.
          </p>
          <p className="text-gray-700 max-w-4xl mx-auto text-lg md:text-xl">
            Setiap sepeda dilengkapi dengan baterai tahan lama dan sistem
            keamanan canggih, memastikan pengalaman berkendara yang aman dan
            nyaman bagi semua pengguna.
          </p>
        </div>
      </section>

      {/* Penjelasan Solar PV */}
      <section className="py-24 px-6 md:px-16 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-16 flex justify-center">
            <img
              src="/background/bcd.JPG"
              alt="Solar PV"
              className="w-full max-w-3xl rounded-xl shadow-lg object-cover"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 flex justify-center items-center gap-3 mx-auto">
            Solar PV (Photovoltaic)
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Solar PV atau Photovoltaic adalah teknologi yang mengubah sinar
            matahari menjadi energi listrik secara langsung menggunakan sel
            surya. Sistem ini terdiri dari modul PV, inverter, dan perangkat
            pendukung lainnya untuk memastikan performa optimal. Dengan
            menggunakan Solar PV, kita dapat menghasilkan listrik bersih dan
            ramah lingkungan, mengurangi ketergantungan pada bahan bakar fosil,
            serta menekan biaya listrik jangka panjang. Aplikasi Solar PV sangat
            fleksibel, mulai dari atap rumah, gedung komersial, industri, hingga
            sistem off-grid di daerah terpencil. Teknologi ini mendukung upaya
            energi berkelanjutan dan mempromosikan gaya hidup hijau yang
            efisien.
          </p>
        </div>
      </section>
    </div>
  );
}
