import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
// import { connect } from 'react-redux';
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
            {/* <Route exact path="/" component = {() => <HomeComponent todos={this.props.todos}/>}/> */}
            <Route exact path="/" component = {HomeComponent}/>
            <Route path="/login" component = {LoginComponent}/>
            <Route path="/register" component = {RegistrationComponent}/>
            <Route path="/add" component = {CreateTaskComponent}/>
          </Switch>
          
      </div>
    );
  }
}


// const mapStateToProps = (state, ownProps) => {
//   return {
//     todos : state.todos
//   }
// }

export default App;


// /**
// Redux Flow
// - Store (One big JS object)
// - Provider ( Makes the store available to all the components)
// - Container (Wraps all our reusable components)
// - Components (State and Presentational components)
// - Actions (More like event handlers)
// - Reducers (This updates the store)
// */

// const store = {
//   users: [
//     {
//       name: 'fortune',
//       age: 34,
//       location: 'Lagos'
//     }
//   ] 
// }

// function updatedAgeReducer(action, state) {
//   switch(action.type) {
//     case 'UPDATE_AGE':
//     return {...state, state: action.payload}
//   }
// }