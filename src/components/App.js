import React from 'react';
import { Router, Route } from 'react-router-dom';

import Header from './Header';
import Chat from './chat/Chat';
import Login from './auth/Login';

import history from '../history';

const App = (props) => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <div className="ui container">
            <Route path="/chat" exact component={Chat} />
            <Route path="/login" exact component={Login} />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
