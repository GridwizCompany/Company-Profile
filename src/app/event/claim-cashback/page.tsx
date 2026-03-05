"use client";

import { driveImageUrl } from "utils/driveutils";

export default function ClaimCashbackPage() {
  const bgHero = "https://drive.google.com/file/d/1pMlJC3V6vzgohXpXhK7GJ4S__rgOB83M/view?usp=sharing";
  const message = `Hai Minflow,
Saya ingin mengajukan klaim cashback.
Nama Pengguna:
Nomor di Aplikasi Re:Flow:
Terima kasih atas bantuannya`;

  const phone = "6282144540304";
  const textParam = encodeURIComponent(message);
  const webLink = `https://wa.me/${phone}?text=${textParam}`;
  const appLink = `whatsapp://send?phone=${phone}&text=${textParam}`;
  const intentLink = `intent://send?phone=${phone}&text=${textParam}#Intent;scheme=whatsapp;package=com.whatsapp;end`;



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
                    <div className="shrink-0 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white text-[10px] mt-1">
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
                href={webLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  const ua = navigator.userAgent.toLowerCase();
                  const isAndroid = ua.includes("android");
                  const isIOS = /iphone|ipad|ipod/.test(ua);

                  if (isAndroid) {
                    window.location.href = intentLink;
                  } else if (isIOS) {
                    window.location.href = appLink;
                  } else {
                    window.location.href = webLink;
                  }

                  setTimeout(() => {
                    window.location.href = webLink;
                  }, 800);
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3 text-sm md:text-lg font-black text-white shadow-lg shadow-emerald-500/30 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Klaim Cashback
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
