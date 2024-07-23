import React from "react";
import "./footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
      <div
        style={{ fontFamily: "Circular Std, sans-serif" }}
        className='footer-content'
      >
        <div className='footer-section about'>
          <h1>Travlog</h1>
          <p>
            Some footer text about the Agency. Just a little description to help
            people understand you better.
          </p>
          <div className='social-icons'>
            <a href='#'>
              <FaFacebookF />
            </a>
            <a href='#'>
              <FaTwitter />
            </a>
            <a href='#'>
              <FaLinkedinIn />
            </a>
            <a href='#'>
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className='footer-section links'>
          <h2>Company</h2>
          <ul>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Career</a>
            </li>
            <li>
              <a href='#'>Mobile</a>
            </li>
          </ul>
        </div>
        <div className='footer-section contact'>
          <h2>Contact</h2>
          <p>Why Travlog?</p>
          <p>Partner with us</p>
          <p>FAQ’s</p>
          <p>Blog</p>
        </div>
        <div className='footer-section contact'>
          <h2>Meet Us</h2>
          <p>+00 92 1234 56789</p>
          <p>info@travlog.com</p>
          <p>205. R Street, New York</p>
          <p>BD23200</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
