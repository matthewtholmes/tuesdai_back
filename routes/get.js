const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile.js')['production']);

router.get('/', (req, res) => {
  knex.select('team_tasks.task_id', 'task', 'users.user_id', 'name', 'status', 'priority', 'team_tasks.updated_at')
  .from('team_tasks')
  .innerJoin('users_tasks', 'team_tasks.task_id', 'users_tasks.task_id')
  .innerJoin('users', 'users.user_id', 'users_tasks.user_id')
  .then(data => res.status(200).json(data))
  .catch(err => res.status(404).json('Nothing Found'))
})

router.get('/users', (req, res) => {
  knex.select('name')
  .from('users')
  .then(data => res.status(200).json(data))
  .catch(err => res.status(404).json('Nothing Found'))
})

module.exports = router;