import {useEffect,useState} from "react";
import Grid from "@mui/material/Grid";
import cooking from "../assets/grinder-banner-web.webp";
import Imag9 from "../assets/Yarr/All-product/Featured-Product-tws-green.png";
import Imag10 from "../assets/Yarr/All-product/Featured-Product-tws-pink.png";
import Imag11 from "../assets/Yarr/All-product/Featured-Product-tws-black.png";
import ProductCard3 from "./ProductCard3";
const Products3 = () => {
    const [products3, setProducts3] = useState([
        {
          id: 19,
          img: Imag9,
          title: "TWS Wireless Earbuds",
          Price: 3499,
          rating: 4.5,
          discount: 20,
          inWishlist: false,
        },
        {
          id: 20,
          img: Imag10,
          title: "TWS Wireless Earbuds",
          Price: 799,
          rating: 3.8,
          discount: 20,
          inWishlist: false,
        },
        {
          id: 21,
          img: Imag11,
          title: "TWS Wireless Earbuds",
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
          const productToAdd = products3.find((product) => product.id === productId);
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
        setProducts3([...products3]);
      };
    
    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        const updatedProducts = products3.map((product) => {
          const wishlistItem = storedWishlist.find(
            (item) => item.id === product.id
          );
          return wishlistItem ? { ...product, inWishlist: true } : product;
        });
        setProducts3(updatedProducts);
      }, [products3]);
  return (
    <div>
      <Grid container spacing={3}>
            {products3.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <div>
                  <ProductCard3
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

export default Products3
