import Link from 'next/link'
import React from 'react'

function Navbar() {

    //its same as link in react it prevent reloading whole page that A-tag does


    return (
        <div className='flex justify-center bg-amber-300'>

            <ul className='flex gap-5'>

                <a href="/"><li>home</li></a>    

                <Link href="/about"><li>about</li></Link>
                <Link href="/me"><li>me</li></Link>
               
            </ul>

        </div>
    )
}

export default Navbar