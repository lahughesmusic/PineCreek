const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');

mongoose.Promise = Promise;

var Example = ('./userModel.js');

var app = express();

const users = require('./routes/api/users');
const post = require('./routes/api/post');


app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('public'));

mongoose.connect("mongodb://<lahughesmusic>:<lahughesmusic87>@ds141932.mlab.com:41932/connector"); 

var db = mongoose.connection;

db.on('error', function(error){
    console.log('Mongoose Connection Successful.')
});

app.post('/submit', function(req, res){
    var user = new Example(req.body);
    user.save(function(error, doc){
        if(error){
            res.send(error);
        }
        else{
            res.send(doc);
        }
    })
})

app.get('/', (req, res) => res.send("hello world"));
//USE ROUTES
app.use('/api/users', users);
app.use('/api/post', post);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));