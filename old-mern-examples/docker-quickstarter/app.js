// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// initializing routes
const users = require('./routes/api/users');

const app = express();

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlparser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error(err));

app.get('/', (req, res) => res.send('Hello World!'));

// use Routes
app.use('/api/users', users);

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT  || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
