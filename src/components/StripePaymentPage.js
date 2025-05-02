import React, { useState } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import { useCart } from "./WishlistCartContext";
import { loadStripe } from "@stripe/stripe-js";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Paper,
  Divider,
  TextField,
  MenuItem,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const stripePromise = loadStripe("pk_test_YourStripePublishableKey");

const countries = [
  { code: "US", label: "United States" },
  { code: "IN", label: "India" },
];

const StripePaymentPage = () => {
  const { cart } = useCart();
  const stripe = useStripe();
  const elements = useElements();
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();
  const getTotalCartPrice = () => {
    return cart.reduce((total, product) => {
      const price = parseFloat(product.Price) || 0;
      const count = parseInt(product.count, 10) || 0;
      return total + price * count;
    }, 0);
  };

  // const handleCheckout = async () => {
  //   const stripe = await stripePromise;
  //   const lineItems = cart.map((item) => ({
  //     price_data: {
  //       currency: "usd",
  //       product_data: {
  //         name: item.title,
  //       },
  //       unit_amount: item.Price * 100,
  //     },
  //     quantity: item.count || 1,
  //   }));

  //   try {
  //     const response = await fetch(
  //       "http://localhost:4242/create-checkout-session",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ lineItems }),
  //       }
  //     );

  //     const session = await response.json();

  //     const result = await stripe.redirectToCheckout({
  //       sessionId: session.id,
  //     });

  //     if (result.error) {
  //       alert(result.error.message);
  //     }
  //   } catch (error) {
  //     console.error("Stripe checkout error", error);
  //     alert("Checkout failed. Please try again.");
  //   }
  // };
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
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <Grid container spacing={4}>
        {/* Left - Product Summary */}
        <Grid item xs={12} md={5}>
          <Paper elevation={3} sx={{ p: 3 }}>
            {cart.map((product) => (
              <Card
                sx={{ display: "flex", mb: 2, p: 2, alignItems: "center" }}
                key={product.id}
              >
                <CardMedia
                  component="img"
                  image={product.img}
                  alt={product.title}
                  sx={{ width: 100 }}
                />
                <CardContent>
                  <Typography variant="subtitle1">{product.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Qty: {product.count}
                  </Typography>
                  <Typography variant="h6">
                    ₹ {product.Price * product.count}.00
                  </Typography>
                </CardContent>
              </Card>
            ))}
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" align="right">
              Total: ₹ {getTotalCartPrice()}.00
            </Typography>
          </Paper>
        </Grid>

        {/* Right - Payment Form */}
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Shipping & Payment
            </Typography>

            <TextField
              fullWidth
              label="Email"
              type="email"
              required
              sx={{ my: 2 }}
            />
            <TextField fullWidth label="Full Name" required sx={{ mb: 2 }} />
            <TextField
              select
              fullWidth
              label="Country"
              defaultValue="US"
              sx={{ mb: 2 }}
            >
              {countries.map((option) => (
                <MenuItem key={option.code} value={option.code}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              label="Shipping Address"
              required
              sx={{ mb: 3 }}
            />

            <Divider sx={{ my: 2 }} />
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              Payment method
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <Button variant="outlined">Card</Button>
              <Button variant="outlined">Cash App</Button>
              <Button variant="outlined">Affirm</Button>
            </Box>

            <Box
              sx={{ mb: 2, p: 2, border: "1px solid #ccc", borderRadius: 2 }}
            >
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
            </Box>

            <Box display="flex" alignItems="center" mt={3}>
              <input type="checkbox" defaultChecked />
              <Typography sx={{ ml: 1 }}>
                Billing address is same as shipping
              </Typography>
            </Box>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                mt: 3,
                backgroundColor: "#2D2A45",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#1d1a35",
                },
              }}
              onClick={handleSubmit}
            >
              Pay ₹{getTotalCartPrice()}.00
            </Button>
            {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
const StripeCardForm = () => (
  <Elements stripe={stripePromise}>
    <StripePaymentPage />
  </Elements>
);

export default StripeCardForm;
