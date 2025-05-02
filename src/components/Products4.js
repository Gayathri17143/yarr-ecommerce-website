import {useEffect,useState} from "react";
import Grid from "@mui/material/Grid";
import ProductCard4 from "./ProductCard4";
import cooking from "../assets/grinder-banner-web.webp";
import Imag12 from "../assets/Yarr/All-product/Featured-Product-power-bank.png";
import Imag13 from "../assets/Yarr/All-product/Featured-Product-mist-fan.png";
import Imag14 from "../assets/Yarr/All-product/Featured-Product-car-charger.png";
const Products4 = () => {
  const [products4, setProducts4] = useState([
    {
      id: 19,
      img: Imag12,
      title: "Power Bank",
      Price: 3499,
      rating: 4.5,
      discount: 20,
      inWishlist: false,
    },
    {
      id: 20,
      img: Imag13,
      title: "Kitchen Fan",
      Price: 799,
      rating: 3.8,
      discount: 20,
      inWishlist: false,
    },
    {
      id: 21,
      img: Imag14,
      title: "Car Charger",
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
      const productToAdd = products4.find(
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
    setProducts4([...products4]);
  };

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const updatedProducts = products4.map((product) => {
      const wishlistItem = storedWishlist.find(
        (item) => item.id === product.id
      );
      return wishlistItem ? { ...product, inWishlist: true } : product;
    });
    setProducts4(updatedProducts);
  }, [products4]);
  return (
    <div>
      <Grid container spacing={3}>
        {products4.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <div>
              <ProductCard4
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
  );
};

export default Products4;
