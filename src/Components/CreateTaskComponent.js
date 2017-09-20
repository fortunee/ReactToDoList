import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './../Actions';

class CreateTaskComponent extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = {};

        for (const field in this.refs) {
            formData['id'] = Math.floor(Math.random() * 100);
            formData[field] = this.refs[field].value;
        }
        this.props.createTodo(formData);
    }
    render() {
        return (
            <div className="createTask">
                <h2>Create Task</h2>
                <form onSubmit={this.handleSubmit}>
                    Enter a Task:
                    <input ref="name" name="name" type="text"/>
                    <button 
                        type="submit"
                        className="btn btn-primary">
                        Create
                    </button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({createTodo: actions.addTodo}, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateTaskComponent);