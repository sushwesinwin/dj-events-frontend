import EventItem from "@/components/EventItem";
import { searchEvents } from "@/lib/fetchEvents";
import Link from "next/link";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ term?: string }>;
}) {
  const { term = "" } = await searchParams;
  const events = await searchEvents(term);

  return (
    <main>
      <Link
        href={{ pathname: "/events", query: { term } }}
      >{`< Back to Events`}</Link>
      <h1>Search results for "{term}"</h1>
      {events.map((evt: any) => (
        <EventItem key={evt.id} evt={evt} query={""} />
      ))}
    </main>
  );
}
