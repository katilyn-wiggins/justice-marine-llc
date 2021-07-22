import React from 'react';
// import JMCarousel from '../components/Carousel';
import ServicesBlurb from '../components/blurbs/ServicesBlurb';
import Header from './Header'
// import barge1 from '../images/barge1.jpg';
// import barge2 from '../images/barge2.jpg';
import Ebarge2 from '../images/dbarges/Ebarge2.JPG';
import Ebarge3 from '../images/dbarges/Ebarge3.JPG';
// import barge3 from '../images/barge3.jpg';
import oyster from '../images/oyster.jpeg';
import map from '../images/map.jpeg';
import email from '../images/icons/email.png';
import phone from '../images/icons/phone-call.png';
import Footer from './Footer'; 
import AboutBlurb from '../components/blurbs/AboutBlurb';
// import ContactBlurb from '../components/blurbs/ContactBlurb';
import LocationBlurb from '../components/blurbs/LocationBlurb';
import Hamburger from '../components/Hamburger';


const HomePage = () => (
  <div className="home-page">
    <Hamburger /> 
    <Header />
    <div className="banner" >
        CONTACT US NOW:  
      <a href="tel:336-848-5477" > <img src={phone} alt="phone" className="icon"/></a> 
      <a href="mailto:justicemarinellc@gmail.com" ><img src={email} alt="phone" className="icon"/></a> 
    </div> 
    <div className="image-button-container">
     <img src={Ebarge2} alt="barge" className="barge" />
      <div className="desc">For All Marine Services Contact Our Local Dispatch Office 24/7/365</div>
      <a href="tel:336-848-5477" className="call">Call Us</a>
      <a href="mailto:justicemarinellc@gmail.com" className="email">Email Us</a>
    </div>
    <div className="squares-container">
      <div className="square1">
        <AboutBlurb /> 
      </div>
      <div className="sqaure2"><img src={Ebarge3} alt="barge" className="picture" /></div>
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


