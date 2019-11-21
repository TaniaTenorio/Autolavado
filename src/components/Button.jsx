import React, { Component } from 'react';
import './Form'

class Button extends Component {
    render() {
    return <button type="submit" onClick={this.props.submit}>Enviar</button>
    }
};

export default Button;