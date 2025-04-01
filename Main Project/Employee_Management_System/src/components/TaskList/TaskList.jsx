import React, { useEffect, useState } from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import FailedTask from './FailedTask';
import CompletedTask from './CompletedTask';
import TasklistData from '../others/TasklistData';

function TaskList({ data, onUpdate }) {
  const [tasks, setTasks] = useState([]);
  const [taskCount, setTaskCount] = useState({
    newTask: 0,
    active: 0,
    completed: 0,
    failed: 0,
  });

  useEffect(() => {
    setTasks(data.tasks);
  }, [data]);

  useEffect(() => {
    const counts = tasks.reduce(
      (acc, task) => {
        if (task.newTask) acc.newTask += 1;
        if (task.active) acc.active += 1;
        if (task.completed) acc.completed += 1;
        if (task.failed) acc.failed += 1;
        return acc;
      },
      { newTask: 0, active: 0, completed: 0, failed: 0 }
    );
    setTaskCount(counts);
  }, [tasks]);

  const handleTaskUpdate = (updatedTask) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.taskName === updatedTask.taskName ? updatedTask : task
      );

      // Save updated tasks to localStorage after state update
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));

      return updatedTasks;
    });

    // Call parent update if exists
    if (onUpdate) {
      onUpdate(updatedTask);
    }

    // Update task count in AuthContext
    const employeeName = updatedTask.assignedTo;
    const updatedTaskCount = {
      newTask: updatedTask.newTask ? 1 : 0,
      active: updatedTask.active ? 1 : 0,
      completed: updatedTask.completed ? 1 : 0,
      failed: updatedTask.failed ? 1 : 0,
    };

    // Update task count in AuthContext
    if (typeof onUpdate === 'function') {
      onUpdate(employeeName, updatedTaskCount);
    } else {
      console.error('Expected a function, but got an object:', onUpdate);
    }
  };

  return (
    <div>
      <TasklistData data={{ taskCount }} />
      <div
        id="TaskList"
        className="text-white h-[55%] overflow-auto flex items-center justify-start flex-nowrap gap-5 w-full py-5"
      >
        {tasks.map((task) => {
          if (task.newTask) return <NewTask key={task.taskName} data={task} onUpdate={handleTaskUpdate} />;
          if (task.active) return <AcceptTask key={task.taskName} data={task} onUpdate={handleTaskUpdate} />;
          if (task.completed) return <CompletedTask key={task.taskName} data={task} onUpdate={handleTaskUpdate} />;
          if (task.failed) return <FailedTask key={task.taskName} data={task} onUpdate={handleTaskUpdate} />;
          return null;
        })}
      </div>
    </div>
  );
}

export default TaskList;
