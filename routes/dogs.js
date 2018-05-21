const express = require('express');
const DoggieRouter = express.Router();
const Dog = require('.././models/dog.js');

DoggieRouter.get('/', (req, res) => {
  Dog.find().then((dogs) => {
    res.json(dogs);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'Something Went Wrong'})
  });
});

DoggieRouter.get('/:id', (req,res) => {
  Dog.findById(req.params).then((dog) => {
    res.json(dog);
  }).catch((error) => {
    console.log(error);
    res.status(400).json({message: 'Bad Request'});
  });
});

  DoggieRouter.post('/', (req, res) => {
    Dog.save(req.body).then((dog) =>{
      res.json(dog)
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'Something Went Wrong'})
  });
});

DoggieRouter.put('/:id', (req, res) => {
  Dog.findByIdAndUpdate(req.params, req.body).then((dog) => {
      res.json(dog);
    }).catch((error) => {
      res.status(500).json({message: 'Something Went Wrong 4U'});
    });
});

DoggieRouter.delete('/:id', (req, res) => {
  Dog.findByIdAndRemove(req.params).then((dog) => {
    res.json(dog);
  }).catch((error) => {
    res.status(500).json({message: 'Something Went Wrong 5U'});
  });
});

module.exports = DoggieRouter;
