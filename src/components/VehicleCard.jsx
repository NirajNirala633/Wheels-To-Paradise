import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const Card = ({ id, img, name, category, vehicleRent, handleToast }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, img, name, category, vehicleRent }));
    handleToast(name);
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 max-w-xs h-96 rounded overflow-hidden shadow-lg bg-gray-800 text-gray-200 m-4 flex flex-col items-center">
      <img className="w-full h-48 object-cover" src={img} alt={name} />
      <div className="px-4 py-4 h-32 flex flex-col items-center">
        <div className="font-bold text-xl sm:text-2xl mb-2">{name}</div>
        <p className="text-gray-400 text-sm sm:text-base">{category}</p>
        <p className="text-gray-400 font-bold text-xl sm:text-2xl">Vehicle Rent - {vehicleRent}</p>
      </div>
      <div className="px-4 pt-2 pb-4">
        <button
          onClick={handleAddToCart}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
