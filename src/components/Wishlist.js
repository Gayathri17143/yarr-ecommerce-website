import { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
 
import { Container } from "@mui/material";
import "./OrderHistory.css";

const Component = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const toggleWishlist = (productId) => {
    let updatedWishlist = wishlist.map((product) =>
      product.id === productId
        ? { ...product, inWishlist: !product.inWishlist }
        : product
    );

    updatedWishlist = updatedWishlist.filter((product) => product.inWishlist);

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
  };
  const handleQuantityChange = (productId, count) => {
    const updatedWishlist = wishlist.map((product) =>
      product.id === productId
        ? { ...product, count: parseInt(count) }
        : product
    );
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
  };

  // const getTotalWishlistPrice = () => {
  //   let total = 0;
  //   wishlist.forEach((product) => {
  //     total += product.Price * product.count;
  //   });
  //   return total;
  // };
  return (
    <Container>
      <div className=" "  >
        <div className="header" style={{borderBottom:"1px solid #ccc"}}>
          <h2>My Wishlist</h2>
        </div>
        <div className="cart-products">
          {wishlist && wishlist.length === 0 && (
            <span className="empty-text">Your wishlist is currently empty</span>
          )}
          {wishlist &&
            wishlist.map((product) => (
              <div className="cart-product" key={product.id}>
                <img src={product.img} alt={product.title} />
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <span className="product-price">
                    ₹ {product.Price * (product.count || 1)}.00
                  </span>
                </div>
                <select
                  className="count"
                  value={product.count || 1}
                  onChange={(event) =>
                    handleQuantityChange(product.id, event.target.value)
                  }
                >
                  {[...Array(10).keys()].map((number) => {
                    const num = number + 1;
                    return (
                      <option value={num} key={num}>
                        {num}
                      </option>
                    );
                  })}
                </select>
                <button
                  className="btn remove-btn"
                  style={{ border: "none", padding: "5px" }}
                  onClick={() => toggleWishlist(product.id)}
                >
                  <RiDeleteBin6Line size={20} />
                </button>
                {/* <div
                  className="wishlist-icon"
                  onClick={() => toggleWishlist(product.id)}
                >
                  {product.inWishlist ? (
                    <FaHeart color="red" />
                  ) : (
                    <FaRegHeart />
                  )}
                </div> */}
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default Component;
