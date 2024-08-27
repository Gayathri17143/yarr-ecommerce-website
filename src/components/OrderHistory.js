// src/components/OrderHistory.js
import React, { useState, useEffect } from 'react';
import './OrderHistory.css';
import { Container } from 'react-bootstrap';

const OrderHistory = () => {
  // src/data/orders.js
  const orders = [
    {
      id: 1,
      date: '2023-06-01',
      total: 0.0,
      items: [
        { title: "Realme 12 Plus 5G", quantity: 2, price: 50.0 },
        { title: "Oppo F25 Pro 5G", quantity: 1, price: 150.0 },
      ],
    },
    {
      id: 2,
      date: '2023-05-21',
      total: 0.0,
      items: [
        { title: "Vivo V30 Pro 5G", quantity: 2, price: 80.0 },
      ],
    },
    {
      id: 3,
      date: '2023-04-23',
      total: 0.0,
      items: [
        { title: "Vivo V30 Pro 5G", quantity: 1, price: 200.0 },
      ],
    },
    {
      id: 4,
      date: '2023-01-11',
      total: 0.0,
      items: [
        { title: "Vivo V30 Pro 5G", quantity: 1, price: 100.0 },
      ],
    },
  ];

  const [orderHistory, setOrderHistory] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    // Calculate total value of each order
    const updatedOrders = orders.map(order => {
      const total = order.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
      return { ...order, total };
    });

    // Calculate overall total value
    const overallTotal = updatedOrders.reduce((sum, order) => sum + order.total, 0);

    setOrderHistory(updatedOrders);
    setTotalValue(overallTotal);
  }, []);

  return (
    <Container>
      <h3>Order History</h3>
      {orderHistory.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div style={{width:"90%"}}>
          {orderHistory.map((order) => (
            <div key={order.id} className="order">
              <h5>Order ID: {order.id}</h5>
              <p>Date: {order.date}</p>
              
              <h6>Items:</h6>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.title} - {item.quantity} x ₹{item.price.toFixed(2)} = ₹{(item.quantity * item.price).toFixed(2)}
                  </li>
                ))}
              </ul>
              <p>Total: ₹{order.total.toFixed(2)}</p>
            </div>
          ))}
          <h4>Total Value: ₹{totalValue.toFixed(2)}</h4>
        </div>
      )}
    </Container>
  );
};

export default OrderHistory;
