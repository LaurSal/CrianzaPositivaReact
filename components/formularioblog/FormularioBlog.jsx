import React from 'react';
import './FormularioBlog.css';
import { useState } from 'react'; 

const FormularioBlog = () => {

  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormularioEnviado(true);
  };

  return (
    <div>
      {formularioEnviado ? (
        <div style={{marginLeft: '20px'}}>
          <h2>¡Formulario enviado con éxito!</h2>
          <p>Gracias por enviar el formulario. Tu blog ha sido creado.</p>
        </div>
      ) : (
      <form name="crear_blog" action="/blogs" method="post" onSubmit={handleSubmit}>
        <div className="info-blog">
          <label htmlFor="titulo">Título del blog:</label>
          <input type="text" id="titulo" name="titulo" style={{ width: '93%', padding: '10px', fontSize: '14px' }}/>
        </div>

        <div className="info-blog">
          <label htmlFor="autor">Autor:</label>
          <input type="text" id="autor" name="autor" style={{ width: '93%', padding: '10px', fontSize: '14px' }}/>
        </div>

        <div className="info-blog">
          <label htmlFor="autor">Objetivo:</label>
          <input type="text" id="objetivo" name="objetivo" style={{ width: '93%', padding: '10px', fontSize: '14px' }}/>
        </div>

        <div className="info-blog">
          <label htmlFor="contenido">Contenido:</label>
          <textarea id="contenido" name="contenido" style={{ width: '93%', height: '100%', padding: '10px', fontSize: '14px' }}></textarea>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button type="submit" className="f-boton">Guardar</button>
          <button type="reset" className="f-boton" style={{ backgroundColor: 'rgb(133, 39, 39)', borderColor: 'rgb(133, 39, 39)' }}>Cancelar</button>
        </div>
      </form>
      )}
    </div>
  );
};

export default FormularioBlog;
