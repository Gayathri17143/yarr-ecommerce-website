import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import blender from "../assets/Blender1.png";
import pepper from "../assets/Pepper-&-Salt-Mill-Set1.png";
import Sale from "../assets/sale.jpeg";
import "./Offer.css";
const Prod = () => {
  return (
    <>
      <div className="offer">
        <div>
          <img src={Sale} alt="text" width="100%" />
        </div>
        <Grid
          container
          spacing={2}
          style={{ flexWrap: "nowrap", marginLeft: "0px" }}
        >
          <Grid item xs={12} md={6} className="main">
            <Grid container spacing={1} className="dis-flex">
              <Grid item xs={12} md={6} className="p-20">
                <h3 className="head">BLENDER</h3>
                <p className="par">Get 20% off with our code: yarr2024</p>
                <p className="paragraph pad">
                  Redeem{" "}
                  <ArrowRightAltOutlinedIcon style={{ color: "green" }} />
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src={blender} alt="blender" style={{ width: "100%" }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} className="main">
            <Grid container spacing={1} className="dis-flex">
              <Grid item xs={12} md={6} className="p-20">
                <h3 className="head">PEPPER & SALT MILL</h3>
                <p className="par">Make her say yes with our 50% off</p>
                <p className="paragraph pad">
                  View Product{" "}
                  <ArrowRightAltOutlinedIcon style={{ color: "green" }} />
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src={pepper} alt="pepper" style={{ width: "50%" }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Prod;
