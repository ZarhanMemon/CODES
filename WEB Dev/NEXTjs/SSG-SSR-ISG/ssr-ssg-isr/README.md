# 📘 Next.js App Router – Data Fetching Methods

This README explains the three main data fetching strategies in the **Next.js App Router**:

- ✅ Static Site Generation (SSG)
- ✅ Server Side Rendering (SSR)
- ✅ Incremental Static Regeneration (ISR)

---

## 📦 1. SSG – Static Site Generation

### 🔹 Description
- Data is fetched **at build time**.
- The page is **pre-rendered as static HTML** and served very fast.
- The content **does not update** unless you rebuild and redeploy the app.

### 📌 Use Case
- Content that rarely changes, like blogs, documentation, landing pages.

### 🧩 Example (App Router)
```tsx
// app/blog/page.tsx
async function getData() {
  const res = await fetch('https://api.example.com/posts');
  return res.json(); // ⬅️ Default: static
}

export default async function BlogPage() {
  const posts = await getData();
  return <>{posts.map(p => <div key={p.id}>{p.title}</div>)}</>;
}
```

---

## 🌐 2. SSR – Server Side Rendering

### 🔹 Description
-Data is fetched on every request to the page.

-This guarantees fresh data, but may slow down performance.

-Great for personalized or real-time content.

### 📌 Use Case
- Dashboards, user-specific data, admin panels, live stats.

🧩 Code Example
```tsx
// app/dashboard/page.tsx

async function getData() {
  const res = await fetch('https://api.example.com/dashboard', {
    cache: 'no-store', // Forces fresh fetch every time (SSR)
  });
  return res.json();
}

export default async function DashboardPage() {
  const data = await getData();
  return (
    <div>
      Welcome, {data.username}!
    </div>
  );
}
```

---


## 🔁 3. ISR – Incremental Static Regeneration

### 🔹 Description

- Works like SSG at first: builds the page at build time.

- Then automatically updates the static page after a set time (e.g., every 60s).

- Gives the speed of static with the ability to keep data fresh.

### 📌 Use Case
- Product pages, news articles, marketing content that updates regularly.

### 🧩 Code Example

```tsx
// app/products/page.tsx

async function getData() {
  const res = await fetch('https://api.example.com/products', {
    next: { revalidate: 60 }, // Regenerate every 60 seconds
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await getData();
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```

---


## 📊 Summary Table

| Strategy | Data Fetch Timing       | Speed     | Freshness           | Key Option                          |
|----------|--------------------------|-----------|----------------------|-------------------------------------|
| **SSG**  | At build time            | ⚡ Fast    | ❌ Stale after build | _Default fetch_ (static by default) |
| **SSR**  | On every request         | 🐢 Slower | ✅ Always fresh      | `cache: 'no-store'`                 |
| **ISR**  | Build time + revalidate  | ⚡ Fast    | ✅ Semi-fresh        | `next: { revalidate: N }`           |

---

## 🧠 Final Notes

- In the **App Router**, all pages are **server components by default**.
- You control how data is **cached or refreshed** using options in the `fetch()` function.
- Choose your strategy based on:
  - How often your data changes
  - How important performance is for your page


