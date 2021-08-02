import React from 'react';
import logo from '../logo.png';


const Header = () => (
    <div className="header">
      {/* <div className="top-links" id="top-links">
        <a href="/#about">About Us</a>
        <a href="/gallery">Gallery</a>
      </div> */}
      <div className="logo-container">
      <a href="/"><img className="home-logo" id="logo" alt="Justice Marine LLC" src={logo} /></a>
      </div>
      {/* <div className="top-links" id="top-links">
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div> */}
    </div>
)

export default Header; 
