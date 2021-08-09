import React from 'react';
import Carousel from '../components/Carousel';
import Carousel2 from '../components/Carousel2';
import Hamburger from '../components/Hamburger';
import Footer from './Footer';
import Header from './Header';


const Gallery = () => (
  <div className="gallery-wrapper">
  <Hamburger /> 
  <Header /> 
  <div className="image-button-container-services">
      <div className="desc-services">Equipment</div>
    </div>
  <div className="gallery-1">
    <h3>EVO 1</h3>
    <div className="carousel">
      <Carousel2 /> 
    </div>
    <ul className="equipment-desc">
      <li>Self-propelled, jet-driven barge</li>
      <li>90ft length, 24ft bredth, 3ft draft(fully loaded)</li>
      <li>100T deck load</li>
      <li>A-frame with 40T lifting capacity</li>
      <li>Dual spud anchoring system</li>
    </ul>
    </div>

    <div className="gallery-1">
    <h3 className="barge-margin">Accomodation Barge</h3>
    <div className="carousel">
      <Carousel /> 
    </div>
    <ul className="equipment-desc1">
      <li>100ft length, 24ft breadth</li>
      <li>Can sleep 9 people, with large office space and galley</li>
    </ul>
    </div>
    <Footer />
    <a className="back-to-top" alt="top of page" href="#logo">Back to Top</a>
  </div>

  


);

export default Gallery;