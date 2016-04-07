import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

export default {

	receiveTodos: function(json, err){
		Dispatcher.handleViewAction({
			type: Constants.ActionTypes.TODO_GET_RESPONSE,
			json: json,
			err: err
		});

	},

	updateTodos: function(json, err){
		Dispatcher.handleViewAction({
			type: Constants.ActionTypes.TODO_UPDATE_RESPONSE,
			json: json,
			err: err
		});
	},

	addTodo: function(json, err){
		Dispatcher.handleViewAction({
			type: Constants.ActionTypes.TODO_POST_RESPONSE,
			json: json,
			err: err
		});
	},

	deleteTodo: function(deleteId){
		Dispatcher.handleViewAction({
			type: Constants.ActionTypes.TODO_DELETE_RESPONSE,
			deleteId: deleteId
		});
	}

}