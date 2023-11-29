// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 
import Header from '../header/Header.jsx';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="containern">
        <Header />
        <div className='links'>
          <div className="navbar-links">
            <a href="#">    </a>
            <NavLink to="/">Inicio</NavLink>
            <a href="dashboard.html">Foros</a>
            <a href="admin.html">Mi perfil</a>
            <a href="index.html">Mis entradas</a>
            <a href="agregarblog.html">Añadir blog</a>
            <a href="agregarforo.html">Añadir foro</a>
            <NavLink to="/usuarios">Gestionar usuarios</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
