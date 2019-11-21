import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Button from './Button';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      password: ''
    };
  }

  onChangeHandler = e => {
    //console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
      //[e.target.number]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    localStorage.setItem('clientes', JSON.stringify(this.state));
    this.props.history.push('/home');
    console.log(JSON.parse(localStorage.getItem('clientes')));
    //this.props.agregarClientes(this.state.name);
  };

  render() {
    return (
      <React.Fragment>
        <h1>Bienvenido</h1>
        <form>
          <fieldset>
            <legend>Registro</legend>
            <label name='text'>
              <input
                name='name'
                type='text'
                placeholder='Nombre'
                value={this.state.name}
                onChange={this.onChangeHandler}></input>
            </label>
            <label name='phone-number'>
              <input
                name='phoneNumber'
                type='text'
                placeholder='Teléfono'
                value={this.state.phone}
                onChange={this.onChangeHandler}></input>
            </label>
            <label name='email'>
              <input
                name='email'
                type='email'
                placeholder='Correo electrónico'
                value={this.state.email}
                onChange={this.onChangeHandler}></input>
            </label>
            <label>
              <input
                name='password'
                type='password'
                placeholder='Contraseña'
                value={this.state.password}
                onChange={this.onChangeHandler}></input>
            </label>
            <label>
              <input
                name='password'
                type='password'
                placeholder='Confirmar contraseña'
                value={this.state.password}
                onChange={this.onChangeHandler}></input>
            </label>
            <label>
              <input type='checkbox'></input>
              Acepto términos y condiciones
            </label>

            <Button submit={this.onSubmit} />
          </fieldset>
        </form>
      </React.Fragment>
    );
  }
}

export default withRouter(Form);
