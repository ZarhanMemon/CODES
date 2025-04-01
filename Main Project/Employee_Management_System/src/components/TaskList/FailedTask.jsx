import React from 'react'

function FailedTask({data , key}) {
    return (
        <div key={key} className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5">

            <div className='flex justify-between items-center  '>
            <h3 className='bg-red-600 py-1 px-3 text-sm rounded-sm'>{data.taskCategory}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
            </div>

            <h2 className='mt-5 text-2xl font-semibold'>{data.taskName}</h2>
            <p className='text-sm mt-2 px-2'>{data.taskDescription}</p>
            <div className='flex justify-between mt-4'>
                <button className='bg-red-500 px-1 py-2 text-sm w-full'>Failed</button>
            </div>
        </div>)
}

export default FailedTask