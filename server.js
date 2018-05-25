const express = require('express');
const app = express();
const PORT = process.env.PORT || 4200;
const bodyParser = require('body-parser');
const DoggieRouter = require('./routes/dogs');
const TricksRouter = require('./routes/tricks.js');
var http = require('http').Server(app);
var io = require('socket.io')(http);
const path = require('path');
app.use(express.static(path.resolve(__dirname, './client/build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

<<<<<<< HEAD
=======


>>>>>>> 128042e34ce142c8139771c55eb19e6171e3cf14
app.use('/api/dogs', DoggieRouter);
app.use('/api/tricks', TricksRouter);

app.get('/', (req, res) => {
  res.json({message: 'Welcome to the home planet'});
});

app.get('*', (req, res) => {
  res.status(404).json({message: "404 Resource not found"})
})

// http.listen(PORT, () => {
//   console.log(`listening on *:${PORT}`);
// });
app.listen(PORT, () => {
  console.log(`Website kickin it at ${PORT}`);
})

require('./dogServer.js')(io);
