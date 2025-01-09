import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import BikeOptionsPage from "./pages/services/BikeAndCarOptionsPage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import BookingPage from "./pages/BookingPage";
import Header from "./components/Header";
import AdventureGearPage from "./pages/services/AdventureGearPage";

const App = () => {
  return (
    <Router>
      {/* Header should be outside of Routes */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/bike-options" element={<BikeOptionsPage />} />
        <Route path="/adventure-gear" element={<AdventureGearPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
