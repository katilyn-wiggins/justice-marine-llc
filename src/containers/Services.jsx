import React from 'react';

import Header from './Header'
import Footer from './Footer'; 
import Hamburger from '../components/Hamburger';


const Services = () => (
  <div className="home-page">
    <Hamburger />
    <Header />
    {/* <div className="image-button-container-services"></div> */}
    <h3 className="services-header">Services</h3>
    <div className="services-container">
      <ul className="services-desc">
        <li>Diver Support and Tooling: <span className="detail">Maxi Vac, Hydro Vac, High Mass Impact Jet, Mono Jets</span></li>
        <li>Dredging and Material Recovery</li>
        <li>Inshore Oilfield Support</li>
        <li>Live Pipeline Burial/Lowering</li>
        <li>Port/Harbour Dredging Services</li>
        <li>Pipeline Works: Fuel, Gas, Oil, and Cables</li>
        <li>Material Placement Systems: <span className="detail">Transfer of materials to a location site or subsurface to ensure rock armour protection</span></li>
        <li>Salvage and Small Craft Recovery</li>
        <li>Oyster Bed Restoration</li>
        <li>Pump Services</li>
        <li>Transportation of Bulk</li>
        <li>Demolition: <span className="detail">Shearing of bridge piles and supports via crane and tooling, docks, and marine structures</span></li>
        <li>Pile and Bulkhead Installation</li>
        <li>Levee Support and Repair</li>
        <li>Marine Construction</li>
        <li>LNG Port Support</li>
        <li>Ports and Dock Support with Silt and Sediment Removal</li>
        <li>Debris and Tree Removal</li>
      </ul>
    </div>
    <Footer />
    <a className="back-to-top" alt="top of page" href="#logo">Back to Top</a>
  </div>


);

export default Services;