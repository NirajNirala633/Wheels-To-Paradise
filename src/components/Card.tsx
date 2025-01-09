// import React from "react";

// interface CardProps {
//   image: string;
//   title: string;
//   description: string;
//   className?: string; // Add className to the props interface
// }

// const Card: React.FC<CardProps> = ({ image, title, description, className }) => {
//   return (
//     <div
//       className={`bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 ${className}`}
//     >
//       <img
//         src={image}
//         alt={title}
//         className="h-40 w-full object-cover rounded-md"
//       />
//       <h3 className="text-xl font-semibold text-green-900 mt-4">{title}</h3>
//       <p className="text-gray-700 mt-2">{description}</p>
//     </div>
//   );
// };

// export default Card;

import React from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, className }) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="h-60 w-full object-cover rounded-md" // Adjust size here
      />
      <h3 className="text-xl font-semibold text-green-900 mt-4">{title}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
};

export default Card;
