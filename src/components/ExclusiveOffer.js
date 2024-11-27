import React from "react";
import { Grid, Typography, Box, Container, Button } from "@mui/material";
import Image1 from "../assets/Yarr/blog/kadai.png";
import Image2 from "../assets/Yarr/blog/grill.png";
import Image3 from "../assets/Yarr/blog/tawa.png";

import "./ImageGrid.css";
const images = [
  { src: Image1, title: "Simple Cooking With All Modern Kitchen Utensils",desc:" Discover our Exclusive Collection, a curated selection of premium products chosen for their exceptional quality and distinctive appeal,Each item in this collection has been handpicked to offer you unparalleled elegance and sophistication " },
  { src: Image2, title: "Simple Cooking With All Modern Kitchen Utensils",desc:" Discover our Exclusive Collection, a curated selection of premium products chosen for their exceptional quality and distinctive appeal,Each item in this collection has been handpicked to offer you unparalleled elegance and sophistication " },
  { src: Image3, title: "Simple Cooking With All Modern Kitchen Utensils",desc:" Discover our Exclusive Collection, a curated selection of premium products chosen for their exceptional quality and distinctive appeal,Each item in this collection has been handpicked to offer you unparalleled elegance and sophistication " },
];

const ImageGrid = () => {
  return (
    <Container>
    <Box sx={{ margin: { xs: "2%", sm: "5%",md:"3%" },paddingBottom:"30px" }}>
      <Typography
        variant="h4"
        fontWeight="500"
        gutterBottom
        sx={{
          margin: { xs: "3%", sm: "2%" },
          fontSize: { xs: "21px", sm: "23px", md: "27px" },
          fontWeight: "600",
        }}
      >
        Product Spotlight
      </Typography>
      <Grid container spacing={3} sx={{ paddingTop: {   sm: "30px" }  }}>
        {images.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box textAlign="center">
              <img
                src={item.src}
                alt={item.title}
                style={{ width: "100%" }}
              />
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: { xs: "16px", sm: "18px" },
                  fontWeight: "600",
                  marginTop:"10px"
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: { xs: "13px", sm: "15px" },
                  color: "#00000082",
                  paddingTop: "10px",
                }}
              >
                {item.desc}
              </Typography>
              <Button
                href="/product"
                sx={{
                  mt: 2,
                  background: "#f7941e!important",
                  borderRadius: "5px",
                  padding: { xs: "5px 15px", sm: "5px 20px" },
                  fontWeight: "600",
                  color: "#fff",
                  textTransform: "none",
                  marginRight: { xs: "50px", sm: "100px" ,md:"150px"},
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                Read More
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
  
  );
};

export default ImageGrid;
