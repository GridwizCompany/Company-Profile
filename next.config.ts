import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      { source: "/acara", destination: "/events" },
      { source: "/acara/:path*", destination: "/events/:path*" },
      { source: "/mitra", destination: "/partners" },
      { source: "/mitra/:path*", destination: "/partners/:path*" },
      { source: "/berita", destination: "/news" },
      { source: "/berita/:path*", destination: "/news/:path*" },
      { source: "/tentang", destination: "/about" },
      { source: "/tentang-kami", destination: "/about" },
      { source: "/produk/:path*", destination: "/products/:path*" },
    ];
  },
};

export default nextConfig;
