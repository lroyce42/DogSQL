import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Dogs extends Component {
  constructor(props) {
    super(props)
    this.state = { dogs: [] };
  }

  render() {
    const { dogs } = this.state;
    if(!dogs) {
      return <div>...loading!</div>
    }

    return (
      <div className="DogIndex">
       {dogs.map((dog) => this.renderDog(dog))}
      </div>
    );
  }

   renderDog(dog) {
    return(
      <ul>

        <li >{dog.doggie_id} {dog.doggie_username}</li>
      </ul>
      //{/* <Link to={`/dogs/${dog.doggie_username}`}>{dog.doggie_username}</Link> */}
     );
   }

// fetch('/api/dogs').then(r => r.json()).then(console.log)

  componentDidMount () {
    axios.get('/api/dogs').then(res =>
      {this.setState({ dogs: res.data })
    });
  }
}

export default Dogs;
