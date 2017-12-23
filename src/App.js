import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login/login.js';
import Table from './table/index.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/login" component={Login} />
          <Route path="/table" component={Table} />
        </div>
      </Router>
    );
  }
}

export default App;
