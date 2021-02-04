const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');
const store = require('../../store');

const router = express.Router();

router.get('/', async (req, res) => {
  let newPet = Pets.get();
  if (!newPet.length) {
    Pets.refill();
    newPet = Pets.get();
  }
  res.send(newPet);
});

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  const { type } = req.body;
  Pets.dequeue(type);
  res.status(200).end();
});

module.exports = router;
