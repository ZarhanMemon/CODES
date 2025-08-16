import React from 'react'
import { useRouter } from 'next/navigation'

function HomeButton() {

    const router = useRouter()

  return (<>
    <button className='bg-blue-300 m-4' type="button" onClick={() => router.push('/')}>
      Home
    </button>

  <button className='bg-blue-300' type="button" onClick={() => router.push('/contact/good')}>
      Contact
    </button>

      <button className='bg-blue-300 m-4' type="button" onClick={() => router.push('/about/heloo')}>
      About
    </button>

    </>
  )
}

export default HomeButton