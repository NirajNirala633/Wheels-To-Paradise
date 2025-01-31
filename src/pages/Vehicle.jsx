import React from 'react';
import VehicleNav from '../components/Navbars/VehicleNav';
import CategoryMenu from '../components/CategoryMenu';
import VehicleCard from '../components/VehicleCard';
import VehicleItems from '../components/VehicleItems';
import VehicleCart from '../components/VehicleCart';
import Cart from '../components/Cart';

const Vehicle = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
      <VehicleNav />

     <CategoryMenu />
    <VehicleItems />
    <VehicleCart />
    {/* <Cart /> */}

      </div>
  );
};

export default Vehicle;
