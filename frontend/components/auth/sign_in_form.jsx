import React from 'react';
import {Link} from 'react-router-dom';

class SignInForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: "", password: ""};

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  handleUsername(e){
    e.preventDefault();
    let username = document.getElementById("signin-username").value;
    this.setState({username});
  }

  handlePassword(e){
    e.preventDefault();
    let password = document.getElementById("signin-password").value;
    this.setState({password});
  }

  handleGuest(e){
    e.preventDefault();
    this.props.signin({username: "Guest", password: "password"});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.signin(this.state);
  }

  render(){
    return (
      <div className="sign-in-container">
        <h1>Sign In!</h1>
        <form className="sign-in-form">

          <h3 className="errors">{this.props.errors}</h3>

          <h3>Username</h3>
          <input type="text" id="signin-username"
            value={this.state.username}
            onChange={this.handleUsername}>
          </input>

          <h3>Password</h3>
          <input type="password" id="signin-password"
            value={this.state.password}
            onChange={this.handlePassword}>
          </input>

          <div className="sign-in-buttons">
            <button onClick={this.handleSubmit}
              className="sign-in-button">Sign In</button>
            <button onClick={this.handleGuest}
              className="demo-button">Continue as a Guest</button>
          </div>

          <p>Not a member?</p>
          <Link to="/signup">Sign Up Here </Link>

        </form>

      </div>
    );
  }
}

export default SignInForm;
