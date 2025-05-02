import React from "react";
import { Grid, Typography, Box, Container } from "@mui/material";
import Image1 from "../assets/Yarr/free-shipping.png";
import Image2 from "../assets/Yarr/Consulting.png";
import Image3 from "../assets/Yarr/quality.png";
import Image4 from "../assets/Yarr/return.png";

const images = [
  { src: Image1, title: "Free Shipping" },
  { src: Image2, title: "24/7 Consulting" },
  { src: Image3, title: "Quality Assurance" },
  { src: Image4, title: "Return The Goods" },
];

const ImageGrid = () => {
  return (
    <Container>
      <Box sx={{ margin: "20px", background: "#0f220c", padding: "5%" }}>
        <Grid container spacing={4} >
          {images.map((item, index) => (
            <Grid item xs={6} sm={6} md={3} key={index}>
              <Grid
                container
                spacing={0}
                sx={{
                  background: "#fff",
                  color: "#000",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  
                }}
              >
                <Grid item xs={4} sm={3} md={3}>
                  <img
                    src={item.src}
                    alt={item.title}
                    style={{ width: "100%" }}
                    
                  />
                </Grid>

                <Grid item xs={12} sm={9} md={9}>
                  <Typography
                    sx={{
                      fontSize: {   sm: "15px" },
                      fontWeight: "600",
                      paddingLeft: "10px",
                      textAlign: { xs: "center", sm: "left" },
                      "@media (max-width: 600px)": {
                       
                      },
                    }}
                  >
                    {item.title}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ImageGrid;
