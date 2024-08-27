import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@mui/material";

import "./Latestproduct.css";

import Imag1 from "../assets/tawa.png";
import Imag2 from "../assets/grill.png";
import Imag3 from "../assets/roti.png";
import Imag4 from "../assets/paniyarak.png";

import ProductCard from "./ProductCard";

const Component = () => {
  const [products, setProducts] = useState([
    {
      id: 5,
      img: Imag1,
      title: "Dosa Tawa",
      Price: 3499,
      rating: 4.5,
      discount: 20,
      inWishlist: false,
    },
    {
      id: 6,
      img: Imag2,
      title: "Grill Pan",
      Price: 799,
      rating: 3.8,
      discount: 20,
      inWishlist: false,
    },
    {
      id: 7,
      img: Imag3,
      title: "Roti Tawa",
      Price: 999,
      discount: 20,
      rating: 4.8,
      inWishlist: false,
    },
    {
      id: 8,
      img: Imag4,
      title: "Paniyarakal",
      Price: 1499,
      discount: 20,
      rating: 4.0,
      inWishlist: false,
    },
  ]);

  const toggleWishlist = (productId) => {
    let storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const productIndex = storedWishlist.findIndex(product => product.id === productId);
  
    if (productIndex === -1) {
      // Product is not in wishlist, add it
      const productToAdd = products.find(product => product.id === productId);
      if (productToAdd) {
        productToAdd.inWishlist = true;
        storedWishlist.push(productToAdd);
      }
    } else {
      // Product is already in wishlist, remove it
      storedWishlist[productIndex].inWishlist = false;
      storedWishlist = storedWishlist.filter(product => product.id !== productId);
    }
  
    localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
    setProducts([...products]); // Update the state to trigger a re-render
  };
  
  
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const updatedProducts = products.map(product => {
      const wishlistItem = storedWishlist.find(item => item.id === product.id);
      return wishlistItem ? { ...product, inWishlist: true } : product;
    });
    setProducts(updatedProducts);
  }, []);
  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000, // Autoplay speed in milliseconds
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
    // <Container>
    <div
      className="main-title"
      style={{ maxWidth: "71%", display: "block", margin: "0 auto" }}
    >
      <h3 className="title">CAST IRON COOKWARE</h3>

      <Slider {...settings}>
        {products.map((product) => (
          <div className="" key={product.id}>
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
    // </Container>
  );
};

export default Component;
