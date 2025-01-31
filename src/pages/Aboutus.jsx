import AboutNav from "../components/Navbars/AboutNav";

const AboutUsPage = () => {
  return (
    <>
      <AboutNav />
      <div className="bg-black text-white min-h-screen">
        {/* Page Header */}
        <section className="bg-gray-800 py-16 text-center px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
            About Us
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            Discover our story and what drives us to make your adventures unforgettable.
          </p>
        </section>

        {/* About Section */}
        <section className="py-10 pb-28 px-6 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Who We Are */}
              <div className="p-6 bg-gray-900 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">Who We Are</h2>
                <p className="text-gray-300 mt-4 leading-relaxed text-sm sm:text-base">
                  Wheels to Paradise is more than just a rental company – we’re your gateway to adventure. Whether it's exploring the wild or cruising scenic routes, we bring your journey to life with high-quality bike and car rentals.
                </p>
              </div>

              {/* Our Mission */}
              <div className="p-6 bg-gray-900 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">Our Mission</h2>
                <p className="text-gray-300 mt-4 leading-relaxed text-sm sm:text-base">
                  To inspire exploration and create unforgettable memories by providing safe, affordable, and high-quality rentals for adventurers everywhere.
                </p>
              </div>

              {/* Our Vision */}
              <div className="p-6 bg-gray-900 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">Our Vision</h2>
                <p className="text-gray-300 mt-4 leading-relaxed text-sm sm:text-base">
                  To be the premier choice for adventure rentals, empowering people to explore the world sustainably and seamlessly.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="p-6 bg-gray-900 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">Why Choose Us?</h2>
                <p className="text-gray-300 mt-4 leading-relaxed text-sm sm:text-base">
                  We prioritize your experience with top-notch rentals, excellent customer service, and a commitment to sustainability. Adventure awaits, and we’re here to ensure it’s unforgettable.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUsPage;
