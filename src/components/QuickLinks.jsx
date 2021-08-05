import React from 'react';
import '../App.css'
import marin from '../images/marin-logo.png'

const QuickLinks = () => (
  <div className="quick-links-container">
  <div className="quick-links-1"> 
    <a href="/contact">Contact Us</a>
    <a href="/about">About Us</a>
    <a href="/equipment">Eqiupment</a>
  </div>

  <div className="quick-links-1"> 
    <a href="mailto:justicemarinellc@gmail.com">justicemarinellc@gmail.com</a>
    <p>Partners with: </p>
    <a href="https://www.marinsubsea.com/"><img src={marin} alt="marin-logo" className="marin"/></a>
  </div>

  </div>
);

export default QuickLinks;