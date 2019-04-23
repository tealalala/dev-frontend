import React, { Component } from "react";
import logo from "./logo.svg";
import Login from "./components/login.jsx";
import LoginModal from "./components/loginModal.jsx";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Profile from "./components/profile.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <div className="container" />
        <div className="my-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
