import React, { Component } from 'react';
import LoginComponent from './Components/LoginComponent';
import RegistrationComponent from './Components/RegComponent';
import CreateTaskComponent from './Components/CreateTaskComponent';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App container">   
          <h1>TODO APP</h1>
          <LoginComponent />
          <RegistrationComponent />
          <CreateTaskComponent />

          <div className="displayTasks">
            <h2>Tasks</h2>
            <ul>
              {
                this.props.todos.map(todo => {
                  return <li key={todo.id}><input type="checkbox"/> {todo.name}</li>
                })
              }
            </ul>
          </div>
      </div>
    );
  }
}

export default App;
