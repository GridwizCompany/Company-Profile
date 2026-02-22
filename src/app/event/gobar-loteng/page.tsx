"use client";
import { useState } from "react";
import { driveImageUrl } from "../../../utils/driveutils";
import { 
  Bike, 
  MapPin, 
  Trophy, 
  Gamepad2, 
  CheckCircle2, 
  Users,
  Calendar,
  ChevronRight
} from "lucide-react";

type GalleryItem = {
  imageSource: string;
};

const galleryItems: GalleryItem[] = [
  { imageSource: "https://drive.google.com/file/d/1VGyXBCRqWrTvDCG-Ax66Vhw4UPzKKy-e/view?usp=sharing" },
  { imageSource: "https://drive.google.com/file/d/13_zd0KA03Te2X8O8zpHgXUk2kfE0ZBpm/view?usp=sharing" },
  { imageSource: "https://drive.google.com/file/d/1wJizBM5iMAriC8iiywAtkrbsArcCPF9w/view?usp=sharing" },
  { imageSource: "https://drive.google.com/file/d/1w8tQzByHCGRsO7dqJtCL5WPvEN3DrKl5/view?usp=sharing" },
  { imageSource: "https://drive.google.com/file/d/1h2Ri_jqq-tjIpP734FAPPDeVHXrItMRF/view?usp=sharing" },
  { imageSource: "https://drive.google.com/file/d/1pMlJC3V6vzgohXpXhK7GJ4S__rgOB83M/view?usp=sharing" },
];

export default function LaporanGobarLoteng() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.clientWidth;
    const newIndex = Math.round(scrollLeft / width);
    setActiveIndex(newIndex);
  };

  return (
    <section className="bg-slate-50 font-sans min-h-screen">
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[60vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={driveImageUrl("https://drive.google.com/file/d/1zC-mOekccLzV2qGYSGlRLl2BGEe6m5tt/view?usp=sharing")}
            alt="Momen Gobar Loteng"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-slate-900/60" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center text-white max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-500 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            <CheckCircle2 size={12} /> GOBAR LOTENG
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-4 leading-tight uppercase tracking-tighter italic">
            GOWES BARENG <span className="text-sky-400">RE:FLOW</span>
          </h1>
          <p className="text-base md:text-xl text-gray-200 font-medium uppercase tracking-[0.2em]">
            Edisi Lombok Tengah — 13 Februari 2026
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center shadow-sm">
                <Users className="mx-auto text-sky-600 mb-2" />
                <p className="text-3xl font-black text-slate-900">35</p>
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Peserta Antusias</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center shadow-sm">
                <MapPin className="mx-auto text-orange-600 mb-2" />
                <p className="text-lg font-black text-slate-900 leading-tight">Poltekpar Lombok ➔ Alun-Alun Tastura</p>
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Rute Perjalanan</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center shadow-sm">
                <Calendar className="mx-auto text-sky-600 mb-2" />
                <p className="text-3xl font-black text-slate-900">Jumat</p>
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">13 Februari 2026</p>
            </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <div className="h-1 w-16 bg-sky-500"></div>
            <h2 className="text-4xl font-black text-slate-900 uppercase italic leading-none">
              Membangun Kebersamaan<br /> <span className="text-sky-600">dengan masyarakat Lombok Tengah</span>
            </h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Pada Jumat, 13 Februari 2026, Re:flow sukses menyelenggarakan kegiatan Gowes Bareng menyusuri rute strategis dari Politeknik Pariwisata Lombok menuju Alun-Alun Tastura, Lombok Tengah.
              </p>
              <p>
                Tercatat 35 peserta berpartisipasi dengan penuh semangat. Tidak hanya bersepeda, momen ini diisi dengan berbagai <i>games</i> seru dan sesi <i>snack time</i> yang menjadi ajang untuk memperluas jaringan sosial dalam suasana kolaboratif.
              </p>
              <p className="font-bold text-slate-900">
                Re:flow berkomitmen untuk terus mendorong gaya hidup sehat dan ramah lingkungan di tanah Lombok.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-black uppercase italic mb-8 text-sky-400 tracking-tight">Kegiatan</h3>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-sky-500/20 flex items-center justify-center text-sky-400 font-bold border border-sky-500/50">
                    <Bike size={20} />
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-wider text-sm">Gowes Bareng</p>
                    <p className="text-sm text-slate-400 mt-1">Gowes santai menggunakan sepeda listrik Re:flow dari Poltekpar Lombok menuju Alun-Alun Tastura.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold border border-orange-500/50">
                    <Gamepad2 size={20} />
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-wider text-sm">Fun Games</p>
                    <p className="text-sm text-slate-400 mt-1">Aktivitas kelompok di titik finish yang dirancang untuk mempererat relasi antar peserta.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold border border-emerald-500/50">
                    <Trophy size={20} />
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-wider text-sm">Pembagian Hadiah</p>
                    <p className="text-sm text-slate-400 mt-1">Apresiasi bagi pemenang games dan sesi ramah tamah dengan pembagian snack.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Status</p>
                  <p className="text-xs text-slate-300 italic">Unit tetap tersedia di Poltekpar Lombok</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="flex items-end justify-between border-b border-slate-200 pb-6">
            <h3 className="text-2xl font-black text-slate-900 uppercase italic">Dokumentasi GOBAR Loteng</h3>
          </div>

          <div
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible pb-4"
            onScroll={handleScroll}
          >
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="shrink-0 w-80 sm:w-auto rounded-[2rem] overflow-hidden border border-slate-100 shadow-md transition-all duration-300 hover:shadow-xl snap-center group"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={driveImageUrl(item.imageSource)}
                    alt={`Recap Gobar Loteng ${index + 1}`}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4 sm:hidden">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                className={`mx-1 h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-sky-600 w-6" : "bg-slate-300 w-2"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="bg-white p-10 md:p-16 rounded-[3rem] border border-slate-100 shadow-sm text-center space-y-6">
            <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Ingin Jadi Bagian dari Perjalanan Berikutnya?</h4>
            <p className="text-slate-500 max-w-2xl mx-auto">
                Meskipun acara bersama telah usai, pengalaman bersepeda keliling Praya tetap bisa Anda nikmati setiap hari. Gunakan aplikasi Re:flow untuk akses unit sepeda di berbagai titik.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4 grayscale opacity-40 text-[11px] font-black uppercase tracking-widest">
                <span>Poltekpar Lombok</span>
                <span>Alun-Alun Tastura</span>
                <span>Re:flow</span>
            </div>
        </div>
      </div>
    </section>
  );
}