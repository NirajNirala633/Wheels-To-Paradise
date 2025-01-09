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
            <Card
              image={jawa}
              title="JAWA 42 BOBBER"
              description="Perfect for rough terrains and thrilling adventures."
            />

            {/* Bike Option 2 */}
            <Card
              image={rebel}
              title="HUNTER REBEL"
              description="Designed for speed and comfort on long rides."
            />

            {/* Bike Option 3 */}
            <Card
              image={himaBlack}
              title="HIMALAYAN BLACK"
              description="Eco-friendly and easy to ride for effortless journeys."
            />

             {/* Bike Option 4 */}
             <Card
              image={himaRed}
              title="HIMALAYAN RED"
              description="Eco-friendly and easy to ride for effortless journeys."
            />

             {/* Bike Option 5 */}
             <Card
              image={himaGrey}
              title="HIMALAYAN GREY"
              description="Eco-friendly and easy to ride for effortless journeys."
            />

             {/* Bike Option 6 */}
             <Card
              image={himaGreySpot}
              title="HIMALAYAN GREYS"
              description="Eco-friendly and easy to ride for effortless journeys."
            />

             {/* Bike Option 7 */}
             <Card
              image={dapper}
              title="HUNTER DAPPER"
              description="Eco-friendly and easy to ride for effortless journeys."
            />

             {/* Bike Option 8 */}
             <Card
              image={redMeteor}
              title="RED METEOR"
              description="Eco-friendly and easy to ride for effortless journeys."
            />

             {/* Bike Option 9 */}
             <Card
              image={stellar}
              title="METEOR STELLAR"
              description="Eco-friendly and easy to ride for effortless journeys."
            />

             {/* Bike Option 10 */}
             <Card
              image={xpulse}
              title="HERO XPULSE"
              description="Eco-friendly and easy to ride for effortless journeys."
            />

             {/* Bike Option 11 */}
             <Card
              image={tiago}
              title="TATA TIAGO"
              description="Eco-friendly and easy to ride for effortless journeys."
            />

             {/* Bike Option 12 */}
             <Card
              image={thar}
              title="THAR"
              description="Eco-friendly and easy to ride for effortless journeys."
            />

            
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
