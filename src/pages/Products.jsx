import React, { useState, useEffect } from 'react';
import axios from 'axios'; // 

function Products() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', description: '', price: 0 });

    useEffect(() => {
      
        async function fetchProducts() {
            try {
                const response = await axios.get('/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        }
        fetchProducts();
    }, []);

    const handleAgregarProducto = async () => {
        try {
            const response = await axios.post('/products', newProduct); 
            setProducts([...products, response.data]);
            setNewProduct({ name: '', description: '', price: 0 });
        } catch (error) {
            console.error('Error al agregar producto:', error);
        }
    };

    const handleEliminarProducto = async (id) => {
        try {
            await axios.delete(`/products/${id}`); 
            const updatedProducts = products.filter((product) => product._id !== id);
            setProducts(updatedProducts);
        } catch (error) {
            console.error('Error al eliminar producto:', error);
        }
    };

    return (
        <div>
            <h1>Productos</h1>
            <div>
                <input
                    type="text"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    placeholder="Nombre del producto"
                />
              
                <button onClick={handleAgregarProducto}>Agregar Producto</button>
            </div>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        Nombre: {product.name} - Precio: {product.price}
                    
                        <button onClick={() => handleEliminarProducto(product._id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;
