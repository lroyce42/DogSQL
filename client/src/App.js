import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dogs from './Dogs.js'
import { BrowserRouter as Router, Redirect, Route, NavLink, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Switch>
              <Route exact path='/dogs' component={Dogs} />
              <Route exact path='/dogs/:id' component={DogShow} />
              <Route exact path='/home' component={Home} />
              <Redirect exact from='/' to='/home'/>
            </Switch>
        </div>
    </Router>
    );
  }
}

export default App;
