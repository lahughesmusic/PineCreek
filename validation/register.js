const Validator = require('validator');
const isEmpty = require('./is-empty');

module.export = function validateRegisterInput(data){
    let errors = {};

    if(!Validator.isLength(data.username, {min: 2, max: 30 })){
        errors.name = 'name must be between 2 and 30 characters';
    }
    return {
        errors, 
        isValid: isEmpty(errors)
    }
}