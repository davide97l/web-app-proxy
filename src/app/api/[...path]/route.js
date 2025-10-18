export const config = {
  runtime: 'edge',
};

export async function GET(request, { params }) {
  const backend = 'https://foodapp-production-8ee3.up.railway.app/'; // change this to your backend
  const path = params.path ? '/' + params.path.join('/') : '';
  const url = `${backend}${path}${request.url.includes('?') ? '?' + request.url.split('?')[1] : ''}`;

  const response = await fetch(url, { method: 'GET' });
  const text = await response.text();

  return new Response(text, {
    status: response.status,
    headers: response.headers,
  });
}

export async function POST(request, { params }) {
  const backend = 'https://foodapp-production-8ee3.up.railway.app/';
  const path = params.path ? '/' + params.path.join('/') : '';
  const url = `${backend}${path}`;

  const body = await request.text();
  const response = await fetch(url, {
    method: 'POST',
    headers: request.headers,
    body,
  });

  const text = await response.text();

  return new Response(text, {
    status: response.status,
    headers: response.headers,
  });
}
