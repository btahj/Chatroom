import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {
    state = {
    }




    render() {
        return (
            <div className="top-nav">
                <div className="top-nav-container">
                        <div className="link-container">
                            <Link
                                id="Home"
                                className="btn btn-info btn-xs"
                                to='/homepage'>
                                Home
                                </Link>
                            <Link
                                id="Signup"
                                className="btn btn-info btn-xs"
                                to='/signuppage'>
                                Signup
                                </Link>
                            <Link
                                id="Login"
                                className="btn btn-info btn-xs"
                                to='/loginpage'>
                                Login
                                </Link>
                        </div>
                </div>
            </div >
        );
    }
}

export default Nav;