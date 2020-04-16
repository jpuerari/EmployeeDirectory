import React, { Component } from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import { render } from '@testing-library/react';

class App extends Component {
  state = {
    employees : [
      {name: "Joseph Ferrari", position: "CEO of Translations LLC", role: "Founder of company" },
      {name: "Jaclyn Doe", position: "Director of Translation", role: "In charge of all the translation projects" },
    ],
    searchName: ""
  }

  renderEmployee = (employee, index) => (
   <tr key={index}>
     <td>{employee.name}</td>
     <td>{employee.position}</td>
     <td>{employee.role}</td>
   </tr> 
  );

  handleInputChange = (event)=>{
    // const name = event.target.name;
    const value = event.target.value;

    // Updating the input's state
    this.setState({
      searchName: value
    });
  }

  sort = (event)=>{
    //sort the employees array
    //update this.state.employees
  }

  render(){
    const filteredArr = this.state.employees.filter(employee => employee.name.toUpperCase().includes(this.state.searchName.toUpperCase()));
    return (
      <div>
        <input
          onChange={this.handleInputChange}
          name="searchName"
          value={this.state.searchName}
          type="text"
          placeholder="Search Employees"
        />
        <ReactBootStrap.Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {filteredArr.map(this.renderEmployee)}
          </tbody>
          </ReactBootStrap.Table>
          <button onClick={this.sort}>Sort</button>
      </div>
    );
  }
}

/* <ReactBootStrap.Table striped bordered hover> */
/* </ReactBootStrap.Table> */
export default App;
