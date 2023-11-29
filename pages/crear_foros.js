import React from 'react';
import Navbar from '../components/navbar/Navbar.jsx'
import FormularioForo from '../components/formularioblog/FormularioBlog.jsx'
import Footer from '../components/footer/Footer.jsx'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function CrearForo() {
  return (
    <div>
      <Navbar />
      <h1>Crear Foro</h1>
      <FormularioForo />
      <Footer />
    </div>
  );
}

export default CrearForo;