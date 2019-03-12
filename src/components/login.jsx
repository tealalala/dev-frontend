import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
     super(props);
     this.submit = this.submit.bind(this);
   }

  state = {
      email: "",
      password: "",
  };

  userEmail = event => {
    this.setState({ email: event.target.value });
  };
  userPassword = event => {
    this.setState({ password: event.target.value });
  };

  submit(event) {
    event.preventDefault();

    const params = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(params);

    axios
      .post(`http://localhost:3000/api/sessions`, params)
      .then(response => {
        console.log(response);
        console.log(response.data);
        console.log("success login")
      })
      .catch(error => {
        console.log("failed login");
      });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submit}>
          <h1>Login</h1>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" className="form-control" onChange={this.userEmail}/>
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" onChange={this.userPassword}/>
          </div>
          <input type="submit" className="btn btn-primary" value="Submit"/>
        </form>
      </div>
    );
  };
};


export default Login;