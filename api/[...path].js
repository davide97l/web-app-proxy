export const config = {
  runtime: 'edge'
};

export default async function handler(req) {
  return new Response('✅ Edge function is working!', {
    headers: { 'content-type': 'text/plain' }
  });
}
