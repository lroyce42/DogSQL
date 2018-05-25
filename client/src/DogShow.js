import React from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

class DogShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { oneDog: null, dogProps: props.match.params.id };
  }
  render () {
    const { oneDog, dogProps } = this.state;
    const { id } = dogProps;
    const { url } = `/dogs/${id}/edit`;
    if(!oneDog) { return <div className="oneDog">...loading</div> }

    return (
      <div className="oneDog">
        <ul>
          <li>{dogProps}</li>

          <li>Dog Name: {oneDog.doggie_username}</li>
          <li>Owner's Name: {oneDog.owner_name}</li>
          <li>Dog's Age: {oneDog.age}</li>
          <li>Dog's Weight: {oneDog.weight}</li>
        <br/>
           <Link to={`/dogs/${oneDog.doggie_id}/edit`}>
          Update the Dog </Link>
        <br/>

        </ul>
      </div>
    );
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/dogs/${id}`).then(res => {
      this.setState({oneDog: res.data})
    });
  }
}

export default DogShow;
