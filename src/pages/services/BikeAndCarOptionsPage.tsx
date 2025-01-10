import React from "react";
import Card from "../../components/Card";
import jawa from "../../assets/jawa-mystic.webp";
import rebel from "../../assets/hunter-rebel.avif";
import himaBlack from "../../assets/himalayan-black.webp";
import himaRed from "../../assets/red-himalayan.webp";
import himaGrey from "../../assets/himalayan-grey.webp";
import himaGreySpot from "../../assets/himalayan-greyspot.webp";
import dapper from "../../assets/hunter-dapper.avif";
import redMeteor from "../../assets/redMeteor.jpg";
import stellar from "../../assets/meteoStellar.png";
import xpulse from "../../assets/xpulse.webp";
import tiago from "../../assets/tiago.webp";
import thar from "../../assets/thar.webp";

const BikeOptionsPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Page Header */}
      <section className="bg-gray-800 py-16 text-center">
        <h1 className="text-5xl font-bold tracking-wide">Available Bikes</h1>
        <p className="text-gray-400 mt-4 text-lg">
          Choose from our range of bikes to start your adventure.
        </p>
      </section>

      {/* Bike Options Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bike Option 1 */}
            <div>
            <Card
              image={jawa}
              title="JAWA 42 BOBBER"
              description="Perfect for rough terrains and thrilling adventures."
            />
            <h2 className="text-3xl font-bold tracking-wide flex justify-center mt-2">Vehicle Rent - ₹1500</h2>
            </div>
           

            {/* Bike Option 2 */}
            <div>
            <Card
              image={rebel}
              title="HUNTER REBEL"
              description="Designed for speed and comfort on long rides."
            />
            <h2 className="text-3xl font-bold tracking-wide flex justify-center mt-2">Vehicle Rent - ₹1200</h2>

            </div>
            

            {/* Bike Option 3 */}
            <div>
            <Card
              image={himaBlack}
              title="HIMALAYAN BLACK"
              description="Eco-friendly and easy to ride for effortless journeys."
            />
            <h2 className="text-3xl font-bold tracking-wide flex justify-center mt-2">Vehicle Rent - ₹1300</h2>

            </div>
            

             {/* Bike Option 4 */}
             <div>
             <Card
              image={himaRed}
              title="HIMALAYAN RED"
              description="Eco-friendly and easy to ride for effortless journeys."
            />
            <h2 className="text-3xl font-bold tracking-wide flex justify-center mt-2">Vehicle Rent - ₹1300</h2>

             </div>
             

             {/* Bike Option 5 */}
             <div>
             <Card
              image={himaGrey}
              title="HIMALAYAN GREY"
              description="Eco-friendly and easy to ride for effortless journeys."
            />
            <h2 className="text-3xl font-bold tracking-wide flex justify-center mt-2">Vehicle Rent - ₹1300</h2>

             </div>
             

             {/* Bike Option 6 */}
             <div>
             <Card
              image={himaGreySpot}
              title="HIMALAYAN GREYS"
              description="Eco-friendly and easy to ride for effortless journeys."
            />
            <h2 className="text-3xl font-bold tracking-wide flex justify-center mt-2">Vehicle Rent - ₹1300</h2>

             </div>
             

             {/* Bike Option 7 */}
             <div>
             <Card
              image={dapper}
              title="HUNTER DAPPER"
              description="Eco-friendly and easy to ride for effortless journeys."
            />
            <h2 className="text-3xl font-bold tracking-wide flex justify-center mt-2">Vehicle Rent - ₹1200</h2>

             </div>
            

             {/* Bike Option 8 */}
             <div>
             <Card
              image={redMeteor}
              title="RED METEOR"
              description="Eco-friendly and easy to ride for effortless journeys."
            />
            <h2 className="text-3xl font-bold tracking-wide flex justify-center mt-2">Vehicle Rent - ₹1300</h2>

             </div>
             

             {/* Bike Option 9 */}
             <div>
             <Card
              image={stellar}
              title="METEOR STELLAR"
              description="Eco-friendly and easy to ride for effortless journeys."
            />
            <h2 className="text-3xl font-bold tracking-wide flex justify-center mt-2">Vehicle Rent - ₹1300</h2>

             </div>
             

             {/* Bike Option 10 */}
             <div>
             <Card
              image={xpulse}
              title="HERO XPULSE"
              description="Eco-friendly and easy to ride for effortless journeys."
            />
            <h2 className="text-3xl font-bold tracking-wide flex justify-center mt-2">Vehicle Rent - ₹1200</h2>

             </div>
             

             {/* Bike Option 11 */}
             <div>
             <Card
              image={tiago}
              title="TATA TIAGO"
              description="Eco-friendly and easy to ride for effortless journeys."
            />
            <h2 className="text-3xl font-bold tracking-wide flex justify-center mt-2">Vehicle Rent - ₹2000</h2>

             </div>
             

             {/* Bike Option 12 */}
             <div>
             <Card
              image={thar}
              title="THAR"
              description="Eco-friendly and easy to ride for effortless journeys."
            />
            <h2 className="text-3xl font-bold tracking-wide flex justify-center mt-2">Vehicle Rent - ₹4500</h2>


             </div>
            
            
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-8 text-center">
        <button
          onClick={() => window.history.back()}
          className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-full text-white font-semibold text-lg transition duration-300"
        >
          Back to Services
        </button>
      </section>
    </div>
  );
};

export default BikeOptionsPage;
