import React, { useState } from "react";
import BookingNav from "../components/Navbars/BookigNav";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    vehicle: "",
    fromDate: "",
    toDate: "",
    mobile: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Booking Details:\nName: ${formData.name}\nVehicle: ${formData.vehicle}\nFrom: ${formData.fromDate}\nTo: ${formData.toDate}\nMobile: ${formData.mobile}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=7986572704&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <BookingNav />
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
          <form onSubmit={handleSubmit} className="mt-8 bg-gray-800 shadow-2xl rounded-lg p-8 max-w-lg mx-auto">
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
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-3 p-3 border border-gray-600 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Enter your full name"
              />
            </div>

            {/* Mobile Number */}
            <div className="mb-6">
              <label
                htmlFor="mobile"
                className="block text-lg font-semibold text-gray-200"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full mt-3 p-3 border border-gray-600 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Enter your mobile number"
              />
            </div>

            {/* Vehicle */}
            <div className="mb-6">
              <label
                htmlFor="vehicle"
                className="block text-lg font-semibold text-gray-200"
              >
                Vehicle
              </label>
              <textarea
                id="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                className="w-full mt-3 p-3 border border-gray-600 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Enter your vehicle details"
              />
            </div>

            {/* Booking Dates */}
            <div className="mb-6">
              <label
                htmlFor="fromDate"
                className="block text-lg font-semibold text-gray-200"
              >
                From Date
              </label>
              <input
                type="date"
                id="fromDate"
                value={formData.fromDate}
                onChange={handleChange}
                className="w-full mt-3 p-3 border border-gray-600 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="toDate"
                className="block text-lg font-semibold text-gray-200"
              >
                To Date
              </label>
              <input
                type="date"
                id="toDate"
                value={formData.toDate}
                onChange={handleChange}
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
