import { useEffect, useState ,useContext} from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa"; 
import { Button } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Star, StarBorder, StarHalf } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Latestproduct.css"
import { CartContext } from "../components/CartContext";

const ProductCard = ({ product, onToggleWishlist }) => {
  const { addToCart } = useContext(CartContext);

  const handleToggleWishlist = () => {
    onToggleWishlist(product.id);
  };
  const [productsInCart, setProducts] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
  }, [productsInCart]);
  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    };
    setProducts([...productsInCart, newProduct]);
    window.location.reload();
  };
  const {   rating  } = product;

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <Star key={index} style={{ color: "#FFD700" }} />
          ))}
        {halfStars === 1 && <StarHalf style={{ color: "#FFD700" }} />}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <StarBorder key={index} style={{ color: "#FFD700" }} />
          ))}
      </>
    );
  };

  return (
    <div className="product">
      <div
        className="product-image-wrapper"
       
      >
        <img className="product-image" src={product.img} alt={product.title}   />
        
        <div className="padd">
          <h6 className="product-name">{product.title}</h6>

          <p style={{ textAlign: "left" }}>{renderRating(rating)}</p>

          <p className="product-price">
              ₹
              {Math.round(
                product.Price - (product.Price * product.discount) / 100
              )}
              <del className="delete">MRP₹{product.Price}</del>
            </p>

          <Button
            href="/product"
           className="btn"
          >
            <ShoppingBagIcon /> Shop Now
          </Button>
          <ShoppingCartIcon
              sx={{ marginTop: "10px" }}
              onClick={() => addProductToCart(product)}
            />
        </div>

        <div className="wishlist-icon" onClick={handleToggleWishlist}>
          {product.inWishlist ? <FaHeart color="red" /> : <FaRegHeart />}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
