import { url } from "./constants";
export async function getCars() {
  const response = await fetch(url);
  if (response.ok) return response.json();
  else{`Error: ${response.status}`}
}
