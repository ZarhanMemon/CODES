import React from 'react'
import Image from 'next/image'

function page() {

  //it adjust the download according to th device it used

  return (
    <div>

      me

      <Image src='file.svg' height={300} width={300} alt='image' />

    </div>
  )
}

export default page