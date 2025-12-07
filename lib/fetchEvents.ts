import type { Event } from "@/types/event";

export async function fetchAllEvents(): Promise<Event[]> {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"
    }/api/events?sort=date:asc&populate=*`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch events");
  const data = await res.json();

  // Map Strapi response structure
  if (data.data) {
    return data.data;
  }

  return data.events || data;
}

export async function fetchEventBySlug(slug: string): Promise<Event | null> {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"
    }/api/events?filters[slug][$eq]=${slug}&populate=*`,
    { cache: "no-store" }
  );
  if (!res.ok) return null;

  const data = await res.json();

  // Map Strapi response structure
  if (data.data && data.data.length > 0) {
    return data.data[0];
  }

  return data.evt || null;
}
