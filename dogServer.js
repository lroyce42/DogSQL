const configureSayHi = io => {
  io.on('connection', socket => {
    console.log('connected') // uncomment for debugging
    socket.on('send-hello', () => {
      console.log('sending message from server') // uncomment for debugging
      io.emit('get-hello');
    });
  });
};

module.exports = configureSayHi;
