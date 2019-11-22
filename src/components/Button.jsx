import React, { Component } from 'react';
import './Form'
import './Components.css';

class Button extends Component {

    render() {
    return <button className="waves-effect waves-light btn-small" type="submit" onClick={this.props.submit}>{this.props.text}</button>
    }
};


export default Button;
