import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import '../Components.css';

class Sidebar extends Component {
  componentDidMount() {
    var elem = document.querySelector('.sidenav');
    var instance = M.Sidenav.init(elem, {
      edge: 'left',
      inDuration: 250
    });
  }

  render() {
    return (
      <div>
        <ul id='slide-out' className='sidenav'>
          <li id='user'>
            <a href='#!'>
              <figure>
                <img src='./assets/LOGO-bubbles.svg' alt='Logo' />
              </figure>
              <p>Nombre de usuario</p>
            </a>
          </li>
          <li>
            <div className='divider' />
          </li>
          <li>
            <li>
              <a href='#!' className='subheader'>
                Mi plan
              </a>
            </li>
            <a>Mis autos</a>
          </li>
          <li>
            <a className='waves-effect' href='#!'>
              Métodos de pago
            </a>
          </li>
          <li>
            <a className='waves-effect' href='#!'>
              Historial
            </a>
          </li>
          <li>
            <a className='waves-effect' href='#!'>
              Facturación
            </a>
          </li>
          <li>
            <a className='waves-effect' href='#!'>
              Ayuda
            </a>
          </li>
          <li>
            <a className='waves-effect' href='#!'>
              Cerrar sesión
            </a>
          </li>
        </ul>
        <a href='#' data-target='slide-out' className='sidenav-trigger'>
          <i className='material-icons'>menu</i>
        </a>
      </div>
    );
  }
}

export default Sidebar;
