async function getBlog() {
    const res = await fetch('https://api.vercel.app/blog/1');
    return res.json();
  }

  export function GET(request, context) {
    context.waitUntil(getBlog().then((json) => console.log({ json })));

    return new Response(`Hello from ${request.url}, I'm a Vercel Function!`);
  }

  export function GET(request) {
    return new Response(`Hello from ${process.env.VERCEL_REGION}`);
  }