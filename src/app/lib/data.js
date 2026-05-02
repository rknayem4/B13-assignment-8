export async function getTiles() {
  const res = await fetch("https://tiles-api-server-yz1c.vercel.app/data.json");
  const data = await res.json();
  return data;
}
export async function getCategory() {
  const res = await fetch("https://tiles-api-server-yz1c.vercel.app/category.json");
  const data = await res.json();
  return data;
}
