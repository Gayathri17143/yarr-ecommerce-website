import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  Button,
  Container,
} from "@mui/material";
import axios from "axios"; // Assuming you're using axios for API calls
import img1 from "../assets/Yarr/categories/kitchen-fan.png";
import img2 from "../assets/Yarr/categories/mist-fan.png";
const MyOrders = () => {
  const [orders, setOrders] = useState([
    {
      orderId: "12345",
      orderDate: "2024-10-10",
      status: "Delivered",
      totalPrice: 99.99,
      image: img1,
      items: [
        {
          productId: "p1",
          name: "Kitchen Fan",
          quantity: 2,
          price: 49.99,
        },
      ],
    },
    {
      orderId: "67890",
      orderDate: "2024-09-15",
      status: "Shipped",
      totalPrice: 149.99,
      image: img2,
      items: [
        {
          productId: "p3",
          name: "Mist Fan",
          quantity: 1,
          price: 149.99,
        },
      ],
    },
  ]);
  const [loading, setLoading] = useState(true);

  // Fetch orders from an API (replace 'your-api-endpoint' with your actual API)
  const fetchOrders = async () => {
    try {
      const response = await axios.get("/api/orders"); // Assuming a GET request
      setOrders(response.data); // Assuming the response contains order data
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Render order items
  const renderOrderItems = (items) => {
    return items.map((item) => (
      <Box
        key={item.productId}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <Typography sx={{fontWeight:"600"}}>{item.name}</Typography>
        <Typography>
          {item.quantity} x ${item.price.toFixed(2)}
        </Typography>
      </Box>
    ));
  };

  // Render each order card
  const renderOrders = () => {
    return orders.map((order) => (
      <Card
        key={order.orderId}
        variant="outlined"
        sx={{ marginBottom: "20px", padding: "20px" }}
      >
        <CardContent>
          <Typography variant="h6" sx={{ marginBottom: "10px" }}>
            Order ID: {order.orderId}
          </Typography>
          <Divider sx={{ marginBottom: "10px" }} />
          <Box>
            <img
              src={order.image}
              alt={order.name}
              style={{
                width:{sm:"20%",md: "15%"},
              }}
            />
          </Box>
          <Typography variant="subtitle1" gutterBottom>
            Order Date: {new Date(order.orderDate).toLocaleDateString()}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Status: {order.status}
          </Typography>

          <Box sx={{ marginTop: "15px" }}>
            {renderOrderItems(order.items)} {/* Render order items */}
          </Box>

          <Divider sx={{ margin: "15px 0" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">
              Total: ${order.totalPrice.toFixed(2)}
            </Typography>
            <Button
              variant="outlined"
              onClick={() => handleReorder(order.orderId)}
            >
              Reorder
            </Button>
          </Box>
        </CardContent>
      </Card>
    ));
  };

  // Handle Reorder (Optional feature)
  const handleReorder = (orderId) => {
    console.log(`Reordering items from order ${orderId}`);
    // Logic for reordering (e.g., re-add items to the cart)
  };

  return (
    <Container>
      <Box sx={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
        <Typography variant="h4" sx={{ marginBottom: "20px" }}>
          My Orders
        </Typography>

        {loading ? (
          <Typography>Loading orders...</Typography>
        ) : orders.length > 0 ? (
          renderOrders()
        ) : (
          <Typography>No orders found.</Typography>
        )}
      </Box>
    </Container>
  );
};

export default MyOrders;
