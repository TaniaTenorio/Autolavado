import React, { Component } from 'react';
import MapPages from '../components/Map/MapPages';
import Navbar from '../components/Navbar/Navbar';

class MapView extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <MapPages />;
      </React.Fragment>
    );
  }
}

export default MapView;
