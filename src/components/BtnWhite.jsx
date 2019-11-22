import './Form';
import './Components.css';
import React, { Component } from 'react';

class BtnWhite extends Component {
  render() {
    return (
      <button
        className='btn-class waves-effect waves-light white lighten-1 btn-large text-black black-text btn-w'
        type='submit'
        onClick={this.props.submit}
        id='btnWhite'>
        {this.props.text}
      
      </button>
    );
  }
}

export default BtnWhite;