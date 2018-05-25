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

TricksRouter.get('/:id', (req, res) => {
  Trick.findById(req.params).then((trick) => {
    res.json(trick);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'Something went wrong 44'});
  });
});

TricksRouter.delete('/:id', (req, res) => {
  Trick.remove(req.params).then(() => {
    res.json({message: "trick was removed"});
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'Something went wrong 33'})
  });
});

module.exports = TricksRouter;
