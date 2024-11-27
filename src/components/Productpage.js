import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Latestproduct.css";
import {
  Grid,
  Typography,
  Box,
  Container,
  Card,
  CardMedia,
  
  Button,
  
} from "@mui/material";
import Image1 from "../assets/Yarr/product-images/salt-and-pepper.png";
import Image2 from "../assets/Yarr/product-images/blender.png";
import Image3 from "../assets/Yarr/product-images/kitchen-fan.png";

import { Star, StarHalf, StarBorder } from "@mui/icons-material";

const Component = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: Image1,
      title: "Pepper & Salt Mill Set",
      Price: 3499,
      discount: 20,
      rating: 4.8,
      inWishlist: false,
    },
    {
      id: 2,
      img: Image2,
      title: "Blender",
      Price: 1499,
      discount: 20,
      rating: 4.0,
      inWishlist: false,
    },
    {
      id: 3,
      img: Image1,
      title: "Pepper & Salt Mill Set",
      Price: 999,
      discount: 20,
      rating: 4.8,
      inWishlist: false,
    },
    {
      id: 4,
      img: Image3,
      title: "Kitchen Fan",
      Price: 799,
      rating: 3.8,
      discount: 20,
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
      const wishlistItem = storedWishlist.find(
        (item) => item.id === product.id
      );
      return wishlistItem ? { ...product, inWishlist: true } : product;
    });
    setProducts(updatedProducts);
  }, []);

  const settings = {
    dots: true,
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
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {/* Display numeric rating after stars */}
        <span style={{ marginRight: "8px", fontWeight: "bold",color:"#fff",fontSize:"13px" }}>{rating.toFixed(1)}</span>
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <Star key={index} style={{ color: "#FFD700", fontSize: "1rem" }} />
          ))}
        {halfStars === 1 && (
          <StarHalf style={{ color: "#FFD700", fontSize: "1rem" }} />
        )}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <StarBorder
              key={index}
              style={{ color: "#FFD700", fontSize: "1rem" }}
            />
          ))}
      </>
    );
  };
  return (
    <Container>
      <div
        
        style={{  marginTop:"50px" ,background: "#0f220c" }}
      >
        <Typography
          sx={{ color: "#f7941e", fontSize: "27px", paddingTop: "20px" }}
        >
          Exclusive Collections
        </Typography>
        <Typography
          sx={{ color: "#fff", fontSize: "15px", padding: "0% 7% 2%" }}
        >
          Discover our Exclusive Collection, a curated selection of premium
          products chosen for their exceptional quality and distinctive
          appeal,Each item in this collection has been handpicked to offer you
          unparalleled elegance and sophistication, making every purchase a
          unique experience, Elevate your lifestyle with Exclusive finds that
          stand out from the ordinary.{" "}
        </Typography>
        <Slider {...settings}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card
                sx={{
                  display: "flex",
                  margin: "20px",
                  padding: "30px",
                  borderRadius: "30% 0%",
                  background: "#3e3e3e",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  {/* <CardContent sx={{ flex: "1 0 auto" }}> */}
                  <Typography
                    component="div"
                    variant="h6"
                    sx={{
                      textAlign: "left",
                      color: "#fff",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ color: "#fff", marginTop: "10px" }}
                  >
                    {product.artist}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#f3dcc2",
                      fontSize: "23px",
                      textAlign: "left",
                    }}
                  >
                    ₹
                    {Math.round(
                      product.Price - (product.Price * product.discount) / 100
                    )}
                    <br />
                    <del style={{ fontSize: "12px", color: "#fff" }}>
                      {" "}
                      MRP ₹{product.Price}
                    </del>
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontSize: "10px",
                      marginTop: "10px",
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center"
                    }}
                  >
                    {renderRating(product.rating)} {/* Use product's rating */}
                  </Typography>
                  <Button
                    href="/product"
                    sx={{
                      background: "#fff",
                      color: "#f7941e",
                      borderRadius: "50px",
                      fontWeight: "600",
                      marginTop: "10px",
                    }}
                  >
                    Shop Now
                  </Button>
                  {/* </CardContent> */}
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: "40%", objectFit: "contain" }}
                  image={product.img}
                  alt={`${product.title} album cover`}
                />
              </Card>
            </Grid>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Component;
