import React from 'react';

import Header from './Header'
import barge3 from '../images/barge3.jpg';
import barge4 from '../images/barge4.jpg';
import oyster from '../images/oyster.jpeg';
import demolition from '../images/demolition.jpg';
import dock from '../images/dock.jpg';
import rocks from '../images/rocks.jpg';
import Footer from './Footer'; 
import Hamburger from '../components/Hamburger';


const Services = () => (
  <div className="home-page">
    <Hamburger />
    <Header />
    <div className="image-button-container-services">
      <img src={barge4} alt="barge" className="barge-services" />
      <div className="desc-services">Services</div>
    </div>
    <div className="squares-container">
      <div className="square1 blurbs-container">
        <h3>Material Placements Sytem</h3>
        <p>The transfer of materials to a location site or subsurface to ensure rock armour protection</p>
      </div>
      <div className="sqaure2"><img src={rocks} alt="barge" className="picture" /></div>
    </div>
    <div className="squares-container">
      <div className="square1 blurbs-container">
        <h3>Oyster Bed Protection</h3>
        <p>Distribution of materials at location to ensure a level bed is acheived underwater for oyster spat</p> 
      </div>
      <div className="sqaure2 oyster-p"><img src={oyster} alt="oyster bed" className="picture" /></div>
    </div>
    <div className="squares-container">
      <div className="square1 blurbs-container">
        <h3>Driver Support Tooling</h3>
        <p>Maxi Vac, Hydro Vac</p> 
      </div>
      <div className="sqaure2"><img src={barge3} alt="map of new orleans" className="picture" /></div>
    </div>
    <div className="squares-container">
    <div className="square1 blurbs-container">
        <h3>Demolition</h3>
        <p>Shearing of bridge piles and supports via crane and tooling</p> 
      </div>
    <div className="sqaure2 demolition-p"><img src={demolition} alt="crane" className="picture" /></div>
      
     
    </div>
    <div className="squares-container">
      <div className="square1 blurbs-container">
          <h3>Additional Services</h3>
          <p>Pile and bulk head installation, dredging and material recovery, levee support and repair, marine works, pipeline works, LNG port support, ports and dock support, small craft recovery, debris and tree removal, swamp oilfield support, pumping services, transport of bulk materials.</p> 
      </div>
      <div className="sqaure2"><img src={dock} alt="map of new orleans" className="picture" /></div>
    </div>
    <Footer />
    <a className="back-to-top" alt="top of page" href="#logo">Back to Top</a>
  </div>


);

export default Services;