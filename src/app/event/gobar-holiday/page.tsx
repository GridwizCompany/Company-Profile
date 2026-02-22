"use client";
import { useState } from "react";
import { driveImageUrl } from "../../../utils/driveutils";
import { Calendar, MapPin, Ticket, Zap } from "lucide-react";

type GalleryItem = {
  imageSource: string;
};

const galleryItems: GalleryItem[] = [
  { imageSource: "https://drive.google.com/file/d/1KxBz1OGRLhFmMldUvUp22GzD2tCR0zIM/view?usp=sharing" },
  { imageSource: "https://drive.google.com/file/d/1sOFMnIf3A_0X-ZBK_aa284SLhfPb18qK/view?usp=sharing" },
  { imageSource: "https://drive.google.com/file/d/1Lt1hCWFRr2ULzVWYpNAmC0nBvfBAIHRk/view?usp=sharing" },
  { imageSource: "https://drive.google.com/file/d/1Zavz7HJesJKsoGO9eWbv1nQrOR6lsbVc/view?usp=sharing" },
  { imageSource: "https://drive.google.com/file/d/153OcegKmbB7BsD3l7j2yvLgkWDvYGETY/view?usp=sharing" },
  { imageSource: "https://drive.google.com/file/d/1SHeSeHGOPfybw7dJbzpigx2DnFlbwS_3/view?usp=sharing" },
];

export default function GobarHoliday() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.clientWidth;
    const newIndex = Math.round(scrollLeft / width);
    setActiveIndex(newIndex);
  };

  return (
    <section>
      {/* HERO SECTION */}
      <div className="relative min-h-screen bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0">
          <img
            src={driveImageUrl("https://drive.google.com/file/d/1KxBz1OGRLhFmMldUvUp22GzD2tCR0zIM/view?usp=sharing")}
            alt="Gobar Holiday Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-sky-900/60" />
        </div>

        <div className="relative z-10 flex flex-col items-start justify-end min-h-screen text-white px-6 sm:px-12 md:px-16 lg:px-24 py-16 gap-4">
          <div className="bg-sky-500/80 backdrop-blur-md px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
            Special Event
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-4 leading-tight uppercase tracking-tighter">
            GOBAR <span className="text-sky-400">Holiday</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-100 mb-6 max-w-2xl leading-relaxed font-medium">
            Gowes Bareng Keliling Mataram! Nikmati pengalaman liburan sehat dan seru menyusuri ikon kota menggunakan sepeda listrik inovatif Re:Flow.
          </p>
          
          <div className="flex flex-wrap gap-6 text-sm md:text-base font-semibold">
            <div className="flex items-center gap-2"><Calendar className="text-sky-400" /> 30 Januari 2025</div>
            <div className="flex items-center gap-2"><MapPin className="text-sky-400" /> Start/Finish: UIN Mataram</div>
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="content bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
          
          {/* INFO GRID */}
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-stretch">
            <div className="space-y-6 text-gray-700 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
                Liburan Seru & <span className="text-sky-600">Ramah Lingkungan</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-600">
                GOBAR Holiday adalah inisiatif Gridwiz Energy & Mobility untuk mengajak masyarakat Mataram mengisi waktu libur dengan aktivitas produktif. Tanpa polusi dan tanpa lelah berlebih, Anda bisa berkeliling kota bersama teman dan keluarga sambil merasakan kecanggihan teknologi transportasi masa depan.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100">
                   <Zap className="text-sky-600 mb-2" />
                   <h4 className="font-bold text-slate-900">Eco-Friendly</h4>
                   <p className="text-xs text-slate-500">Nol emisi gas buang.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-sky-600 text-white p-10 flex flex-col justify-center shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
              <h3 className="text-xl md:text-2xl font-black mb-6 uppercase tracking-wide border-b border-white/20 pb-4">
                Agenda Kegiatan
              </h3>
              <ul className="space-y-5 text-base md:text-lg">
                <li className="flex gap-4 items-start">
                  <div className="h-7 w-7 rounded-full bg-white text-sky-600 flex items-center justify-center shrink-0 font-bold text-sm">01</div>
                  <p><span className="font-bold">Gathering:</span> Para peserta menikmati suasana hijau di RTH Pagutan sambil menikmati Snack dari Re:flow dan gowes santai keliling RTH Pagutan.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="h-7 w-7 rounded-full bg-white text-sky-600 flex items-center justify-center shrink-0 font-bold text-sm">02</div>
                  <p><span className="font-bold">Flag Off:</span> Start gowes santai dari UIN Mataram sampai RTH Pagutan.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="h-7 w-7 rounded-full bg-white text-sky-600 flex items-center justify-center shrink-0 font-bold text-sm">03</div>
                  <p><span className="font-bold">Refreshment:</span> Sesi istirahat, snack, dan edukasi Re:Flow.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* GALLERY SECTION */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-8">
              <div>
                <h3 className="text-3xl font-black text-slate-900 uppercase">Gallery GOBAR Holiday</h3>
                <p className="mt-2 text-slate-500 text-base md:text-lg">
                  Kumpulan momen keceriaan peserta di setiap sudut rute perjalanan.
                </p>
              </div>
              <div className="px-6 py-2 bg-slate-900 text-white text-sm font-bold rounded-full uppercase tracking-tighter shadow-lg">
                #GowesBarengGridwiz
              </div>
            </div>

            <div
              className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible"
              onScroll={handleScroll}
            >
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="shrink-0 w-80 sm:w-auto rounded-2xl overflow-hidden bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl snap-center border border-slate-100"
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <img
                      src={driveImageUrl(item.imageSource)}
                      alt={`Gallery Holiday ${index + 1}`}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* DOTS FOR MOBILE */}
            <div className="flex justify-center mt-4 sm:hidden">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  className={`mx-1 h-2 w-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "bg-sky-600 w-6" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}