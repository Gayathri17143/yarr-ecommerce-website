import {useEffect,useState} from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";
import Imag1 from "../assets/Yarr/All-product/Featured-Product-deep-kadai.png";
import Imag2 from "../assets/Yarr/All-product/Featured-Product-grill-pan.png";
import Imag3 from "../assets/Yarr/All-product/Featured-Product-salt-and-pepper.png";
import Imag4 from "../assets/Yarr/All-product/Featured-Product-kitchen-fan.png";
import Imag5 from "../assets/Yarr/All-product/Featured-Product-Blender.png";
import Imag6 from "../assets/Yarr/All-product/Featured-Product-dasa-tawa.png";
const Products = () => {
  const [products, setProducts] =  useState([
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
  ]);
  const toggleWishlist = (productId) => {
    let storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const productIndex = storedWishlist.findIndex(
      (product) => product.id === productId
    );

    if (productIndex === -1) {
      const productToAdd = products.find((product) => product.id === productId);
      if (productToAdd) {
        productToAdd.inWishlist = true;
        storedWishlist.push(productToAdd);
      }
    } else {
      storedWishlist[productIndex].inWishlist = false;
      storedWishlist = storedWishlist.filter(
        (product) => product.id !== productId
      );
    }

    localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
    setProducts([...products]);
  };

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const updatedProducts = products.map((product) => {
      const wishlistItem = storedWishlist.find(
        (item) => item.id === product.id
      );
      return wishlistItem ? { ...product, inWishlist: true } : product;
    });
    setProducts(updatedProducts);
  },[products]);
  return (
    <div>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id} sx={{padding:"10px!important"}}>
            <div>
              <ProductCard
                product={product}
                onToggleWishlist={toggleWishlist}
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
