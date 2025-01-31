import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router

const Pagenotfound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-lg">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default Pagenotfound;
