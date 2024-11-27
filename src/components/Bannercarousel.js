import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner1 from "../assets/Yarr/header-banner/web/Coming-Soon.jpg";
import Banner2 from "../assets/Yarr/header-banner/web/Kitchen-banner.png";
import MobileBanner1 from "../assets/Yarr/header-banner/mobile/Authentic-cooking.jpg";
import MobileBanner2 from "../assets/Yarr/header-banner/mobile/kitchen-fan.jpg";
import { useMediaQuery } from "@mui/material";
// import "./Bannercarousel.css";

const CarouselComponent = () => {
  // Use Material-UI's useMediaQuery to detect screen size
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <div className="carousel-container">
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        <div className="carousel-slide">
          <img
            src={isMobile ? MobileBanner1 : Banner1}
            alt="Kitchen"
            className="carousel-image" width={'100%'}
          />
        </div>
        <div className="carousel-slide">
          <img
            src={isMobile ? MobileBanner2 : Banner2}
            alt="Kitchen"
            className="carousel-image"  width={'100%'}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
