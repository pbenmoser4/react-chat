import React from 'react';
import { Router, Route } from 'react-router-dom';

import Header from './Header';
import Chat from './chat/Chat';
import Login from './auth/Login';

import history from '../history';

import '../style/App.css';

const App = (props) => {
  return (
    <div className="app">
      <Router history={history}>
        <Header />
        <div className="ui container appContent">
          <Route path="/chat" exact component={Chat} />
          <Route path="/login" exact component={Login} />
        </div>
      </Router>
    </div>
  );
}

export default App;
