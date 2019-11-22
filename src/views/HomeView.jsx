import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import MapPages from '../components/Map/MapPages';
import Button from '../components/Button';

class MapView extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <MapPages />
        <Link to="/schedule">
          <Button text={"Solicitar servicio"} />
        </Link >
      </React.Fragment>
    );
  }
}

export default MapView;
