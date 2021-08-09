import React from 'react';
import Header from './Header'
import bridge from '../images/bridge.jpg';
import Footer from './Footer'; 
import Hamburger from '../components/Hamburger';


const About = () => (
  <div className="home-page">
    <Hamburger />
    <Header />
    {/* <div className="image-button-container-services"> */}
      {/* <img src={barge4} alt="barge" className="barge-services" /> */}
      {/* <div className="desc-services">About Us</div> */}
    {/* </div> */}
    <div className="squares-container">
      <div className="blurbs-container about-page">
      <h3 className="services-header">About Us:</h3>

        <p>Justice Marine, LLC was created with the intent to bring the latest technology and engineering
        comprehension to the inshore marine works industry. Our goal is to provide clients with timely solutions
        that are financially competitive. Founded by Naval Architects, our technology and methods are adaptive
        to a wide range of projects.</p>
        <p>To better suit our clients needs, we have partnered with Marin TM Ltd to offer the latest technology in
        dredging, excavation, and material placement.</p>
        <span>Please give us a call to discuss your needs. You can also visit our <a href="/services">Services</a> tab and visit our partner’s website, <a href="https://www.marinsubsea.com">www.marinsubsea.com</a>, for more information.</span>
      </div>
      <div className="contact2"><img src={bridge} alt="barge" className="picture" /></div>
    </div>
    <Footer />
  </div>


);

export default About;