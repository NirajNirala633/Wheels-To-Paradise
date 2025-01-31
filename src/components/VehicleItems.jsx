import React from "react";
import VehicleCard from "./VehicleCard";
import VehicleData from "../data/VechicleData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const VehicleItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const handleToast = (name) => toast.success(`Added ${name} to cart`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center items-center mx-6 my-10">
        {VehicleData.filter((vehicle) => {
          if (category === "All") {
            return vehicle.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === vehicle.category &&
              vehicle.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            id={vehicle.id}
            name={vehicle.name}
            vehicleRent={vehicle.vehicleRent}
            img={vehicle.img}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default VehicleItems;
