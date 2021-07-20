import React from 'react';
import logo from '../logo.png';


const Header = () => (
    <div className="header">
      <div className="top-links">
        <a href="">About Us</a>
        <a href="">Contact</a>
      </div>
      <div className="logo-container">
        <img className="home-logo" id="logo" alt="Justice Marine LLC" src={logo} />
      </div>
      <div className="top-links">
        <a href="">Services</a>
        <a href="">Gallery</a>
      </div>
    </div>
)

export default Header; 
