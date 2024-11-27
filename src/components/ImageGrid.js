import React from "react";
import { Grid, Typography, Box,Container } from "@mui/material";
import Image1 from "../assets/Yarr/categories/mist-fan.png";
import Image2 from "../assets/Yarr/categories/power-bank.png";
import Image3 from "../assets/Yarr/categories/kitchen-fan.png";
import Image4 from "../assets/Yarr/categories/pepper-and-salt-mill.png";
import Image5 from "../assets/Yarr/categories/wireless-earbuds.png";
import Image6 from "../assets/Yarr/categories/car-charger.png";
import Image7 from "../assets/Yarr/categories/blender.png";
import Image8 from "../assets/Yarr/categories/rati-tawa.png";
import Image9 from "../assets/Yarr/categories/deep-kadai.png";
import Image10 from "../assets/Yarr/categories/grill-pan.png";
import Image11 from "../assets/Yarr/categories/dasa-tawa.png";
import Image12 from "../assets/Yarr/categories/paniyarakal.png";
// import "./ImageGrid.css"
const images = [
  { src: Image1, title: "KITCHEN FAN" },
  { src: Image2, title: "POWER BANK" },
  { src: Image3, title: "KITCHEN FAN" },
  { src: Image4, title: "PEPPER & SALT MILL" },
  { src: Image5, title: "WIRELESS EARBUDS" },
  { src: Image6, title: "CAR CHARGER" },
  { src: Image7, title: "BLENDER" },
  { src: Image8, title: "ROTI TAWA" },
  { src: Image9, title: "DEEP KADAI" },
  { src: Image10, title: "GRILL PAN" },
  { src: Image11, title: "DASA TAWA" },
  { src: Image12, title: "PANIYARAKAL" },
];

const ImageGrid = () => {
  return (
    <Container>
      <Box sx={{ marginTop: "5%" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            margin: "2% auto",
            fontSize: { xs: "20px", sm: "24px", md: "27px" },
            fontWeight: "600",
            textAlign: "center",
            paddingBottom:"30px"
          }}
        >
          Explore Our Collections
        </Typography>

        {/* Flexbox layout for the images */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // Enable wrapping of items
            justifyContent: "center",
            gap: { xs: "20px", sm: "30px", md: "40px" }, // Adjust gap based on screen size
            marginBottom: "40px",
          }}
        >
          {images.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "25%", sm: "20%", md: "10%" }, // 2 items in mobile, 3 in tablet, 6 in desktop
                textAlign: "center",
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "5px",
                  objectFit: "cover",
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "15px", md: "14px" },
                  fontWeight: "600",
                  cursor: "pointer",
                  padding: "10px 0",
                  "&:hover": {
                    color: "#f7941e",
                  },
                }}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default ImageGrid;
