import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import motorcycles from "../assets/motorcycles.jpg";
import gears from "../assets/gears.jpg";
import tours from "../assets/tours.jpg";


const ServicesPage = () => {
  const navigate = useNavigate();

  const handleBikeRentalsClick = () => {
    navigate("/bike-options");
  };

  // const handleCarRentalsClick = () => {
  //   navigate("/car-options");
  // };

  const handleAdventureGear = () => {
    navigate("/adventure-gear")
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Page Header */}
      <section className="bg-gray-800 py-16 text-center">
        <h1 className="text-5xl font-bold tracking-wide">Our Services</h1>
        <p className="text-gray-400 mt-4 text-lg">
          Discover what we offer to make your adventures unforgettable.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bike Rentals */}
            <div onClick={handleBikeRentalsClick} className="cursor-pointer">
              <Card
                image={motorcycles}
                title="Bike Rentals"
                description="Affordable and reliable bikes for your adventures."
                // className="h-[450px]"
              />
            </div>

            {/* Guided Tours */}
            <Card
              image={tours}
              title="Guided Tours"
              description="Discover breathtaking destinations with expert guides."
            />

            {/* Adventure Gear */}
            <div onClick={handleAdventureGear} className="cursor-pointer">
            <Card
              image={gears}
              title="Adventure Gear"
              description="High-quality gear to make your trips safe and enjoyable."
            />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 py-12 text-center">
        <h2 className="text-4xl font-bold">Ready for an Adventure?</h2>
        <p className="text-gray-400 mt-4">
          Book your ride today and start exploring the world with us.
        </p>
        <a
          href="/booking"
          className="mt-8 inline-block px-8 py-3 bg-green-600 hover:bg-green-700 rounded-full text-white font-semibold text-lg transition duration-300"
        >
          Book Now
        </a>
      </section>
    </div>
  );
};

export default ServicesPage;
