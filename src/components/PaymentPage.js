import React, { useState } from "react";
import { useCart } from "./Cartcontextcheckout";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const { setPaymentInfo } = useCart();
  const [paymentData, setPaymentData] = useState({ cardNumber: "", expiry: "", cvv: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPaymentInfo(paymentData);
    navigate("/checkout/confirmation");
  };

  return (
    <div>
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Card Number" required onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })} />
        <input type="text" placeholder="Expiry Date (MM/YY)" required onChange={(e) => setPaymentData({ ...paymentData, expiry: e.target.value })} />
        <input type="text" placeholder="CVV" required onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })} />
        <button type="submit">Review Order</button>
      </form>
    </div>
  );
};

export default PaymentPage;
