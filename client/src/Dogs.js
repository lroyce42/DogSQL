import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Dogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dogs: null};
  }

  render() {
    if(!(this.state.dogs)) { return <div>...loading!</div> }

    return (
      <div clasName="DogIndex" >
        {dogs.map((dog) => this.renderDog(dog))}
      </div>
    );
  }

  renderDog(dog) {
    return(
      <li>{dog.doggie_username}</li>
      {/* <Link to={`/dogs/${dog.doggie_username}`}>{dog.doggie_username}</Link> */}
    );
  }

  componentDidMount() {
    axios.get('/api/dogs').then(res => {
      this.setState({dog: res.data})
    });
  }
}

export default Dogs;
