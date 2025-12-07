export async function fetchStrapi(path: string, options: RequestInit = {}) {
  const url = `${process.env.API_URL}/api${path}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Strapi Error ${res.status}: ${error}`);
  }

  return res.json();
}
