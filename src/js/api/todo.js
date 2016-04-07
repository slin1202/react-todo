//Todo API
import ServerActionCreators from '../actions/ServerActionCreators';
import Constants from '../Constants';

var request = require('superagent');

export default {

	getTodos: function(){
		request.get(Constants.APIUrl + "/todos")
			.set('Accept', 'application/json')
			.end(function(error, res){
				if(res){

					var json = JSON.parse(res.text);
				
					if(error in json){
						ServerActionCreators.receiveTodos(null, json);
					}
					else{
						ServerActionCreators.receiveTodos(json, null);
					}
					
				}
			})
	},

	updateTodo: function(updatedTodo){
		request.patch(Constants.APIUrl + "/todos/" + updatedTodo.todo._id)
			.send(updatedTodo)
			.set('Accept', 'application/json')
			.end(function(error, res){
				if(res){

					var json = JSON.parse(res.text);
				
					if(error in json){
						ServerActionCreators.updateTodos(null, json);
					}
					else{
						ServerActionCreators.updateTodos(json, null);
					}
					
				}
			})

	},

	addTodo: function(newTodo){
		request.post(Constants.APIUrl + "/todos/")
			.send(newTodo)
			.set('Accept', 'application/json')
			.end(function(error, res){
				if(res){

					var json = JSON.parse(res.text);
					ServerActionCreators.addTodo(json);
					
				}
			})

	},

	deleteTodo: function(deleteId){
		request.del(Constants.APIUrl + "/todos/" + deleteId)
			.set('Accept', 'application/json')
			.end(function(error, res){
				if(res){

					ServerActionCreators.deleteTodo(deleteId);
					
				}
			})

	}

}