import React from "react";
import { useWishlist } from "../components/WishlistCartContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button, Container } from "@mui/material";

const ShopCart = () => {
  const { cart, cartCount, removeFromCart, updateCartQuantity } = useWishlist();

  const getSubtotal = () => {
    return cart.reduce((total, product) => {
      const price = parseFloat(product.Price) || 0;
      const count = parseInt(product.count, 10) || 0;
      return total + price * count;
    }, 0);
  };

  const salesTax = (getSubtotal() * 0.10).toFixed(2); // Assuming 10% tax
  const grandTotal = (getSubtotal() + parseFloat(salesTax)).toFixed(2);

  return (
    <Container maxWidth="lg">

   
    <div className="shopping-cart" style={{ display: "flex", flexWrap: "wrap", padding: "20px" ,marginTop:"20px"}}>
      {/* Left Side - Cart Items */}
      <div style={{ flex: "2", marginRight: "30px" }}>
        <h2>Your Cart ({cartCount} items)</h2>

        {cart.length === 0 ? (
          <span>Your cart is currently empty.</span>
        ) : (
          cart.map((product) => (
            <div
              key={product.id}
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #ccc",
                padding: "15px 0",
              }}
            >
              <img
                src={product.img}
                alt={product.title}
                style={{ width: "80px", height: "80px", objectFit: "cover", marginRight: "20px" }}
              />

              <div style={{ flex: 2 }}>
                <h4 style={{ margin: "0 0 8px 0" }}>{product.title}</h4>
                <p style={{ margin: "0", color: "gray" }}>₹{product.Price}.00</p>
              </div>

              {/* Quantity Selector */}
              <div style={{ display: "flex", alignItems: "center", marginRight: "20px" }}>
                <button
                  onClick={() => updateCartQuantity(product.id, Math.max(product.count - 1, 1))}
                  style={{
                    padding: "4px 10px",
                    border: "1px solid #ccc",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  -
                </button>
                <div style={{ padding: "0 10px" }}>{product.count}</div>
                <button
                  onClick={() => updateCartQuantity(product.id, product.count + 1)}
                  style={{
                    padding: "4px 10px",
                    border: "1px solid #ccc",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>

              {/* Total Price */}
              <div style={{ width: "100px", textAlign: "right" }}>
                ₹{(product.Price * product.count).toFixed(2)}
              </div>

              {/* Remove Button */}
              <button
                style={{ background: "none", border: "none", cursor: "pointer", marginLeft: "15px" }}
                onClick={() => removeFromCart(product.id)}
              >
                <RiDeleteBin6Line size={22} color="red" />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Right Side - Summary */}
      {cart.length > 0 && (
        <div
          style={{
            flex: "1",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            height: "fit-content",
          }}
        >
          <h3>Summary</h3>
          <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between" }}>
            <span>Subtotal:</span>
            <span>₹{getSubtotal().toFixed(2)}</span>
          </div>

          <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between" }}>
            <span>Sales Tax:</span>
            <span>₹{salesTax}</span>
          </div>

          <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between" }}>
            <span>Coupon Code:</span>
            <a href="#" style={{ textDecoration: "underline" }}>
              Add Coupon
            </a>
          </div>

          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              fontSize: "20px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Grand Total:</span>
            <span>₹{grandTotal}</span>
          </div>

          <p style={{ color: "green", marginBottom: "20px" }}>
            Congrats, you're eligible for Free Shipping!
          </p>

          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "black",
              borderRadius: "25px",
              padding: "10px 0",
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
            href="/checkout/shipping"
          >
            Check out
          </Button>
        </div>
      )}
    </div>
    </Container>
  );
};

export default ShopCart;
