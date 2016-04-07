import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

// data storage
let _data = [];
let _errors = [];
// Facebook style store creation.
const TodoStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getTodos() {
    return {
      todos: _data
    };
  },

  getErrors(){
    return _errors;
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function handleAction(payload) {
    const action = payload.action;
    _errors = [];
    switch (action.type) {
    case Constants.ActionTypes.TODO_GET_RESPONSE:
      // NOTE: if this action needs to wait on another store:
      // Dispatcher.waitFor([OtherStore.dispatchToken]);
      // For details, see: http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html#why-we-need-a-dispatcher
    
        if(action.json.todos){
          _data = action.json.todos;
        }
        
        TodoStore.emitChange();
    break;
    case Constants.ActionTypes.TODO_UPDATE_RESPONSE:
      
      if(action.json.error){
        _errors.push(action.json.error)
      }

      if(action.json.todo){
        for(var i = 0; i < _data.length; i++){
          if(_data[i]._id == action.json.todo._id){
            _data[i] = action.json.todo;
            break;
          }
        } 
      }


      TodoStore.emitChange();
    break;

    case Constants.ActionTypes.TODO_POST_RESPONSE:
      
      if(action.json.error){
        _errors.push(action.json.error)
      }

      if(action.json.todo){
        _data.push(action.json.todo)
      }
      
      TodoStore.emitChange();
    break;

    case Constants.ActionTypes.TODO_DELETE_RESPONSE:
      if(!action.deleteId) return;

      for(var i = 0; i < _data.length; i++){
        if(_data[i]._id == action.deleteId){
          _data.splice(i, 1);
          break;
        }
      }

      TodoStore.emitChange();
    break;
    // no default
    }
  })
});

export default TodoStore;
