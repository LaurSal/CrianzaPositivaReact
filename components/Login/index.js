import React, { Component } from 'react';
import './style.css';

class Login extends Component {
  render() {
    return  (
      <div className="container">
        <div className="form-container">
          <form action="/dashboard">
            <div className="form-group">
              <label htmlFor="usuario">Usuario</label>
              <input type="text" id="usuario" name="usuario" required />
            </div>
            <div className="form-group">
              <label htmlFor="contrasena">Contraseña</label>
              <input type="password" id="contrasena" name="contrasena" required />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
          <div className="forgot-password">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;