import React from 'react';
import Header from './Header'
import phone from '../images/phone.png';
import Footer from './Footer'; 
import Hamburger from '../components/Hamburger';


const Contact = () => (
  <div className="home-page">
    <Hamburger />
    <Header />
    <div className="image-button-container-services">
      <div className="desc-services">Contact Us</div>
    </div>
    <div className="squares-container">
      <div className="contact1 blurbs-container">
        <h3>Available 24/7/365</h3>
        <a href="tel:504-527-1555" className="call-contact"><h2>504-527-1555</h2></a>
      <a href="mailto:justicemarinellc@gmail.com" className="email-contact"><h2>justicemarinellc@gmail.com</h2></a>
      </div>
      <div className="contact2"><img src={phone} alt="phone" className="phone" /></div>
    </div>
    <Footer />
    <a className="back-to-top" alt="top of page" href="#logo">Back to Top</a>
  </div>
);

export default Contact;