import React from "react";
import "./ImageGrid.css";
import Image1 from "../assets/deep-kadai.png";
import Image2 from "../assets/roti-tawa.png";
import Image3 from "../assets/grill-pan.png";
import Image4 from "../assets/paniyarakal.png";
import Image5 from "../assets/dosa-tawa.png";
import Image6 from "../assets/kitchen-fan.png";
import Image7 from "../assets/blender.png";
import Image8 from "../assets/pepper.png";
import Image9 from "../assets/services.png";

const ImageGrid = () => {
  return (
    <>
      <div style={{ display: "block", margin: "0 auto", width: "70%" }}>
        <h2 style={{ fontWeight: "500" }}>SHOP BY PRODUCTS</h2>
        <div className="grid-con">
          <div className="grid-item">
            <img src={Image1} alt="text" />
          </div>
          <div className="grid-item">
            <img src={Image2} alt="text" />
          </div>
          <div className="grid-item">
            <img src={Image3} alt="text" />
          </div>
          <div className="grid-item">
            <img src={Image4} alt="text" />
          </div>

          <div className="grid-item">
            <img src={Image5} alt="text" />
          </div>
          <div className="grid-item">
            <img src={Image6} alt="text" />
          </div>
          <div className="grid-item">
            <img src={Image7} alt="text" />
          </div>
          <div className="grid-item">
            <img src={Image8} alt="text" />
          </div>
        </div>
      </div>
      <div>
        <img src={Image9} alt="text" width="100%" />
      </div>
    </>
  );
};

export default ImageGrid;
