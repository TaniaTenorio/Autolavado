import React, { Component } from 'react';
import Form from '../components/Form';
import Navbar from '../components/Navbar/Navbar';

// import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Form />
      </React.Fragment>
    );
  }
}

export default Login;
