import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function AllTask() {
  const [userData] = useContext(AuthContext);

  return (
    <div className='bg-[#1c1c1c] p-4 my-5 rounded gap-3 flex-col flex text-center text-white font-medium text-lg'>
      <div className='bg-red-400 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5'>Employee Name</h2>
        <h3 className='w-1/5'>New Task</h3>
        <h5 className='w-1/5'>Active Task</h5>
        <h5 className='w-1/5'>Completed</h5>
        <h5 className='w-1/5'>Failed</h5>
      </div>

      {userData.employees.map((emp, index) => (
        <div key={index} className='py-2 px-4 flex justify-between rounded mb-2.5 font-semibold border-2 border-teal-500'>
          <h2 className='w-1/5'>{emp.name}</h2>
          <h3 className='w-1/5 text-blue-500'>{emp.taskCount.newTask}</h3>
          <h5 className='w-1/5 text-yellow-500'>{emp.taskCount.active}</h5>
          <h5 className='w-1/5 text-green-500'>{emp.taskCount.completed}</h5>
          <h5 className='w-1/5 text-red-500'>{emp.taskCount.failed}</h5>
        </div>
      ))}
    </div>
  );
}

export default AllTask;
