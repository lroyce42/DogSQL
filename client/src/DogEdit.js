import React, { Component } from 'react';
import axios from 'axios';

class DogEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {doggie_username: '', owner_name: '', age: '', weight: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { doggie_username, owner_name, age, weight } = this.state;

    return(
      <div className='DogEdit'>
        Dog Name: <input value={doggie_username} name="doggie_username" onChange={this.handleChange}/>
        <br />
        Dog Owner: <input value={owner_name} name="owner_name" onChange={this.handleChange}/>
        <br />
        Dog Age: <input value={age} name="age" onChange={this.handleChange} type="number"/>
        <br/>
        Dog Weight: <input value={weight} name="weight" onChange={this.handleChange} type="number"/>
        <br/>
        <button onClick={this.handleSubmit}>Submit!</button>
      </div>
    )
  }

  handleChange (event) {
    const {value, name} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit () {
    const { id } = this.props.match.params;
    // let id = 5;
    const { doggie_username, owner_name, age, weight } = this.state;
    axios.put(`/api/dogs/${id}`, { doggie_username, owner_name, age, weight }).then(res => {
      this.props.history.push(`/dogs/${id}`); // send client back to dog show
    }).catch(e => {
      console.warn(e);
    });
  }

  componentDidMount () {
    const { id } = this.props.match.params;
    axios.get(`/dogs/${id}`).then(res => {
      const { doggie_username, owner_name, age, weight } = res.data;
      this.setState({ doggie_username, owner_name, age, weight });
    });
  }
}


export default DogEdit;
