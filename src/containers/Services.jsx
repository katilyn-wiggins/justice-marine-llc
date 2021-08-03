import React from 'react';

import Header from './Header'
import Footer from './Footer'; 
import Hamburger from '../components/Hamburger';


const Services = () => (
  <div className="home-page">
    <Hamburger />
    <Header />
    <div className="image-button-container-services">
      <div className="desc-services">Services</div>
    </div>
    <div className="services-container">
      <ul className="services-desc">
        <li>Diver support and tooling: <span className="detail">Maxi Vac, Hydro Vac, High mass impac jet, mono jets</span></li>
        <li>Dredging and material recovery</li>
        <li>Inshore Oilfield Support</li>
        <li>Pipeline Works: Fuel, Gas, Oil, and cables</li>
        <li>Material Placement Systems: <span className="detail">Transfer of materials to a location site or subsurface to ensure rock armour protection</span></li>
        <li>Salvage and small craft recovery</li>
        <li>Oyster bed restoration</li>
        <li>Pump services</li>
        <li>Transportation of Bulk</li>
        <li>Demolition: <span className="detail">Shearing of bridge piles and supports via crane and tooling, docks, and marine structures</span></li>
        <li>Pile and Bulkhead installation</li>
        <li>Levee support and repair</li>
        <li>Marine Construction</li>
        <li>LNG port support</li>
        <li>Ports and dock support with silt and sediment removal</li>
        <li>Debris and tree removal</li>
      </ul>
    </div>
    <Footer />
    <a className="back-to-top" alt="top of page" href="#logo">Back to Top</a>
  </div>


);

export default Services;