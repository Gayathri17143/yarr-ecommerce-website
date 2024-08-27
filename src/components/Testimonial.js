import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Ensure this import is present
import Cutting from "../assets/cutting.png";
import Image from "../assets/cooking.png";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import "./Testimonial.css"
const data = [
  {
    name: "Mohan Raj",
    title: "Customer",
    description:
      "Great Service and Good Quality Product and it helped my wife osteoarthritis on her knees and hips and myself for arthritis. We have asked our doctor before we used it he said it is fine because we are on other medications. Thank You very much.",
  },
  {
    name: "Gayathri",
    title: "Customer",
    description:
      "Great Service and Good Quality Product and it helped my wife osteoarthritis on her knees and hips and myself for arthritis. We have asked our doctor before we used it he said it is fine because we are on other medications. Thank You very much.",
  },
  // Add more data as needed
];

const CarouselComponent = () => {
  return (
    <>
      <div
       className="main-center"
      >
        <h2>WHAT PEOPLE SAY</h2>
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
        >
          {data.map((item, index) => (
            <div
              key={index}
             className="m-flex"
            >
              <Box
               sx={{
                position: "relative",
                marginTop: "0px",
                marginBottom: "0px",
                marginRight: { xs: "0%", sm: "10%", md: "20%", lg: "30%" },
                height: { xs: 300, sm: 400, md: 500 },
                width: { xs: 300, sm: 400, md: 500 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              >
                <img
                  src={Image}
                  alt="what peoples say"
                  
                />
                <Card
                  variant="outlined"
                  sx={{
                    position: "absolute",
                    bottom: { xs: 50, sm: 100, md: 150 },
                    left: { xs: 0, sm: 50, md: 150, lg: 350 },
                    width: { xs: "80%", sm: "90%", md: "100%" },
                  }}
                >
                  <CardContent className="bg">
                    <Typography
                    sx={{
                      fontSize: { xs: 16, sm: 18, md: 20 },
                      textAlign: "left",
                      fontWeight: "600",
                      color: "#000",
                    }}
                      gutterBottom
                    >
                      {item.name}
                      <FormatQuoteIcon className="icon" />
                    </Typography>
                    <Typography
                      sx={{ textAlign: "left", fontSize: { xs: "12px", sm: "14px", md: "15px" } }}
                      color="text.secondary"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="m-para"
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </div>
          ))}
        </Carousel>
      </div>
      <div>
        <img src={Cutting} alt="cooking"  />
      </div>
    </>
  );
};

export default function BoxSystemProps() {
  return <CarouselComponent />;
}
