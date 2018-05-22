import React, { Component } from 'react';
import axios from 'axios';

class DogShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { oneDog: null, dogProps: props.match.params.id };
  }
  render () {
    const { oneDog } = this.state;
    if(!oneDog) { return <div className="oneDog">...loading</div> }

    return (
      <div className="oneDog">
        <ul>

          <li>{oneDog.doggie_username}</li>
          <li>{oneDog.owner_name}</li>
          <li>{oneDog.age}</li>
          <li>{oneDog.weight}</li>

        </ul>
      </div>
    );
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    axios.get(`/api/dogs/${id}`).then(res => {
      this.setState({oneDog: res.data})
    });
  }
}

export default DogShow;
