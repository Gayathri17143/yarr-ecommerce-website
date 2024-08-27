import React from "react";
import "./Shoppingcart.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from "@mui/material";
function ShoppingCart({
  visibilty,
  products,
  onProductRemove,
  onClose,
  onQuantityChange,
}) {
  const getTotalCartPrice = () => {
    let total = 0;
    products.forEach((product) => {
      total += product.Price * product.count;
    });
    return total;
  };

  return (
    <div
      className="modal"
      style={{
        display: visibilty ? "block" : "none",
      }}
    >
      <div className="shoppingCart">
        <div className="header">
          <h2>Shopping cart</h2>
          <button className="btn close-btn" onClick={onClose}>
            <AiFillCloseCircle size={30} />
          </button>
        </div>
        <div className="cart-products">
          {products && products.length === 0 && (
            <span className="empty-text">Your basket is currently empty</span>
          )}
          {products &&
            products.map((product) => (
              <div className="cart-product" key={product.id}>
                <img src={product.img} alt={product.title} />
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <span className="product-price">
                    ₹ {product.Price * product.count}.00
                  </span>
                </div>
                <select
                  className="count"
                  value={product.count}
                  onChange={(event) => {
                    onQuantityChange(product.id, event.target.value);
                  }}
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
                  onClick={() => onProductRemove(product)}
                >
                  <RiDeleteBin6Line size={20} />
                </button>
              </div>
            ))}
          <div>
            {products && products.length > 0 && (
              <div style={{ margin: "20px" }}>
                <div>Total Cart Price: ₹ {getTotalCartPrice()}.00</div>
                <Button
                  style={{
                    margin: "10px",
                    border: "1px solid rgb(217 207 207)",
                    fontWeight: "600",
                    background: "rgb(227 227 227)",
                    color: "rgb(114 153 42);",
                  }}
                  href="/checkout"
                >
                  checkout
                </Button>
              </div>
            )}
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
