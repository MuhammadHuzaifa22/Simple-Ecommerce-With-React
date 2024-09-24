import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <a href="#">AppleNest</a>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6">
          <Link
             to="/"
            className="hover:text-blue-400  hover:border-b-2   border-blue-400 transition duration-300"
          >
            Home
          </Link>
          <Link 
            to='countries'
            className="hover:text-blue-400 hover:border-b-2 border-blue-400 transition duration-300"
          >
            Countries
          </Link>
          <Link 
             to='about'
            className="hover:text-blue-400 hover:border-b-2 border-blue-400 transition duration-300"
          >
            About
          </Link>
          
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button className="mobile-menu-button focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu hidden md:hidden">
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-800">Home</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-800">Products</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-800">About</a>
      </div>
      <Outlet/>
    </nav>
    
  );
};

export default Navbar;
