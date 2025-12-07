import type { Event } from '@/types/event';

export async function fetchAllEvents(): Promise<Event[]> {
  const res = await fetch(`${process.env.API_URL || 'http://localhost:3000'}/api/events`, 
        { cache: 'force-cache'} 
    );
  if(!res.ok) throw new Error('Failed to fetch events');
  const data = await res.json();
  console.log(data);
  
  return data.events || data;
}

export async function fetchEventBySlug(slug: string): Promise<Event | null> {
    const res = await fetch(`${process.env.API_URL || 'http://localhost:3000'}/api/events/${slug}`, 
       { cache: 'force-cache' }
    );
    if(!res.ok) return null;

    const data = await res.json()
    return data.evt; // match the API route
}