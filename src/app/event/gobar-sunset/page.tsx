export default function GobarSunset() {
  return (
    <section>
      <div
        className="relative min-h-screen bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: 'url("/gobar-sunset.jpg")' }}
      >
        {/* Overlay hitam transparan */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Konten utama */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-6 sm:px-12 md:px-24 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-amber-500">
            <span className="text-orange-500">Gobar</span> Sunset
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl mb-32 leading-relaxed">
            Dalam semangat kebersamaan dan menikmati indahnya senja, Gridwiz
            Energy & Mobility mengajak masyarakat untuk bergabung dalam
            <span className="font-semibold text-amber-400"> Gobar Sunset</span>.
            Mari bersepeda bersama dengan layanan sepeda listrik inovatif
            <span className="font-semibold text-orange-400"> Re:flow</span>,
            sambil menikmati suasana sore yang hangat, sehat, dan ramah
            lingkungan.
          </p>
        </div>
      </div>
    </section>
  );
}
