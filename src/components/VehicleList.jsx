import React from "react";
import Card from "./VehicleCard";
// ...existing code...

const VehicleList = ({ vehicles, handleToast }) => {
  return (
    <div className="flex flex-wrap justify-center -m-4">
      {vehicles.map((vehicle) => (
        <Card
          key={vehicle.id}
          id={vehicle.id}
          img={vehicle.img}
          name={vehicle.name}
          category={vehicle.category}
          vehicleRent={vehicle.vehicleRent}
          handleToast={handleToast}
        />
      ))}
    </div>
  );
};

// ...existing code...
