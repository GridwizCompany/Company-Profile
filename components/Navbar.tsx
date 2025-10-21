"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const navItems = [
  { name: "Beranda", path: "/" },
  { name: "Promo", path: "/promo" },
  {
    name: "Event",
    submenu: [
      { name: "Car Free Day", path: "/event/car-free-day" },
      { name: "Gobar Sunset", path: "/event/gobar-sunset" },
      { name: "Gobar Kemerdekaan", path: "/event/gobar-kemerdekaan" },
    ],
  },
  {
    name: "Partner",
    submenu: [
      { name: "Hotel & Resort", path: "/partner/hotel-and-resort" },
      { name: "Cafe & restaurant", path: "/partner/cafe-and-restaurant" },
    ],
  },
  //   { name: "Berita", path: "/berita" },
  { name: "Layanan", path: "/panduan" },
  { name: "Tentang Kami", path: "/tentang" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? "bg-white/50 backdrop-blur-sm shadow-md"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto py-3 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <img
            src="/gridwiz-logo.png"
            alt="Logo Gridwiz"
            className="w-24 h-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Tombol hamburger (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden focus:outline-none transition-colors duration-300 ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu utama */}
        <ul
          className={`absolute md:static left-0 w-full md:w-auto bg-black/90 md:bg-transparent 
            flex flex-col md:flex-row items-start md:items-center 
            gap-4 md:gap-8 font-semibold transition-all duration-500 ease-in-out
            ${
              menuOpen
                ? "top-14 opacity-100 visible"
                : "top-[-400px] opacity-0 invisible md:opacity-100 md:visible"
            }`}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const hasSubmenu = item.submenu?.length;

            return (
              <li key={item.name} className="relative w-full md:w-auto group">
                {/* Parent menu tidak bisa diklik jika punya submenu */}
                {hasSubmenu ? (
                  <div
                    className={`flex items-center gap-1 px-2 py-2 cursor-default transition-all duration-300 ${
                      scrolled
                        ? "md:text-black text-white hover:text-blue-600"
                        : "text-white hover:text-blue-300"
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className="group-hover:rotate-180 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <Link
                    href={item.path ?? "/"}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-1 px-2 py-2 transition-all duration-300 ${
                      scrolled
                        ? "md:text-black text-white hover:text-blue-600"
                        : "text-white hover:text-blue-300"
                    } ${
                      isActive ? "font-bold text-blue-600 md:text-blue-500" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Submenu */}
                {hasSubmenu && item.submenu && (
                  <ul
                    className={`md:absolute md:left-0 md:top-full md:bg-white md:shadow-lg md:rounded-lg 
                      md:min-w-[180px] md:py-2 md:opacity-0 md:invisible 
                      md:group-hover:opacity-100 md:group-hover:visible 
                      transition-all duration-300 w-full md:w-auto`}
                  >
                    {item.submenu.map((sub) => (
                      <li key={sub.path}>
                        <Link
                          href={sub.path}
                          onClick={() => setMenuOpen(false)}
                          className="block px-4 py-2 md:text-gray-800 text-white md:hover:bg-gray-100 hover:text-blue-400 transition-all"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
