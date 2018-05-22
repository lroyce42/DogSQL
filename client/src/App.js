import React, { Component } from 'react';
import './App.css';
import Dogs from './Dogs.js'
import DogShow from './DogShow.js'
import Home from './Home.js'
import { BrowserRouter as Router, Link, Redirect, Route, NavLink, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <p>A list of <b>awesome</b> dogs</p>
          <ul className='nav-links'>
            <li> <Link to='/dogs'>Dogs</Link> </li>
            <li> <Link to='/dogs/:id'>Individual Dogs</Link> </li>
            {/* <li> <Link to='/dogs/:id/edit'>Update the Dogs!</Link> </li>     */}

          </ul>
          <Switch>
            <Route exact path='/dogs' component={Dogs} />
            <Route exact path='/dogs/:id' component={DogShow} />
            {/* <Route exact path='/dogs/:id/edit' component={DogEdit} /> */}
            <Route exact path='/home' component={Home} />
            <Redirect exact from='/' to='/home'/>
          </Switch>
        </div>
    </Router>
    );
  }
}

export default App;
