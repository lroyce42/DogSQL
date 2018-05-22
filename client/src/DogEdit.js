import React from 'react';
import axios from 'axios';

class DogEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dogName: null, dogOwner: null, dogAge: null}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { dogName, dogOwner, dogAge } = this.state;
    return(
      <div className='DogEdit'>
        Dog Name: <input value={dogName} name="dogName" onChange={this.handleChange}/>
        Dog Owner: <input value={dogOwner} name="dogOwner" onChange={this.handleChange}/>
        <br />
        Dog Age: <input value={dogAge} name="dogAge" onChange={this.handleChange}/>
        {/* <img src={photo} alt="my-face" width="200"/> */}
        <br/>
        <button onClick={this.handleSubmit}>Submit!</button>
      </div>
    )
  }

  handleChange (event) {
  // https://reactjs.org/docs/forms.html#handling-multiple-inputs
    // const {value, name} = event.target;
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit () {
    const { id } = this.props.match.params;
    const { dogName, dogOwner, dogAge } = this.state;

    axios.put(`/api/dogs/${id}`, { dogName, dogOwner, dogAge }).then(res => {
      this.props.history.push(`/api/dogs/${id}`); // send client back to teacher show
    }).catch(event => {
      console.warn(event);
      alert('Something occured');
    });
  }
}


export default DogEdit;
