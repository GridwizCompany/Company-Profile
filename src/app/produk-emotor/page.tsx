"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  Clock3,
  Download,
  Gauge,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";
import { useLanguage } from "@/lib/language";

type Localized = { id: string; en: string };

const motorcycles = [
  {
    name: "E1",
    description: {
      id: "E-motor lincah untuk eksplorasi kota dengan jarak tempuh lebih panjang dan aksen desain yang ikonik.",
      en: "An agile e-motor for city exploration with longer range and iconic design accents.",
    },
    range: "140 km",
    speed: "70 km/jam",
    battery: "LFP/LiFePO4",
    capacity: "72V 45 AH",
    dimension: "1780 x 740 x 1070 mm",
    chargingPower: "1000 watt",
    chargingTime: "4-5 jam",
    colors: [
      { name: { id: "Biru", en: "Blue" }, swatch: "#3a72c2", src: "/emotor-cutout/e1/biru.png" },
      { name: { id: "Cream", en: "Cream" }, swatch: "#e8d9bd", src: "/emotor-cutout/e1/cream.png" },
      { name: { id: "Hitam", en: "Black" }, swatch: "#171717", src: "/emotor-cutout/e1/hitam.png" },
      { name: { id: "Merah", en: "Red" }, swatch: "#bb1f2b", src: "/emotor-cutout/e1/merah.png" },
      { name: { id: "Putih", en: "White" }, swatch: "#f8fafc", src: "/emotor-cutout/e1/putih.png" },
      { name: { id: "Silver", en: "Silver" }, swatch: "#b8c0c9", src: "/emotor-cutout/e1/silver.png" },
    ],
  },
  {
    name: "E2",
    description: {
      id: "E-motor modern untuk mobilitas praktis, efisien, dan nyaman digunakan untuk kebutuhan harian.",
      en: "A modern e-motor for practical, efficient, and comfortable daily mobility.",
    },
    range: "100 km",
    speed: "60 km/jam",
    battery: "LFP/LiFePO4",
    capacity: "72V 30 AH",
    dimension: "1780 x 740 x 1070 mm",
    chargingPower: "1000 watt",
    chargingTime: "4-5 jam",
    colors: [
      { name: { id: "Biru", en: "Blue" }, swatch: "#3458b8", src: "/emotor-cutout/e2/biru.png" },
      { name: { id: "Hitam", en: "Black" }, swatch: "#171717", src: "/emotor-cutout/e2/hitam.png" },
      { name: { id: "Merah", en: "Red" }, swatch: "#c32026", src: "/emotor-cutout/e2/merah.png" },
      { name: { id: "Putih", en: "White" }, swatch: "#f8fafc", src: "/emotor-cutout/e2/putih.png" },
      { name: { id: "Silver", en: "Silver" }, swatch: "#b8c0c9", src: "/emotor-cutout/e2/silver.png" },
      { name: { id: "Ungu", en: "Purple" }, swatch: "#6750a4", src: "/emotor-cutout/e2/ungu.png" },
    ],
  },
];

const rentalPlans = [
  {
    period: { id: "Harian", en: "Daily" },
    unit: { id: "per hari", en: "per day" },
    rows: [
      { model: "E1", price: "Rp 50.000", deposit: "Rp 100.000" },
      { model: "E2", price: "Rp 40.000", deposit: "Rp 100.000" },
    ],
  },
  {
    period: { id: "Mingguan", en: "Weekly" },
    unit: { id: "per minggu", en: "per week" },
    rows: [
      { model: "E1", price: "Rp 266.000", deposit: "Rp 200.000" },
      { model: "E2", price: "Rp 217.000", deposit: "Rp 200.000" },
    ],
  },
  {
    period: { id: "Bulanan", en: "Monthly" },
    unit: { id: "per bulan", en: "per month" },
    rows: [
      { model: "E1", price: "Rp 930.000", deposit: "Rp 300.000" },
      { model: "E2", price: "Rp 750.000", deposit: "Rp 300.000" },
    ],
  },
  {
    period: { id: "Tahunan", en: "Yearly" },
    unit: { id: "per bulan", en: "per month" },
    rows: [
      { model: "E1", price: "Rp 825.000", deposit: "Rp 1.000.000" },
      { model: "E2", price: "Rp 660.000", deposit: "Rp 1.000.000" },
    ],
  },
];

const ownershipPlans = [
  {
    model: "E1",
    range: "140 km",
    cash: "Rp 23.115.000",
    before: "Rp 29.750.000",
    rows: [
      { duration: "12 bulan", monthly: "Rp 1.935.000", weekly: "Rp 490.000", daily: "Rp 70.000" },
      { duration: "24 bulan", monthly: "Rp 1.200.000", weekly: "Rp 280.000", daily: "Rp 40.000" },
      { duration: "36 bulan", monthly: "Rp 1.005.000", weekly: "Rp 234.500", daily: "Rp 33.500" },
    ],
  },
  {
    model: "E2",
    range: "100 km",
    cash: "Rp 18.515.000",
    before: "Rp 23.750.000",
    rows: [
      { duration: "12 bulan", monthly: "Rp 1.530.000", weekly: "Rp 357.000", daily: "Rp 51.000" },
      { duration: "24 bulan", monthly: "Rp 960.000", weekly: "Rp 224.000", daily: "Rp 32.000" },
      { duration: "36 bulan", monthly: "Rp 810.000", weekly: "Rp 189.000", daily: "Rp 27.000" },
    ],
  },
];

const highlights: { icon: typeof ShieldCheck; title: Localized; body: Localized }[] = [
  {
    icon: ShieldCheck,
    title: { id: "Keamanan GPS aktif", en: "Active GPS security" },
    body: {
      id: "Unit dilengkapi sistem GPS untuk pemantauan lokasi, dukungan pelacakan aset, dan kontrol operasional yang lebih aman.",
      en: "Units include GPS for location monitoring, asset tracking support, and safer operational control.",
    },
  },
  {
    icon: BatteryCharging,
    title: { id: "Free charging", en: "Free charging" },
    body: {
      id: "Pengisian gratis di kantor Gridwiz pukul 11.00-15.00 WITA dengan Solar Panel saat cuaca cerah.",
      en: "Free charging at the Gridwiz office from 11:00-15:00 WITA using solar panels when the weather is clear.",
    },
  },
  {
    icon: WalletCards,
    title: { id: "Dua skema fleksibel", en: "Two flexible schemes" },
    body: {
      id: "Pilih rent biasa untuk kebutuhan jangka pendek atau rent to ownership agar sewa berujung menjadi hak milik.",
      en: "Choose regular rental for short-term needs or rent to ownership so the rental can lead to ownership.",
    },
  },
];

export default function EMotorProductPage() {
  const { t } = useLanguage();
  const [selectedMotorIndex, setSelectedMotorIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  const selectedMotor = motorcycles[selectedMotorIndex];
  const selectedColor = selectedMotor.colors[selectedColorIndex] ?? selectedMotor.colors[0];

  const swapMotor = (direction: 1 | -1) => {
    setSelectedMotorIndex((current) => {
      const next = (current + direction + motorcycles.length) % motorcycles.length;
      return next;
    });
    setSelectedColorIndex(0);
  };

  const openDetail = () => {
    setShowDetail(true);
  };

  return (
    <section className="overflow-hidden bg-slate-950 text-white">
      <div className="relative min-h-[92vh] px-6 pt-30 pb-14 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(14,165,233,0.20),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(245,158,11,0.18),transparent_28%),linear-gradient(135deg,#eef3f8_0%,#dce7ef_48%,#cbd5df_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-slate-950/20 to-transparent" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="text-slate-950">
            <div className="mb-7 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.24em] text-slate-700">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Products
            </div>
            <h1 className="text-5xl font-black leading-none sm:text-6xl lg:text-8xl">
              {selectedMotor.name}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600">
              {t(selectedMotor.description)}
            </p>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-5">
              <div>
                <p className="text-3xl font-black">{selectedMotor.range.replace(" km", "")}<span className="ml-1 text-base font-medium">km</span></p>
                <p className="mt-1 text-xl font-bold text-slate-600">Range</p>
              </div>
              <div>
                <p className="text-3xl font-black">{selectedMotor.speed.replace(" km/jam", "")}<span className="ml-1 text-base font-medium">km/h</span></p>
                <p className="mt-1 text-xl font-bold text-slate-600">Speed</p>
              </div>
              <div>
                <p className="text-3xl font-black">4-5<span className="ml-1 text-base font-medium">hours</span></p>
                <p className="mt-1 text-xl font-bold text-slate-600">Charging</p>
              </div>
            </div>

            <div className="mt-10 grid max-w-xl gap-3 text-sm">
              {[
                { label: "Battery", value: selectedMotor.battery },
                { label: "Battery Capacity", value: selectedMotor.capacity },
                { label: "Dimension", value: selectedMotor.dimension },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between border-b border-slate-400/50 py-3">
                  <span className="font-semibold text-slate-500">{item.label}</span>
                  <span className="font-black text-slate-900">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#detail-produk"
                onClick={openDetail}
                className="rounded-md bg-slate-950 px-7 py-4 text-sm font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-cyan-700"
              >
                {t({ id: "Lihat Detail", en: "Read More" })}
              </a>
              <a
                href="#rent"
                className="rounded-md border border-slate-500 px-7 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:border-cyan-700 hover:text-cyan-700"
              >
                {t({ id: "Lihat Skema", en: "View Plans" })}
              </a>
            </div>
          </div>

          <div className="relative min-h-[460px] lg:min-h-[620px]">
            <div className="absolute right-0 top-0 z-20 hidden gap-3 sm:flex">
              <button
                type="button"
                onClick={() => swapMotor(-1)}
                className="grid h-13 w-13 place-items-center rounded-lg border border-slate-500 text-slate-800 transition hover:-translate-y-1 hover:border-cyan-600 hover:text-cyan-700"
                aria-label={t({ id: "Tipe sebelumnya", en: "Previous model" })}
              >
                <ArrowLeft className="h-6 w-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => swapMotor(1)}
                className="grid h-13 w-13 place-items-center rounded-lg border border-slate-500 text-slate-800 transition hover:-translate-y-1 hover:border-cyan-600 hover:text-cyan-700"
                aria-label={t({ id: "Tipe berikutnya", en: "Next model" })}
              >
                <ArrowRight className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => swapMotor(-1)}
              className="absolute left-0 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/70 text-slate-900 shadow-lg backdrop-blur transition hover:bg-cyan-100 lg:-left-8"
              aria-label={t({ id: "Tipe sebelumnya", en: "Previous model" })}
            >
              <ArrowLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[760px] overflow-visible">
              <Image
                key={`${selectedMotor.name}-${selectedMotor.colors[0].src}`}
                src={selectedMotor.colors[0].src}
                alt={`Re:Flow E-Motor ${selectedMotor.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 700px"
                className="object-contain contrast-110 saturate-110 drop-shadow-[0_35px_45px_rgba(15,23,42,0.30)] transition duration-700"
              />
            </div>
            <button
              type="button"
              onClick={() => swapMotor(1)}
              className="absolute right-0 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/70 text-slate-900 shadow-lg backdrop-blur transition hover:bg-cyan-100 lg:right-0"
              aria-label={t({ id: "Tipe berikutnya", en: "Next model" })}
            >
              <ArrowRight className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className="mt-5 flex justify-center gap-3">
              {motorcycles.map((motor, index) => (
                <button
                  key={motor.name}
                  type="button"
                  onClick={() => {
                    setSelectedMotorIndex(index);
                    setSelectedColorIndex(0);
                  }}
                  className={`h-3 rounded-full transition-all ${
                    selectedMotorIndex === index ? "w-10 bg-slate-950" : "w-3 bg-white"
                  }`}
                  aria-label={`Model ${motor.name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white px-6 py-18 text-slate-950 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title.id} className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <Icon className="h-8 w-8 text-cyan-600" aria-hidden="true" />
                <h2 className="mt-5 text-xl font-black text-slate-950">{t(item.title)}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{t(item.body)}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div id="rent" className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Regular Rent</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">
                {t({ id: "Skema rent biasa", en: "Regular rental scheme" })}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-300">
              {t({
                id: "Cocok untuk operasional harian, mingguan, bulanan, sampai kontrak tahunan dengan uang jaminan yang dikembalikan setelah masa sewa selesai.",
                en: "Suitable for daily, weekly, monthly, and yearly operations with a deposit returned after the rental period ends.",
              })}
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {rentalPlans.map((plan) => (
              <div key={plan.period.id} className="overflow-hidden rounded-lg border border-white/12 bg-white/7 shadow-xl">
                <div className="bg-linear-to-r from-cyan-500 to-sky-700 px-5 py-4">
                  <h3 className="text-2xl font-black">{t(plan.period)}</h3>
                  <p className="text-sm font-semibold text-cyan-50">{t(plan.unit)}</p>
                </div>
                <div className="divide-y divide-white/10">
                  {plan.rows.map((row) => (
                    <div key={`${plan.period.id}-${row.model}`} className="p-5">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-lg font-black">{row.model}</span>
                        <span className="rounded-full bg-amber-300 px-3 py-1 text-xs font-black text-slate-950">
                          {row.model === "E1" ? "140KM" : "100KM"}
                        </span>
                      </div>
                      <p className="mt-4 text-2xl font-black text-white">{row.price}</p>
                      <p className="mt-2 text-sm text-slate-300">
                        {t({ id: "Uang jaminan", en: "Deposit" })}: {row.deposit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-100 px-6 py-20 text-slate-950 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-600">Rent To Ownership</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              {t({ id: "Sewa tanpa DP hingga jadi hak milik", en: "Rent with no down payment until ownership" })}
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              {t({
                id: "Promo untuk 50 unit pertama dengan booking fee Rp 1.000.000. Pilihan cicilan dapat dilihat dalam simulasi harian, mingguan, dan bulanan.",
                en: "Promo for the first 50 units with a Rp 1,000,000 booking fee. Installment choices are shown in daily, weekly, and monthly simulations.",
              })}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {ownershipPlans.map((plan) => (
              <div key={plan.model} className="rounded-lg border border-slate-200 bg-white shadow-xl">
                <div className="flex flex-col gap-4 border-b border-slate-200 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-600">Model {plan.model}</p>
                    <h3 className="mt-2 text-3xl font-black">Cash only: {plan.cash}</h3>
                    <p className="mt-1 text-sm font-semibold text-slate-500 line-through">{plan.before}</p>
                  </div>
                  <div className="rounded-md bg-slate-950 px-5 py-4 text-white">
                    <p className="text-xs uppercase tracking-wide text-slate-400">{t({ id: "Jarak Tempuh", en: "Range" })}</p>
                    <p className="text-2xl font-black">{plan.range}</p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[560px] text-left">
                    <thead className="bg-slate-950 text-white">
                      <tr>
                        <th className="px-5 py-4 text-sm">{t({ id: "Jangka Waktu", en: "Term" })}</th>
                        <th className="px-5 py-4 text-sm">{t({ id: "Bulanan", en: "Monthly" })}</th>
                        <th className="px-5 py-4 text-sm">{t({ id: "Mingguan", en: "Weekly" })}</th>
                        <th className="px-5 py-4 text-sm">{t({ id: "Harian", en: "Daily" })}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {plan.rows.map((row) => (
                        <tr key={`${plan.model}-${row.duration}`} className="transition hover:bg-cyan-50">
                          <td className="px-5 py-4 font-bold uppercase">{row.duration}</td>
                          <td className="px-5 py-4">{row.monthly}</td>
                          <td className="px-5 py-4">{row.weekly}</td>
                          <td className="px-5 py-4">{row.daily}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="detail-produk" className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {!showDetail ? (
            <div className="rounded-lg border border-white/12 bg-white/7 px-6 py-12 text-center shadow-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                {t({ id: "Detail produk", en: "Product detail" })}
              </p>
              <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-black md:text-5xl">
                {t({
                  id: "Klik detail pada carousel untuk memilih warna dan melihat konfigurasi unit.",
                  en: "Click detail on the carousel to choose colors and view unit configuration.",
                })}
              </h2>
            </div>
          ) : (
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative overflow-hidden rounded-lg border border-cyan-200/50 bg-linear-to-br from-sky-50 via-cyan-50 to-slate-200 p-6 shadow-2xl">
                <div className="absolute right-6 top-6 rounded-full bg-slate-950 px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
                  Re:Flow {selectedMotor.name}
                </div>
                <div className="relative mt-10 aspect-[4/3]">
                  <Image
                    key={selectedColor.src}
                    src={selectedColor.src}
                    alt={`Re:Flow ${selectedMotor.name} ${t(selectedColor.name)}`}
                    fill
                    sizes="(max-width: 1024px) 92vw, 620px"
                    className="object-contain contrast-110 saturate-110 drop-shadow-[0_35px_45px_rgba(15,23,42,0.35)] transition duration-700"
                  />
                </div>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                  {t({ id: "Konfigurasi Warna", en: "Color Configuration" })}
                </p>
                <h2 className="mt-3 text-3xl font-black md:text-5xl">
                  {selectedMotor.name} - {t(selectedColor.name)}
                </h2>
                <p className="mt-5 text-sm leading-7 text-slate-300">
                  {t({
                    id: "Pilih warna setelah membuka detail. Tampilan unit akan langsung berubah agar pengguna bisa membandingkan sebelum melakukan booking.",
                    en: "Choose the color after opening detail. The unit preview changes instantly so users can compare before booking.",
                  })}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  {selectedMotor.colors.map((color, index) => (
                    <button
                      key={color.src}
                      type="button"
                      onClick={() => setSelectedColorIndex(index)}
                      className={`group flex flex-col items-center gap-3 rounded-lg border px-4 py-4 transition hover:-translate-y-1 ${
                        selectedColorIndex === index
                          ? "border-cyan-300 bg-cyan-300/12"
                          : "border-white/12 bg-white/7"
                      }`}
                      aria-label={t(color.name)}
                    >
                      <span
                        className="h-12 w-12 rounded-full border border-white/40 shadow-inner"
                        style={{ backgroundColor: color.swatch }}
                      />
                      <span className="text-xs font-black uppercase text-slate-200">
                        {t(color.name)}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    { icon: Gauge, label: "Range", value: selectedMotor.range },
                    { icon: Gauge, label: "Speed", value: selectedMotor.speed },
                    { icon: BatteryCharging, label: "Battery", value: selectedMotor.capacity },
                    { icon: Clock3, label: "Charging", value: selectedMotor.chargingTime },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="rounded-lg border border-white/12 bg-white/7 p-4">
                        <Icon className="h-5 w-5 text-cyan-300" aria-hidden="true" />
                        <p className="mt-3 text-xs font-bold uppercase tracking-wide text-slate-400">{item.label}</p>
                        <p className="mt-1 text-lg font-black text-white">{item.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white px-6 py-20 text-slate-950 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg bg-slate-950 p-6 text-white">
            <h2 className="text-3xl font-black">{t({ id: "Syarat & kontak", en: "Requirements & contact" })}</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
              <p className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />Kartu Tanda Penduduk (KTP)</p>
              <p className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />Surat Izin Mengemudi (SIM)</p>
              <p className="flex gap-3"><Clock3 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />{t({ id: "Hubungi +62 821-4454-0304 (MinFlow)", en: "Contact +62 821-4454-0304 (MinFlow)" })}</p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { title: "Rent", src: "/emotor/brochures/rent.jpeg", file: "reflow-emotor-rent.jpeg" },
              { title: "Rent to Ownership", src: "/emotor/brochures/rent-to-own.jpeg", file: "reflow-emotor-rent-to-ownership.jpeg" },
            ].map((brochure) => (
              <div key={brochure.title} className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-lg">
                <div className="relative aspect-[4/3]">
                  <Image src={brochure.src} alt={`Brosur ${brochure.title} Re:Flow E-Motor`} fill sizes="(max-width: 768px) 92vw, 40vw" className="object-cover" />
                </div>
                <div className="p-4">
                  <p className="font-black">{brochure.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{t({ id: "Brosur sumber informasi paket.", en: "Source brochure for package information." })}</p>
                  <a
                    href={brochure.src}
                    download={brochure.file}
                    className="mt-4 inline-flex items-center gap-2 rounded-md bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-cyan-700"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    {t({ id: "Download Brosur", en: "Download Brochure" })}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
