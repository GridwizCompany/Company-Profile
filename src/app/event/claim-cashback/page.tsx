"use client";

import { driveImageUrl } from "utils/driveutils";

export default function ClaimCashbackPage() {
  const bgHero = "https://drive.google.com/file/d/1pMlJC3V6vzgohXpXhK7GJ4S__rgOB83M/view?usp=sharing";

  const cafePartners = [
    { name: "Bento Kopi", logo: "https://drive.google.com/file/d/1d-kgi5_bSV-MXJQLR0ApNKg1KLv1Rzh6/view?usp=sharing" },
    { name: "Modjoe", logo: "https://drive.google.com/file/d/1wZzqMs3NybqDCAGb3dzQnz6afU-_ryF8/view?usp=sharing" },
    { name: "Eclair", logo: "https://drive.google.com/file/d/16zSlBySqlymdFvPLgokTsXpz5cAqaKTk/view?usp=sharing" },
    { name: "Uttara", logo: "https://drive.google.com/file/d/1Gl8qj_9EhWJnlLpj6vCeoB6ks40oeE2F/view?usp=sharing" },
    { name: "Subr", logo: "https://drive.google.com/file/d/1SL7ASjbFNYzV6ngsCAYUTVDZwPsDIpn7/view?usp=sharing" },
  ];

  return (
    <section className="w-full min-h-screen bg-slate-50 pb-12">
      <div className="relative w-full h-[40vh] md:h-[45vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <img
          src={driveImageUrl(bgHero)}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-black/75 z-10" />

        <div className="relative z-20 w-full max-w-2xl">
          <div className="bg-orange-500 text-white px-4 py-1 inline-block font-black text-sm md:text-xl italic mb-3 transform -rotate-2 shadow-lg uppercase">
            Khusus Pembelian Membership
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter">
            CLAIM <span className="text-orange-500 block md:inline">CASHBACK</span>
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 relative z-30">
        <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-12">
            
            <div className="mb-10">
              <h2 className="text-xl md:text-3xl font-black text-blue-900 uppercase tracking-wide border-l-4 md:border-l-8 border-orange-500 pl-3 md:pl-4 mb-6">
                Syarat & Ketentuan
              </h2>
              
              <ul className="space-y-4 md:space-y-6">
                {[
                  "Berlaku untuk sekali pakai",
                  "Tidak dapat ditukar dengan uang tunai",
                  "Harap tunjukkan voucher ini kepada staf Cafe saat penukaran",
                  "Voucher dapat dikumpulkan dan ditukar sesuai jumlah voucher yang dimiliki",
                  "Penukaran tersedia di Bento Kopi, Madjoe, Eclair, Uttara, dan Subr",
                  "Claim hanya untuk pembeli paket membership"
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 items-start border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white text-[8px] mt-1">
                      ✔
                    </div>
                    <p className="text-sm md:text-lg font-bold text-gray-700 leading-snug">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Area Tombol Claim */}
            <div className="bg-blue-50/50 rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-dashed border-blue-200 text-center mb-10">
              <p className="text-xs md:text-sm text-blue-800/60 font-bold uppercase tracking-widest mb-4">
                Klik tombol di bawah ini
              </p>
              
              <a 
                href={`https://wa.me/6282144540304?text=${encodeURIComponent(
                  "Hai Minflow,\nSaya ingin mengajukan klaim cashback.\nNama Pengguna:\nNomor di Aplikasi Re:Flow:\nTerima kasih atas bantuannya"
                )}`}
                target="_blank"
                className="group w-full md:w-auto inline-flex items-center justify-center px-6 py-4 md:px-10 md:py-5 font-black text-white transition-all duration-300 bg-[#25D366] rounded-xl md:rounded-2xl hover:bg-[#128C7E] shadow-lg active:scale-95 uppercase tracking-wider text-base md:text-xl"
              >
                <svg 
                  className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-3 fill-current" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Claim Cashback
              </a>

              <div className="mt-6">
                <p className="text-blue-900 font-black text-sm md:text-xl italic">
                  Periode: <span className="text-orange-600 underline decoration-2">23 Feb – 19 Mar 2026</span>
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <p className="text-center text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-6">
                Official Partner Cafe
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                {cafePartners.map((cafe, idx) => (
                  <div key={idx} className="w-[28%] md:w-auto flex justify-center transform active:scale-90 transition-transform">
                    <img 
                      src={driveImageUrl(cafe.logo)} 
                      alt={cafe.name} 
                      className="h-10 md:h-20 w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}