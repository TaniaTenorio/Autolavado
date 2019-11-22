import React, { Component } from 'react';
import './Views.css';
import { Link } from 'react-router-dom';

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
      <section>
        <Link to='/follow'>
          <a href=''>
            <i className='material-icons'>chevron_left</i>
          </a>
        </Link>
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
      </section>
    );
  }
}

export default ProfileView;
