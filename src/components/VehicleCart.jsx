import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import VehicleItemCard from "./VehicleItemCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * parseFloat(item.vehicleRent.replace('₹', '')),
    0
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length === 0) {
      setActiveCart(false);
    }
  }, [cartItems]);

  const handleCheckout = () => {
    const message = cartItems.map(item => `${item.name} - ${item.vehicleRent}`).join('\n');
    const googleMapsLink = "https://www.google.com/maps/place/WHEELS+TO+PARADISE/@30.6887152,76.668194,17z/data=!3m1!4b1!4m6!3m5!1s0x390fefe1416c1217:0x2fa88fbef90d9219!8m2!3d30.6887152!4d76.668194!16s%2Fg%2F11vzdf6g19?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=7986572704&text=${encodeURIComponent(`Order Details:\n${message}\nTotal Amount: ₹${totalPrice.toFixed(2)}\nLocation: ${googleMapsLink}`)}`;
    window.open(whatsappUrl, '_blank');
    navigate("/success");
    setTimeout(() => {
      navigate("/");
    }, 3500); // Redirect to homepage after 3 seconds
  };

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[25vw] h-full p-6 bg-gray-100 shadow-lg ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 z-50`}
      >
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-semibold text-gray-900">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(false)}
            className="border-2 border-gray-700 text-gray-700 font-bold p-1 text-2xl rounded-md hover:text-red-500 hover:border-red-500 cursor-pointer"
          />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((vehicle) => {
            return (
              <VehicleItemCard
                key={vehicle.id}
                id={vehicle.id}
                name={vehicle.name}
                vehicleRent={vehicle.vehicleRent}
                img={vehicle.img}
              />
            );
          })
        ) : (
          <h2 className="text-center text-2xl font-semibold text-gray-900">
            Your cart is empty
          </h2>
        )}

        <div className="absolute bottom-0 w-full p-4 bg-white shadow-inner">
          <h3 className="font-medium text-gray-900">Items: {totalQty}</h3>
          <h3 className="font-medium text-gray-900">
            Total Amount: ₹{totalPrice.toFixed(2)}
          </h3>
          <hr className="my-2" />
          <button
            onClick={handleCheckout}
            className="bg-green-600 font-bold px-4 py-2 text-white rounded-lg w-full hover:bg-blue-700 transition-colors"
          >
            Checkout
          </button>
        </div>
      </div>
      {!activeCart && (
        <FaShoppingCart
          onClick={() => setActiveCart(!activeCart)}
          className={`rounded-full bg-white text-black shadow-lg text-5xl p-3 fixed bottom-6 right-6 ${
            totalQty > 0 && "animate-bounce"
          } cursor-pointer z-60`}
        />
      )}
    </>
  );
};

export default Cart;
