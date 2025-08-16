// app/blog/page.tsx

// 1. SSG (Static Site Generation) — fetch() with default caching

// In App Router, pages are static by default when you use fetch() without any special options.

//If you're using SSG, the API data is fetched only at build time. So even if the API content changes later (e.g., the JSON response is updated), your app won’t reflect those changes until you rebuild the app. This makes the page static.


async function getData() {

    //With SSG, the content is “locked in” at build time. After that, it doesn’t matter if your API changes — the user will keep seeing the old (built) version until you re-run next build and deploy again.
   
    const res = await fetch('https://api.vercel.app/blog'); // ← SSG by default
    return res.json();
}

export default async function BlogPage() {
    const posts = await getData();

    return (
        <div>
            {posts.map((post) => <div key={post.id}>{post.title}</div>)}
        </div>
    );
}
