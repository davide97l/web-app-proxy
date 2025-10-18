export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const backend = 'https://foodapp-production-8ee3.up.railway.app'; // change this to your backend

  const url = new URL(req.url);
  const targetUrl = backend + url.pathname + url.search;

  const response = await fetch(targetUrl, {
    method: req.method,
    headers: req.headers,
    body: req.method !== 'GET' && req.method !== 'HEAD' ? await req.text() : undefined,
  });

  return new Response(await response.text(), {
    status: response.status,
    headers: response.headers,
  });
}
