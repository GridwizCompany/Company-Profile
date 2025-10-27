import Image from "next/image";
import { driveImageUrl } from "utils/driveutils";

export default function Promo() {
  return (
    <section className="bg-black text-white">
      <div
        className="relative min-h-screen bg-no-repeat bg-cover bg-center py-20 px-20"
        style={{
          backgroundImage:
            "url('https://stuproztnegtdvowxqvt.supabase.co/storage/v1/object/public/images/Promo/lombok-bike-trip.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black" />
      </div>

      <div className="flex flex-col gap-32 px-6 md:px-24 py-30">
        {/* Tarif Pelajar */}
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-16 lg:gap-32">
          <div className="flex-shrink-0 relative w-[250px] h-[220px] md:w-[450px] md:h-[400px] overflow-visible flex justify-center">
            <Image
              src="https://stuproztnegtdvowxqvt.supabase.co/storage/v1/object/public/images/Promo/student.png"
              alt="Tarif Pelajar"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-blue-400">
              Tarif Pelajar
            </h1>
            <h2 className="text-4xl font-extrabold text-white mb-6">
              Saldo Minimal Rp. 10.000
            </h2>
            <p className="text-lg leading-relaxed text-gray-300 text-justify">
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

        {/* Tarif Publik */}
        <div className="flex flex-col md:flex-row-reverse justify-center items-center text-center md:text-left gap-16 lg:gap-32">
          <div className="flex-shrink-0 relative w-[250px] h-[220px] md:w-[450px] md:h-[400px] overflow-visible flex justify-center">
            <Image
              src="https://stuproztnegtdvowxqvt.supabase.co/storage/v1/object/public/images/Promo/public.png"
              alt="Tarif Publik"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-yellow-400">
              Tarif Publik
            </h1>
            <h2 className="text-4xl font-extrabold text-white mb-6">
              Saldo Minimal Rp. 20.000
            </h2>
            <p className="text-lg leading-relaxed text-gray-300 text-justify">
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

      <div className="relative w-full h-[600px] bg-cover bg-center flex items-center px-6 md:px-12">
        <Image
          src={
            "https://stuproztnegtdvowxqvt.supabase.co/storage/v1/object/public/images/Promo/riding-gridwiz.png"
          }
          alt="Contoh Gambar"
          fill
          className="object-cover"
          priority
        />

        <div className="relative z-10 max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Jelajahi Mobilitas Hijau Bersama Gridwiz
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-6">
            Solusi transportasi listrik modern yang efisien dan berkelanjutan
            untuk semua.
          </p>
        </div>
      </div>

      <div className="w-full min-h-screen flex flex-col md:flex-row bg-white">
        <div
          className="flex-1 relative flex items-center justify-center bg-black py-16 px-6"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
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
        <div
          className="flex-1 relative flex items-center justify-center bg-gray-50 py-16 px-6"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
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
