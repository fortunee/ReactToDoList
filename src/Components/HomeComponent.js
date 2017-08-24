import React, { Component } from 'react';
class HomeComponent extends Component {
    render() {
        return (
            <div className="displayTasks">
                <h2>Tasks</h2>
                <ul>
                    {
                        this.props.todos.map(todo => {
                            return <li key={todo.id}><input type="checkbox" /> {todo.name}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}
export default HomeComponent;