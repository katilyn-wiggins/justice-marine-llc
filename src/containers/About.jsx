import React from 'react';

import Header from './Header'
import Ebarge3 from '../images/dbarges/Ebarge3.JPG';
import Footer from './Footer'; 
import Hamburger from '../components/Hamburger';


const About = () => (
  <div className="home-page">
    <Hamburger />
    <Header />
    <div className="image-button-container-services">
      {/* <img src={barge4} alt="barge" className="barge-services" /> */}
      <div className="desc-services">About Us</div>
    </div>
    <div className="squares-container">
      <div className="blurbs-container about-page">
        <p>Justice Marine, LLC was created with the intent to bring the latest technology and engineering
        comprehension to the inshore marine works industry. Our goal is to provide clients with timely solutions
        that are financially competitive. Founded by Naval Architects, our technology and methods are adaptive
        to a wide range of projects.</p>
        <p>To better suit our clients needs, we have partnered with Marin Subsea to offer the latest technology in
        dredging. Excavation, and material placement.</p>
        <p>Please give us a call to discuss your needs. You can also visit our <a href="/services">Services</a> tab and visit our partner’s website, <a href="www.marinsubsea.com" target="_blank">www.marinsubsea.com</a>, for more information.</p>
      </div>
      <div className="contact2"><img src={Ebarge3} alt="barge" className="picture" /></div>
    </div>
    <Footer />
    <a className="back-to-top" alt="top of page" href="#logo">Back to Top</a>
  </div>


);

export default About;