import { fetchAllEvents, fetchEventBySlug } from "lib/fetchEvents";
import { notFound } from "next/navigation";
import styles from "@/styles/Event.module.css";
import EventControls from "@/components/EventControls";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  const events = await fetchAllEvents();
  return events.map((evt) => ({ slug: evt.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await fetchEventBySlug(slug);
  if (!event) return { title: "Event Not Found" };
  return {
    title: event.name,
    description: `Details for ${event.name}`,
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log("EventDetailPage slug:", slug);
  const event = await fetchEventBySlug(slug);

  if (!event) notFound();

  return (
    <div className={styles.event}>
      <EventControls eventId={event.id} />

      <span>
        {new Date(event.date).toLocaleDateString("en-US")} at {event.time}
      </span>
      <h1>{event.name}</h1>

      {event.image && (
        <div className={styles.image}>
          <Image
            src={
              event.image.formats?.large?.url ||
              event.image.formats?.medium?.url ||
              event.image.url
            }
            alt={event.name}
            width={960}
            height={600}
          />
        </div>
      )}

      <h3>Performers:</h3>
      <p>{event.performers}</p>
      <h3>Description:</h3>
      {Array.isArray(event.description) ? (
        event.description.map((block: any, index: number) => (
          <p key={index}>
            {block.children?.map((child: any) => child.text).join("")}
          </p>
        ))
      ) : (
        <p>{event.description}</p>
      )}
      <h3>Venue: {event.venue || event.venue}</h3>
      <p>{event.address}</p>

      <Link href="/events">
        <button className={styles.back}>{"<"} Go Back</button>
      </Link>
    </div>
  );
}
