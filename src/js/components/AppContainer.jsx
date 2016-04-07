import React from 'react';
import TodoStore from '../stores/TodoStore';
import ActionCreator from '../actions/TodoActionCreators';
import App from './App.jsx';
import Navigation from './Navigation.jsx';


export default React.createClass({
  _onChange() {

  },

  getInitialState() {
    return {todos: [], errors: []};
  },

  render() {
    let {tasks} = this.state;
    return (
      <div>
        <Navigation />
        <App
        />
      </div>

    );
  }
});
