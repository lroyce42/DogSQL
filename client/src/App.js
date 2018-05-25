import React, { Component } from 'react';
import './App.css';
import Dogs from './Dogs.js'
import DogShow from './DogShow.js'
import DogEdit from './DogEdit.js'
import Home from './Home.js'
import { BrowserRouter as Router, Link, Redirect, Route, NavLink, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <p>A list of <b>awesome</b> dogs</p>
          <ul className='nav-links'>
            <li> <NavLink to='/dogs'>Dogs</NavLink> </li>
            <li> <Link to='/dogs/chat'>Chat about Dogs!</Link> </li>
          </ul>
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/dogs' component={Dogs} />
            <Route exact path='/dogs/chat' component={SimpleDogChat} />
            <Route exact path='/dogs/chat/more' component={DogChat} />

            <Route exact path='/dogs/:id' component={DogShow} />
            <Route exact path='/dogs/:id/edit' component={DogEdit} />
            <Redirect exact from='/' to='/home'/>
          </Switch>
        </div>
    </Router>
    );
  }
}

export default App;
