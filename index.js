const express = require('express');
const app = express();
const cors = require('cors');
const getRouter = require('./routes/get.js')
const path = require('path')
const postRouter = require('./routes/post.js');
const deleteRouter = require('./routes/delete.js');
const patchRouter = require('./routes/patch.js');
const port = process.env.PORT || 3001;

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