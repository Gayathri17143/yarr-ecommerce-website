import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useWishlist } from "./WishlistCartContext"; // Ensure the correct path
import "./Shoppingcart.css";

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <div className="shoppingCart">
      <div className="header">
        <h2 style={{ fontSize: "23px", margin: "0" }}>My Wishlist</h2>
      </div>

      <div className="cart-products">
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <div key={product.id} style={{ borderBottom: "1px solid #ccc", padding: "20px 0" }}>
              <div className="cart-product" style={{ display: "flex", alignItems: "center" }}>
                
                {/* Product Image */}
                <img
                  src={product.img}
                  alt={product.title}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    marginRight: "20px",
                  }}
                />

                {/* Product Info */}
                <div style={{ flex: "2" }}>
                  <h3 style={{ margin: "0 0 5px 0", fontSize: "18px" }}>{product.title}</h3>
                  <p style={{ margin: "0", fontSize: "14px", color: "gray" }}>
                    Color: Blue, Stainless Steel
                  </p>
                  <p style={{ margin: "2px 0 0 0", fontSize: "14px", color: "gray" }}>
                    Article no.: 5563699
                  </p>
                </div>

                {/* Product Price */}
                <div style={{ flex: "1", textAlign: "right", marginRight: "20px", fontSize: "16px" }}>
                  ₹ {product.Price * (product.count || 1)}.00
                </div>

                {/* Add to Shopping Bag Button */}
                {/* <button
                  style={{
                    border: "1px solid black",
                    backgroundColor: "transparent",
                    padding: "10px 20px",
                    marginRight: "20px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    borderRadius: "0",
                  }}
                >
                  Add to shopping bag
                </button> */}

                {/* Delete Icon */}
                <button
                  className="btn remove-btn"
                  style={{ border: "none", padding: "5px", cursor: "pointer" }}
                  onClick={() => toggleWishlist(product)}
                >
                  <RiDeleteBin6Line size={20}   />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>Your wishlist is currently empty</p>
        )}
      </div>

      {/* Add All Button at Bottom */}
      {/* {wishlist.length > 0 && (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p>Do you want to purchase your entire wish list?</p>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px 30px",
              border: "none",
              borderRadius: "0",
              fontSize: "16px",
              fontWeight: "bold",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Add all to Shopping Bag
          </button>
        </div>
      )} */}
    </div>
  );
};

export default Wishlist;
