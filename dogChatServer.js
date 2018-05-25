const configureBroadcastChat = io => {
  io.on('connection', socket => {
    socket.on('send-thing', thing => {
      socket.broadcast.emit('get-thing', thing);
      socket.broadcast.emit();
    });
  });
};

module.exports= configureBroadcastChat;
