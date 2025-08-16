// app/more/page.jsx (or pages/more.js)
'use client'

import { useSearchParams } from 'next/navigation'

export default function MorePage() {
  const searchParams = useSearchParams()
  const message = searchParams.get('message')

  console.log(message)

  return (
    <div>
      <h1>More Page</h1>
      {message && <p style={{ color: 'red' }}>Message from middleware: {message}</p>}
    </div>
  )
}
