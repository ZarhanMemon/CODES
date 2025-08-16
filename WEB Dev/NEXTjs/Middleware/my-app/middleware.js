import { NextResponse } from "next/server"



export function middleware(req) {
  const url = req.nextUrl
  const path = url.pathname
  const hasMessage = url.searchParams.has('message') // ✅ this is safe now

    console.log(path) // multiple url like for icon image , but we want 

    // Redirect /about -> /home
    if (path.startsWith('/about')) {
        return NextResponse.redirect(new URL('/home', req.url))
    }

    // Rewrite /contact -> show content from /
    if (path.startsWith('/contact')) {
        return NextResponse.rewrite(new URL('/', req.url))
    }

    if (path.startsWith('/more') && !hasMessage) {

        const moreUrl = new URL('/more', req.url)
        moreUrl.searchParams.set('message', 'Hey i am middleware to pass the json data as user enter the /more page')

        return NextResponse.redirect(moreUrl)

        // Respond with JSON indicating an error message
        // return NextResponse.json(
        //     { success: true, message: 'Hey i am middleware to pass the json data as user enter the /more page' },
        //     { status: 201 }
        // )
    }

    return NextResponse.next()
}


//   Way to match the url then run Middleware

// export const config = {
//   matcher: ['/about', '/contact' , '/more],  -- >  Only apply to these routes
// }