import React, { Component } from 'react';
import './style.css';

class Registro extends Component {
  render() {
    return  (
      <div className="container">
        <div className="form-container">
          <form action="/dashboard">
            <div className="form-group">
              <label htmlFor="nombreCompleto">Nombre completo</label><br />
              <input type="text" id="nombreCompleto" name="nombreCompleto" required />
            </div>
            <div className="form-group">
              <label htmlFor="correo">Correo</label><br />
              <input type="email" id="correo" name="correo" required />
            </div>
            <div className="form-group">
              <label htmlFor="usuario">Usuario</label><br />
              <input type="text" id="usuario" name="usuario" required />
            </div>
            <div className="form-group">
              <label htmlFor="contrasena">Contraseña</label><br />
              <input type="password" id="contrasena" name="contrasena" required />
            </div>
            <button type="submit" className="register-button">Registrar</button>
          </form>
          <div className="login-link">
            ¿Ya estás registrado? <a href="/login">Da click aquí para ir al login</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Registro;