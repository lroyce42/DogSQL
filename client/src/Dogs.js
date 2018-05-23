import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Dogs extends Component {
  constructor(props) {
    super(props)
    // this.state = { dogs: [] };
    this.state = {dogs: [], dogName: '', dogOwner: '', dogAge: '', dogWeight: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { dogs, dogName, dogOwner, dogAge, dogWeight } = this.state;
    debugger;
    if(!dogs) {
      return <div>...loading!</div>
    }

    return (
      <div className="DogIndex">
        {dogs.map((dog) => this.renderDog(dog))}
        <div >
          <h2> Add a new dog: </h2>
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

   handleChange (event) {
     const {value, name} = event.target;
     this.setState({
       [name]: value
     });
   }

   handleSubmit () {
     // const { id } = this.props.match.params;
     const { dogName, dogOwner, dogAge, dogWeight } = this.state;
     debugger;
     axios.post(`/api/dogs/`, { dogName, dogOwner, dogAge, dogWeight }).then(res => {
       this.props.history.push(`/api/dogs/`); // send client back to dog show
       console.log(res);
     }).catch(e => {
       console.warn(e);
       alert('Something occured');
     });
   }

   // componentDidMount () {
   //   const { id } = this.props.match.params;
   //   axios.get(`/dogs/`).then(res => {
   //     const { dogName, dogOwner, dogAge, dogWeight } = res.data;
   //     this.setState({ dogName, dogOwner, dogAge, dogWeight });
   //   });
   //   debugger;
   // }
   componentDidMount () {
     axios.get('/api/dogs').then(res =>
       {this.setState({ dogs: res.data })
     });
   }
}

export default Dogs;
