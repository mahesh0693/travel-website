import React from "react";
import "./explore.css";
import destination1 from "../assets/img/p6.jpg";
import destination2 from "../assets/img/p5.jpg";
import destination3 from "../assets/img/p4.jpg";

const Explore = () => {
  return (
    <section className='explore-section'>
      <div
        style={{ fontFamily: "Circular Std, sans-serif" }}
        className='explore-text'
      >
        <p style={{ color: "#F85E9F" }}>TOP DESTINATION</p>
        <h2>Explore top destination</h2>
      </div>
      <div
        style={{ fontFamily: "Circular Std, sans-serif" }}
        className='explore-cards'
      >
        <div className='cards'>
          <img src={destination1} alt='Paradise Beach, Bantayan Island' />
          <h3>Paradise Beach, Bantayan Island</h3>
          <p>Rome, Italy</p>
          <div className='card-footer'>
            <span className='price'>$550.16</span>
            <span className='rating'>
              4.8 <span className='star'>⭐</span>
            </span>
          </div>
        </div>
        <div className='cards'>
          <img src={destination2} alt='Ocean with full of Colors' />
          <h3>Ocean with full of Colors</h3>
          <p>Maldives</p>
          <div className='card-footer'>
            <span className='price'>$20.99</span>
            <span className='rating'>
              4.5 <span className='star'>⭐</span>
            </span>
          </div>
        </div>
        <div className='cards'>
          <img src={destination3} alt='Mountain View, Above the cloud' />
          <h3>Mountain View, Above the cloud</h3>
          <p>United Arab Emirates</p>
          <div className='card-footer'>
            <span className='price'>$150.99</span>
            <span className='rating'>
              5.0 <span className='star'>⭐</span>
            </span>
          </div>
        </div>
      </div>
      <div
        style={{ fontFamily: "Circular Std, sans-serif" }}
        className='navigation-buttons'
      >
        <button className='nav-button'>←</button>
        <button className='nav-button'>→</button>
      </div>
    </section>
  );
};

export default Explore;
