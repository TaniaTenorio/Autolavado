import React, { Component } from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <fieldset>
          <legend>Iniciar Sesión</legend>
          <label name='phone-or-mail'>
            <input type='text' placeholder='Telefono o correo'></input>
          </label>
          <label name='phone-or-mail'>
            <input type='password' placeholder='Contraseña'></input>
          </label>
          <Link to='/home'>
            <Button />
          </Link>
        </fieldset>
        <fieldset>
          <legend>Registarse</legend>
          <Link to='/register'>
            <Button />
          </Link>
        </fieldset>
      </React.Fragment>
    );
  }
}

export default Login;
