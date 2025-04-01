import React from 'react'


function Header({ data , handleLogout }) {

   
    
    return (
        <div className='flex justify-between items-end text-white'>
            <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{data}👋</span> </h1>
            <button onClick={handleLogout} className='bg-red-600 rounded-sm px-5 py-2 text-lg font-medium cursor-pointer'>Log Out</button>

        </div>
    )
}

export default Header