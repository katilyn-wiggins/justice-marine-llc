import React from 'react';
// import JMCarousel from '../components/Carousel';
import ServicesBlurb from '../components/blurbs/ServicesBlurb';
import Header from './Header'
// import barge1 from '../images/barge1.jpg';
import barge2 from '../images/barge2.jpg';
import barge3 from '../images/barge3.jpg';
import oyster from '../images/oyster.jpeg';
import map from '../images/map.jpeg';
import Footer from './Footer'; 
import AboutBlurb from '../components/blurbs/AboutBlurb';
// import ContactBlurb from '../components/blurbs/ContactBlurb';
import LocationBlurb from '../components/blurbs/LocationBlurb';

const HomePage = () => (
  <div className="home-page">
    <Header />
    <div className="image-button-container">
      <img src={barge2} alt="barge" className="barge" />
      <div className="desc">For All Marine Services Contact Our Local Dispatch Office 24/7/365</div>
      <a href="tel:336-848-5477" className="call">Call Us</a>
      <a href="mailto:david_wiggins_jr@yahoo.com" className="email">Email Us</a>
    </div>
    {/* <div className="main-blurb" id="mission"> */}
      {/* Justice Marine is a full service barge leasing company. We provide a variety of services from dock building to transport.</div> */}
    <div className="squares-container">
      <div className="square1">
        <AboutBlurb /> 
      </div>
      <div className="sqaure2"><img src={barge3} alt="barge" className="picture" /></div>
    </div>
    <div className="squares-container">
      <div className="sqaure2"><img src={oyster} alt="oyster bed" className="picture" /></div>
      <div className="square1">
        <ServicesBlurb /> 
      </div>
    </div>
    <div className="squares-container">
      <div className="square1">
        <LocationBlurb /> 
      </div>
      <div className="sqaure2"><img src={map} alt="map of new orleans" className="picture" /></div>
    </div>
    <Footer />
    <a className="back-to-top" alt="top of page" href="#logo">Back to Top</a>
  </div>


);

export default HomePage;


