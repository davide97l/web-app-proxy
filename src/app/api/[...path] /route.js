export const config = {
  runtime: 'edge',
};

const backend = 'https://foodapp-production-8ee3.up.railway.app';

function buildUrl(request, params) {
  const path = params?.path ? '/' + params.path.join('/') : '';
  const query = request.url.includes('?') ? '?' + request.url.split('?')[1] : '';
  return `${backend}${path}${query}`;
}

export async function GET(request, { params }) {
  const url = buildUrl(request, params);
  const response = await fetch(url, { method: 'GET', headers: request.headers });
  const text = await response.text();

  return new Response(text, {
    status: response.status,
    headers: response.headers,
  });
}

export async function POST(request, { params }) {
  const url = buildUrl(request, params);
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

export async function PUT(request, { params }) {
  const url = buildUrl(request, params);
  const body = await request.text();

  const response = await fetch(url, {
    method: 'PUT',
    headers: request.headers,
    body,
  });

  const text = await response.text();

  return new Response(text, {
    status: response.status,
    headers: response.headers,
  });
}

export async function DELETE(request, { params }) {
  const url = buildUrl(request, params);
  const response = await fetch(url, { method: 'DELETE', headers: request.headers });
  const text = await response.text();

  return new Response(text, {
    status: response.status,
    headers: response.headers,
  });
}
