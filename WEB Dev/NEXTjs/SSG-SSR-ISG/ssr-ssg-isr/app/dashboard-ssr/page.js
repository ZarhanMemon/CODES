


// 2. SSR (Server Side Rendering) — fetch() with { cache: 'no-store' } 

// In SSR (Server Side Rendering), we use fetch() with { cache: 'no-store' }.

// This tells Next.js not to cache the data and instead fetch fresh data every time the page is requested.

// Since Next.js pages are server-rendered by default in the App Router, this behavior is called Server Side Rendering.

async function getData() {
    const res = await fetch('https://api.vercel.app/blog',


        //SSR means the page is built on the server every time someone visits it.
        // Using { cache: 'no-store' } forces fetch() to get live data on every request, not from cache.
        {
            cache: 'no-store', // 👈 forces SSR
        }

    );
    return res.json();
}

export default async function DashboardPage() {
    const data = await getData();

    return <div>{data.map((data) => <div key={data.id}>{data.author}</div>)}</div>;
}
