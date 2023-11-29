import React from 'react';
import Navbar from '../components/navbar/Navbar.jsx'
import FormularioBlog from '../components/formularioblog/FormularioBlog.jsx'
import Footer from '../components/footer/Footer.jsx'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function CrearBlog() {
  return (
    <div>
      <Navbar />
      <h1>Crear Blog</h1>
      <FormularioBlog />
      <Footer />
    </div>
  );
}

export default CrearBlog;