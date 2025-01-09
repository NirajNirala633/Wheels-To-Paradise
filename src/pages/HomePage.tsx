import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";

const HomePage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Welcome Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold tracking-wide">Welcome to Wheels to Paradise</h2>
          <p className="mt-4 text-gray-400">
            Your trusted partner for memorable journeys. Whether you're seeking
            adventure in the mountains or a leisurely drive through scenic
            roads, we’ve got you covered.
          </p>
          <button className="mt-8 px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-full text-white font-semibold text-lg transition duration-300">
            <a href="/about">Learn More About Us</a>
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold tracking-wide">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card
              image="/path-to-bike-image.jpg"
              title="Bike Rentals"
              description="Affordable and reliable bikes for your adventures."
              className="bg-gray-900 text-gray-300"
            />
            <Card
              image="/path-to-guide-image.jpg"
              title="Guided Tours"
              description="Discover breathtaking destinations with expert guides."
              className="bg-gray-900 text-gray-300"
            />
            <Card
              image="/path-to-gear-image.jpg"
              title="Adventure Gear"
              description="High-quality gear to make your trips safe and enjoyable."
              className="bg-gray-900 text-gray-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
