"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import HomeButton from './UseRouteButton.jsx'

function Navbar() {

    //USED to CHeck on Which page are u

    const pathname = usePathname() 
    // used to print the /route of that page
    // local:/home -> /home

  return (<>
    <div>Navbar</div>

    <div>Your on = {pathname}</div>


    <HomeButton />
  </>)
}

export default Navbar