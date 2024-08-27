import React from "react";
import "./Shoppingcart.css";
 
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from "@mui/material";

function ShoppingCart({

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

      <div className="shoppingCart">
        <div className="header">
          <h4 style={{fontSize:"23px",marginBottom:"0%",marginTop:"0%"}}>My cart</h4>
          
        </div>
        <div className="cart-products">
          {products && products.length === 0 && (
            <span className="empty-text">Your cart is currently empty</span>
          )}
          {products && products.map((product) => (
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
                style={{border:"none",padding:"5px"}}
                onClick={() => onProductRemove(product)}
              >
                <RiDeleteBin6Line size={20} />
              </button>
            </div>
          ))}
          <div  >
          {products && products.length > 0 && (
            <div style={{ margin: "20px",fontSize:"21px",fontWeight:"600" }}>
              <div>Total Cart Price: ₹ {getTotalCartPrice()}.00</div>
              <Button  variant="contained" sx={{marginTop:"20px"}} href="/checkout">
                 checkout
              </Button>
            </div>
          )}
          </div>
         
          
        </div>
      </div>

  );
}

export default ShoppingCart;
