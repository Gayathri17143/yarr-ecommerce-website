import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Banner1 from "../assets/yarr-coming-soon.webp";
import Banner2 from "../assets/Yarr-Fan-40-per-web.webp";
import Banner3 from "../assets/grinder-banner-web.webp";
import "./Bannercarousel.css";
const CarouselComponent = () => {
  return (
    <Carousel  showArrows={true}
    showThumbs={false}
    showStatus={false}
    infiniteLoop={true}
    autoPlay={true}
    interval={3000}>
      <div>
        <img src={Banner1} alt="Slide 1" />
        
      </div>
      <div>
        <img src={Banner2} alt="Slide 2" />
         
      </div>
      <div>
        <img src={Banner3} alt="Slide 3" />
        
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
