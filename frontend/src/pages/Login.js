import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Login extends Component {
  state = {
    username: '',
    password: '',
    redirectToDashboard: false
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    if (username === 'JODAME' && password === 'fpb50') {
      this.props.handleLogin();
      this.setState({ redirectToDashboard: true });
    } else {
      alert('Invalid username or password.');
    }
  };

  render() {
    if (this.state.redirectToDashboard) {
      return <Navigate to="/dashboard" />;
    }

    return (
      <div className='page'>
      <div className="login-container">
        <h1>WELCOME TO RM. Wakeke</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleInputChange} />
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
          <button type="submit">Login</button>
        </form>
      </div>
      </div>
     
    );
  }
}

export default Login;
