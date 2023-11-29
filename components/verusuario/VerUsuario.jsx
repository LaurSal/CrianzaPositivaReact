import React from 'react';
import './VerUsuario.css';  // Importa el archivo de estilos

function VerUsuario() {
  return (
    <div>
      <h1>Ver usuario</h1>
      <div className="container">
        <div className="desc-usuario1">
          {/* Muestra la foto de perfil */}
          <img src="https://cdn-icons-png.flaticon.com/512/6326/6326055.png" alt="Foto de usuario" width="200" height="200"/>
          <br /><label htmlFor="foto">Foto de perfil</label>
          
          {/* Muestra el nombre del usuario */}
          <div className="info-usuario">
            <label htmlFor="nombre">Nombre del usuario:</label><br />
            <span className="espacio_editar">Nombre del usuario</span>
          </div>
          
          {/* Muestra el correo del usuario */}
          <div className="info-usuario">
            <label htmlFor="correo">Correo:</label><br />
            <span className="espacio_editar">correo@example.com</span>
          </div>
          
          {/* Muestra el género del usuario */}
          <div className="info-usuario">
            <label htmlFor="genero">Género:</label><br />
            <span className="espacio_editar">Masculino</span>
          </div>
          
          {/* Muestra la edad del usuario */}
          <div className="info-usuario">
            <label htmlFor="edad">Edad:</label><br />
            <span className="espacio_editar">25</span>
          </div>
          
          {/* Otros campos de solo lectura */}
        </div>
        
        {/* Muestra la información de la última publicación */}
        <div className="desc-usuario2">
          <p><b>Última publicación:</b></p>
          <div className="info-usuario">
            <p>Título del post <br /> Fecha publicación</p>
            <img src="https://ethic.es/wp-content/uploads/2023/03/imagen-1280x768.jpg" alt="Foto del post" width="390" height="225" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerUsuario;
