import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "./components/home.jsx";
import About from "./components/about.jsx"
import './App.css';


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
    
    );
  }
}

export default App;

