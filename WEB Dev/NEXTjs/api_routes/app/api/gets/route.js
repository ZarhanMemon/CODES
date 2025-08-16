
export async function GET(req) {
  const { searchParams } = new URL(req.url);  // use searchParams, not params
  const data = searchParams.get('data'); 

    console.log(data)

    return new Response(JSON.stringify({ 
    message: "Received data on GET route",
    received: data}) , 
        {
        status: 200,
        headers: { "Content-Type": "application/json" }
    })
}