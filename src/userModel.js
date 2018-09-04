var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        trim: tru,
        required: 'Username is Required'
    },

    password: {
        type: String,
        trim: true,
        required: 'Password Required',
        validate: [
            function(input) {
                return input.length >= 6;
            },
            "Password should be longer."
        ]
    },

    userCreated: {
        type: Date,
        default: Date.now
    }
})

var User = mongoose.model("User", UserSchema);

module.exports = User;