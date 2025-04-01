import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-purple-500 p-4 fixed left-0 top-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-#cfffc7 text-lg font-bold">
          MyWebsite
        </div>
        <div className="space-x-4">
          <a href="#" className="text-#cfffc7 hover:text-red-500">Home</a>
          <a href="#" className="text-#cfffc7 hover:text-red-500">About</a>
          <a href="#" className="text-#cfffc7 hover:text-red-500">Services</a>
          <a href="#" className="text-#cfffc7 hover:text-red-500">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
