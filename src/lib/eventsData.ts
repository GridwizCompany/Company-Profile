export interface EventData {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  date: string;
  location: string;
  participants: number;
  imageSrc: string;
  eventType?: string;
  organizedBy?: string;
  objectives?: { title: string; desc: string }[];
  happenings?: { title: string; imageSrc: string }[];
  impacts?: { value: string; label: string }[];
  gallery?: string[];
  partners?: string[];
}

export const eventsData: EventData[] = [
  {
    id: "1",
    slug: "gowes-bareng-reflow",
    title: "Gowes Bareng Re:Flow",
    subtitle: "Exploring Lombok Through Sustainable Mobility",
    category: "Community Event",
    date: "18 July 2026",
    location: "Klui, Lombok Barat",
    participants: 100,
    imageSrc: "/images/events/gobarPoltekpar.png",
    eventType: "Community Ride, Escort Event",
    organizedBy: "Re:Flow, GRIDWIZ",
    partners: ["madjoe", "merumata", "bento"],
    objectives: [
      { title: "Sustainable Mobility", desc: "Promote cleaner mobility experience" },
      { title: "Community Engagement", desc: "Build interaction between Re:Flow users" },
      { title: "Discover Lombok", desc: "Encourage people to explore local destination sustainably" },
    ],
    happenings: [
      { title: "Meet & Prepare", imageSrc: "/images/events/gobarPoltekpar.png" },
      { title: "Ride Together", imageSrc: "/images/events/gobarHoliday.png" },
      { title: "Explore", imageSrc: "/images/events/gobarSunset.png" },
      { title: "Connect & Enjoy", imageSrc: "/images/events/gobarCFD.png" },
    ],
    impacts: [
      { value: "40+", label: "Participant" },
      { value: "45Km", label: "Total Ride" },
    ],
    gallery: [
      "/images/events/gobarPoltekpar.png",
      "/images/events/gobarHoliday.png",
      "/images/events/gobarSunset.png",
      "/images/events/gobarCFD.png",
    ]
  },
  {
    id: "2",
    slug: "gowes-bareng-cfd",
    title: "Gowes Bareng CFD",
    category: "Community Event",
    date: "18 - 02 - 2026",
    location: "Jl. Udayana Mataram",
    participants: 100,
    imageSrc: "/images/events/gobarCFD.png",
  },
  {
    id: "3",
    slug: "gowes-bareng-holiday",
    title: "Gowes Bareng Holiday",
    category: "Community Event",
    date: "03 - 01 - 2026",
    location: "BTH Pagutan",
    participants: 100,
    imageSrc: "/images/events/gobarHoliday.png",
  },
  {
    id: "4",
    slug: "gowes-bareng-sunset",
    title: "Gowes Bareng Sunset",
    category: "Community Event",
    date: "13 - 02 - 2026",
    location: "Pantai Ampenan",
    participants: 100,
    imageSrc: "/images/events/gobarSunset.png",
  },
  {
    id: "5",
    slug: "gowes-bareng-kemerdekaan",
    title: "Gowes Bareng Kemerdekaan",
    category: "Community Event",
    date: "17 - 08 - 2026",
    location: "Poltekpar Lombok",
    participants: 100,
    imageSrc: "/images/events/gobarKemerdekaan.png",
  },
];
