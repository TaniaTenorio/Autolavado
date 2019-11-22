import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';

class MyCarsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Marca: '',
      Modelo: '',
      Placas: '',
      Color: ''
    };
  }

  componentDidMount() {
    //Set localstorage
    const { Marca, Modelo, Placas, Color } = JSON.parse(
      localStorage.getItem('cars')
    );
    this.setState({ Marca, Modelo, Placas, Color });
  }
  render() {
    return (
      <section>
        <Link to='/follow'>
          <a href=''>
            <i className='material-icons'>chevron_left</i>
          </a>
        </Link>
        <article>
          <h1>Mis autos</h1>
          <p>Recuerda que puedes registrar máximo 5 autos</p>
        </article>
        <article>
          <ul>
            <li>{this.state.Marca}</li>
            <li>{this.state.Modelo}</li>
            <li>{this.state.Color}</li>
            <li>{this.state.Placas}</li>
          </ul>
        </article>
        <Button text={'Agregar'} />
      </section>
    );
  }
}

export default MyCarsView;
