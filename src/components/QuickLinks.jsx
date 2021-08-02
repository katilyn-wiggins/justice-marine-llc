import React from 'react';
import '../App.css'
import logo from '../logo.png'

const QuickLinks = () => (
  <div className="quick-links-container">
  <div className="quick-links-1"> 
    <a href="#contact">Contact Us</a>
    <a href="#about">About Us</a>
    <a href="#mission">Mission</a>
  </div>

  {/* <div className="quick-links-1"> 
    <a href="">LinkedIn</a>
    <a href="">Twitter</a>
    <a href="">Facebook</a>
  </div> */}

  <div className="quick-links-1"> 
    <a href="#logo">FAQ</a>
    <a href="#logo">Blog</a>
    <a href="#logo">Resources</a>
  </div>

  <div className="quick-links-1"> 
    {/* <a href="#logo"><img src={logo} alt="logo" className="footer-logo"/></a> */}
    <a href="mailto:justicemarinellc@gmail.com">justicemarinellc@gmail.com</a>
    <p>partners with Marin Subsea</p>
  </div>

  </div>
);


export default QuickLinks;