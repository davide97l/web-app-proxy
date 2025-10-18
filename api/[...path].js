export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  const targetBase = "https://foodapp-production-8ee3.up.railway.app"; // 👈 replace with your real Railway backend URL

  // Build the target URL
  const url = new URL(req.url);
  const targetUrl = targetBase + url.pathname + url.search;

  const response = await fetch(targetUrl, {
    method: req.method,
    headers: req.headers,
    body: req.method !== "GET" && req.method !== "HEAD" ? await req.text() : undefined,
  });

  // Return the proxied response
  return new Response(await response.text(), {
    status: response.status,
    headers: response.headers,
  });
}
