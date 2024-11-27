import {useEffect,useState} from "react";
import ProductCard2 from "./ProductCard2";
import Grid from "@mui/material/Grid";
import Imag3 from "../assets/Yarr/All-product/Featured-Product-salt-and-pepper.png";
import Imag4 from "../assets/Yarr/All-product/Featured-Product-kitchen-fan.png";
import Imag5 from "../assets/Yarr/All-product/Featured-Product-Blender.png";
import cooking from "../assets/grinder-banner-web.webp";
const Products2 = () => {
    const [products2, setProducts2] =  useState([
        {
          id: 16,
          img: Imag4,
          title: "Kitchen Fan",
          Price: 3499,
          rating: 4.5,
          discount: 20,
          inWishlist: false,
        },
        {
          id: 17,
          img: Imag5,
          title: "Blender",
          Price: 799,
          rating: 3.8,
          discount: 20,
          inWishlist: false,
        },
        {
          id: 18,
          img: Imag3,
          title: "Pepper & Salt Mill Set",
          Price: 999,
          discount: 20,
          rating: 4.8,
          inWishlist: false,
        },
      ]);
      const toggleWishlist = (productId) => {
        let storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        const productIndex = storedWishlist.findIndex(
          (product) => product.id === productId
        );
    
        if (productIndex === -1) {
          const productToAdd = products2.find((product) => product.id === productId);
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
        setProducts2([...products2]);
      };
    
       useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        const updatedProducts = products2.map((product) => {
          const wishlistItem = storedWishlist.find(
            (item) => item.id === product.id
          );
          return wishlistItem ? { ...product, inWishlist: true } : product;
        });
        setProducts2(updatedProducts);
      }, [products2]);
  return (
    <div>
      <Grid container spacing={3}>
            {products2.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <div>
                  <ProductCard2
                    product={product}
                    onToggleWishlist={toggleWishlist}
                  />
                </div>
              </Grid>
            ))}
          </Grid>
          <section style={{ marginTop: "30px" }}>
            <img src={cooking} alt="cooking" width={"100%"} />
          </section>
    </div>
  )
}

export default Products2
