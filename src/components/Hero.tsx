import React from "react";

const Hero = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-center h-screen flex flex-col justify-center items-center text-white text-center">
      <h1 className="text-5xl font-bold tracking-wide">
        Take a Ride, Make a Memory
      </h1>
      <p className="mt-4 text-xl">
        Adventure awaits in the mountains—start your journey today!
      </p>
      <button className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 rounded-full text-beige font-semibold text-lg transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
