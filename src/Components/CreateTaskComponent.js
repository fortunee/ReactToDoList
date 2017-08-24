import React, { Component } from 'react';

class CreateTaskComponent extends Component {
    render() {
        return (
            <div className="createTask">
                <h2>Create Task</h2>
                    Enter a Task: <input type="text"/>
                <button className="btn btn-primary">Create</button>
            </div>
        )
    }
}

export default CreateTaskComponent;