import React from "react";
import "./keyfeatures.css";
// import serviceIcon from "./path_to_service_icon"; // Replace with the correct path
// import scheduleIcon from "./path_to_schedule_icon"; // Replace with the correct path
// import couponIcon from "./path_to_coupon_icon"; // Replace with the correct path
import paradiseImage from "../assets/img/p2.png";

const KeyFeatures = () => {
  return (
    <section className='key-features'>
      <div
        style={{ fontFamily: "Circular Std, sans-serif" }}
        className='key-features-content'
      >
        <div className='key-features-text'>
          <p style={{ color: "#F85E9F" }}>KEY FEATURES</p>
          <h2>We offer best services</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div className='features-list'>
            <div className='feature-item'>
              {/* <img src={serviceIcon} alt='We offer best services' /> */}
              <div>
                <h4>We offer best services</h4>
                <p>Lorem Ipsum is not simply random text</p>
              </div>
            </div>
            <div className='feature-item'>
              {/* <img src={scheduleIcon} alt='Schedule your trip' /> */}
              <div>
                <h4>Schedule your trip</h4>
                <p>It has roots in a piece of classical</p>
              </div>
            </div>
            <div className='feature-item'>
              {/* <img src={couponIcon} alt='Get discounted coupons' /> */}
              <div>
                <h4>Get discounted coupons</h4>
                <p>Lorem Ipsum is not simply random text</p>
              </div>
            </div>
          </div>
        </div>
        <div className='key-features-images'>
          <img
            src={paradiseImage}
            alt='Paradise on Earth'
            className='image-1'
          />
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
