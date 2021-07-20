const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile.js')['production']);

router.post('/user', (req, res) => {
  knex('users')
  .insert({
    name: req.body.name
  })
  .then(data => res.status(200).json(data))
  .catch(err => res.status(404).json('Nothing Found'))
})

module.exports = router;