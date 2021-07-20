const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile.js')['production']);


router.patch('/task', (req, res) => {
  const {id, user_id, task, name, status, priority} = req.body
//   let newUser_id = ''
//   function getUserId() {knex.select('user_id')
//         .from('users')
//         .where('name', name)
//         .then(data => {
//           // newUser_id = data[0].user_id
//           return data[0].user_id
//           })
// }
  
  // const user_id = knex.select('name')
  //   .from('users')
  //   .where('name', name)
  // console.log(user_id)
  // knex('users_tasks')
  // .where('task_id', id)
  // .update({user_id: getUserId()})
  
  knex('team_tasks')
  .where('task_id', id)
  .update({
    task: task,
    status: status,
    priority: priority,
    updated_at: 'NOW()'})
    
    .then(data => res.status(201).send(data))
    .catch(data => res.status(404).send(data))
})

router.patch('/user', (req, res) => {
  const {id, name} = req.body
  let newUser_id = ''
  function getUserId() {
    knex.select('user_id')
        .from('users')
        .where('name', name)
        .then(data => {
          // newUser_id = data[0].user_id
          return data[0].user_id
          })
  }
    knex('users_tasks')
      .where('task_id', id)
      .update({user_id: getUserId()})
})

// const {name} = req.body;
// knex("client")
//   .update({name})
//   .where({id})
// .then(rows => {
//   // the argument here as you stated
//   // describes the number of rows updated
//   // therefore if no row found no row will be updated
//   if (!rows){
//     return res.status(404).json({success:false});
//   }
//   return res.json({success:true});
// })
// .catch( e => res.status(500).json(e)); 


module.exports = router;