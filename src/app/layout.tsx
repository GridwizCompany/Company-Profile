import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

import { LanguageProvider } from "@/lib/language";
import Minflow from "@/components/Mindflow";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Gridwiz Energy & Mobility",
  description: "Website profil perusahaan Gridwiz Energy & Mobility",
  referrer: "strict-origin-when-cross-origin",
  icons: {
    icon: [
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
      { url: "/favicon.ico?v=2", type: "image/x-icon" },
    ],
    shortcut: [{ url: "/favicon.svg?v=2", type: "image/svg+xml" }],
    apple: [{ url: "/favicon-256.png?v=2", sizes: "256x256" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
          <Minflow />
        </LanguageProvider>
      </body>
    </html>
  );
}
