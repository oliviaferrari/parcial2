import React, { useState, useEffect } from 'react';
import axios from 'axios'; // 

function Orders() {
    const [orders, setOrders] = useState([]);
    const [newOrder, setNewOrder] = useState({ products: [], customer: '' });

    useEffect(() => {
       
        async function fetchOrders() {
            try {
                const response = await axios.get('/orders'); 
                setOrders(response.data);
            } catch (error) {
                console.error('Error al obtener órdenes:', error);
            }
        }
        fetchOrders();
    }, []);

    const handleAgregarOrder = async () => {
        try {
            const response = await axios.post('/orders', newOrder);
            setOrders([...orders, response.data]);
            setNewOrder({ products: [], customer: '' });
        } catch (error) {
            console.error('Error al agregar orden:', error);
        }
    };

    const handleEliminarOrder = async (id) => {
        try {
            await axios.delete(`/orders/${id}`); 
            const updatedOrders = orders.filter((order) => order._id !== id);
            setOrders(updatedOrders);
        } catch (error) {
            console.error('Error al eliminar orden:', error);
        }
    };

    return (
        <div>
            <h1>Órdenes</h1>
            <div>
                <input
                    type="text"
                    value={newOrder.customer}
                    onChange={(e) => setNewOrder({ ...newOrder, customer: e.target.value })}
                    placeholder="Nombre del cliente"
                />
          
                <button onClick={handleAgregarOrder}>Agregar Orden</button>
            </div>
            <ul>
                {orders.map((order) => (
                    <li key={order._id}>
                        Cliente: {order.customer}
                      
                        <button onClick={() => handleEliminarOrder(order._id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Orders;
