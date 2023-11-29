import React, { Component } from 'react';
import './style.css';

class Home extends Component {
  render() {
    return (
      <html lang="en">



          <div className="index-franja-blanca">
            <a href="/Login" className="h-boton btn btn-secondary">
              <i className="bi bi-arrow-left-circle"></i> Login
            </a>
            <a href="/Registro" className="h-boton btn btn-secondary">
              <i className="bi bi-arrow-left-circle"></i> Registro
            </a>
          </div>
  
          <div className="index-franja-azul">
            <img
              src="/assets/img/familia.jpg"
              className="imagen-familia"
              alt="Family"
            />
            <h1 className="titulos-index">
              ULTIMO BLOG SOBRE PARENTALIDAD POSITIVA:
            </h1>
            <br />
            <h1 className="titulos-index">TITULO DE LA ENTRADA:</h1>
            <br />
            <h1 className="titulos-index">Nombre del autor:</h1>
          </div>
          <div className="contenedor-cajas-index">
            <div className="box-container">
              <div className="box">
                <h1>Foros recientes:</h1>
                <br />
                <h2>Foro 1:</h2>
                <br />
                <h2>Foro 2:</h2>
                <br />
                <h2>Foro 3:</h2>
              </div>
              <div className="box-centro">
                <img
                  src="/assets/img/mano.png"
                  className="imagen-mano"
                  alt="Hand"
                />
                <br />
                <h1 style={{ fontSize: 'large' }}>
                  ¿Necesitas orientación?
                </h1>
                <br />
                <h2 style={{ fontSize: 'larger' }}>Contacta un experto</h2>
              </div>
              <div className="box">
                <h1>Últimas novedades:</h1>
                <br />
                <h2>Foro con muchos comentarios:</h2>
                <br />
                <h2>Blog con muchas visitas:</h2>
                <br />
              </div>
            </div>
          </div>

      </html>
    );
  }
}

export default Home;