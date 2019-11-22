import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import '../Components.css';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Nombre: ''
    };
  }

  componentDidMount() {
    var elem = document.querySelector('.sidenav');
    M.Sidenav.init(elem, {
      edge: 'left',
      inDuration: 250
    });

    //Set localstorage
    const { Nombre } = JSON.parse(localStorage.getItem('clients'));
    this.setState({ Nombre });
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
              <Link to='/profile'>
                <p>
                  <a className='user-name'>{this.state.Nombre}</a>
                </p>
              </Link>
            </a>
          </li>
          <li>
            <div className='divider' />
          </li>
          <li>
            <a href='#!' className='subheader'>
              Mi plan
            </a>

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
