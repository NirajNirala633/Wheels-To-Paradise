// import React from "react";
// import { Link } from "react-router-dom";
// import wheels from "../assets/WHEELS_TO_PARADISE.png";

// const Header = () => {
//   return (
//     <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
//         {/* Logo and Brand Name */}
//         <div className="flex items-center space-x-4">
//           <img
//             src={wheels}
//             alt="Wheels to Paradise Logo"
//             className="h-16 w-16 rounded-full border-2 border-white shadow-md"
//           />
//           <h1 className="text-3xl font-extrabold tracking-wider">
//             <Link to="/" className="hover:text-gray-400 transition duration-300">
//               Wheels to Paradise
//             </Link>
//           </h1>
//         </div>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex space-x-10 text-lg font-semibold">
//           <Link
//             to="/"
//             className="hover:text-gray-400 transition duration-300"
//           >
//             Home
//           </Link>
//           <Link
//             to="/services"
//             className="hover:text-gray-400 transition duration-300"
//           >
//             Services
//           </Link>
//           {/* <Link
//             to="/booking"
//             className="hover:text-gray-400 transition duration-300"
//           >
//             Booking
//           </Link> */}
//           <Link
//             to="/contact"
//             className="hover:text-gray-400 transition duration-300"
//           >
//             Contact
//           </Link>
//           <Link
//             to="/about"
//             className="hover:text-gray-400 transition duration-300"
//           >
//             About Us
//           </Link>
//         </nav>

//         {/* CTA Button */}
//         <div className="hidden md:block">
//           <Link
//             to="/booking"
//             className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300 shadow-lg"
//           >
//             Book Now
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button className="text-white focus:outline-none">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;






// import React from "react";
// import { Link } from "react-router-dom";
// import wheels from "../assets/WHEELS_TO_PARADISE.png";

// const Header = () => {
//   return (
//     <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
//         {/* Logo and Brand Name */}
//         <div className="flex items-center space-x-4">
//           <img
//             src={wheels}
//             alt="Wheels to Paradise Logo"
//             className="h-16 w-16 rounded-full border-2 border-gray-600 shadow-lg"
//           />
//           <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider">
//             <Link to="/" className="hover:text-green-500 transition duration-300">
//               Wheels to Paradise
//             </Link>
//           </h1>
//         </div>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex space-x-8 text-base md:text-lg font-medium">
//           <Link to="/" className="hover:text-green-500 transition duration-300">
//             Home
//           </Link>
//           <Link
//             to="/services"
//             className="hover:text-green-500 transition duration-300"
//           >
//             Services
//           </Link>
//           <Link
//             to="/about"
//             className="hover:text-green-500 transition duration-300"
//           >
//             About Us
//           </Link>
//           <Link
//             to="/contact"
//             className="hover:text-green-500 transition duration-300"
//           >
//             Contact
//           </Link>
//         </nav>

//         {/* CTA Button */}
//         <div className="hidden md:block">
//           <Link
//             to="/booking"
//             className="bg-green-500 text-black font-semibold py-2 px-6 rounded-full hover:bg-green-400 transition duration-300 shadow-lg"
//           >
//             Book Now
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button className="text-gray-400 hover:text-green-500 focus:outline-none">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;







// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import wheels from "../assets/WHEELS_TO_PARADISE.png";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
//         {/* Logo and Brand Name */}
//         <div className="flex items-center space-x-4">
//           <img
//             src={wheels}
//             alt="Wheels to Paradise Logo"
//             className="h-16 w-16 rounded-full border-2 border-gray-600 shadow-lg"
//           />
//           <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider">
//             <Link to="/" className="hover:text-green-500 transition duration-300">
//               Wheels to Paradise
//             </Link>
//           </h1>
//         </div>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex space-x-8 text-base md:text-lg font-medium">
//           <Link to="/" className="hover:text-green-500 transition duration-300">
//             Home
//           </Link>
//           <Link to="/services" className="hover:text-green-500 transition duration-300">
//             Services
//           </Link>
//           <Link to="/about" className="hover:text-green-500 transition duration-300">
//             About Us
//           </Link>
//           <Link to="/contact" className="hover:text-green-500 transition duration-300">
//             Contact
//           </Link>
//         </nav>

//         {/* CTA Button */}
//         <div className="hidden md:block">
//           <Link
//             to="/booking"
//             className="bg-green-500 text-black font-semibold py-2 px-6 rounded-full hover:bg-green-400 transition duration-300 shadow-lg"
//           >
//             Book Now
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="text-gray-400 hover:text-green-500 focus:outline-none"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isMenuOpen && (
//         <div className="bg-black text-gray-200 md:hidden">
//           <nav className="flex flex-col items-center space-y-4 py-4">
//             <Link
//               to="/"
//               className="hover:text-green-500 transition duration-300"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               to="/services"
//               className="hover:text-green-500 transition duration-300"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Services
//             </Link>
//             <Link
//               to="/about"
//               className="hover:text-green-500 transition duration-300"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               About Us
//             </Link>
//             <Link
//               to="/contact"
//               className="hover:text-green-500 transition duration-300"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Contact
//             </Link>
//             <Link
//               to="/booking"
//               className="bg-green-500 text-black font-semibold py-2 px-6 rounded-full hover:bg-green-400 transition duration-300 shadow-lg"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Book Now
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;




import React, { useState } from "react";
import { Link } from "react-router-dom";
import wheels from "../assets/WHEELS_TO_PARADISE.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-800 via-black to-gray-800 text-gray-200 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center">
            <img
              src={wheels}
              alt="Wheels to Paradise Logo"
              className="h-12 w-12 rounded-full border-2 border-gray-700 shadow-md"
            />
            <h1 className="text-xl md:text-2xl font-bold tracking-wider hover:text-green-500 transition duration-300">
              Wheels to Paradise
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link to="/" className="hover:text-green-500 transition duration-300">
            Home
          </Link>
          <Link
            to="/services"
            className="hover:text-green-500 transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="hover:text-green-500 transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:text-green-500 transition duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/booking"
            className="bg-green-500 text-black font-semibold py-2 px-6 rounded-full hover:bg-green-400 transition duration-300 shadow-lg"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="bg-black text-gray-200 md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/"
              className="hover:text-green-500 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="hover:text-green-500 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="hover:text-green-500 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="hover:text-green-500 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/booking"
              className="bg-green-500 text-black font-semibold py-2 px-6 rounded-full hover:bg-green-400 transition duration-300 shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
