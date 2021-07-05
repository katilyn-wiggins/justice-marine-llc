import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import barge from '../images/barge1.jpg'

const JMCarousel = () => {

  return (
    <Carousel>
      <div>
        <img src={barge} alt="barge1" />
      </div>
      <div>
        <img src={barge} alt="barge2" />
      </div>
      <div>
        <img src={barge} alt="barge3" />
      </div>
    </Carousel>
  );
};

export default JMCarousel;
