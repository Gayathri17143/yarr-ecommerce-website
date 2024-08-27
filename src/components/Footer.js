import React from "react";

import "./Footer.css";
import { Container, TextField, Button } from "@mui/material";
import logo from "../assets/yarr-logo.webp";
const Footer = () => {
  return (
    <>
      {/* <Container> */}

      <div style={{ background: "#171717" }}>
        <div className="text1 ">
          <img src={logo} alt="logo" style={{ marginTop: "20px" }}></img>
          <div className="para ">
            YAAR is a new line of kitchen essentials designed to elevate your
            everyday cooking experience. We understand the heart of an indian
            kitchen - it's about creating delicious meals filled with tradition
            and love.But we also know that modern life demands a balance between
            heritage and convenience,Our throughtfully designed, high-quality
            products are made for the busy home cook who appreciates both
            functionality and aesthetics. We use age-old techniques alongside
            innovative materials to create tools that are beautiful,durable,and
            built for the real mess of everyday cooking.
          </div>
        </div>
        <div className="text2 " >
          <ul
            className=" "
            style={{ display: "inline-flex", listStyle: "none", color: "#fff" }}
          >
            <li>Shipping</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>About</li>
            <li>FAQ</li>
          </ul>

          <TextField
            label="Enter your email"
            sx={{ background: "#fff", borderRadius: "10px", margin: "20px" }}
          />
          <Button
            variant="contained"
            style={{ color: "#fff", background: "#ff5e00" }}
          >
            Subscribe
          </Button>
        </div>
        <div className="text3 " >
          <p className=" " style={{marginRight:"50%"}}>
            © 2024 TechConnect Theme. All Rights Reserved.
          </p>
          
            <p className=" " style={{margin:"20px"}}>Instagram</p>
            <p className=" " style={{margin:"20px"}}>Facebook</p>
          
        </div>
       
      </div>
      {/* </Container> */}
    </>
  );
};

export default Footer;
