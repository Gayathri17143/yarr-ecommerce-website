import React from "react";
import ProductCard from "./ProductCard";
import Imag1 from "../assets/Yarr/All-product/Featured-Product-deep-kadai.png";
import Imag2 from "../assets/Yarr/All-product/Featured-Product-grill-pan.png";
import Imag3 from "../assets/Yarr/All-product/Featured-Product-salt-and-pepper.png";
import Imag4 from "../assets/Yarr/All-product/Featured-Product-kitchen-fan.png";
import Imag5 from "../assets/Yarr/All-product/Featured-Product-Blender.png";
import Imag6 from "../assets/Yarr/All-product/Featured-Product-dasa-tawa.png";
const products = [
    {
        id: 5,
        img: Imag1,
        title: "Deep Kadai",
        Price: 3499,
        rating: 4.5,
        discount: 20,
        inWishlist: false,
      },
      {
        id: 6,
        img: Imag2,
        title: "Grill Pan",
        Price: 799,
        rating: 3.8,
        discount: 20,
        inWishlist: false,
      },
      {
        id: 7,
        img: Imag3,
        title: "Pepper & Salt Mill Set",
        Price: 999,
        discount: 20,
        rating: 4.8,
        inWishlist: false,
      },
      {
        id: 8,
        img: Imag4,
        title: "Kitchen Fan",
        Price: 1499,
        discount: 20,
        rating: 4.0,
        inWishlist: false,
      },
      {
        id: 9,
        img: Imag5,
        title: "Blender",
        Price: 1499,
        discount: 20,
        rating: 4.0,
        inWishlist: false,
      },
      {
        id: 10,
        img: Imag6,
        title: "Dosa Tawa",
        Price: 1499,
        discount: 20,
        rating: 4.0,
        inWishlist: false,
      },
];

const ProductList = () => {
  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
