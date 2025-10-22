"use client";

import { driveImageUrl } from "../../utils/driveutils";

export default function AboutUs() {
  const structure =
    "https://drive.google.com/file/d/175Nfm1ess_rRZvVk_xNI6wqMIy7e60h8/view?usp=sharing";

  return (
    <div className="text-gray-900">
      {/* ===== Hero Section ===== */}
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

      {/* ===== Visi & Misi Section ===== */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-32">
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

          <div className="flex justify-center items-center">
            <img
              src="/logo/reflow-logo-black.png"
              alt="Visi Misi"
              className="w-full max-w-lg rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

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

          <div>
            <img
              src={driveImageUrl(structure)}
              alt="Gambar dari Google Drive"
              referrerPolicy="no-referrer"
              className="w-full h-auto"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

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

      {/* ===== Solar PV Section ===== */}
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
            Sebagai bagian dari komitmen kami dalam menciptakan ekosistem
            transportasi ramah lingkungan, Re:flow memanfaatkan energi matahari
            melalui pengembangan infrastruktur khusus berupa Solar PV
            (Pembangkit Listrik Tenaga Surya) yang terintegrasi dengan Battery
            Charging Station (BCS). Infrastruktur ini memungkinkan proses
            pengisian daya sepeda listrik dilakukan secara mandiri menggunakan
            energi terbarukan. Dengan memanfaatkan sinar matahari sebagai sumber
            energi utama, sistem ini mampu mengurangi ketergantungan pada
            listrik konvensional serta menekan jejak karbon yang dihasilkan
            selama proses pengisian daya. Penerapan Solar PV dan Battery
            Charging Station ini menjadi langkah nyata kami dalam mendukung
            keberlanjutan lingkungan, sekaligus menghadirkan solusi mobilitas
            yang lebih bersih, efisien, dan ramah lingkungan bagi para pengguna
            Re:flow.
          </p>
        </div>
      </section>
    </div>
  );
}
