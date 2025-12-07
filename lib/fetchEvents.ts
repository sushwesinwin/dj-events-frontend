import type { Event } from "@/types/event";
import qs from "qs";
import { fetchStrapi } from "./strapi";

export async function fetchAllEvents(): Promise<Event[]> {
  const query = qs.stringify(
    {
      populate: "*",
      sort: ["date:asc"],
    },
    { encodeValuesOnly: true }
  );

  const data = await fetchStrapi(`/events?${query}`, { cache: "no-store" });
  return data.data;
}

export async function searchEvents(term: string): Promise<Event[]> {
  const query = qs.stringify(
    {
      populate: "*",
      filters: {
        $or: [
          { name: { $containsi: term } },
          { performers: { $containsi: term } },
          { description: { $containsi: term } },
        ],
      },
    },
    { encodeValuesOnly: true }
  );

  const data = await fetchStrapi(`/events?${query}`, { cache: "no-store" });
  return data.data;
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
