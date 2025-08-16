"use client"

import React from 'react'
import { useParams } from 'next/navigation'

function page() {

    const {route} = useParams()

    return (<>
        <div>Dynamic route : {route}</div>
    </>)
}

export default page