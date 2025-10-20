export default function CarFreeDay() {
  return (
    <section>
      <div
        className="relative min-h-screen bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: 'url("/cfd.jpg")' }}
      >
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Konten utama */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8">
            <span className="text-orange-500">Car</span>{" "}
            <span className="text-amber-500">Free Day</span>
          </h1>

          <p className="text-lg sm:text-2xl md:text-5xl font-extrabold text-gray-100 mb-8 max-w-xl">
            X
          </p>

          <img
            src="/logo/reflow-logo-white.png"
            alt="reflow-logo"
            className="w-32 sm:w-48 md:w-64 h-auto"
          />
        </div>
      </div>
    </section>
  );
}
