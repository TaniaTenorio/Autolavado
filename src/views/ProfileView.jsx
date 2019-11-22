import React, { Component } from 'react';
import './Views.css';

class ProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Nombre: '',
      Email: '',
      Teléfono: ''
    };
  }

  componentDidMount() {
    //Set localstorage
    const { Nombre, Email, Teléfono } = JSON.parse(
      localStorage.getItem('clients')
    );
    this.setState({ Nombre, Email, Teléfono });
  }

  render() {
    return (
      <React.Fragment>
        <i className='material-icons'>chevron_left</i>
        <form action=''>
          <label>
            <input
              type='text'
              name='nombre'
              value={this.state.Nombre}
              readonly
            />
          </label>
          <label>
            <input
              type='text'
              name='nombre'
              value={this.state.Teléfono}
              readonly
            />
          </label>
          <label>
            <input
              type='text'
              name='nombre'
              value={this.state.Email}
              readonly
            />
          </label>
        </form>
      </React.Fragment>
    );
  }
}

export default ProfileView;
