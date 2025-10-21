# Gridwiz Company Profile

Gridwiz Company Profile is a modern marketing site for Gridwiz Energy & Mobility—an Indonesian clean-tech company delivering sustainable electric mobility and smart energy solutions. Built with Next.js App Router and Tailwind CSS, the site blends bold storytelling with polished UI components to showcase products, events, partnerships, and services.

![Gridwiz Hero Preview](public\sepeda-gridwiz.jpg)

---

## ✨ Highlights

- **Story-driven pages** for Tentang (About), Promo, Layanan, and Event showcases such as Car Free Day, Gobar Sunset, and Gobar Kemerdekaan.
- **Reusable components** (navigation, footer, overview sections, tabular data) composed with Tailwind CSS and shadcn/ui primitives.
- **Rich media support** including hero video, Google Drive powered galleries, and swiper/sliders for immersive storytelling.
- **International-friendly** layout with Indonesian copy, responsive typography, and dark-on-light contrast.
- **Custom brand system** featuring a minimalist SVG favicon designed specifically for Gridwiz.

---

## 🧱 Tech Stack

| Layer      | Tools |
| ---------- | ----- |
| Framework  | [Next.js 15 (App Router)](https://nextjs.org/) |
| Language   | TypeScript 5 |
| Styling    | Tailwind CSS 4, tailwind-merge, clsx, class-variance-authority |
| UI Toolkit | shadcn/ui, Lucide React, React Icons |
| Media      | Swiper 12, react-slick, slick-carousel |
| Quality    | ESLint 9 with Next.js config |

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Visit **http://localhost:3000** to see the site with hot reloading enabled.

### 3. Production build

```bash
npm run build
npm start
```

### 4. Lint the project

```bash
npm run lint
```

---

## 📁 Project Structure

```
src/
  app/
    layout.tsx        # Root layout (Navbar + Footer)
    page.tsx          # Landing page
    event/            # Event landing pages (CFD, Gobar Sunset, Gobar Kemerdekaan)
    partner/          # Partner verticals (hotel & resort, cafe & restaurant, etc.)
    layanan/          # Services overview
    promo/            # Promotions & pricing tables
    tentang/          # Vision, mission, organisation chart, Solar PV info
  globals.css         # Tailwind base + custom styles

components/
  Navbar.tsx
  Footer.tsx
  OverviewHome.tsx
  Table.tsx
  ui/…                # Shared UI primitives

public/
  favicon.svg         # Custom minimalist “G” favicon
  background/…        # Hero imagery & gallery assets
```

---

## 🌱 Key Pages

- **Beranda** – Vision summary, product teaser, partner logos, and impact stories.
- **Tentang Kami** – Vision & mission, organisational chart, Solar PV initiative.
- **Event** – Dedicated storytelling for CFD, Gobar Sunset, Gobar Kemerdekaan with Drive galleries.
- **Layanan** – Offerings for hospitality, tourism, and smart mobility partners.
- **Partner & Promo** – Dynamic sections to spotlight collaborations and limited offers.

---

## 🛠 Custom Favicon

An SVG favicon designed for Gridwiz lives at `public/favicon.svg` and is registered in `src/app/layout.tsx`. The icon features a white “G” in a green gradient circle to evoke clean energy and modern mobility.

---

## 🤝 Contributing

Pull requests are welcome! To propose changes:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/amazing-idea`).
3. Commit with clear messages.
4. Run `npm run lint` and `npm run build` to ensure quality.
5. Open a PR describing the change (screenshots encouraged).

---

## 📄 License

This project is proprietary to **Gridwiz Energy & Mobility**. Contact the Gridwiz team for usage or distribution permissions.

---

Made with 💡 energy and 🚲 mobility. Let’s build smarter, greener journeys together.
