import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import axios from "axios";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    user: {}
  };

  componentDidMount() {
    axios.get(`http://localhost:3000/api/users/me`).then(res => {
      console.log(res.data);
      const user = res.data;
      this.setState({ user });
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Hello World</h2>
        <h2>{this.state.user.full_name}</h2>
      </div>
    );
  }
}
export default Profile;
