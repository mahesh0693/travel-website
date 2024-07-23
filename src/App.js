import React from "react";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import ServicesSection from "./components/ServicesSection";
import Explore from "./components/explore";
import TravelPoint from "./components/travelpoint";
import KeyFeatures from "./components/keyfeatures";
import Testimonial from "./components/testimonials";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <Explore />
      <TravelPoint />
      <KeyFeatures />
      <Testimonial />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;
