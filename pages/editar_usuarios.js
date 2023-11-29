import React from 'react';
import Navbar from '../components/navbar/Navbar.jsx'
import EditarUsuario from '../components/editarusuario/EditarUsuario.jsx'
import Footer from '../components/footer/Footer.jsx'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function EditarUsuarios() {
  return (
    <div>
      <Navbar />
      <EditarUsuario />
      <Footer />
    </div>
  );
}

export default EditarUsuarios;
