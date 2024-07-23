import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className='header'>
      <div style={{ fontFamily: "Circular Std, sans-serif" }} className='logo'>
        Travlog
      </div>
      <nav style={{ fontFamily: "Circular Std, sans-serif" }}>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#discover'>Discover</a>
          </li>
          <li>
            <a href='#deals'>Special Deals</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
      <div
        style={{ fontFamily: "Circular Std, sans-serif" }}
        className='auth-buttons'
      >
        <button className='login'>Log In</button>
        <button className='signup'>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
