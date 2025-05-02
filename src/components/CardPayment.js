import React, { useState } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

// Normally you'd use a real key here, but we're mocking so no key needed
const stripePromise = loadStripe("pk_test_mocked_only_for_demo");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // This would normally call your backend to create PaymentIntent
    // Simulating a successful submission
    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    // Mock delay
    setStatus("Processing payment...");

    setTimeout(() => {
      const success = Math.random() > 0.3; // Simulate random success/failure
      if (success) {
        setStatus("✅ Payment successful!");
        setTimeout(() => navigate("/"), 1500); // Redirect to home after success
      } else {
        setStatus("❌ Payment failed. Please try again.");
      }
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "0 auto" }}>
      <h3>Enter your card details</h3>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#6772e5",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Pay Now
      </button>
      {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
    </form>
  );
};

const StripeCardForm = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default StripeCardForm;
