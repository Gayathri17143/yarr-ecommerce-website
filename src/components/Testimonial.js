import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Container } from "@mui/material";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel CSS import
import styled from "styled-components";
import Image1 from "../assets/Yarr/review/Customer-review1.png";
import Image2 from "../assets/Yarr/review/Customer-review2.png";
import Image3 from "../assets/Yarr/review/Customer-review3.png";
import Image4 from "../assets/Yarr/review/Customer-review4.png";
import Image5 from "../assets/Yarr/review/Customer-review5.png";
import { Star, StarHalf, StarBorder } from "@mui/icons-material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

// import "./Testimonial.css"; // Custom styles

const data = [
  {
    name: "Maths",
    title: "Customer",
    image: Image1,
    rating: 4.5,
    description:
      "Great Service and Good Quality Product and it helped my wife osteoarthritis on her knees and hips and myself for arthritis. We have asked our doctor before we used it he said it is fine because we are on other medications. Thank you very much.",
  },
  {
    name: "Science",
    title: "Customer",
    image: Image2,
    rating: 4.5,
    description:
      "Great Service and Good Quality Product and it helped my wife osteoarthritis on her knees and hips and myself for arthritis. We have asked our doctor before we used it he said it is fine because we are on other medications. Thank you very much.",
  },
  {
    name: "Social",
    title: "Customer",
    image: Image3,
    rating: 4.5,
    description:
      "Great Service and Good Quality Product and it helped my wife osteoarthritis on her knees and hips and myself for arthritis. We have asked our doctor before we used it he said it is fine because we are on other medications. Thank you very much.",
  },
  {
    name: "Tamil",
    title: "Customer",
    image: Image4,
    rating: 4.5,
    description:
      "Great Service and Good Quality Product and it helped my wife osteoarthritis on her knees and hips and myself for arthritis. We have asked our doctor before we used it he said it is fine because we are on other medications. Thank you very much.",
  },
  {
    name: "English",
    title: "Customer",
    image: Image5,
    rating: 4.5,
    description:
      "Great Service and Good Quality Product and it helped my wife osteoarthritis on her knees and hips and myself for arthritis. We have asked our doctor before we used it he said it is fine because we are on other medications. Thank you very much.",
  },

  // Add more data as needed
];
const CustomCarousel = styled(Carousel)`
  .control-dots .dot {
    background-color: #ccc; /* Change dot color */
  }

  .control-dots .dot.selected {
    background-color: #f7941e; /* Change active dot color */
  }

  .carousel .control-dots {
    margin: 0px;
  }
`;

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
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
      <Box sx={{ padding: "20px 0px 0px 0px" }}>
        <Typography
          sx={{
            fontSize: { xs: 16, sm: 18, md: 25 },
            fontWeight: "600",
            color: "#000",
            // padding: "20px",
            textAlign: "center",
          }}
          gutterBottom
        >
          Happy Customers Club
        </Typography>
        <CustomCarousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          centerMode={true}
          centerSlidePercentage={33} // Show 3 cards per view
          onChange={handleSlideChange} // Track the current slide
          swipeable={true}
          responsive={{
            0: { items: 1 }, // Mobile shows 1 item
            640: { items: 2 }, // Tablets show 3 items
            1024: { items: 3 }, // Desktops show 5 items
          }}
        >
          {data.map((item, index) => {
            // Determine if the current card is the center one
            const isCenter = currentSlide === index;

            return (
              <Box
                key={index}
                sx={{
                  // margin: "0 10px", // Add space between cards
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "20px",
                  position: "relative",
                  flexWrap: "wrap",
                  gap: "16px",
                  "@media (max-width: 768px)": {
                    flexDirection: "column", // Stacks cards vertically on mobile
                    alignItems: "center",
                  },
                }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    width: isCenter
                      ? { xs: "80%", sm: 320 }
                      : { xs: "100%", sm: 300 }, // Responsive card size
                    height: 230,
                    transition: "transform 0.5s ease, opacity 0.5s ease", // Smooth zoom and opacity
                    transform: isCenter ? "scale(1.05)" : "scale(0.95)", // Zoom effect for center card
                    opacity: isCenter ? 1 : 0.7, // Dim the smaller cards
                    position: "relative", // Enable absolute positioning for the image
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                    borderRadius: "10px",
                    overflow: "visible", // Allows the image to overlay the card
                    margin: { xs: "30px!important", sm: "30px" },
                  }}
                >
                  {/* Circular Image on top of the card */}
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{
                      width: "20%!important",
                      height: "25%",
                      borderRadius: "50%", // Make the image circular
                      objectFit: "cover",
                      position: "absolute",
                      top: "-30px",
                      left: "50%",
                      zIndex: 2,
                      transform: "translateX(-50%)",
                      border: "5px solid #fff",
                      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", // Optional: subtle shadow for effect
                    }}
                  />
                  <FormatQuoteIcon
                    sx={{
                      position: "absolute",
                      top: 8, // Adjust to your preference
                      right: 8, // Adjust to your preference
                      fontSize: { xs: 20, sm: 24, md: 35 }, // Adjust the icon size
                      color: "rgba(0, 0, 0, 0.5)", // Optional: customize color
                    }}
                  />
                  {/* Testimonial Content */}
                  <CardContent sx={{ marginTop: "30px", padding: "5px" }}>
                    <Typography
                      sx={{
                        fontSize: { xs: 15, sm: 16, md: 18 },
                        fontWeight: "600",
                        color: "#000",
                        // textAlign:"center"
                        marginBottom: "0px",
                      }}
                      gutterBottom
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "12px", sm: "14px", md: "15px" },
                        color: "text.secondary",
                        // textAlign:"center"
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Box
                      sx={{
                        fontSize: "10px",
                        // marginTop: "10px",
                        // textAlign:"center"
                      }}
                    >
                      {renderRating(item.rating)} {/* Use product's rating */}
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: 10, sm: 12, md: 11 },
                        textAlign: "center",
                        // marginBottom: "10px",
                        padding: { xs: "5px", sm: "10px" },
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </CustomCarousel>
      </Box>
    </Container>
  );
};

export default TestimonialCarousel;
