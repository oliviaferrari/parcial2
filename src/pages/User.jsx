import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

function Users() {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', email: '' });

    useEffect(() => {
        
        async function fetchUsers() {
            try {
                const response = await axios.get('/users'); 
                setUsers(response.data);
            } catch (error) {
                console.error('Error al obtener usuarios:', error);
            }
        }
        fetchUsers();
    }, []);

    const handleAgregarUsuario = async () => {
        try {
            const response = await axios.post('/users', newUser); // Endpoint para crear un usuario
            setUsers([...users, response.data]);
            setNewUser({ name: '', email: '' });
        } catch (error) {
            console.error('Error al agregar usuario:', error);
        }
    };

    const handleEliminarUsuario = async (id) => {
        try {
            await axios.delete(`/users/${id}`); 
            const updatedUsers = users.filter((user) => user._id !== id);
            setUsers(updatedUsers);
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
        }
    };

    return (
        <div>
            <h1>Usuarios</h1>
            <div>
                <input
                    type="text"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    placeholder="Nombre del usuario"
                />
                <input
                    type="email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    placeholder="Correo electrónico"
                />
                <button onClick={handleAgregarUsuario}>Agregar Usuario</button>
            </div>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>
                        Nombre: {user.name} - Correo: {user.email}
                        <button onClick={() => handleEliminarUsuario(user._id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Users;
