import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../component/Navbar";
import ScrollToTop from "../component/ScrollToTop";
import { LanguageProvider } from "../lib/LanguageContext";
import { AdminDataProvider } from "../context/AdminDataContext";

export const metadata: Metadata = {
  title: {
    default: "Gridwiz Energy & Mobility",
    template: "%s | Gridwiz",
  },
  description:
    "Gridwiz menyediakan ekosistem kendaraan listrik terlengkap: E-Bike, E-Motor, dan E-Charging untuk mobilitas berkelanjutan di Indonesia.",
  keywords: ["gridwiz", "e-bike", "e-motor", "e-charging", "kendaraan listrik", "reflow"],
  authors: [{ name: "Gridwiz" }],
  metadataBase: new URL("https://gridwiz.id"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://gridwiz.id",
    siteName: "Gridwiz",
    title: "Gridwiz Energy & Mobility",
    description: "Ekosistem kendaraan listrik terlengkap untuk mobilitas berkelanjutan.",
    images: [{ url: "/images/logo/LOGO-GWE&M.png", width: 512, height: 512, alt: "Gridwiz Logo" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-256.png" sizes="256x256" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <AdminDataProvider>
          <LanguageProvider> {/* LanguageProvider di sini */}
            <Navbar />           {/* ← Navbar di sini */}
            {children}           {/* ← Semua halaman di sini */}
            <ScrollToTop />
          </LanguageProvider>
        </AdminDataProvider>
      </body>
    </html>
  );
}
