import React, { Component } from "react";
import Signup from "./signup.jsx";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const gitHub = <FontAwesomeIcon icon={faGithub} />;

class SignupModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render() {
    return (
      <>
        <a href="#" className="nav-link" onClick={this.handleShow}>
          Sign-Up
        </a>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign-Up for a Dev Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Signup />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.submit}>
              Submit
            </Button>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SignupModal;
