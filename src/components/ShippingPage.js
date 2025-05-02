import React, { useState } from "react";
import { useCart } from "./WishlistCartContext";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Typography,
  Button,
  Box,
  Paper,
} from "@mui/material";

const ShippingPage = () => {
  const { setShippingInfo } = useCart();
  const [shippingData, setShippingData] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShippingInfo(shippingData);
    navigate("/checkout/payment");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6,mb:6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom align="center">
          Shipping Details
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          display="flex"
          flexDirection="column"
          gap={3}
        >
          <TextField
            label="Full Name"
            variant="outlined"
            required
            onChange={(e) =>
              setShippingData({ ...shippingData, name: e.target.value })
            }
          />
          <TextField
            label="Address"
            variant="outlined"
            required
            onChange={(e) =>
              setShippingData({ ...shippingData, address: e.target.value })
            }
          />
          <TextField
            label="City"
            variant="outlined"
            required
            onChange={(e) =>
              setShippingData({ ...shippingData, city: e.target.value })
            }
          />
          <TextField
            label="Zip Code"
            variant="outlined"
            required
            onChange={(e) =>
              setShippingData({ ...shippingData, zip: e.target.value })
            }
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "orange",
              color: "white",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "darkorange",
              },
            }}
          >
            Continue to Payment
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ShippingPage;
