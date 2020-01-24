const Validator = require('validatorjs')

const validateUser = (data) =>{
    let validate = new Validator(data, {
        'name': 'required|min:3',
        'email': 'required|email',
    },{
        'name.required': 'name is required',
        'email.required': 'email is required',
    })
    
    return validate
}

module.exports = validateUser
    
