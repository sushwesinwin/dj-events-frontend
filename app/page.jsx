import { notFound } from "next/navigation";
import EventItem from "@/components/EventItem";
import Link from "next/link";

async function getEvents() {
  const res = await fetch(
    `${process.env.API_URL || "http://localhost:3000"}/api/events`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  const events = data.events || [];
  console.log(events);

  return events;
}

export default async function Homepage() {
  const events = await getEvents();

  return (
    <div>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.slice(0, 3).map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      <Link href="/events" className="btn-secondary">
        View All Events
      </Link>
    </div>
  );
}
