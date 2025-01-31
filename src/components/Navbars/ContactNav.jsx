import React, { useState } from "react";
import wheels from "../../assets/WHEELS_TO _PARADISE.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-800 via-black to-gray-800 text-gray-200 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={wheels}
            alt="Wheels to Paradise Logo"
            className="h-12 w-12 rounded-full border-2 border-gray-700 shadow-md"
          />
          <Link to="/">
            <h1 className="text-xl md:text-2xl font-bold tracking-wider hover:text-green-500 transition duration-300">
              Wheels to Paradise
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 font-bold text-lg">
          <a href="/" className="hover:text-green-500 transition duration-300">
            Home
          </a>
          <a href="/vehicle" className="hover:text-green-500 transition duration-300">
            Vehicles
          </a>
          <a href="/about" className="hover:text-green-500 transition duration-300">
            About Us
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="/booking"
            className="bg-green-500 text-black font-semibold py-2 px-6 rounded-full hover:bg-green-400 transition duration-300 shadow-lg"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-400 hover:text-green-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-900 text-gray-200 py-4 flex flex-col items-center">
          <a href="/" className="block px-4 py-2 hover:text-green-500 transition duration-300">
            Home
          </a>
          <a href="/vehicle" className="block px-4 py-2 hover:text-green-500 transition duration-300">
            Vehicles
          </a>
          <a href="/about" className="block px-4 py-2 hover:text-green-500 transition duration-300">
            About Us
          </a>
          <a href="/booking" className="block px-4 py-2 bg-green-500 text-black font-semibold rounded-full hover:bg-green-400 transition duration-300 shadow-lg">
            Book Now
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
