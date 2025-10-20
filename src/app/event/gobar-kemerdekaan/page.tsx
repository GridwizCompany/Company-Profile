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
            Indonesia, Gridwiz Energy & Mobility turut ambil bagian dalam
            merayakan momen bersejarah ini dengan mengajak masyarakat bergerak
            aktif dan peduli lingkungan melalui layanan sepeda listrik inovatif,
            Re:flow.
          </p>
        </div>
      </div>
    </section>
  );
}
