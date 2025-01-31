import React, { useState } from "react";
import ContactNav from "../components/Navbars/ContactNav";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Contact Details:\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=7986572704&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <ContactNav />
      <div className="bg-black text-white min-h-screen">
        {/* Page Header */}
        <section className="bg-gray-800 py-16 text-center px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
            Contact Us
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            Reach out to us with your questions or feedback. We're here to help
            make your journey smooth and memorable.
          </p>
        </section>

        {/* Main Contact Section */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center tracking-wide">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-center mt-6 leading-relaxed text-sm sm:text-base">
            Have questions? Need support? Reach out to us, and we’ll get back to
            you as soon as possible.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            {/* Reach Us */}
            <div className="p-6 bg-gray-900 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-wide">Reach Us</h3>
              <p className="text-gray-400 mt-4 leading-relaxed text-sm sm:text-base">
                Email us directly at{" "}
                <span className="text-green-500">
                  support@wheelstoparadise.com
                </span>{" "}
                or call us at
                <span className="text-green-500"> +91 92339 14253</span>.
              </p>
              <p className="text-gray-400 mt-4 leading-relaxed text-sm sm:text-base">
                Our team is here to help you 24/7.
              </p>

              <p className="text-gray-400 mt-4 leading-relaxed text-sm sm:text-base">
                Locate us On Google Maps -{" "}
                <a
                  className="hover:text-green-500 text-lg font-bold text-blue-500"
                  href="https://www.google.com/maps/place/WHEELS+TO+PARADISE/@30.6887152,76.6656191,17z/data=!3m1!4b1!4m6!3m5!1s0x390fefe1416c1217:0x2fa88fbef90d9219!8m2!3d30.6887152!4d76.668194!16s%2Fg%2F11vzdf6g19?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D"
                >
                  Wheels To Paradise
                </a>
              </p>
            </div>

            {/* Find Us */}
            <div className="p-6 bg-gray-900 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-wide">Find Us</h3>
              <p className="text-gray-400 mt-4 leading-relaxed text-sm sm:text-base">
                Wheels to Paradise
              </p>
              <p className="text-gray-400 mt-2 leading-relaxed text-sm sm:text-base">
                Sector 94, Sector 91, JLPL City
                <br />
                Landran, Sahibzada Ajit Singh Nagar, Punjab 140307
                <br />
                Near Cgc Landran
              </p>
              <p className="text-gray-400 mt-4 leading-relaxed text-sm sm:text-base">Visit us 24/7.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-16">
            <form onSubmit={handleSubmit} className="bg-gray-900 shadow-xl rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-wide mb-8 text-center">
                Send Us a Message
              </h3>

              {/* Email Field */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-3 p-3 border border-gray-700 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                  placeholder="Enter your email"
                />
              </div>

              {/* Mobile Number Field */}
              <div className="mb-6">
                <label htmlFor="mobile" className="block text-lg font-semibold">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full mt-3 p-3 border border-gray-700 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                  placeholder="Enter your mobile number"
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-3 p-3 border border-gray-700 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                  placeholder="Write your message here"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-500 text-black py-3 rounded-lg font-semibold text-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
