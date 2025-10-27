import OverviewSection from "@/components/ui/OverviewHome";
import { driveImageUrl } from "utils/driveutils";
import Image from "next/image";

export default function HomePage() {
  const overviewData: {
    title: string;
    description: string;
    image: string;
    imagePosition: "left" | "right";
  }[] = [
    {
      title: "Hemat Waktu dan Ramah Lingkungan",
      description:
        "Sepeda listrik Gridwiz (Re:Flow) memungkinkan Anda bergerak bebas dan cepat, melewati kepadatan lalu lintas dengan mudah. Fitur bantuan listrik yang cerdas memastikan Anda tiba di tujuan tepat waktu tanpa kelelahan, sambil tetap hemat energi. Dengan Gridwiz, perjalanan sehari-hari menjadi lebih efisien, nyaman, dan ramah lingkungan.",
      image:
        "https://stuproztnegtdvowxqvt.supabase.co/storage/v1/object/public/images/Dashboard/launching-gridwiz.JPG",
      imagePosition: "left",
    },
    {
      title:
        "Setiap perjalanan Anda berkontribusi pada lingkungan yang lebih sehat",
      description:
        "Setiap perjalanan menggunakan E-Bike Gridwiz adalah langkah nyata dalam mendukung keberlanjutan. Dengan solusi zero-emission, Anda tidak hanya bergerak dengan nyaman, tapi juga membantu mengurangi polusi udara dan jejak karbon. Gridwiz berkomitmen menciptakan udara yang lebih bersih untuk generasi sekarang dan masa depan.",
      image:
        "https://stuproztnegtdvowxqvt.supabase.co/storage/v1/object/public/images/Dashboard/launching-gridwiz-2.JPG",
      imagePosition: "right",
    },
    {
      title: "Sewa Praktis dan Aksesibilitas Tinggi",
      description:
        "Nikmati kebebasan untuk menyewa sepeda kapan pun Anda butuhkan melalui aplikasi kami yang intuitif. Proses scan barcode cepat, ditambah ketersediaan layanan di berbagai titik kolaborasi seperti kampus, kafe, dan area publik, menjadikan Gridwiz pilihan mobilitas paling praktis dan mudah diakses di kota Anda.",
      image:
        "https://stuproztnegtdvowxqvt.supabase.co/storage/v1/object/public/images/Dashboard/launching-gridwiz-3.JPG",
      imagePosition: "left",
    },
  ];

  return (
    <section className="text-gray-800">
      <div
        className="relative min-h-screen flex flex-col 
             justify-end pb-20 md:justify-end 
             items-center md:items-start 
             text-center md:text-left 
             px-6 sm:px-12 md:px-24 sm:pb-28 md:pb-32 md:min-h-screen"
      >
        <Image
          src={
            "https://stuproztnegtdvowxqvt.supabase.co/storage/v1/object/public/images/Dashboard/bike-gridwiz.jpg"
          }
          alt="Contoh Gambar"
          fill
          className="object-cover"
          priority
        />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-200 mb-6 leading-tight">
            Gridwiz Energy & Mobility
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 mb-8">
            Memanfaatkan inovasi teknologi untuk menghadirkan layanan penyewaan
            sepeda listrik yang mengedepankan efisiensi energi
          </p>

          <div className="flex items-center justify-center md:justify-start flex-wrap">
            <a
              href="https://apps.apple.com/gb/app/re-flow/id6741798337"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/appstore-badge.svg"
                alt="App Store"
                className="h-11 sm:h-14 w-auto hover:scale-105 transition-transform"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.gridwiz.ride&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/playstore-badge.svg"
                alt="Play Store"
                className="h-17 sm:h-21 w-auto hover:scale-105 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <OverviewSection sections={overviewData} />
      </div>

      <div
        className="relative min-h-[400px] md:min-h-[800px] flex flex-col 
    justify-center md:justify-center 
    items-center md:items-start 
    text-center md:text-left 
    px-6 sm:px-12 md:px-24 
    bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://stuproztnegtdvowxqvt.supabase.co/storage/v1/object/public/images/Dashboard/sepeda-gridwiz.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

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

      <div className="bg-gray-100 min-h-[500px] flex flex-col justify-center items-center py-16 md:py-32 text-center text-gray-900">
        <h3 className="text-4xl sm:text-5xl font-bold mb-12 md:mb-24 tracking-wide text-gray-900">
          Layanan Kami
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-16 max-w-6xl mx-auto px-6">
          {[
            {
              icon: "https://stuproztnegtdvowxqvt.supabase.co/storage/v1/object/public/images/Icon/earth.png",
              title: "Ramah Lingkungan",
              desc: "Berkontribusi dalam pengurangan emisi karbon dan mendukung transportasi berkelanjutan yang sejalan dengan visi hijau Anda.",
            },
            {
              icon: "https://stuproztnegtdvowxqvt.supabase.co/storage/v1/object/public/images/Icon/network.png",
              title: "Layanan Luas & Kolaboratif",
              desc: "Jaringan Gridwiz terus berkembang melalui kemitraan strategis dengan universitas, kafe, hotel, dan area publik utama.",
            },
            {
              icon: "https://stuproztnegtdvowxqvt.supabase.co/storage/v1/object/public/images/Icon/iot.png",
              title: "Akses Mudah via Aplikasi",
              desc: "Cukup unduh aplikasi, pindai barcode sepeda, dan mulai perjalanan dengan sistem kunci otomatis yang pintar.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group bg-white/20 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex justify-center mb-6">
                <div className="p-5 rounded-full bg-white/10 group-hover:bg-white/30 transition-all duration-500">
                  <div className="relative h-24 w-24">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                      sizes="96px"
                    />
                  </div>
                </div>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-500 transition-colors duration-500">
                {item.title}
              </h4>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <a
            href="/panduan"
            className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-md shadow-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>

      <div className="flex justify-center py-5 sm:px-8 md:px-72 md:py-32 bg-white">
        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/-pdG06DBoN0?si=gySysQqY6xikDsNK"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
