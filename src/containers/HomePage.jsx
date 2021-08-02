import React from 'react';
import ServicesBlurb from '../components/blurbs/ServicesBlurb';
import Header from './Header'
import dock from '../images/dock.jpg';
import Ebarge3 from '../images/dbarges/Ebarge3.JPG';
import map from '../images/map.jpeg';
import Footer from './Footer'; 
import AboutBlurb from '../components/blurbs/AboutBlurb';
import LocationBlurb from '../components/blurbs/LocationBlurb';
import Hamburger from '../components/Hamburger';


const HomePage = () => (
  <div className="home-page">
    <Hamburger /> 
    <Header />
    <div className="banner" >
        CONTACT US NOW:  
      <a href="tel:336-848-5477">336-848-5477</a> 
      <a href="mailto:justicemarinellc@gmail.com" >justicemarinellc@gmail.com</a> 
    </div> 
    <div className="image-button-container">
     {/* <img src={Ebarge2} alt="barge" className="barge" /> */}
      <div className="desc">For All Marine Services Contact Our Local Dispatch Office 24/7/365</div>
      <a href="tel:336-848-5477" className="call">Call Us</a>
      <a href="mailto:justicemarinellc@gmail.com" className="email">Email Us</a>
    </div>
    <div className="squares-container">
      <div className="square1 about">
        <AboutBlurb /> 
      </div>
      <div className="sqaure2 about-p"><img src={Ebarge3} alt="barge" className="picture" /></div>
    </div>
    <div className="squares-container">
    <div className="square1 services">
        <ServicesBlurb /> 
      </div>
      <div className="sqaure2 services-p"><img src={dock} alt="oyster bed" className="picture" /></div>
    </div>
    <div className="squares-container">
      <div className="square1 location">
        <LocationBlurb /> 
      </div>
      <div className="sqaure2 location-p"><img src={map} alt="map of new orleans" className="picture" /></div>
    </div>
    <Footer />
    <a className="back-to-top" alt="top of page" href="#logo">Back to Top</a>
  </div>


);

export default HomePage;


