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
  <div className="gallery-1">
    <h3>Accomodation Barge</h3>
    <div className="carousel">
      <Carousel /> 
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quasi officiis dolorum optio laudantium exercitationem cumque molestiae? Quisquam soluta facere cum dolor quasi, ut voluptatibus. Doloremque odit aut maiores. Quis?</p>
    </div>

    <div className="gallery-1">
    <h3>Barge 2</h3>
    <div className="carousel">
      <Carousel2 /> 
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quasi officiis dolorum optio laudantium exercitationem cumque molestiae? Quisquam soluta facere cum dolor quasi, ut voluptatibus. Doloremque odit aut maiores. Quis?</p>
    </div>
    <Footer />
    <a className="back-to-top" alt="top of page" href="#logo">Back to Top</a>
  </div>

  


);

export default Gallery;