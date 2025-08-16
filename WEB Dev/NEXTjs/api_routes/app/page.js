"use client"

export default function Home() {

 
  const handleClick = async () => {
    // POST request
    const postRes = await fetch('/api/post', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: "Hellofromclient!" })
    });

    const getRes = await fetch('/api/gets?data=HelloFromGET');

    const result = await postRes.json();
    const result1 = await getRes.json();

    console.log("POST:", result);
    console.log("GET:", result1);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
