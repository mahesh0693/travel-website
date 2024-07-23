import React from "react";
import "./heroSection.css";
import destination1 from "../assets/img/Group 1.png";
import destination2 from "../assets/img/p10.jpg";
import destination3 from "../assets/img/p11.jpg";

const HeroSection = () => {
  return (
    <section className='hero-section'>
      <div
        style={{ fontFamily: "Circular Std, sans-serif" }}
        className='text-content'
      >
        <button className='explore-btn'>Explore the world!</button>
        <h1>
          Travel{" "}
          <span>
            top
            <br /> destination
          </span>{" "}
          <br /> of the world
        </h1>
        <p>
          We always make our customer happy by providing as many choices as
          possible
        </p>
        <div className='hero-buttons'>
          <button className='get-started'>Get Started</button>
          <button className='watch-demo'>Watch Demo</button>
        </div>
      </div>
        <div >
          <img src={destination1} alt='Destination 1' className="hero-image" />
        </div>
        
      <div className='partners'>
        {/* <img src={tripadvisor} alt='Tripadvisor' />
        <img src={expedia} alt='Expedia' />
        <img src={booking} alt='Booking.com' />
        <img src={airbnb} alt='Airbnb' />
        <img src={orbitz} alt='Orbitz' /> */}
      </div>
    </section>
  );
};

export default HeroSection;
