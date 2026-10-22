import { eventsData, EventData } from "../../../lib/eventsData";
import EventDetailClient from "./EventDetailClient";

export function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const staticEvent = eventsData.find((e) => e.slug === slug);

  // Jika tidak ditemukan di static seed, berikan fallback objek agar client context di browser bisa membaca dari localStorage
  const fallbackEvent: EventData = staticEvent || {
    id: `dyn_${slug}`,
    slug,
    title: slug,
    category: "Event",
    date: "",
    location: "",
    participants: 0,
    imageSrc: "/images/events/hero.png",
  };

  return <EventDetailClient initialEvent={fallbackEvent} slug={slug} />;
}
