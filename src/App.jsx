import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Login from './views/LoginView';
import Home from './views/HomeView';
import Map from './components/Map/MapPages';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path='/' component={Map} />
        <Route path='/home' component={Home} />
        {/* <Route path='/user' component={UserProfile} />
        <Route path='/admin' component={Admin} />
        <Route path='/worker' component={Worker} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
