import React, { useState } from "react";
import wheels from "../../assets/WHEELS_TO _PARADISE.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/slices/SearchSlice";

const VehicleNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-black to-gray-800 text-gray-200 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src={wheels}
            alt="Wheels to Paradise Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-gray-700 shadow-md"
          />
          <Link to="/">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider hover:text-green-500 transition duration-300">
              Wheels to Paradise
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 font-bold text-lg">
          <Link to="/" className="hover:text-green-500 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-500 transition duration-300">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-green-500 transition duration-300">
            Contact
          </Link>
        </div>

        {/* Search Input */}
        <div className="hidden md:flex items-center px-6 py-4 md:py-0 md:px-0 text-lg font-bold">
          <input
            type="search"
            name="search"
            placeholder="Search here"
            autoComplete="off"
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className="p-3 px-12 border border-gray-500 rounded-lg text-lg bg-gray-800 text-gray-300 placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-500 transition duration-300 w-full md:w-auto"
          />
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
        <div className="md:hidden bg-gray-900 text-gray-200 py-4 flex flex-col items-center">
          <Link to="/" className="block px-4 py-2 hover:text-green-500 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="block px-4 py-2 hover:text-green-500 transition duration-300">
            About Us
          </Link>
          <Link to="/contact" className="block px-4 py-2 hover:text-green-500 transition duration-300">
            Contact
          </Link>
          <div className="px-6 py-4 text-lg font-bold">
            <input
              type="search"
              name="search"
              placeholder="Search here"
              autoComplete="off"
              onChange={(e) => dispatch(setSearch(e.target.value))}
              className="p-3 px-4 border border-gray-500 rounded-lg text-sm bg-gray-800 text-gray-300 placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-500 transition duration-300 w-full"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default VehicleNav;
