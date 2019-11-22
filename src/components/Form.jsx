import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Components.css';

import Button from './Button';

class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
      
//     };
//   }

//   onChangeHandler = e => {
//     //console.log(e.target.value);
//     this.setState({
//       [e.target.name]: e.target.value
//       //[e.target.number]: e.target.value
//     });
//   };

//   onSubmit = e => {
//     e.preventDefault();
//     localStorage.setItem('clientes', JSON.stringify(this.state));
//     this.props.history.push('/home');
//     console.log(JSON.parse(localStorage.getItem('clientes')));
//     //this.props.agregarClientes(this.state.name);
//   };

  render() {
    return (
      <section>
        <h3>{this.props.title}</h3>
        <form>
          <fieldset>
            <label name='text'>
              <input
                name='name'
                type='text'
                placeholder={this.props.text1}
                value={this.props.name}
                onChange={this.props.onChangeHandler}></input>
            </label>
            <label name='phone-number'>
              <input
                name='phoneNumber'
                type='text'
                placeholder={this.props.text2}
                value={this.props.phone}
                onChange={this.props.onChangeHandler}></input>
            </label>
            <label name='email'>
              <input
                name='email'
                type='email'
                placeholder={this.props.text3}
                value={this.props.email}
                onChange={this.props.onChangeHandler}></input>
            </label>
            <label>
              <input
                name='password'
                type='password'
                placeholder={this.props.text4}
                value={this.props.password}
                onChange={this.props.onChangeHandler}></input>
            </label>
            <label>
              <input
                name='password'
                type='password'
                placeholder='Confirmar contraseña'
                value={this.props.password}
                onChange={this.props.onChangeHandler}></input>
            </label>
            <div className='checkbox-label'>
              <label>
                <input type='checkbox' />
                <span>Acepto términos y condiciones</span>
              </label>
              <br />
              <Button text={'Siguiente'} submit={this.props.onSubmitHandler} />
            </div>
          </fieldset>
        </form>
      </section>
    );
  }
}

export default withRouter(Form);

