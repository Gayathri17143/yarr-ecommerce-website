import {   useContext } from "react";
 
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { WishlistCartContext } from "../components/WishlistCartContext";
import { Star, StarBorder, StarHalf } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Latestproduct.css";
// import { CartContext } from "../components/CartContext";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

const ProductCard2 = ({ product, onToggleWishlist }) => {
  const { wishlist, toggleWishlist, addToCart } =
    useContext(WishlistCartContext);

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  // const { rating } = product;

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        <span style={{ marginRight: "8px", fontWeight: "bold" }}>
          {rating.toFixed(1)}
        </span>
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
    <>
      <Card sx={{ maxWidth: 345, position: "relative", padding: "10px" }}>
        <Link to={`/product/${product.id}`}>
          <CardMedia
            component="img"
            height="200"
            image={product.img}
            alt={product.title}
            className="product-image"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <CardContent>
          <Typography variant="h6" className="product-name" gutterBottom>
            {product.title}
          </Typography>
          <Typography
            sx={{ color: "#f7941e", fontSize: "27px", textAlign: "left" }}
          >
            ₹
            {Math.round(
              product.Price - (product.Price * product.discount) / 100
            )}
            <br />
            <span
              style={{
                textDecoration: "line-through",
                fontSize: "15px",
                color: "#000",
              }}
            >
              MRP ₹{product.Price}
            </span>
          </Typography>
          <Typography
            style={{ textAlign: "left", display: "flex", alignItems: "center" }}
          >
            {renderRating(product.rating)}
          </Typography>
          <Button
          sx={{
            mt: 2,
            backgroundColor: "#fff",
            color: "#f7941e",
            border: "1px solid #ccc",
            width: "100%",
            fontWeight: "600",
            "&:hover": {
              color: "#fff",
              backgroundColor: "orange",
            },
          }}
          onClick={() => addToCart(product)}
        >
          ADD TO CART
        </Button>
        </CardContent>
        <IconButton
          sx={{ position: "absolute", top: 10, right: 10 }}
          onClick={() => toggleWishlist(product)}
        >
          {isInWishlist ? <Favorite color="error" /> : <FavoriteBorder />}
        </IconButton>
      </Card>

      {/* <img src={cooking} alt="cooking" width={"100%"} /> */}
    </>
  );
};

export default ProductCard2;
