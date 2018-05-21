const express = require('express');
const app = express();
const PORT = process.env.port || 3000;
const bodyParser = require('body-parser');
const DoggieRouter = require('./routes/dogs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.json({message: 'Welcome to the home planet'});
});

app.use('/dogs', DoggieRouter);

app.get('*', (req, res) => {
  res.status(404).json({message: "404 Resource not found"})
})

app.listen(PORT, () => {
  console.log(`Website kickin it at ${PORT}`);
})
