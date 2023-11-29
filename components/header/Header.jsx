import React from 'react';
import './Header.css'
import logo from './logo.png'
import RegresarButton from '../regresarboton/regresarBoton.jsx';

function Header() {
    return (
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" width={60} height={60} />
        </div>
        <RegresarButton />
      </nav>
    );
  }
  
  export default Header;