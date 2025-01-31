import React, { useEffect } from "react";
import Navbar from "../components/Navbars/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <Navbar />

      <div
        className="home-container bg-gradient-to-r from-gray-800 via-black to-gray-800
        text-gray-200 min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="text-center mt-6 px-4 sm:px-6 md:px-8 lg:px-12 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
            Welcome to Wheels to Paradise
          </h2>
          <div >
            <Hero />
          </div>

          {/* <button
            className="mt-6 sm:mt-8 px-6 sm:px-8 py-2 sm:py-3 bg-gray-700 hover:bg-gray-600 rounded-full
             text-white font-semibold text-sm sm:text-base md:text-lg transition duration-300"
          >
            <a href="/about">Learn More About Us</a>
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Home;
