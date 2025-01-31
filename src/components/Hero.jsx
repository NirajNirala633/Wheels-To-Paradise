import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-center h-screen flex flex-col justify-center items-center text-white text-center px-4">
      <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
        Take a Ride, Make a Memory
      </h1>
      <p className="mt-4 text-lg md:text-xl">
        Adventure awaits in the mountains—start your journey today!
      </p>
      <div className="max-w-md mx-auto">
        <p className="mt-4 text-gray-400 text-sm md:text-base">
          Your trusted partner for memorable journeys. Whether you're seeking
          adventure in the mountains or a leisurely drive through scenic
          roads, we’ve got you covered.
        </p>
      </div>
      <Link to="/about">
        <button className="mt-8 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full text-beige font-semibold text-base md:text-lg transition duration-300">
          Learn More About Us
        </button>
      </Link>
    </div>
  );
};

export default Hero;
