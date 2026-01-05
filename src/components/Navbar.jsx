import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 border-b-4 border-blue-600">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center h-full">
          <span className="flex items-center h-full text-2xl font-bold text-white leading-none">
            Render<span className="text-blue-500">Web</span>
          </span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">Services</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>

        {/* Button */}
        <button className="hidden md:flex items-center justify-center bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-sm font-semibold text-white">
          Get Started
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
