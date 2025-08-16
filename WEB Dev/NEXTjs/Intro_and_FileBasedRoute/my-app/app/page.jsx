"use client"

import React, { useState } from 'react'
import logo from '@/public/next.svg'
import Navbar from './components/Navbar'
import About from './components/About.jsx'
import './globals.css'

function page() {


  const [first, setfirst] = useState(2)




  return (<>

    <Navbar />

    <div>page

      <img src={logo.src} alt="Next.js Logo" className='invert' />
      <h1>Welcome to My Next.js App</h1>

    </div>

    <div className='text-center bg-gray-800 text-white p-4'>
      <h1 className='text-2xl font-bold'>My First Next.js App</h1>
      <p className='mt-2'>This is a simple introduction to Next.js.</p>

      <div>
        <img src="https://nextjs.org/static/favicon/favicon-32x32.png" alt="Next.js Logo" className='invert' />
        <p className='mt-2'>This is a simple introduction to Next.js.</p>
      </div>

      <div className='mt-4'>
        <h2 className='text-xl font-semibold'>Features:</h2>
        <ul className='list-disc list-inside'>
          <li>File-based routing</li>
          <li>Server-side rendering</li>
          <li>Static site generation</li>
          <li>API routes</li>
        </ul>
      </div>
      <div className='mt-4'>
        <h2 className='text-xl font-semibold'>Getting Started:</h2>
        <p>To get started, you can run the following commands:</p>
        <pre className='bg-gray-700 p-4 rounded'>
          <code>npm install next react react-dom</code>
        </pre>
        <p>Then, you can start the development server:</p>
        <pre className='bg-gray-700 p-4 rounded'>
          <code>npm run dev</code>
        </pre>
      </div>

    </div>

    <div className='text-center bg-gray-800 text-white p-4 mt-4'>

      <h1 className='text-2xl font-bold'>{first}</h1>

      <button onClick={() => setfirst(first * first)} className='bg-blue-500 text-white px-4 py-2 rounded'>
        Click Me!
      </button>
      <button onClick={() => setfirst(first ** first)} className='bg-blue-500 text-white px-4 py-2 rounded'>
        Click Me!
      </button>
      <button onClick={() => setfirst(((first ** first)/(first * first)))} className='bg-blue-500 text-white px-4 py-2 rounded'>
        Click Me!
      </button>





    </div >


    <About />
  </>
  )
}

export default page