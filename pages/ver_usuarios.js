import React from 'react';
import Navbar from '../components/navbar/Navbar.jsx'
import VerUsuario from '../components/verusuario/VerUsuario.jsx'
import Footer from '../components/footer/Footer.jsx'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function EditarUsuarios() {
  return (
    <div>
      <Navbar />
      <VerUsuario />
      <Footer />
    </div>
  );
}

export default EditarUsuarios;
