import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Signup from './components/SignupPage';
import Home from './components/HomePage';
import Nav from './components/Nav';
import Login from './components/LoginPage';
import Chatroom from './components/ChatroomPage';



class App extends Component {
  state = {
    users: [],
    currentUser: {},
    isLoggedIn: false,
    isSignedUp: false
  }

  signUp = (user) => {
    this.setState({
      users: [...this.state.users, user],
      isSignedUp: true
    })
  }

  logIn = (user) => {
    let current = this.state.users.filter(u => u.username === user.username && u.password === user.password);
    if (current.length > 0) {
      this.setState({
        currentUser: current[1],
        isLoggedIn: true
      })
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Chatroom</h1>
        </header>
        <div>
          <Nav />
          {this.state.isSignedUp && <Redirect to='/loginpage' />}
          {this.state.isLoggedIn && <Redirect to='/chatroompage' />}

          <Switch>
            <Route exact path='/homepage' render={() => <Home headerText="" />} />
            <Route path='/signuppage' render={() => <Signup signUp={this.signUp} />} />
            <Route path='/loginpage' render={() => <Login logIn={this.logIn} />} />
            <Route path='/chatroompage' render={() => <Chatroom headerText="" />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
