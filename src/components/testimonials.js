import React from "react";
import "./testimonials.css";
// import leftArrowIcon from "./path_to_left_arrow_icon"; // Replace with the correct path
// import rightArrowIcon from "./path_to_right_arrow_icon"; // Replace with the correct path
import testimonialImage from "../assets/img/p1.jpg"; // Replace with the correct path

const Testimonials = () => {
  return (
    <section className='testimonials'>
      <div
        style={{ fontFamily: "Circular Std, sans-serif" }}
        className='testimonials-content'
      >
        <p style={{ color: "#F85E9F" }}>TESTIMONIALS</p>
        <h2>Trust our clients</h2>{" "}
        <div className='testimonial-card'>
          <div className='testimonial-navigation'>
            <button className='nav-button-left'>←</button>
          </div>
          <div className='testimonial-details'>
            <div className='testimonial-image'>
              <img src={testimonialImage} alt='Testimonial' />
            </div>
            <div className='testimonial-info'>
              <h4>
                Mark Smith / <span>Travel Enthusiast</span>
              </h4>
              <div className='testimonial-rating'>⭐⭐⭐⭐⭐</div>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC.
              </p>
            </div>
          </div>
          <div className='testimonial-navigation'>
            <button className='nav-button-right'>→</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
