import React, { Component } from "react";
import logo from "./logo.svg";
import Login from "./components/login.jsx";
import LoginModal from "./components/loginModal.jsx";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Profile from "./components/profile.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </Router>
        <div className="my-footer"> 
        <Footer />
        </div>
      </div>
    
      <div className="container" />
      <div className="my-footer">
          <Footer />
      </div>
      </div>
    );
  }
}

export default App;
