import React from 'react';
import logo from '../logo.png';
import JMCarousel from '../components/Carousel';
import Services from '../components/Services';

// import About from '../components/About'
// import Contact from '../components/Contact.jsx'
// import QuickLinks from '../components/QuickLinks'
// import Barges from '../components/Barges.jsx'

const HomePage = () => (
  <div className="home-page">
    <div className="header">
      <div className="logo-container">
        <img id="logo" className="logo" alt="Justice Marine LLC" src={logo} />
      </div>
    </div>
    <JMCarousel />
    <Services />

    {/* <QuickLinks />
    <About />
    <Barges />
    <Contact /> */}

    <a className="back-to-top" alt="top of page" href="#logo">Back to Top</a>
  </div>


);

export default HomePage;


