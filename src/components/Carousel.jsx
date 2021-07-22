import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Abarge1 from '../images/dbarges/Abarge1.JPG'
import Abarge2 from '../images/dbarges/Abarge2.JPG'
import Abarge3 from '../images/dbarges/Abarge3.JPG'
import Abarge4 from '../images/dbarges/Abarge4.JPG'
import Abarge5 from '../images/dbarges/Abarge5.JPG'
import Abarge6 from '../images/dbarges/Abarge6.JPG'
import Abarge7 from '../images/dbarges/Abarge7.JPG'

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
        <img src={Abarge7} alt="barge1" />
      </div>
      <div>
        <img src={Abarge2} alt="barge2" />
      </div>
      <div>
        <img src={Abarge3} alt="barge3" />
      </div>
      <div>
        <img src={Abarge4} alt="barge3" />
      </div>
      <div>
        <img src={Abarge5} alt="barge3" />
      </div>
      <div>
        <img src={Abarge6} alt="barge3" />
      </div>
      <div>
        <img src={Abarge1} alt="barge3" />
      </div>
    </Slider>
  );
}


