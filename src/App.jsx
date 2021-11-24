import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './controller/authContext';

import PrivateRoute from './components/PrivateRoute';
// Import views
import Welcome from './views/Welcome';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Dashboard from './views/Dashboard';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
