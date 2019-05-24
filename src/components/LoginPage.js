import React, { Component } from 'react';

class Login extends Component {
    state = {
        username: '',
        password: '',
    }

 

    render() {
        return (
            <div className="form-container">
                <h2 id="login-h2" className="display-3">Login</h2>
                <div id="loginusername" className="form-group">
                    <label htmlFor="">Username </label>
                    <input
                        type="text"
                        placeholder="Username"
                        className="form-control"
                        value={this.state.username}
                        onChange={(e) => this.setState({ username: e.target.value })} />
                </div>

                <div id="loginpassward" className="form-group">
                    <label htmlFor="">Password </label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        value={this.state.password}
                        onChange={(e) => this.setState({ password: e.target.value })}  />
                </div>
                <div className="form-group">
                    <button id="login-btn" className="btn btn-primary" onClick={() => this.props.logIn(this.state)}>Login</button>
                </div>
            </div>
        );
    }
}

export default Login;