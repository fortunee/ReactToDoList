import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import LoginComponent from './Components/LoginComponent';
import RegistrationComponent from './Components/RegComponent';
import CreateTaskComponent from './Components/CreateTaskComponent';
import HomeComponent from './Components/HomeComponent'

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App container">   
          <h1>TODO APP</h1>
          <nav className = "nav-menu">
            <ul>
              <li><Link to="/">Home</Link></li> |
              <li><Link to="/login">Login</Link></li> |
              <li><Link to="/register">Register</Link></li> |
              <li><Link to="/add">Add</Link></li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/" component = {() => <HomeComponent todos={this.props.todos}/>}/>
            <Route path="/login" component = {LoginComponent}/>
            <Route path="/register" component = {RegistrationComponent}/>
            <Route path="/add" component = {CreateTaskComponent}/>
          </Switch>
          
      </div>
    );
  }
}

export default App;
