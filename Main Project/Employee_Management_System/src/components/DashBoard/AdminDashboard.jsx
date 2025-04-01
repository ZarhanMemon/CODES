import React from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

function AdminDashboard({ data, handleLogout , authData})  {
  return (
    <div className='h-screen w-full p-7'>
      <Header handleLogout={handleLogout} data={data.name} />
      <CreateTask />
      <AllTask authData={authData}/>
    </div>
  );
}

export default AdminDashboard;
