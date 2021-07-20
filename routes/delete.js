const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile.js')['production']);

router.delete('/user/:name', (req, res) => {
  const name = req.params.name
  knex('users')
    .where('name', name)
    .delete()
  .then(data => res.status(200).json(data))
  .catch(err => res.status(404).json('Nothing Found'))
})

module.exports = router;