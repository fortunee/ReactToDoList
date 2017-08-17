import React, { Component } from 'react';


class LoginComponent extends Component {
    render() {
        return (
            <div className="LoginComp">
                <h2>Login</h2>
                Username: <input type="text"/> <br/><br/>
                Password: <input type="password"/><br/>
                <button className="btn btn-primary">Login</button>
            </div>
        )
    }    
}

export default LoginComponent;