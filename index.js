const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
// const passport = require('passport');

const users = require('./routes/api/users');
const posts = require('./routes/api/post');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config


// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/pinecreek')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);
// require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/post', posts);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));
