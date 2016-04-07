import React, {PropTypes} from 'react';
import Button from 'react-bootstrap/lib/Button';
import Input from 'react-bootstrap/lib/Input';
import TodoStore from '../stores/TodoStore';
import TodoActionCreator from '../actions/TodoActionCreators';
import Constants from '../Constants';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Alert from 'react-bootstrap/lib/Alert';
import ButtonInput from 'react-bootstrap/lib/ButtonInput';
import Panel from 'react-bootstrap/lib/Panel';

export default React.createClass({

  getInitialState: function() {
    return {
      todos: [],
      errors: [],
      newTodo: "",
      editTodo: ""
    }
  },

  getDefaultProps() {

  },

  _onChange(){
    this.setState({todos: TodoStore.getTodos()})
    this.setState({errors: TodoStore.getErrors()})
  },

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange);
    TodoActionCreator.getTodos();
  },

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  },

  updateTodo(task, e){
    var newTask = {todo: task};
    newTask.todo.completed = !newTask.todo.completed;

    TodoActionCreator.updateTodo(newTask);
  },

  handleChange(e){
    this.setState({newTodo: e.target.value})
  },

  handleEditChange(e){
    var tempTodo = this.state.editTodo;
    this.setState({editTodo: { text : e.target.value, _id: tempTodo._id}});
  },

  newTodo(){
    if(!this.state.newTodo){
      return this.setState({errors: ["Text is required"]});
    }
    TodoActionCreator.addTodo({todo: { text: this.state.newTodo}})
    this.state.newTodo = "";
  },

  deleteTodo(id, e){
    TodoActionCreator.deleteTodo(id);
  },

  beginEditTodo(toDoToEdit, e){
    this.setState({editTodo: toDoToEdit});
  },

  editTodo(){

    if(!this.state.editTodo.text){
      return this.setState({errors: ["Text is required"]});
    }  

    TodoActionCreator.updateTodo({todo: this.state.editTodo});
    this.state.editTodo = null;
  },

  render() {

    var newTasks = [];
    var newButtons = [];
    var todos = this.state.todos.todos;
    if (!todos) {
      return (
        <Alert bsStyle="warning">
          <strong>You have no tasks</strong> Create some using the Add New button below.
        </Alert>
      );
    }    

    for(var i = 0; i < todos.length; i++){
      newTasks.push(<div key={i} ><Input type="checkbox" ref="checkbox" label={todos[i].text} defaultChecked={todos[i].completed} onChange={this.updateTodo.bind(this, todos[i])} /> <Button bsStyle="danger" onClick={this.deleteTodo.bind(this, todos[i]._id)}>Delete Todo</Button> <Button onClick={this.beginEditTodo.bind(this, todos[i])}>Edit Todo</Button></div>);
    }

    var editTask = [];

    if(this.state.editTodo){
      editTask.push(<div key={1}><Input type="text" label="Edit task:" value={this.state.editTodo.text} onChange={this.handleEditChange}  placeholder="Please enter your task" />
          <ButtonInput type="submit" value="Edit Task" onClick={this.editTodo}/></div>)
    }

    var errors = [];
    if(this.state.errors){
      for(var i = 0; i < this.state.errors.length; i++){
        errors.push(<Panel key={i} header="Error" bsStyle="primary">{this.state.errors[i]}</Panel>)
      }
    }

    return (
      <div className="container">
        <form>
          <ListGroup>
            <ListGroupItem>
              {newTasks} 
            </ListGroupItem>
          </ListGroup>
          {editTask}
          <Input type="text" label="New task:" value={this.state.newTodo} onChange={this.handleChange}  placeholder="Please enter your task" />
          <ButtonInput type="submit" value="Submit new task" onClick={this.newTodo}/>
        </form>
        {errors}
      </div>
    );
  }
});
