import React, { Component } from 'react';
// import './Map.css';
import Map from './Map';


class MapPages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'normal.day'
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(evt) {
    evt.preventDefault();
    var change = evt.target.id;
    console.log('selected ' + change);
    this.setState({
      theme: change
    });
  }
  render() {
    return (
      <section className='box-map'>
        <Map
          app_id='5OG7OkbY9XpgvRPABdnF'
          app_code='IhfB_irYGjdbpNEyVwLgcr-pBgBZF490CcZNGJldCyA'
          // lat='19.421327'
          // lng='-99.163085'
          lat='19.421327'
          lng='-99.163085'
          zoom='0'
          theme={this.state.theme}
        />
      
      </section>
    );
  }
}
export default MapPages;
