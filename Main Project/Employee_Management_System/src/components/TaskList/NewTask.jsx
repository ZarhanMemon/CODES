import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function NewTask({ data, onUpdate }) {
  const [taskData, setTaskData] = useState(data);
  const [userData, setUserData, updateTaskCount] = useContext(AuthContext);

  const handleAccept = () => {
    const updatedTask = {
      ...taskData,
      active: true,
      newTask: false,
    };

    const employeeName = updatedTask.assignedTo;

    // ✅ Update employee tasks without mutation
    const updatedEmployees = userData.employees.map((emp) => {
      if (emp.name === employeeName) {
        const updatedTasks = emp.tasks.map((task) =>
          task.taskName === updatedTask.taskName ? updatedTask : task
        );

        return {
          ...emp,
          tasks: updatedTasks,
          taskCount: {
            newTask: Math.max(emp.taskCount.newTask - 1, 0),
            active: emp.taskCount.active + 1,
            completed: emp.taskCount.completed,
            failed: emp.taskCount.failed,
          },
        };
      }
      return emp;
    });

    // ✅ Update Context & localStorage
    setTaskData(updatedTask);
    setUserData((prevData) => ({
      ...prevData,
      employees: updatedEmployees,
    }));

    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    // ✅ Update Task Count in Context
    updateTaskCount(employeeName, {
      newTask: updatedTask.newTask ? 1 : 0,
      active: updatedTask.active ? 1 : 0,
      completed: updatedTask.completed ? 1 : 0,
      failed: updatedTask.failed ? 1 : 0,
    });

    // ✅ Update the tasks array in localStorage
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = storedTasks.map((task) =>
      task.taskName === updatedTask.taskName ? updatedTask : task
    );
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    // ✅ Trigger onUpdate if provided
    if (onUpdate) onUpdate(updatedTask);
  };

  return (
    <div key={taskData.taskName} className="flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 py-1 px-3 text-sm rounded-sm">{taskData.taskCategory}</h3>
        <h4 className="text-sm">{taskData.taskDate}</h4>
      </div>

      <h2 className="mt-5 text-2xl font-semibold">{taskData.taskName}</h2>
      <p className="text-sm mt-2 px-2">{taskData.taskDescription}</p>
      <div className="flex justify-between mt-4">
        <button
          className="bg-green-500 px-1 py-2 text-sm"
          onClick={handleAccept}
          disabled={taskData.active}
        >
          {taskData.active ? 'Task Accepted' : 'Accept Task'}
        </button>
      </div>
    </div>
  );
}

export default NewTask;
