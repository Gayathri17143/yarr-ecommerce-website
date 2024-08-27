import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card" style={{background:"#000",color:"#fff",paddingBottom:"10px",fontSize:"18px"}}>
      <iframe
        width="100%"
        height="400"
        src={product.videoUrl}
        title={product.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="product-info">
        <p style={{textAlign:"left",marginTop:"0%",padding:"0px 20px",fontSize:"16px"}}>{product.title}</p>
        
      </div>
    </div>
  );
};

export default ProductCard;
