import React from 'react';
import JMCarousel from '../components/Carousel';
import ServicesBlurb from '../components/blurbs/ServicesBlurb';
import Header from './Header'
import barge1 from '../images/barge1.jpg';
import Footer from './Footer'; 
import AboutBlurb from '../components/blurbs/AboutBlurb';
import ContactBlurb from '../components/blurbs/ContactBlurb';

const HomePage = () => (
  <div className="home-page">
    <Header />
    <JMCarousel /> 
    <div className="main-blurb">
      Justice Marine is a full service barge leasing company. We provide a variety of services from dock building to transport.</div>
    <div className="squares-container">
      <div className="square1">
        <AboutBlurb /> 
      </div>
      <div className="sqaure2"><img src={barge1} alt="barge" className="picture" /></div>
    </div>
    <div className="squares-container">
      <div className="sqaure2"><img src={barge1} alt="barge" className="picture" /></div>
      <div className="square1">
        <ServicesBlurb /> 
      </div>
    </div>
    <div className="squares-container">
      <div className="square1">
        <ContactBlurb /> 
      </div>
      <div className="sqaure2"><img src={barge1} alt="barge" className="picture" /></div>
    </div>
    <Footer />
    <a className="back-to-top" alt="top of page" href="#logo">Back to Top</a>
  </div>


);

export default HomePage;


