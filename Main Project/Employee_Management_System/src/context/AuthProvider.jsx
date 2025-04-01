import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState({ employees: [], admin: [] });
  const [updateTaskCount] = useState(() => (employeeName, task) => {
    setUserData(prev => {
      const updatedEmployees = prev.employees.map(emp => {
        if (emp.name === employeeName) {
          return {
            ...emp,
            taskCount: {
              ...emp.taskCount,
              newTask: task.newTask ? emp.taskCount.newTask + 1 : emp.taskCount.newTask,
              active: task.active ? emp.taskCount.active + 1 : emp.taskCount.active,
              completed: task.completed ? emp.taskCount.completed + 1 : emp.taskCount.completed,
              failed: task.failed ? emp.taskCount.failed + 1 : emp.taskCount.failed,
            },
          };
        }
        return emp;
      });
      return { ...prev, employees: updatedEmployees };
    });
  });

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData, updateTaskCount]}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
