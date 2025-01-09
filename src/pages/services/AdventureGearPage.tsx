import React from "react";
import Card from "../../components/Card";

const AdventureGearPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Page Header */}
      <section className="bg-gray-800 py-16 text-center">
        <h1 className="text-5xl font-bold tracking-wide">Adventure Gear</h1>
        <p className="text-gray-400 mt-4 text-lg">
          Equip yourself with the best adventure gear for an unforgettable experience.
        </p>
      </section>

      {/* Gear Options Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gear Option 1 */}
            <Card
              image="/path-to-hiking-gear.jpg"
              title="Hiking Gear"
              description="High-quality gear for trekking and mountain adventures."
            />

            {/* Gear Option 2 */}
            <Card
              image="/path-to-camping-gear.jpg"
              title="Camping Gear"
              description="Durable and reliable camping equipment for outdoor stays."
            />

            {/* Gear Option 3 */}
            <Card
              image="/path-to-climbing-gear.jpg"
              title="Climbing Gear"
              description="Safety and performance for scaling the heights of your dreams."
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

export default AdventureGearPage;
