const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  // const { name } = req;
  const people = People.get();
  // if (name && people[0] === name) {
  // }
  res.send(people);
});

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  const { name } = req.body;
  People.enqueue(name);
  res.status(204).end();
  // req.name = name;
});

router.delete('/', json, (req, res) => {
  People.dequeue();
  res.status(200).end();
});

module.exports = router;
