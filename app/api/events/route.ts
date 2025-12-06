import events from "./data.json";

export async function GET() {
  return Response.json({ events });
}
