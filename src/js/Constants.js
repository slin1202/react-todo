import keyMirror from 'fbjs/lib/keyMirror';


export default {
  // event name triggered from store, listened to by views
  CHANGE_EVENT: 'change',
  APIUrl : "http://bridgit-­todo-­api.herokuapp.com/api",
  // Each time you add an action, add it here... They should be past-tense
  ActionTypes: keyMirror({
    TODO_GET_REQUEST: null,
    TODO_GET_ONE_REQUEST: null,
    TODO_POST_REQUEST: null,
    TODO_POST_RESPONSE: null,
    TODO_GET_RESPONSE: null,
    TODO_UPDATE_REQUEST: null,
    TODO_UPDATE_RESPONSE: null,
    TODO_DELETE_REQUEST: null,
    TODO_DELETE_RESPONSE: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
