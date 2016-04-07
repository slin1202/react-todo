import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import TodoAPI from '../api/todo'

/* eslint-disable no-console */

export default {
  getTodos() {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TODO_GET_REQUEST
    });

    TodoAPI.getTodos();
  },

  updateTodo(updatedTodo){
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TODO_GET_REQUEST
    });
    
    TodoAPI.updateTodo(updatedTodo);
  },

  addTodo(newTodo){

    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TODO_POST_REQUEST
    });
    
    TodoAPI.addTodo(newTodo);
  },

  deleteTodo(deleteId){

    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TODO_DELETE_REQUEST
    });
    
    TodoAPI.deleteTodo(deleteId);
  }
};
