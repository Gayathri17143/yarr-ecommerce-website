import { useEffect, useState, useRef } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Container,
} from "@mui/material";
import { Star, StarHalf, StarBorder } from "@mui/icons-material"; // Import star icons
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import fan from "../assets/Yarr/product-images/mist-fan.png";
import fan1 from "../assets/Yarr/product-images/mist-fan2.png";
import "./TimeSavings.css";
import Icon from "../assets/Yarr/delivery-icon.png";
import kitchenfan1 from "../assets/Yarr/product-images/kitchen-fan.png";
import kitchenfan2 from "../assets/Yarr/product-images/kitchen-fan2.png";
import kitchenfan3 from "../assets/Yarr/product-images/kitchen-fan3.png";
const Savings = () => {
  const products = [
    {
      title: "Yarr Handheld Misting Personal Fan (Black)",
      delivery: "2 Hours Delivery",
      image: kitchenfan1,
      icon: Icon,
      rating: 3,
      Price: 1000,
      discount: 20,
      images: [fan, fan1],
    },
    {
      title: "Yarr Mini Kitchen Fan (Black Gold)",
      delivery: "2 Hours Delivery",
      image: fan,
      icon: Icon,
      rating: 5,
      Price: 1000,
      discount: 20,
      images: [kitchenfan2, kitchenfan3],
    },
    // Add more product objects here
  ];
  // Create an array to track slide index for each product
  const [slideIndices, setSlideIndices] = useState(
    products.map(() => 1) // Initialize each product's slideIndex to 1
  );
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <Star key={index} style={{ color: "#FFD700" }} />
          ))}
        {halfStars === 1 && <StarHalf style={{ color: "#FFD700" }} />}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <StarBorder key={index} style={{ color: "#FFD700" }} />
          ))}
        {/* Display numeric rating after stars */}
        <span
          style={{ marginLeft: "10px", fontSize: "18px", fontWeight: "600" }}
        >
          ({rating.toFixed(1)})
        </span>
      </>
    );
  };

  const slideRef = useRef([]);

  const plusSlides = (n, index, imagesLength) => {
    const newIndices = [...slideIndices];
    newIndices[index] += n;
    if (newIndices[index] > imagesLength) {
      newIndices[index] = 1;
    } else if (newIndices[index] < 1) {
      newIndices[index] = imagesLength;
    }
    setSlideIndices(newIndices);
  };

  const dragStart = (e, index) => {
    slideRef.current[index].startX = e.clientX;
  };

  const dragOver = (e, index) => {
    const touch = e.clientX;
    const change = slideRef.current[index].startX - touch;
    if (change > 0) {
      slideRef.current[index].scrollLeft += slideRef.current[index].width;
    } else {
      slideRef.current[index].scrollLeft -= slideRef.current[index].width;
    }
  };
  return (
    <Container>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "25px",
          padding: "3%",
          fontWeight: "600",
        }}
      >
        Limited Time Savings
      </Typography>
      <Grid container spacing={2}>
        {products.map((product, productIndex) => (
          <>
            <Grid item xs={12} sm={12} md={6} key={product.id}>
              <Card
                sx={{
                  display: "flex",
                  boxShadow:
                    "1px 1px 4px 1px #ccc, 1px 1px 4px 1px #ccc, 1px 1px 1px 1px #ccc",
                  // marginBottom: "50px",
                  "@media (max-width: 768px)": {
                    flexWrap: "wrap",
                  },
                }}
              >
                <div className="product-page">
                  <div>
                    {product.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="slides"
                        style={{
                          display:
                            imgIndex + 1 === slideIndices[productIndex]
                              ? "block"
                              : "none",
                        }}
                      >
                        <div className="number">
                          {imgIndex + 1}/{product.images.length}
                        </div>
                        <img src={image} alt={`Product ${imgIndex + 1}`} />
                      </div>
                    ))}
                    <a
                      href="#!"
                      className="prev"
                      onClick={() =>
                        plusSlides(-1, productIndex, product.images.length)
                      }
                    >
                      &#10094;
                    </a>
                    <a
                      href="#!"
                      className="next"
                      onClick={() =>
                        plusSlides(1, productIndex, product.images.length)
                      }
                    >
                      &#10095;
                    </a>
                  </div>
                  <div
                    className="slider"
                    draggable={true}
                    ref={(el) => (slideRef.current[productIndex] = el)}
                    onDragStart={(e) => dragStart(e, productIndex)}
                    onDragOver={(e) => dragOver(e, productIndex)}
                  >
                    {product.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`slider-cube ${
                          imgIndex + 1 === slideIndices[productIndex]
                            ? "active"
                            : ""
                        }`}
                        onClick={() => {
                          const newIndices = [...slideIndices];
                          newIndices[productIndex] = imgIndex + 1;
                          setSlideIndices(newIndices);
                        }}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${imgIndex + 1}`}
                          style={{
                            objectFit: "contain",
                            height: "100%",
                            width: "100%",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      sx={{
                        textAlign: "left",
                        fontSize: "20px",
                        fontWeight: "700",
                        paddingTop: "20px",
                      }}
                    >
                      {product.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#f7941e",
                        fontSize: "23px",
                        fontWeight: "600",
                        textAlign: "left",
                      }}
                    >
                      ₹
                      {Math.round(
                        product.Price - (product.Price * product.discount) / 100
                      )}
                      <br />
                      <del style={{ fontSize: "12px", color: "#000" }}>
                        {" "}
                        MRP ₹{product.Price}
                      </del>
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "left",
                        fontSize: "10px",
                        marginBottom: "10px",
                        display: "flex",

                        alignItems: "center",
                      }}
                    >
                      {renderRating(product.rating)}{" "}
                      {/* Use product's rating */}
                    </Typography>
                    <Box
                      component="span"
                      sx={{
                        display: "flex",
                      }}
                    >
                      <img
                        src={product.icon} // Use the image path from the product data
                        alt="Delivery Icon"
                        style={{
                          width: "10%",
                          height: "100%",
                          marginRight: "10px",
                        }}
                      />

                      <Typography
                        sx={{
                          color: "green",
                          textAlign: "left",
                          display: "flex",
                          alignItems: "center",
                          fontSize: "15px",
                        }}
                      >
                        {product.delivery}
                      </Typography>
                    </Box>

                    <Button
                      href="/product"
                      sx={{
                        padding: "2% 15%",
                        color: "#f7941e",
                        background: "none",
                        border: "1px solid #ccc",
                        margin: "20px 100px 10px 0px",
                        fontSize: "12px",
                      }}
                    >
                      Buy Now
                    </Button>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          </>
        ))}
      </Grid>
    </Container>
  );
};

export default Savings;
