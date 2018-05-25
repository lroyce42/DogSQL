import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Dogs extends Component {
  constructor(props) {
    super(props)
    // this.state = { dogs: [] };
    this.state = {dogs: [], doggie_username: '', owner_name: '', age: '', weight: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { dogs, doggie_username, owner_name, age, weight } = this.state;
    if(!dogs) {
      return <div>...loading!</div>
    }

    return (
      <div className="DogIndex">

          {dogs.map((dog, i) => this.renderDog(dog, i))}

        <div id='newDogAdd' >
          <h2> Add a new dog: </h2>
          Dog Name: <input value={doggie_username} name="doggie_username" onChange={this.handleChange}/>
          <br />
          Dog Owner: <input value={owner_name} name="owner_name" onChange={this.handleChange}/>
          <br />
          Dog Age: <input value={age} name="age" onChange={this.handleChange}/>
          <br/>
          Dog Weight: <input value={weight} name="weight" onChange={this.handleChange}/>
          <br/>
          <button onClick={this.handleSubmit}>Submit!</button>
          </div>
      </div>
    );
  }

   renderDog(dog, i) {
    return(
      <ul key={dog.doggie_id}>
        <Link to={`/dogs/${dog.doggie_id}`}>{i} {dog.doggie_username}</Link>
      </ul>
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
     const { doggie_username, owner_name, age, weight } = this.state;
     axios.post('/dogs', { doggie_username, owner_name, age, weight }).then(res => {
       this.props.history.push(`/dogs/`); // send client back to dog show
       console.log(res);
     }).catch(e => {
       console.warn(e);
       alert('Check warning');
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
