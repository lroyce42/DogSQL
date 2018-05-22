const express = require('express');
const TricksRouter = express.Router();
const Trick = require('.././models/trick.js');

TricksRouter.get('/', (req, res) => {
  Trick.findAll().then((tricksAndDogs) => {
    res.json(tricksAndDogs);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'Something went wrong again'})
  })
});


module.exports = TricksRouter;
