import React, { Component } from 'react';
import Form from '../components/Form';

class RegisterView extends Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      email: '',
      phoneNumber: '',
      password: ''
    }
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
    localStorage.setItem('clients', JSON.stringify(this.state));
    this.props.history.push('/home');
    console.log(JSON.parse(localStorage.getItem('clients')));
    //this.props.agregarClientes(this.state.name);
  };
  render() {
    return (
      <Form
        title={"Registro"}
        text1={"Nombre"}
        text2={"Teléfono"}
        text3={"Correo electrónico"}
        text4={"Contraseña"}
        text5={"Confirmar contraseña"}
        name={this.state.name}
        phone={this.state.phone}
        email={this.state.email}
        password={this.state.password}
        type={"password"}
        onChangeHandler={this.onChangeHandler}
        onSubmitHandler={this.onSubmit} />
      );
  }
}

export default RegisterView;
