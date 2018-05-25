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
      console.log(error)
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

DoggieRouter.get('/:id/tricks/', (req, res) => {
  Dog.findAllTricks(req.params).then((tricks) => {
    res.json(tricks);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'Something went wrong 6'})
  });
});

DoggieRouter.post('/:id/tricks', (req, res) => {
  Dog.addTrick(req.params, req.body).then((trick) => {
    res.json(trick);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'something 222 went wrong'})
  });
});

DoggieRouter.get('/:dogid/tricks/:trickid', (req, res) => {
  Dog.findOneTrick(req.params).then((trick) => {
    res.json(trick);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: "something went wrong 8"});
  });
});

DoggieRouter.put('/:dogid/tricks/:trickid', (req, res) => {
  Dog.findOneTrickAndUpdate(req.params, req.body)
  .then((updatedTrick) => {
    res.json(updatedTrick);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'Something Went Wrong 9'});
  });
});

DoggieRouter.delete('/:dogid/tricks/:trickid', (req, res) => {
  Dog.findTrickByIdAndRemove(req.params)
  .then((trickRemoved) => {
    res.json(trickRemoved);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'Something went wrong 10'});
  });
});

module.exports = DoggieRouter;
