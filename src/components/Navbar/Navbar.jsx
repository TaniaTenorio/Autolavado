import React, { Component } from 'react';
import Menu from './Menu';
import '../Components.css';

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav>
          <Menu />
        </nav>
      </header>
    );
  }
}

export default Navbar;
