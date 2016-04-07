import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import Input from 'react-bootstrap/lib/Input';

export default React.createClass({
  getInitialState() {
    return {
      selected: 'Test',
      projects: []

    };
  },

  _onChange(){
    //get projects
    //this.setState({projects: ProjectStore.getProjects()})
    console.log(this.state.projects)
  },

  componentDidMount() {
    //ProjectStore.addChangeListener(this._onChange);
    //ProjectActionCreators.getProjects();
  },

  changeSelected(evt){

    console.log(evt)
  },



  render() {
    var navStyle = {
      'backgroundColor': '#087c7c !important',
      'borderRadius': '0px !important'
    }

    var toolbarStyle = {
      'paddingTop': '15px'
    }

    var brandStyle = {
      'color': 'white'
    }
    return (
        <div>
          <Navbar style={navStyle}>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#" style={brandStyle}>ToDo List</a>
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>

        </div>
    );
  }
});
