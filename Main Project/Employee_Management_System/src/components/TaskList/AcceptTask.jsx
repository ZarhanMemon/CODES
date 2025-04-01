import React, { useState } from 'react';

function AcceptTask({ data, onUpdate, handleTaskUpdate }) {
    const [taskData, setTaskData] = useState({
        ...data,
        active: data.active || true,
        completed: data.completed || false,
        failed: data.failed || false
    });

    const handleCompleted = () => {
        const updatedTask = {
            ...taskData,
            active: false,
            completed: true,
            failed: false  
        };
        setTaskData(updatedTask);
        if (onUpdate) onUpdate(updatedTask);
        if (handleTaskUpdate) handleTaskUpdate(updatedTask);
    };

    const handleFailed = () => {
        const updatedTask = {
            ...taskData,
            active: false,
            completed: false,
            failed: true
        };
        setTaskData(updatedTask);
        if (onUpdate) onUpdate(updatedTask);
        if (handleTaskUpdate) handleTaskUpdate(updatedTask);
    };

    return (
        <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5">
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 py-1 px-3 text-sm rounded-sm'>{taskData.taskCategory}</h3>
                <h4 className='text-sm text-black'>{taskData.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold text-black'>{taskData.taskName}</h2>
            <p className='text-sm mt-2 px-2 text-black'>{taskData.taskDescription}</p>
            <div className='flex justify-between mt-4'>
                <button
                    onClick={handleCompleted}
                    disabled={taskData.completed || taskData.failed}
                    className='bg-green-500 px-1 py-2 text-sm'
                >
                    {taskData.completed ? 'Completed' : 'Mark as Completed'}
                </button>
                <button
                    onClick={handleFailed}
                    disabled={taskData.completed || taskData.failed}
                    className='bg-red-500 px-1 py-2 text-sm'
                >
                    {taskData.failed ? 'Failed' : 'Mark as Failed'}
                </button>
            </div>
        </div>
    );
}

export default AcceptTask;
