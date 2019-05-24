import React, { Component } from 'react';


class Signup extends Component {
    state = {
        username: '',
        email: '',
        password: ''
    }

    onSignUp = () => {
        console.log('tet')
        this.props.signUp(this.state);

        this.setState({
            username: '',
            email: '',
            password: ''
        })
    }


    // $('#myModal').on('hidden.bs.modal', function (e) {
    //     // do something...
    //   })


    render() {
        return (
            <div className="form-container">
                <h2 id="signup-h2" className="display-3">Signup</h2>
                <div id="username" className="form-group">
                    <label htmlFor="">Username </label>
                    <input
                        type="text"
                        placeholder="Username"
                        className="form-control"
                        value={this.state.username}
                        onChange={(e) => this.setState({ username: e.target.value })} />
                </div>

                <div id="email" className="form-group">
                    <label htmlFor="">Email </label>
                    <input
                        type="email"
                        placeholder="Example@Gmail.com"
                        className="form-control"
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })} />
                </div>

                <div id="password" className="form-group">
                    <label htmlFor="">Password </label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        value={this.state.password}
                        onChange={(e) => this.setState({ password: e.target.value })} />
                </div>
                <div className="form-group" >
                    <button id="signup-btn" className="btn btn-primary" onClick={this.onSignUp}>Signup</button>
                </div >
            </div>
        );
    }
}

export default Signup;