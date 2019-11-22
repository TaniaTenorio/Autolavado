import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Login from './views/LoginView';
import Register from './views/RegisterView';
import Home from './views/HomeView';
import Schedule from './views/ScheduleView';
import VehicleForm from './views/VehicleForm';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/home' component={Home} />
        <Route path='/schedule' component={Schedule} />
        <Route path='/vehicleForm' component={VehicleForm} />
        {/* <Route path='/user' component={UserProfile} />
          <Route path='/admin' component={Admin} />
          <Route path='/worker' component={Worker} /> */}
      </Router>
    );
  }
}

export default App;
