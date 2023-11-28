import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders')
      .then((response) => setOrders(response.data))
      .catch((error) => console.error('Error fetching orders:', error));
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            <h3>Order ID: {order._id}</h3>
            <p>Customer: {order.customer.name} ({order.customer.email})</p>
            <ul>
              {order.products.map(product => (
                <li key={product._id}>
                  <strong>{product.name}</strong>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;
