import React, { Component } from 'react';
import './style.css';

class Dashboard extends Component {
  render() {
    return  (
      <div>
        <a href="agregarforo.html" className="h-boton btn btn-secondary" style={{ float: 'right' }}>
          <i className="bi bi-arrow-left-circle"></i> Añadir Foro
        </a>
        <a href="agregarblog.html" className="h-boton btn btn-secondary" style={{ float: 'right' }}>
          <i className="bi bi-arrow-left-circle"></i> Añadir Blog
        </a>
  
        <table className="tabla">
          <thead>
            <tr>
              <th>Foros</th>
              <th>Temas</th>
              <th>Posts</th>
              <th>Ultima act.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Foro 1</td>
              <td>Temas Foro 1</td>
              <td>Posts Foro 1</td>
              <td>Ultima act. Foro 1</td>
            </tr>
            <tr>
              <td>Foro 2</td>
              <td>Temas Foro 2</td>
              <td>Posts Foro 2</td>
              <td>Ultima act. Foro 2</td>
            </tr>
          </tbody>
        </table>
  
        <table className="tabla">
          <thead>
            <tr>
              <th>Blogs</th>
              <th>Posts</th>
              <th>Ultima act.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Blog 1</td>
              <td>Posts Blog 1</td>
              <td>Ultima act. Blog 1</td>
            </tr>
            <tr>
              <td>Blog 2</td>
              <td>Posts Blog 2</td>
              <td>Ultima act. Blog 2</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Dashboard;