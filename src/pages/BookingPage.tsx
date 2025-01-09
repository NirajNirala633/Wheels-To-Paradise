import React from "react";

const BookingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold text-white tracking-wide">
            Book Your Adventure
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            Choose your perfect ride, pick your dates, and begin the journey of a lifetime!
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <form className="mt-8 bg-gray-800 shadow-2xl rounded-lg p-8 max-w-lg mx-auto">
            {/* Full Name */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-gray-200"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-3 p-3 border border-gray-600 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Enter your full name"
              />
            </div>

            {/* Select Vehicle */}
            <div className="mb-6">
              <label
                htmlFor="vehicle"
                className="block text-lg font-semibold text-gray-200"
              >
                Select Vehicle
              </label>
              <select
                id="vehicle"
                className="w-full mt-3 p-3 border border-gray-600 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              >
                <option className="bg-gray-700 text-white">Bike</option>
                <option className="bg-gray-700 text-white">Car</option>
                <option className="bg-gray-700 text-white">Gear</option>
              </select>
            </div>

            {/* Rental Date */}
            <div className="mb-6">
              <label
                htmlFor="date"
                className="block text-lg font-semibold text-gray-200"
              >
                Rental Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full mt-3 p-3 border border-gray-600 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            {/* Confirm Booking Button */}
            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-lg font-bold text-lg hover:bg-gray-300 hover:text-black transition duration-300 shadow-lg"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
