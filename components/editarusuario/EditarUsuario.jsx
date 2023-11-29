import React from 'react';
import './EditarUsuario.css';  // Importa el archivo de estilos

function EditarUsuario() {
  return (
    <div>
      <h1>Editar usuario</h1>
      <div className="container">
        <div className="desc-usuario1">
            <form name = "Editar_usuario" action="usuarios.html" method="post">
                <img src="https://cdn-icons-png.flaticon.com/512/6326/6326055.png" alt="Foto de usuario" width="200" height="200"/>
                <br/><label for="foto"> Cambiar foto de perfil</label>
                <input class="form-control espacio_editar" type="file" id="formFile" name="foto"/>
                <div class="info-usuario">
                    <label for="nombre">Nombre del usuario:</label><br/>
                    <input type="text" id="nombre" name="nombre" class="espacio_editar"/>
                </div>
                <div class="info-usuario">
                    <label for="correo">Correo:</label><br/>
                    <input type="email" id="correo" name="correo" class="espacio_editar"/>
                </div>
                <div class="info-usuario">
                    <label for="genero">Género:</label>
                    <br/><input type="radio" name="genero" value="Masculino"/> Masculino
                    <input type="radio" name="genero" value="Femenino"/> Femenino
                    <input type="radio" name="genero" value="Otro"/> Otro
                </div>
                <div class="info-usuario">
                    <label for="edad">Edad:</label><br/>
                    <input type="number" id="entero" name="entero" step="1" class="espacio_editar"/>
                </div>
                <div class="info-usuario">
                    <label for="rol">Rol dentro de la familia:</label><br/>
                    <select name="rol" id="rol" required class="espacio_editar">
                        <option value="" disabled selected>Seleccione</option>
                        <option value="orientador">Orientador</option>
                        <option value="madre">Madre</option>
                        <option value="padre">Padre</option>
                        <option value="hija">Hija</option>
                        <option value="hijo">Hijo</option>
                        <option value="madrastra">Madrastra</option>
                        <option value="padrastro">Padrastro</option>
                        <option value="abuela">Abuela</option>
                        <option value="abuelo">Abuelo</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>
                <div class="info-usuario">
                    <label for="estado">Estado:</label><br/>
                    <select name="estado" id="estado" required class="espacio_editar">
                        <option value="" disabled selected>Seleccione el estado</option>
                        <option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                    </select>
                </div>
                <div class="info-usuario">
                    <label for="descripcion">Descripción</label>
                    <textarea id="describirPerfil" rows = "5" cols = "50" name="describirPerfil" class="espacio_editar"></textarea>
                </div>
                <input type="submit" value="Guardar" class="f-boton btn btn-secondary"/>
                <input type="reset" value="Cancelar" class="f-boton btn btn-secondary" style={{backgroundColor: 'rgb(133, 39, 39)', borderColor: 'rgb(133, 39, 39)'}}/>
            </form>
        </div>
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

export default EditarUsuario;
