const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/key');
const passport = require('passport')
//load input validation


// Load Input Validation
// const validateRegisterInput = require('../../validation/register');
// const validateLoginInput = require('../../validation/login');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load User model
const User = require('../../server/models/User');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  //check validation
  if(!isValid){
    return res.status(400).json(errors);
  }

    User.findOne({ username: req.body.username }).then(user => {
      if (user) {
        errors.username = 'Username already exists';
        return res.status(400).json(errors);
      } else {//maybe console.log?

  
        const newUser = new User({
          username: req.body.username,
          password: req.body.password
        });
  
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
});

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  //check validation
  if(!isValid){
    return res.status(400).json(errors);
  }
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({username})
  .then(user => {
    //check for user
    if(!user) {
      return res.status(404).json({username: 'Username not found'});
    }

    //check password
    bcrypt.compare(password, user.password)
    .then(isMatch => {
      if(isMatch){
       //user matched
       //payload
       const payload = {  id: user.id, name: user.username } //create jwt payload
       //sign token
       jwt.sign(
         payload, 
         keys.secret, 
         { expiresIn: 3600 }, 
         (err, token) => {
           res.json({
             sucess: true,
             token: 'Bearer ' + token
           });

       });   
      }
      else{
        return res.status(400).json({password: 'Password incorrect'});
      }
    })
  })
})

//GET api/users/curren
//return current user
//private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) =>{
  res.json(req.user);
})

module.exports = router;

