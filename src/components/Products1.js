import {useEffect,useState} from "react";
import ProductCard1 from "./ProductCard1";
import Imag1 from "../assets/Yarr/All-product/Featured-Product-deep-kadai.png";
import Imag2 from "../assets/Yarr/All-product/Featured-Product-grill-pan.png";
import Imag6 from "../assets/Yarr/All-product/Featured-Product-dasa-tawa.png";

import Imag7 from "../assets/Yarr/All-product/Featured-Product-roti-tawa.png";
import Imag8 from "../assets/Yarr/All-product/Featured-Product-paniyarakal.png";
import Grid from "@mui/material/Grid";
const Products1 = () => {
  const [products1, setProducts1] =  useState([
    {
      id: 11,
      img: Imag1,
      title: "Deep Kadai",
      Price: 3499,
      rating: 4.5,
      discount: 20,
      inWishlist: false,
    },
    {
      id: 12,
      img: Imag2,
      title: "Grill Pan",
      Price: 799,
      rating: 3.8,
      discount: 20,
      inWishlist: false,
    },
    {
      id: 13,
      img: Imag6,
      title: "Dosa Tawa",
      Price: 999,
      discount: 20,
      rating: 4.8,
      inWishlist: false,
    },
    {
      id: 14,
      img: Imag7,
      title: "Roti Tawa",
      Price: 1499,
      discount: 20,
      rating: 4.0,
      inWishlist: false,
    },
    {
      id: 15,
      img: Imag8,
      title: "Paniyarakal",
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
      const productToAdd = products1.find(
        (product) => product.id === productId
      );
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
    setProducts1([...products1]);
  };

   useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const updatedProducts = products1.map((product) => {
      const wishlistItem = storedWishlist.find(
        (item) => item.id === product.id
      );
      return wishlistItem ? { ...product, inWishlist: true } : product;
    });
    setProducts1(updatedProducts);
  }, [products1]);
  return (
    <div>
      <Grid container spacing={3}>
        {products1.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <div>
              <ProductCard1
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

export default Products1;
