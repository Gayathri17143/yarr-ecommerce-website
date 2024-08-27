import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Latestproduct.css";

import Image1 from "../assets/kadai.png";
import Image2 from "../assets/fan.png";
import Image3 from "../assets/pepper&salt.png";
import Image4 from "../assets/blend.png";
import ProductCard from "./ProductCard";

const Component = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: Image1,
      title: "Deep Kadai",
      Price: 3499,
      rating: 4.5,
      discount: 20,
      inWishlist: false,
    },
    {
      id: 2,
      img: Image2,
      title: "Kitchen Fan",
      Price: 799,
      rating: 3.8,
      discount: 20,
      inWishlist: false,
    },
    {
      id: 3,
      img: Image3,
      title: "Pepper & Salt Mill Set",
      Price: 999,
      discount: 20,
      rating: 4.8,
      inWishlist: false,
    },
    {
      id: 4,
      img: Image4,
      title: "Blender",
      Price: 1499,
      discount: 20,
      rating: 4.0,
      inWishlist: false,
    },
  ]);

  const toggleWishlist = (productId) => {
    let storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const productIndex = storedWishlist.findIndex(
      (product) => product.id === productId
    );

    if (productIndex === -1) {
      const productToAdd = products.find((product) => product.id === productId);
      if (productToAdd) {
        productToAdd.inWishlist = true;
        storedWishlist.push(productToAdd);
      }
    } else {
      storedWishlist[productIndex].inWishlist = false;
      storedWishlist = storedWishlist.filter(
        (product) => product.id !== productId
      );
    }

    localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
    setProducts([...products]); // Update the state to trigger a re-render
  };

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const updatedProducts = products.map((product) => {
      const wishlistItem = storedWishlist.find((item) => item.id === product.id);
      return wishlistItem ? { ...product, inWishlist: true } : product;
    });
    setProducts(updatedProducts);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default number of slides to show
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
    
 <div className="main-title" style={{ maxWidth: "71%", margin: "0 auto" }}>
      <h3 className="title">DEALS OF THE DAY</h3>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <div className="product-image-wrapper">
              <ProductCard
                key={product.id}
                product={product}
                onToggleWishlist={toggleWishlist}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
    
   
  );
};

export default Component;
