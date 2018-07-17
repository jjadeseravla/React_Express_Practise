const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//Bodyparesr middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

//use routes
app.use('api/items', items); //anything that goes to api/items should refer to the items variable (line 5)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
