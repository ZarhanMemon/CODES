// app/products/page.tsx






// 3. ISR (Incremental Static Regeneration) — fetch() with next: { revalidate: N }

//- This tells Next.js to regenerate the page in the background after every N seconds.

//- In ISR, data is fetched at build time, just like in SSG, so the page loads very fast.

//- But unlike SSG, the page can be automatically updated in the background after a certain time (e.g., every 60 seconds) using revalidate.

//- This means your page stays fast and can show fresh data without needing a full rebuild.


async function getData() {
    const res = await fetch('https://api.vercel.app/blog',

        {
            next: { revalidate: 60 }, // 👈 ISR: revalidate every 60 seconds
        }
    
    );
    return res.json();
}

export default async function ProductsPage() {
    const products = await getData();

    return (
        <div>
            {products.map((product) => <div key={product.id}>{product.category}</div>)}
        </div>
    );
}
