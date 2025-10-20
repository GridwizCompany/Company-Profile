// components/Footer.tsx
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand / Logo Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Gridwiz Energy & Mobility
          </h2>
          <p className="text-sm leading-relaxed">
            Platform pintar untuk penyewaan sepeda listrik. Kelola dengan mudah,
            cepat, dan fleksibel.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Tautan Cepat
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/tentang" className="hover:text-white transition">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="/layanan" className="hover:text-white transition">
                Layanan
              </a>
            </li>
            <li>
              <a href="mailto:gridwizenergyandmobility@gmail.com" className="hover:text-white transition">
                Kontak
              </a>
            </li>

          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Ikuti Kami</h3>
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            <a
              href="https://www.instagram.com/reflow.gridwizenm/"
              target="_blank"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@GridwizEnergyAndMobility"
              target="_blank"
              className="hover:text-red-500 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/gridwizenm/"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>
             <a
              href="https://www.tiktok.com/@relfow.gridwizenm"
              target="_blank"
              className="hover:text-red-500 transition"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">
          Gridwiz Energy & Mobility
        </span>
        . Semua hak cipta dilindungi.
      </div>
    </footer>
  );
}
