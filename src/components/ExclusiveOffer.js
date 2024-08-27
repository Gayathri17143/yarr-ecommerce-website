import React from "react";
import "./Exclusive.css";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";

const ImageGrid = () => {
  return (
    <>
      <div style={{ display: "block", margin: "0 auto", width: "70%",background:"#424242" }}>
        <h4 style={{ fontWeight: "500",fontSize:"30px",paddingTop:"20px",marginBottom:"0%",color:"#fff"  }}>Exclusive Offer</h4>

        <div className="grid-container">
          <div className="grid-item">
            <img src={Image1} alt="text" />
          </div>
          <div className="grid-item">
            <img src={Image2} alt="text" />
          </div>
          <div className="grid-item">
            <img src={Image3} alt="text" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
