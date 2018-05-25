import React, { Component } from 'react';
import socket from './socket.js'

class SimpleDogChat extends Component {
  render() {
    return (
      <div className="SayHi">
        <button onClick={() => this.handleClick()}>
          Lets talk about dogs
        </button>
      </div>
    )
  }

  handleClick() {
    socket.emit('send-hello');
  }

  componentDidMount() {
    socket.on('get-hello', () => {
      console.log('welcome to dog chat!');
    });
  }

  componentWillUnmount() {
    socket.removeListener('get-hello');
  }
}

export default SimpleDogChat;
