import { notFound } from "next/navigation";
import EventItem from "@/components/EventItem";

import { fetchAllEvents } from "@/lib/fetchEvents";

export default async function EventPage() {
  const events = await fetchAllEvents();

  return (
    <div>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </div>
  );
}
