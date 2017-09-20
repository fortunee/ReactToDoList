import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeComponent extends Component {
    listTodos() {
        return this.props.todos.map((todo) => {
            return (
                <div key={todo.id}>
                    <li><input type="checkbox" /> {todo.name}</li>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="displayTasks">
                <h2>Tasks</h2>
                <ul>
                    {this.listTodos()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}
export default connect(mapStateToProps)(HomeComponent);