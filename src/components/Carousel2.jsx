import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Ebarge1 from '../images/dbarges/Ebarge1.JPG'
import Ebarge2 from '../images/dbarges/Ebarge2.JPG'
import Ebarge3 from '../images/dbarges/Ebarge3.JPG'


export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={Ebarge1} alt="barge1" />
      </div>
      <div>
        <img src={Ebarge2} alt="barge2" />
      </div>
      <div>
        <img src={Ebarge3} alt="barge3" />
      </div>

    </Slider>
  );
}


