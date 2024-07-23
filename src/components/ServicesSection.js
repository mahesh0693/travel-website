import React from "react";
import "./ServicesSection.css";
import photo1 from "../assets/img/p7.png";
import photo2 from "../assets/img/p8.png";
import photo3 from "../assets/img/p8.png";

const ServicesSection = () => {
  return (
    <section className='services-section'>
      <div
        style={{ fontFamily: "Circular Std, sans-serif" }}
        className='services-text'
      >
        <h4>SERVICES</h4>
        <h2>Our top value categories for you</h2>
      </div>
      <div
        style={{ fontFamily: "Circular Std, sans-serif" }}
        className='services-cards'
      >
        <div className='card'>
          <img src={photo1} alt='Best Tour Guide' />
          <h3>Best Tour Guide</h3>
          <p>
            What looked like a small patch of purple grass, above five feet.
          </p>
        </div>
        <div className='card'>
          <img src={photo2} alt='Easy Booking' />
          <h3>Easy Booking</h3>
          <p>Square, was moving across the sand in their direction.</p>
        </div>
        <div className='card'>
          <img src={photo3} alt='Secure Payment' />
          <h3>Secure Payment</h3>
          <p>
            What looked like a small patch of purple grass, above five feet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
