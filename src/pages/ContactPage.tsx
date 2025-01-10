// import React from "react";

// const ContactPage = () => {
//   return (
//     <div className="bg-black text-white min-h-screen">
//       {/* Hero Section */}
//       <section
//         className="bg-cover bg-center h-96 flex items-center justify-center"
//         style={{ backgroundImage: `url('/path/to/hero-pattern.jpg')` }}
//       >
//         <h1 className="text-5xl font-extrabold tracking-wide text-center">
//           Contact Us
//         </h1>
//       </section>

//       {/* Main Contact Section */}
//       <section className="py-16 px-6 max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center tracking-wide">Get In Touch</h2>
//         <p className="text-gray-300 text-center mt-6 leading-relaxed">
//           Have questions? Need support? Reach out to us, and we’ll get back to you as soon as possible.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
//           {/* Reach Us */}
//           <div className="p-6 bg-gray-900 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
//             <h3 className="text-2xl font-semibold tracking-wide">Reach Us</h3>
//             <p className="text-gray-400 mt-4 leading-relaxed">
//               Email us directly at <span className="text-green-500">support@wheelstoparadise.com</span> or call us at
//               <span className="text-green-500"> +1-234-567-890</span>.
//             </p>
//             <p className="text-gray-400 mt-4 leading-relaxed">
//               Our team is here to help you 24/7.
//             </p>
//           </div>

//           {/* Find Us */}
//           <div className="p-6 bg-gray-900 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
//             <h3 className="text-2xl font-semibold tracking-wide">Find Us</h3>
//             <p className="text-gray-400 mt-4 leading-relaxed">
//               Wheels to Paradise Headquarters
//             </p>
//             <p className="text-gray-400 mt-2 leading-relaxed">
//               123 Adventure Lane<br />
//               Paradise City, PC 45678<br />
//               Country
//             </p>
//             <p className="text-gray-400 mt-4 leading-relaxed">
//               Visit us Monday to Friday: 9 AM - 5 PM
//             </p>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="mt-16">
//           <form className="bg-gray-900 shadow-xl rounded-lg p-8 max-w-2xl mx-auto">
//             <h3 className="text-2xl font-bold tracking-wide mb-8 text-center">
//               Send Us a Message
//             </h3>

//             {/* Email Field */}
//             <div className="mb-6">
//               <label htmlFor="email" className="block text-lg font-semibold">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full mt-3 p-3 border border-gray-700 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
//                 placeholder="Enter your email"
//               />
//             </div>

//             {/* Message Field */}
//             <div className="mb-6">
//               <label htmlFor="message" className="block text-lg font-semibold">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 rows={4}
//                 className="w-full mt-3 p-3 border border-gray-700 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
//                 placeholder="Write your message here"
//               ></textarea>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-green-600 hover:bg-green-500 text-black py-3 rounded-lg font-semibold text-lg transition duration-300"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactPage;

import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Page Header */}
      <section className="bg-gray-800 py-16 text-center">
        <h1 className="text-5xl font-bold tracking-wide">Contact Us</h1>
        <p className="text-gray-400 mt-4 text-lg">
          Reach out to us with your questions or feedback. We're here to help
          make your journey smooth and memorable.
        </p>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center tracking-wide">
          Get In Touch
        </h2>
        <p className="text-gray-300 text-center mt-6 leading-relaxed">
          Have questions? Need support? Reach out to us, and we’ll get back to
          you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Reach Us */}
          <div className="p-6 bg-gray-900 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold tracking-wide">Reach Us</h3>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Email us directly at{" "}
              <span className="text-green-500">
                support@wheelstoparadise.com
              </span>{" "}
              or call us at
              <span className="text-green-500"> +91 92339 14253</span>.
            </p>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Our team is here to help you 24/7.
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Locate us On Google Maps -{" "}
              <a
                className="hover:text-green-500"
                href="https://www.google.com/maps/place/WHEELS+TO+PARADISE/@30.6887152,76.6656191,17z/data=!3m1!4b1!4m6!3m5!1s0x390fefe1416c1217:0x2fa88fbef90d9219!8m2!3d30.6887152!4d76.668194!16s%2Fg%2F11vzdf6g19?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D"
              >
                Wheels To Paradise
              </a>
            </p>
          </div>

          {/* Find Us */}
          <div className="p-6 bg-gray-900 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold tracking-wide">Find Us</h3>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Wheels to Paradise
            </p>
            <p className="text-gray-400 mt-2 leading-relaxed">
              Sector 94, Sector 91, JLPL City
              <br />
              Landran, Sahibzada Ajit Singh Nagar, Punjab 140307
              <br />
              Near Cgc Landran
            </p>
            <p className="text-gray-400 mt-4 leading-relaxed">Visit us 24/7.</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16">
          <form className="bg-gray-900 shadow-xl rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold tracking-wide mb-8 text-center">
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
                className="w-full mt-3 p-3 border border-gray-700 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Enter your email"
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
  );
};

export default ContactPage;
