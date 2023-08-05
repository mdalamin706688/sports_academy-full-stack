import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth'; // Adjust the import path based on your project's structure

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate(); // Add this line to get the navigate function

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to the home route after logout
  };

  return (
    <nav className="w-[100%] max-w-screen-2xl flex flex-col md:flex-row items-center bg-transparent justify-around absolute mx-auto p-4">
      <div className="flex items-center">
        <img className="w-[60px]" src="./badge.png" alt="Logo" />
      </div>
      <div className="flex flex-col md:flex-row md:justify-center flex-grow text-white">
        <Link to="/" className="hover:text-gray-300 my-2 md:my-0 md:mx-4">Home</Link>
        <Link to="/about" className="hover:text-gray-300 my-2 md:my-0 md:mx-4">About</Link>
        <Link to="/contact" className="hover:text-gray-300 my-2 md:my-0 md:mx-4">Contact</Link>
      </div>
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none">Logout</button>
        ) : (
          <>
            <Link to="/signup">
              <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none">Log In</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
