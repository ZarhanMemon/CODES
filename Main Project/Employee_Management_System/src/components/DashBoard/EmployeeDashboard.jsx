import React, { useState, useEffect, useContext } from 'react';
import Header from '../others/Header';
import TaskList from '../TaskList/TaskList';
import { AuthContext } from '../../context/AuthProvider';

function EmployeeDashboard({ data, handleLogout }) {
  const [tasks, setTasks] = useState([]);
  const [userData, setUserData, updateTaskCount] = useContext(AuthContext);

  const currentEmployee = userData.employees.find(emp => emp.email === data.email);
  const taskCount = currentEmployee ? currentEmployee.taskCount : {
    newTask: 0,
    active: 0,
    completed: 0,
    failed: 0
  };

  const handleTaskUpdate = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.taskName === updatedTask.taskName ? updatedTask : task
      )
    );

    localStorage.setItem('tasks', JSON.stringify(tasks));

    const employeeName = updatedTask.assignedTo;
    const updatedTaskCount = {
      newTask: updatedTask.newTask ? 1 : 0,
      active: updatedTask.active ? 1 : 0,
      completed: updatedTask.completed ? 1 : 0,
      failed: updatedTask.failed ? 1 : 0,
    };

    updateTaskCount(employeeName, updatedTaskCount);
  };

  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header data={data.name} handleLogout={handleLogout} />
      <TaskList data={data} onUpdate={handleTaskUpdate} />
      
     </div>
  );
}

export default EmployeeDashboard;
