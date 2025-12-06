import events from "../data.json";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug;
  const evt = events.events.find((ev) => ev.slug === slug);

  if (!evt) {
    return Response.json({ message: "Event not found" }, { status: 404 });
  }

  return Response.json({ evt });
}
