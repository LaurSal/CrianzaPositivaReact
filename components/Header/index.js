import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './style.css';

class Header extends Component {
  render() {
    return (
    <header>
                <nav className="navbar" style={{ backgroundColor: '#F39B6D' }}>
            <div className="container-fluid">
              <img
                src="../assets/img/logo.png"
                alt="Logo"
                width="60"
                height="60"
              />
            </div>
          </nav>
          <nav className="navbar navbar-expand-lg custom-navbar-bg">
            <div className="container-fluid">
              <div
                className="collapse navbar-collapse"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav">
                  <a className="nav-link" href="/">
                    Inicio
                  </a>
                  <a className="nav-link" href="dashboard.html">
                    Blogs
                  </a>
                  <a className="nav-link" href="dashboard.html">
                    Foros
                  </a>
                  <a className="nav-link" href="admin.html">
                    Mi perfil
                  </a>
                  <a className="nav-link" href="index.html">
                    Mis entradas
                  </a>
                  <a className="nav-link" href="agregarblog.html">
                    Añadir blog
                  </a>
                  <a className="nav-link" href="agregarforo.html">
                    Añadir foro
                  </a>
                  <a className="nav-link" href="usuarios.html">
                    Gestionar usuarios
                  </a>
                </div>
              </div>
            </div>
          </nav>
    </header>
    )
  }
}

export default Header;