import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

function Categorias() {
    const [categorias, setCategorias] = useState([]);
    const [nuevaCategoria, setNuevaCategoria] = useState('');

    useEffect(() => {
        
        async function fetchCategorias() {
            try {
                const response = await axios.get('/category'); //
                setCategorias(response.data);
            } catch (error) {
                console.error('Error al obtener categorías:', error);
            }
        }
        fetchCategorias();
    }, []);

    const handleAgregarCategoria = async () => {
        try {
            const response = await axios.post('/category', { name: nuevaCategoria }); 
            setCategorias([...categorias, response.data]);
            setNuevaCategoria('');
        } catch (error) {
            console.error('Error al agregar categoría:', error);
        }
    };

    const handleEliminarCategoria = async (id) => {
        try {
            await axios.delete(`/category/${id}`); 
            const updatedCategorias = categorias.filter((categoria) => categoria._id !== id);
            setCategorias(updatedCategorias);
        } catch (error) {
            console.error('Error al eliminar categoría:', error);
        }
    };

    return (
        <div>
            <h1>Categorías</h1>
            <div>
                <input
                    type="text"
                    value={nuevaCategoria}
                    onChange={(e) => setNuevaCategoria(e.target.value)}
                    placeholder="Nombre de la nueva categoría"
                />
                <button onClick={handleAgregarCategoria}>Agregar Categoría</button>
            </div>
            <ul>
                {categorias.map((categoria) => (
                    <li key={categoria._id}>
                        {categoria.name}
                        <button onClick={() => handleEliminarCategoria(categoria._id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categorias;
