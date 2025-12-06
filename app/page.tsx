import { Event } from "@/types/events";
import { notFound } from "next/navigation";

async function getEvents(): Promise<Event[]> {
  const res = await fetch(
    `${process.env.API_URL || "http://localhost:3000"}/api/events`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  const events: Event[] = data.events || [];
  console.log(events);

  return events;
}

export default async function Homepage() {
  const events = await getEvents();

  return (
    <div>
      <h1>Upcoming Events</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <li key={event.id} className="border  rounded shadow">
            <h2 className="text-xl font-semibold">{event.name}</h2>
            <p className="text-gray-600">{event.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
