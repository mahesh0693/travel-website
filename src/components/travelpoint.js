import React from "react";
import "./travelpoint.css";
import discountedPriceIcon from "../assets/img/p3.png";

const TravelPoint = () => {
  return (
    <section className='travel-point'>
      <div
        style={{ fontFamily: "Circular Std, sans-serif" }}
        className='travel-point-content'
      >
        <div className='travel-point-text'>
          <div className='discounted-price'>
            <img src={discountedPriceIcon} alt='Discounted Price' />
          </div>

          <div className='travel-point-stats'>
            <div className='content'>
              <h2>We helping you find your dream location</h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC.
              </p>
            </div>
            <div className='values'>
              <div>
                <span>500+</span>
                <p>Holiday Package</p>
              </div>
              <div>
                <span>100</span>
                <p>Luxury Hotel</p>
              </div>
              <div>
                <span>7</span>
                <p>Premium Airlines</p>
              </div>
              <div>
                <span>2k+</span>
                <p>Happy Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelPoint;
