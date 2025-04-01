import React  from 'react';

function TasklistData({ data }) {
    const { taskCount } = data;


    return (
        <div className='flex mt-10 mb-10 justify-between gap-5 screen'>
            <div className='px-9 py-6 rounded-xl w-[45%] bg-blue-400 text-white'>
                <h2 className='text-3xl font-semibold'>{taskCount.newTask}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>

            <div className='px-9 py-6 rounded-xl w-[45%] bg-green-400 text-white'>
                <h2 className='text-3xl font-semibold'>{taskCount.completed}</h2>
                <h3 className='text-xl font-medium'>Completed Task</h3>
            </div>

            <div className='px-9 py-6 rounded-xl w-[45%] bg-yellow-400 text-black'>
                <h2 className='text-3xl font-semibold'>{taskCount.active}</h2>
                <h3 className='text-xl font-medium'>Accepted Task</h3>
            </div>

            <div className='px-9 py-6 rounded-xl w-[45%] bg-red-400 text-white'>
                <h2 className='text-3xl font-semibold'>{taskCount.failed}</h2>
                <h3 className='text-xl font-medium'>Failed Task</h3>
            </div>
        </div>
    );
}

export default  TasklistData ;
