import { url } from "./constants";
export async function getCars(page=1, limit=7) {
  const response = await fetch(url);
  if (response.ok) return response.json();
  else { throw new Error(`Could not fetch ${url}, status: ${response.status}`);
}