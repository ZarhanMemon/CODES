import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between items-center p-4 bg-violet-950 text-white'>
      <h1 className='text-blue-700 font-bold text-xl mx-4'>MyTask</h1>
       <ul className="flex space-x-10">
        <li className='cursor-pointer text-lg hover:text-sky-300 hover:text-xl hover:font-semibold'>Home</li>
        <li className='cursor-pointer text-lg hover:text-sky-300 hover:text-xl hover:font-semibold'>Your Task</li>
       </ul>
     </nav>
  )
}

export default Navbar
