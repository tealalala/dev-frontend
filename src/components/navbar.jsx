import React from "react";
import About from "./about";
import Login from "./login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import LoginModal from "./loginModal.jsx";
import SignupModal from "./signupModal.jsx";
import LoginSignupModal from "./loginSignupModal.jsx";

const NavBar = () => (
  <Router>
    <div className="my-navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          TEAM DEV
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <SignupModal />
            </li>
            <li className="nav-item">
              <LoginModal />
            </li>
            <li className="nav-item">
              <LoginSignupModal />
            </li>
          </ul>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </div>
      </nav>
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
);

export default NavBar;
