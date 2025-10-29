import type { Metadata } from "next";
import { JSX } from "react";

const contactOptions: Array<{
  title: string;
  subtitle: string;
  description: string;
  href: string;
  actionLabel: string;
  icon: JSX.Element;
  badge: string;
}> = [
  {
    title: "AI Chat",
    subtitle: "Midflow",
    description:
      "Gunakan asisten AI Midflow untuk mendapatkan jawaban instan tentang layanan Gridwiz, dukungan teknis, hingga permintaan kemitraan kapan pun dibutuhkan.",
    href: "https://midflow.gridwiz.id",
    actionLabel: "Mulai Percakapan",
    icon: (
      <svg
        aria-hidden="true"
        className="h-6 w-6 text-sky-300"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M3 10.5C3 6.4 6.6 3 10.9 3c4.3 0 7.9 3.4 7.9 7.5 0 2.2-.9 4.2-2.5 5.7l-.3.3c-.4.4-.6 1-.6 1.6v1.4c0 .8-.8 1.4-1.5 1.1l-1.4-.6c-.3-.1-.7-.1-1 0-.4.1-.8.2-1.2.2-4.3 0-7.9-3.4-7.9-7.5Z" />
        <path d="M8 10h4M8 13h6" />
      </svg>
    ),
    badge: "Respons Instan",
  },
  {
    title: "WhatsApp Business",
    subtitle: "Re:Flow",
    description:
      "Terhubung langsung dengan tim kami melalui WhatsApp Business Re:Flow untuk diskusi cepat, penjadwalan demo, atau kebutuhan operasional harian.",
    href: "https://wa.me/6282144540304",
    actionLabel: "Chat via WhatsApp",
    icon: (
      <svg
        aria-hidden="true"
        className="h-6 w-6 text-emerald-300"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M4.5 19.5 5 16.5A7 7 0 1 1 8 19l-3.5.5Z" />
        <path d="m9 10 1.5 3 3 1.5" />
      </svg>
    ),
    badge: "+62 821-4454-0304",
  },
  {
    title: "Email",
    subtitle: "Re:Flow Support",
    description:
      "Kirimkan proposal, dokumen resmi, atau kebutuhan kerja sama melalui email agar tim kami dapat menindaklanjuti secara mendalam dan terstruktur.",
    href: "mailto:gridwizenergyandmobility@gmail.com?subject=Permintaan%20Informasi%20Gridwiz",
    actionLabel: "Kirim Email",
    icon: (
      <svg
        aria-hidden="true"
        className="h-6 w-6 text-sky-200"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="m4 6 8 6 8-6" />
        <rect width="20" height="16" x="2" y="4" rx="2" />
      </svg>
    ),
    badge: "gridwizenergyandmobility@gmail.com",
  },
];

export const metadata: Metadata = {
  title: "Kontak | Gridwiz",
  description:
    "Hubungi tim Gridwiz melalui Midflow AI Chat, WhatsApp Business Re:Flow, atau email resmi untuk informasi dan kerja sama.",
};

export default function KontakPage() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div
        className="absolute left-[-10%] top-[-30svh] h-[70svh] w-[70svh] rounded-full bg-sky-500/15 blur-[180px]"
        aria-hidden="true"
      />
      <div
        className="absolute right-[-15%] top-[20svh] h-[60svh] w-[60svh] rounded-full bg-blue-600/10 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative isolate px-6 pb-24 pt-28 sm:px-10 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-100">
            Hubungi Gridwiz
          </span>
          <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Dukungan cepat untuk segala kebutuhan mobilitas elektrik Anda
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-300 sm:text-lg">
            Pilih kanal komunikasi yang paling sesuai. Tim Gridwiz siap
            membantu, baik melalui percakapan AI yang responsif, chat langsung
            dengan konsultan Re:Flow, maupun korespondensi email formal.
          </p>
        </div>
      </div>

      <div className="relative pb-32">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 sm:px-10 md:px-16 lg:px-24 lg:grid-cols-3">
          {contactOptions.map((option) => (
            <a
              key={option.title}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-slate-800/60 bg-slate-900/70 p-8 shadow-[0_35px_70px_-50px_rgba(56,189,248,0.6)] transition hover:border-sky-400/40 hover:shadow-[0_45px_90px_-55px_rgba(56,189,248,0.75)]"
            >
              <div
                className="absolute -right-14 top-12 h-32 w-32 rounded-full bg-sky-500/10 blur-3xl transition group-hover:bg-sky-400/20"
                aria-hidden="true"
              />
              <div className="relative flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-700/60 bg-slate-950/70">
                  {option.icon}
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                    {option.subtitle}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white">
                    {option.title}
                  </h2>
                </div>
              </div>
              <p className="relative mt-6 flex-1 text-sm leading-relaxed text-slate-300">
                {option.description}
              </p>
              <div className="relative mt-8 flex flex-col gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/60 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.25em] text-slate-300">
                  {option.badge}
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition group-hover:text-white">
                  {option.actionLabel}
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-5xl px-6 text-center sm:px-10 md:px-16 lg:px-24">
          <div className="rounded-[32px] border border-slate-800/60 bg-slate-900/50 p-10 shadow-[0_30px_60px_-55px_rgba(56,189,248,0.65)]">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
              Preferensi Komunikasi
            </p>
            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              Sampaikan kebutuhan Anda sejelas mungkin ketika menghubungi kami,
              agar kami dapat menyiapkan tim dan solusi yang paling tepat.
              Seluruh kanal di atas dipantau secara berkala oleh tim Gridwiz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
