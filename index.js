const express = require('express');
const app = express();
const cors = require('cors');
const getRouter = require('./routes/get.js')
const path = require('path')
const port = process.env.PORT || 3001;
// const knex = require('knex')(require('./knexfile.js')['development']);
const postRouter = require('./routes/post.js');
const deleteRouter = require('./routes/delete.js');
const patchRouter = require('./routes/patch.js');


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/get', getRouter);
app.use('/post', postRouter);
app.use('/delete', deleteRouter);
app.use('/patch', patchRouter);
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
// // Serve static files from the React frontend app
// app.use(express.static(path.join(__dirname, '../client')))

// // AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/../client/index.js'))
// })


//inner join users on users.user_id = users_tasks.user_id;

// app.use('/' I dont remember what to do from here)
// app.get('/', (req, res) => {
//   knex.select('task', 'name', 'status', 'priority', 'team_tasks.updated_at')
//   .from('team_tasks')
//   .innerJoin('users_tasks', 'team_tasks.task_id', 'users_tasks.task_id')
//   .innerJoin('users', 'users.user_id', 'users_tasks.user_id')
//   .then(data => res.status(200).json(data))
//   .catch(err => res.status(404).json('Nothing Found'))
// })



// stuff in the table
// 'user_id'
// 'status'
// 'priority'




