import './App.css';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard';
import AdminDashboard from './components/DashBoard/AdminDashboard';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from './context/AuthProvider';
import AuthProvider from './context/AuthProvider';

function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData, updateTaskCount] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser);
    }
  }, [userData]);

  function handleLogin(email, password) {
    const employees = userData?.employees;
    const admin = userData?.admin;

    if (admin) {
      const storedAdmin = JSON.parse(localStorage.getItem('admin')) || admin;
      const adminUser = storedAdmin.find(admin => admin.email === email && admin.password === password);
      if (adminUser) {
        const loggedInUser = { role: 'admin', email, ...adminUser };
        setUser(loggedInUser);
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        setUserData(prevData => ({ ...prevData, admin: storedAdmin }));
      }
    }

    if (employees) {
      const storedEmployees = JSON.parse(localStorage.getItem('employees')) || employees;
      const emp = storedEmployees.find(emp => emp.email === email && emp.password === password);

      if (emp) {
        const loggedInUser = { role: 'employee', email, ...emp };
        setUser(loggedInUser);
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        setUserData(prevData => ({ ...prevData, employees: storedEmployees }));
      }
    }
  }

  function handleLogout() {
    localStorage.removeItem('loggedInUser');
    setUser(null);
  }

  return (
    <AuthProvider>
      {!user ? (
        <Login handleLogin={handleLogin} authData={userData} />
      ) : (
        <>
          {user.role === "admin" && <AdminDashboard handleLogout={handleLogout} data={user} authData={userData} />}
          {user.role === "employee" && <EmployeeDashboard handleLogout={handleLogout} data={user} />}
        </>
      )}
    </AuthProvider>
  );
}

export default App;
