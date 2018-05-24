import React, { Component } from 'react';
import io from 'socket.io-client';
const socket = io();

class DogChat extends Component {
  constructor (props) {
    super(props);
    this.state = { Laura: [], otherUsers: [], currentThing: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render () {
    const { Laura, otherUsers, currentThing } = this.state;

    return (
      <div className="DogChat">
        <textarea name="currentThing" value={currentThing} onChange={this.handleChange} placeholder="Enter something about your dog"/>

        <button onClick={this.handleSubmit} disabled={!currentThing}>
          Send thing
        </button>

        <h4>Dog Chat</h4>
        <ul>
          {Laura.map((LauraChatItem, i) => <li key={i}>{LauraChatItem}</li>)}
        </ul>

        <h4>Others' things</h4>
        <ul>
          {otherUsers.map((thing, i) => <li key={i}>{thing}</li>)}
        </ul>
      </div>
    );
  }
  handleChange (event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  handleSubmit () {
    const { currentThing } = this.state;
    this.setState(prev => {
      return { Laura: prev.Laura.concat(currentThing) }
    });
    socket.emit('send-thing', currentThing);
  }
  componentDidMount () {
    socket.on('get-thing', thing => {
      this.setState(prev => {
        return { otherUsers: prev.otherUsers.concat(thing) }
      });
    });
  }
  componentWillUnmount () {
    socket.off('get-thing'); // the same as `socket.removeListener`
  }
}
export default DogChat;
