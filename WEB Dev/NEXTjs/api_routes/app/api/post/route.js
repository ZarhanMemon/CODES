
export async function POST(req) {
    const body = await req.json();
    const { data } = body;

    console.log('Received data:', data);

    return new Response(JSON.stringify({ data: "yes", success: true }), 
    {
        status: 200,
        headers: { "Content-Type": "application/json" }
    });
}