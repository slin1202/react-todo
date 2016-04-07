import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer.jsx';
import {Router, Route, hashHistory} from 'react-router'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer}>
    	
    </Route>
  </Router>
), document.getElementById('main'))