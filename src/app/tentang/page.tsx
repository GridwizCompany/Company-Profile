"use client";

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
