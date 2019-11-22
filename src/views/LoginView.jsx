import React, { Component } from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

import './Views.css';

// import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <section className='login-form'>
        <figure>
          <img src='./assets/LOGO-CARGUASH.svg' alt='logo' />
        </figure>
        <article>
          <fieldset>
            <label name='phone-or-mail'>
              <input type='text' placeholder='Teléfono o correo'></input>
            </label>
            <label name='phone-or-mail'>
              <input type='password' placeholder='Contraseña'></input>
            </label>
          </fieldset>
          <fieldset className='btn-container'>
            <Link to='/home'>
              <Button text={'Iniciar sesión'} />
            </Link>
          </fieldset>
          <fieldset className='btn-container'>
            <Link to='/register'>
              <Button text={'Registarse'} />
            </Link>
          </fieldset>
        </article>
      </section>
    );
  }
}

export default Login;
