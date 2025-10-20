import DynamicTable from "@/components/Table";

export default function Promo() {
  const columns = ["Rental", "Pelajar", "Publik"];

  const data = [
    { Rental: "Membuka Kunci", Pelajar: "Rp 0", Publik: "Rp 0" },
    { Rental: "Minimal Saldo", Pelajar: "Rp 10.000", Publik: "Rp 20.000" },
    { Rental: "Tarif", Pelajar: "Rp 250/min", Publik: "Rp 500/min" },
    { Rental: "Jeda", Pelajar: "Rp 100/min", Publik: "Rp 200/min" },
    { Rental: "Pelanggaran", Pelajar: "-", Publik: "-" },
    {
      Rental: "Berkendara diluar Area",
      Pelajar: "Rp 5.000",
      Publik: "Rp 10.000",
    },
    {
      Rental: "Parkir di luar Area",
      Pelajar: "Rp 10.000",
      Publik: "Rp 30.000",
    },
  ];

  return (
    <section className="bg-black text-white">
      <div
        className="relative min-h-screen bg-no-repeat bg-cover bg-center py-20 px-20"
        style={{ backgroundImage: 'url("/background/lombok-bike-trip.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black"></div>
      </div>

      <div className="flex flex-col gap-32 px-6 md:px-24 py-30">
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-16 lg:gap-32">
          <div className="flex-shrink-0">
            <img
              src="/student.png"
              alt="Gridwiz Illustration 1 - Pelajar"
              width={300}
              height={300}
              className="rounded-lg object-contain w-64 h-64 md:w-80 md:h-80 shadow-2xl shadow-blue-500/30" // Ukuran dan Shadow diperbagus
            />
          </div>
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-blue-400">
              Tarif Pelajar
            </h1>
            <h2 className="text-4xl font-extrabold text-white mb-6">
              Saldo Minimal Rp. 10.000
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              Penyesuaian ini khusus ditujukan bagi pelajar yang telah melakukan
              verifikasi akun dengan kartu pelajar atau kartu mahasiswa mereka.
              Kami berharap tarif yang lebih terjangkau ini dapat mendukung
              mobilitas sehari-hari pelajar, sekaligus mendorong gaya hidup
              ramah lingkungan di kalangan generasi muda.
            </p>
            <p className="mt-4 text-sm font-semibold text-yellow-400">
              Tarif Sewa: Rp 250/menit | Jeda: Rp 100/menit
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-center items-center text-center md:text-left gap-16 lg:gap-32">
          <div className="flex-shrink-0">
            <img
              src="/public.png"
              alt="Gridwiz Illustration 2 - Publik"
              width={300}
              height={300}
              className="rounded-lg object-contain w-64 h-64 md:w-80 md:h-80 shadow-2xl shadow-yellow-500/30" // Ukuran dan Shadow diperbagus
            />
          </div>
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-yellow-400">
              Tarif Publik
            </h1>
            <h2 className="text-4xl font-extrabold text-white mb-6">
              Saldo Minimal Rp. 20.000
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              Penurunan saldo minimal ini berlaku untuk seluruh pengguna umum
              yang telah terdaftar. Inisiatif ini adalah bagian dari komitmen
              Re:Flow untuk membuat layanan kami lebih mudah diakses oleh semua
              kalangan, sehingga setiap orang dapat menikmati kemudahan
              transportasi dengan sepeda listrik kami tanpa perlu mengeluarkan
              biaya awal yang besar.
            </p>
            <p className="mt-4 text-sm font-semibold text-blue-400">
              Tarif Sewa: Rp 500/menit | Jeda: Rp 200/menit
            </p>
          </div>
        </div>
      </div>

      <div
        className="w-full mx-auto h-48 min-h-[600px] bg-cover bg-center flex items-center px-6 md:px-12"
        style={{ backgroundImage: 'url("/riding-gridwiz.png")' }}
      >
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Jelajahi Mobilitas Hijau Bersama Gridwiz
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-6">
            Solusi transportasi listrik modern yang efisien dan berkelanjutan
            untuk semua.
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="w-full min-h-screen flex flex-col md:flex-row bg-white">
        {/* Kolom kanan - Harga Publik */}
        <div
          className="flex-1 relative flex items-center justify-center bg-black py-16 px-6"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // efek miring bisa ditambah
          }}
        >
          <div className="min-w-max md:min-w-md text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">
              Harga Publik
            </h2>
            <div className="space-y-3 text-lg">
              <div className="flex justify-between border-b border-gray-600 py-2">
                <span>Membuka Kunci</span>
                <span>Rp 0</span>
              </div>
              <div className="flex justify-between border-b border-gray-600 py-2">
                <span>Minimal Saldo</span>
                <span>Rp 20.000</span>
              </div>
              <div className="flex justify-between border-b border-gray-600 py-2">
                <span>Tarif</span>
                <span>Rp 500/min</span>
              </div>
              <div className="flex justify-between border-b border-gray-600 py-2">
                <span>Jeda</span>
                <span>Rp 200/min</span>
              </div>
              <div className="flex justify-between border-b border-gray-600 py-2">
                <span>Pelanggaran</span>
                <span>–</span>
              </div>
              <div className="flex justify-between border-b gap-10 border-gray-600 py-2">
                <span>Berkendara diluar Area</span>
                <span>Rp 10.000</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Parkir di luar area</span>
                <span>Rp 30.000</span>
              </div>
            </div>
          </div>
        </div>
        {/* Kolom kiri - Harga Pelajar */}
        <div
          className="flex-1 relative flex items-center justify-center bg-gray-50 py-16 px-6"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // efek miring bisa ditambah
          }}
        >
          <div className="max-w-md md:min-w-md text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Harga Pelajar
            </h2>
            <div className="space-y-3 text-lg text-black">
              <div className="flex justify-between border-b border-gray-900 py-2">
                <span>Membuka Kunci</span>
                <span>Rp 0</span>
              </div>
              <div className="flex justify-between border-b border-gray-900 py-2">
                <span>Minimal Saldo</span>
                <span>Rp 10.000</span>
              </div>
              <div className="flex justify-between border-b border-gray-900 py-2">
                <span>Tarif</span>
                <span>Rp 250/min</span>
              </div>
              <div className="flex justify-between border-b border-gray-900 py-2">
                <span>Jeda</span>
                <span>Rp 100/min</span>
              </div>
              <div className="flex justify-between border-b border-gray-900 py-2">
                <span>Pelanggaran</span>
                <span>–</span>
              </div>
              <div className="flex justify-between border-b gap-10 border-gray-900 py-2">
                <span>Berkendara diluar Area</span>
                <span>Rp 5.000</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Parkir di luar area</span>
                <span>Rp 10.000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
