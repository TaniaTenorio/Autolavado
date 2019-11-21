import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <ul id='mobile-menu'>
          <li>
            <a href='#mobile-menu-list' id='menu'>
              <i className='material-icons'>menu</i>
            </a>
          </li>
        </ul>
        <ul id='mobile-menu-list' className='hide'>
          <li id='close-li'>
            <a href='#h' id='close'>
              <i className='material-icons'>close</i>
            </a>
          </li>

          <ul>
            <li className='menu-element'>
              <a id='home-btn' href='#hero'>
                Inicio
              </a>
            </li>

            <li className='menu-element'>
              <a id='about-btn' href='#about-me'>
                Sobre mí
              </a>
            </li>
            <li className='menu-element'>
              <a id='projects-btn' href='#projects'>
                Proyectos
              </a>
            </li>
            <li className='menu-element'>
              <a id='skills-btn' href='#skills'>
                Habilidades
              </a>
            </li>
            <li className='menu-element'>
              <a href='#contact' id='contact-btn'>
                Contacto
              </a>
            </li>
          </ul>
        </ul>
      </React.Fragment>
    );
  }
}

export default Navbar;
