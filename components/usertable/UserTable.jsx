import React from 'react';
import './UserTable.css';  // Importa el archivo de estilos
import CrearBoton from '../crearboton/CrearBoton.jsx';
import { useNavigate } from 'react-router-dom';

function UserTable() {
  const navigate = useNavigate();

  const users = [
    { id: 1, name: 'Admin', email: 'admin@admin.com', permissions: 'Publicar blogs, publicar foros, comentar blogs, comentar foros', status: 'Activo' },
    // Otros usuarios...
  ];

  const viewUser = (userId) => {
    // Navigate to the user details page
    navigate(`/user-details/${userId}`);
  };

  const editUser = (userId) => {
    // Navigate to the user edit page
    navigate(`/edit-user/${userId}`);
  };

  return (
    <div className="user-table">
        <CrearBoton />
        <table>
            <thead>
            <tr>
                <th>N°</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Permisos</th>
                <th>Estado</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.permissions}</td>
                <td>{user.status}</td>
                <td>
                    <button onClick={() => viewUser(user.id)}>Ver</button>
                    <button onClick={() => editUser(user.id)}>Editar</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  );
}

export default UserTable;
