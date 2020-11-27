import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';


import Navbar from './components/layout/Navbar';

import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Login from './components/auth/Login';
import RandomGif from './components/pages/Puppies.js'

import './App.css';

function onAuthRequired({ history }) {
  history.push('/login');

}

class App extends Component {
  render() {
    return (

      <Router>
        <Security
          issuer="https://dev-1958578.okta.com/oauth2/default"
          client_id="0oar2oztpcv4HWJQj5d5"
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
        >
          <div className="App">
            <Navbar />
            <div className="container">
              <Route path="/" exact={true} component={Home} />
              <SecureRoute path="/dashboard" exact={true} component={Dashboard} />
              <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-1958578.okta.com" />
                )}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
              <Route path="/puppies" exact={true} component={RandomGif} />
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
