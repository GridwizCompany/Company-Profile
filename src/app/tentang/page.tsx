"use client";

import { useLanguage } from "@/lib/language";
import { driveImageUrl } from "../../utils/driveutils";

export default function AboutUs() {
  const { t } = useLanguage();
  const structure =
    "https://drive.google.com/file/d/1Moi1rw4OQlipRNnaLKzvQNmN6gNffVwW/view?usp=sharing";

  return (
    <div className="text-gray-900">
      <div className="relative w-full h-screen flex items-center justify-center">
        <video
          className="w-full h-full object-cover"
          src="/company-video-.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-32">
          <div className="flex flex-col justify-between">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t({ id: "Visi", en: "Vision" })}
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl text-lg md:text-xl text-justify">
              {t({
                id: "Menjadi pelopor solusi mobilitas mikro ramah lingkungan berbasis teknologi di Indonesia, dengan jangkauan yang inklusif dan berdampak sosial.",
                en: "To become a pioneer of technology-based, environmentally friendly micro-mobility solutions in Indonesia, with inclusive reach and meaningful social impact.",
              })}
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t({ id: "Misi", en: "Mission" })}
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 max-w-2xl text-lg md:text-xl text-justify">
              <li>
                {t({
                  id: "Mendorong gaya hidup aktif dan sadar lingkungan di masyarakat urban.",
                  en: "Encourage an active and environmentally conscious lifestyle in urban communities.",
                })}
              </li>
              <li>
                {t({
                  id: "Menyediakan layanan transportasi hijau yang efisien, aman, dan mudah diakses.",
                  en: "Provide green transportation services that are efficient, safe, and easy to access.",
                })}
              </li>
              <li>
                {t({
                  id: "Mengembangkan ekosistem mobilitas berkelanjutan melalui teknologi dan kolaborasi lintas sektor.",
                  en: "Develop a sustainable mobility ecosystem through technology and cross-sector collaboration.",
                })}
              </li>
              <li>
                {t({
                  id: "Meningkatkan kesadaran masyarakat akan pentingnya mobilitas berkelanjutan melalui kegiatan edukatif dan partisipatif.",
                  en: "Increase public awareness of sustainable mobility through educational and participatory activities.",
                })}
              </li>
            </ul>
          </div>

          <div className="flex justify-center items-center">
            <img
              src={driveImageUrl(
                "https://drive.google.com/file/d/11P5UtOPu6v3Fh_Zcjd2RB4S6hnshdfVl/view?usp=drive_link"
              )}
              alt="Logo Gridwiz"
              className="object-contain drop-shadow-lg"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-16 bg-linear-to-b from-red-50 via-white to-white">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center rounded-full bg-red-100 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-red-600">
              {t({ id: "Struktur Organisasi", en: "Organizational Structure" })}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Gridwiz Leadership &amp; Team
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              {t({
                id: "Sinergi lintas divisi menjaga operasional Re:Flow tetap gesit, inovatif, dan berorientasi pada pelayanan terbaik bagi pengguna serta mitra.",
                en: "Cross-division synergy keeps Re:Flow operations agile, innovative, and focused on delivering the best service for users and partners.",
              })}
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
            {t({ id: "Produk Kami", en: "Our Product" })}
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto mb-6 text-lg md:text-xl text-justify">
            {t({
              id: "Re:Flow menghadirkan sepeda listrik modern yang mudah digunakan, efisien, dan ramah lingkungan. Saat ini, kami memiliki kurang lebih ",
              en: "Re:Flow provides modern electric bikes that are easy to use, efficient, and environmentally friendly. We currently have approximately ",
            })}
            <strong>{t({ id: "700 sepeda listrik", en: "700 electric bikes" })}</strong>
            {t({
              id: " yang tersebar di berbagai titik di Lombok.",
              en: " distributed across multiple points in Lombok.",
            })}
          </p>
          <p className="text-gray-700 max-w-4xl mx-auto text-lg md:text-xl text-justify">
            {t({
              id: "Setiap sepeda dilengkapi dengan baterai tahan lama dan sistem keamanan canggih, memastikan pengalaman berkendara yang aman dan nyaman bagi semua pengguna.",
              en: "Each bike is equipped with a long-lasting battery and advanced safety system, ensuring a safe and comfortable riding experience for every user.",
            })}
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-16 flex justify-center">
            <img
              src={driveImageUrl(
                "https://drive.google.com/file/d/14NPGJBCtehRDd10CuOtDrhjdpY1TeJG7/view?usp=drive_link"
              )}
              className="w-full h-auto object-cover"
              alt="Solar PV"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 flex justify-center items-center gap-3 mx-auto">
            Solar PV (Photovoltaic)
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify">
            {t({
              id: "Sebagai bagian dari komitmen kami dalam menciptakan ekosistem transportasi ramah lingkungan, Re:flow memanfaatkan energi matahari melalui pengembangan infrastruktur khusus berupa Solar PV (Pembangkit Listrik Tenaga Surya) yang terintegrasi dengan Battery Charging Station (BCS). Infrastruktur ini memungkinkan proses pengisian daya sepeda listrik dilakukan secara mandiri menggunakan energi terbarukan. Dengan memanfaatkan sinar matahari sebagai sumber energi utama, sistem ini mampu mengurangi ketergantungan pada listrik konvensional serta menekan jejak karbon yang dihasilkan selama proses pengisian daya. Penerapan Solar PV dan Battery Charging Station ini menjadi langkah nyata kami dalam mendukung keberlanjutan lingkungan, sekaligus menghadirkan solusi mobilitas yang lebih bersih, efisien, dan ramah lingkungan bagi para pengguna Re:flow.",
              en: "As part of our commitment to creating an environmentally friendly transportation ecosystem, Re:Flow uses solar energy through dedicated Solar PV infrastructure integrated with Battery Charging Stations (BCS). This infrastructure allows electric bike charging to run independently using renewable energy. By using sunlight as the primary energy source, the system reduces dependence on conventional electricity and lowers the carbon footprint generated during charging. The implementation of Solar PV and Battery Charging Stations is a concrete step in supporting environmental sustainability while delivering cleaner, more efficient, and environmentally friendly mobility for Re:Flow users.",
            })}
          </p>
        </div>
      </section>
    </div>
  );
}
