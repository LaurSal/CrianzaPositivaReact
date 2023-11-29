import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Footer extends Component {
  render() {
    return (
      <footer>
      <div className="container">
        <div className="row">
          <h4>Información de contacto</h4>
          <p>Dirección: Carrera 11 #16-75, Tunja</p>
          <p>Teléfono: 3144386670 - 3112662387</p>
          <p>Email: howardgardneradmon@gmail.com</p>
        </div>
      </div>
    </footer>
    )
  }
}

export default Footer;