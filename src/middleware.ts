import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLoggedIn = request.cookies.get("admin_logged_in")?.value === "true";

  // Lindungi endpoint API upload dari akses unauthenticated
  if (pathname.startsWith("/api/upload")) {
    if (!isLoggedIn) {
      return NextResponse.json(
        { error: "Unauthorized: Silakan login sebagai admin terlebih dahulu." },
        { status: 401 }
      );
    }
    return NextResponse.next();
  }

  // Hanya periksa rute yang diawali dengan /admin
  if (pathname.startsWith("/admin")) {
    // Akses ke /admin root
    if (pathname === "/admin") {
      if (isLoggedIn) {
        return NextResponse.redirect(new URL("/admin/dashboard", request.url));
      } else {
        return NextResponse.redirect(new URL("/admin/login", request.url));
      }
    }

    // Akses ke /admin/login saat sudah login
    if (pathname === "/admin/login") {
      if (isLoggedIn) {
        return NextResponse.redirect(new URL("/admin/dashboard", request.url));
      }
      return NextResponse.next();
    }

    // Akses ke rute admin lain (/admin/dashboard, /admin/events, dll) saat belum login
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/admin", "/api/upload/:path*", "/api/upload"],
};
