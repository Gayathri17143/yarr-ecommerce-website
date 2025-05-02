import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Latestproduct.css";
import ProductCard from "./Videocard";

const Component = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      videoUrl: "https://www.youtube.com/embed/YGgsmOXjJgY",
      title: "UNLOCK THE SECRETS OF EFFORTLESS COOKING",
    },
    {
      id: 2,
      videoUrl: "https://www.youtube.com/embed/YGgsmOXjJgY",
      title: "UNLOCK THE SECRETS OF EFFORTLESS COOKING",
    },
    {
      id: 3,
      videoUrl: "https://www.youtube.com/embed/YGgsmOXjJgY",
      title: "UNLOCK THE SECRETS OF EFFORTLESS COOKING",
    },
    {
      id: 4,
      videoUrl: "https://www.youtube.com/embed/YGgsmOXjJgY",
      title: "UNLOCK THE SECRETS OF EFFORTLESS COOKING",
    },
  ]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Large mobile devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Small mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      className="main-title"
      style={{ maxWidth: "70%", display: "block", margin: "0 auto" }}
    >
      <h4 className="title" style={{paddingTop:"30px"}}>TO GET THE BEST OUT OF IT, USE & CARE</h4>

      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <div className="product-image-wrapper" style={{ margin: "10px" }}>
              <ProductCard product={product} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Component;
