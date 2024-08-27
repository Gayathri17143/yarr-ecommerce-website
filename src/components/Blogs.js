import * as React from "react";
import {
  Grid,
  Card,
  Button,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import Image1 from "../assets/pic1.png";
import Image2 from "../assets/pic2.png";
import Image3 from "../assets/pic3.png";
import "./Blog.css";
// JSON data for cards
const cardData = [
  {
    id: 1,
    title: "Powerful Cooling",
    description: "July 16, 2024 No Comments",
    image: Image1,
  },
  {
    id: 2,
    title: "Powerful Battery Backup",
    description: "July 16, 2024 No Comments",
    image: Image2,
  },
  {
    id: 3,
    title: "Powerful Blade",
    description: "July 16, 2024 No Comments",
    image: Image3,
  },
];

export default function ActionAreaCard() {
  return (
    <div className="blog-title">
      <Typography
        variant="h4"
        className="sub-title"
      >
        Our Latest Blog & News
      </Typography>
      <Button
        variant="outlined"
        sx={{ borderColor: "green", color: "#000", fontWeight: "600" }}
      >
        View All
      </Button>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {cardData.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea sx={{background:"#ededed"}}>
                <CardMedia
                  component="img"
                   
                  image={card.image}
                  alt={card.title}
                 className="car"
                />
                <CardContent sx={{ background: "#f7f7f7" }}>
                  <Typography
                    gutterBottom
                    className="desc1"
                    component="div"
                    
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    className="desc2"
                    color="text.secondary"
                    
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
