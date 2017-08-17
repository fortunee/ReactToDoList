import React, { Component } from 'react';


class RegistrationComponent extends Component {
    render() {
        return (
            <div className="RegComp">
                <h2>Registration</h2>
                Name: <input type="text"/><br/><br/>
                Username: <input type="text"/><br/><br/>
                Password: <input type="text"/><br/>
                <button className="btn btn-primary">Register</button>
            </div>
        )
    }
}

export default RegistrationComponent;