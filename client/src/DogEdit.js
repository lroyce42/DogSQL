import React, { Component } from 'react';
import axios from 'axios';

class DogEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dogName: '', dogOwner: '', dogAge: '', dogWeight: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { dogName, dogOwner, dogAge, dogWeight } = this.state;

    return(
      <div className='DogEdit'>
        Dog Name: <input value={dogName} name="dogName" onChange={this.handleChange}/>
        <br />
        Dog Owner: <input value={dogOwner} name="dogOwner" onChange={this.handleChange}/>
        <br />
        Dog Age: <input value={dogAge} name="dogAge" onChange={this.handleChange}/>
        <br/>
        Dog Weight: <input value={dogWeight} name="dogWeight" onChange={this.handleChange}/>
        <br/>
        <button onClick={this.handleSubmit}>Submit!</button>
      </div>
    )
  }

  handleChange (event) {
  // https://reactjs.org/docs/forms.html#handling-multiple-inputs
    const {value, name} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit () {
    const { id } = this.props.match.params;
    const { dogName, dogOwner, dogAge, dogWeight } = this.state;
    debugger;
    axios.put(`/api/dogs/${id}`, { dogName, dogOwner, dogAge, dogWeight }).then(res => {
      this.props.history.push(`/dogs/${id}`); // send client back to dog show
    }).catch(e => {
      console.warn(e);
      alert('Something occured');
    });
  }

  componentDidMount () {
    const { id } = this.props.match.params;
    axios.get(`/dogs/${id}`).then(res => {
      const { dogName, dogOwner, dogAge, dogWeight } = res.data;
      this.setState({ dogName, dogOwner, dogAge, dogWeight });
    });
    debugger;
  }
}


export default DogEdit;
