import { notFound } from "next/navigation";
import EventItem from "@/components/EventItem";
import Link from "next/link";

export default async function Homepage() {
  const events = await getEvents();

  return (
    <div>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      <Link href="/events" className="btn-secondary">
        View All Events
      </Link>
    </div>
  );
}
async function getEvents() {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"
    }/api/events?sort=date:asc&pagination[limit]=3&populate=*`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();

  // Map Strapi response
  if (data.data) {
    const events = data.data;
    console.log(events);
    return events;
  }

  return [];
}
