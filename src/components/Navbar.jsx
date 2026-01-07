import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 border-b-4 border-blue-600 bg-black">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          Render<span className="text-blue-500">Web</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">Services</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:flex bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-sm font-semibold text-white">
          Get Started
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <ul className="flex flex-col items-center gap-6 py-6 text-white">
            <li onClick={() => setOpen(false)}>Home</li>
            <li onClick={() => setOpen(false)}>Services</li>
            <li onClick={() => setOpen(false)}>About</li>
            <li onClick={() => setOpen(false)}>Contact</li>

            <button className="bg-blue-600 px-6 py-2 rounded-lg text-sm font-semibold">
              Get Started
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
