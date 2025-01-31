import React, { useEffect, useState } from "react";
import VehicleData from "../data/VechicleData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(VehicleData.map((vehicle) => vehicle.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="mt-6 ml-6 ">
         <div>
        <h3 className="text-3xl font-bold text-blue-600 mb-4">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
      </div>
      <h3 className="text-3xl font-bold">Find the Vechicles</h3>
      <div className="my-5 flex gap-5 overflow-x-scroll  scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-400 font-bold rounded-lg hover:bg-green-500  hover:text-white text-xl ${
            selectedCategory === "All" && "bg-green-500 text-white "
          }`}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 bg-gray-400 font-bold text-xl rounded-lg hover:bg-green-500 hover:text-white ${
                selectedCategory === category && "bg-green-500 text-white"
              } `}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
