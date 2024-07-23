import React, { useState } from "react";
import "./subscribe.css";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here, e.g., send the email to your server or a service
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div
      style={{ fontFamily: "Circular Std, sans-serif" }}
      className='subscribe'
    >
      <p style={{ letterSpacing: "2px", color: "#F85E9F" }}>
        SUBSCRIBE TO OUR NEWSLETTER
      </p>

      <h3>Prepare yourself & let’s explore the beauty of the world</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Enter Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type='submit'>Subscribe</button>
      </form>
    </div>
  );
};

export default Subscribe;
