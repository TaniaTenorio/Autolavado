import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './views/LoginView';
import Home from './views/HomeView';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path='/' component={Login} />
      <Route path='/home' component={Home} />
      {/* <Route path='/user' component={UserProfile} />
        <Route path='/admin' component={Admin} />
        <Route path='/worker' component={Worker} /> */}
    </Router>
  );
}

export default App;
