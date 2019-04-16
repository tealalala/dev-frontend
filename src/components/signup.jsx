import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  };

  newFirstName = event => {
    this.setState({ firstName: event.target.value });
  };
  newLastName = event => {
    this.setState({ lastName: event.target.value });
  };
  newEmail = event => {
    this.setState({ email: event.target.value });
  };
  newPassword = event => {
    this.setState({ password: event.target.value });
  };
  newPasswordConfirm = event => {
    this.setState({ passwordConfirmation: event.target.value });
  };

  submit(event) {
    event.preventDefault();

    const params = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.passwordConfirmation
    };
    console.log(params);

    axios
      .post(`http://localhost:3000/api/users`, params)
      .then(response => {
        console.log(response);
        console.log(response.data);
        console.log("success signup");
      })
      .catch(error => {
        console.log("failed signup");
      });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submit}>
          <h1>Signup</h1>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              className="form-control"
              onChange={this.newFirstName}
            />
            <label>Last Name:</label>
            <input
              type="text"
              className="form-control"
              onChange={this.newLastName}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              onChange={this.newEmail}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              onChange={this.newPassword}
            />
          </div>
          <div className="form-group">
            <label>Password confirmation:</label>
            <input
              type="password"
              className="form-control"
              onChange={this.newPasswordConfirm}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
