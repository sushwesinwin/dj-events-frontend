import eventsData from "./data.json";

export async function GET() {
  try {
    return Response.json(eventsData);
  } catch (error) {
    console.log('Error serving events data',error);
    return Response.json({ error });
  }
}
