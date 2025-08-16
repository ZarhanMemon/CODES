"use client";

import React from 'react'
import { useState } from 'react'
import Page2 from './page2';

function page() {

  const [count, setCount] = useState(0);

  console.log(count)
      console.log("hello from Client Component");


  return (
    <div className="flex flex-col items-center justify-center h-screen">

      {count}
    
    <button onClick={() => setCount(count + 1)}>
      Increment
    </button>


    {/* <Page2 /> */}
    
    </div>
  )
}

export default page