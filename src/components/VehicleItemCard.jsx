import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const VehicleItemCard = ({ id, name, vehicleRent, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3 relative">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, vehicleRent }));
          toast(`${name} Removed!`, {
            icon: "👋",
          });
        }}
        className="absolute right-2 top-2 text-gray-600 cursor-pointer"
      />
      <img src={img} alt={name} className="w-[50px] h-[50px] rounded-md" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between items-center">
          <span className="text-green-500 font-bold">{vehicleRent}</span>
        </div>
      </div>
    </div>
  );
};

export default VehicleItemCard;
