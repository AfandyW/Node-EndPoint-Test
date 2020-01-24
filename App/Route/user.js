const express = require('express')
const router = express.Router()
const validateUser = require('../Controller/userController')

router.post('/api/member', (req, res)=>{
    let user = {
        name    : req.body.name,
        email   : req.body.email, 
    }

    let validate = validateUser(user);

    if (validate.passes()){
        return res.status(200).send({
            message: "User has been created"
        })
    } else {
        res.status(422).send(validate.errors)
    }
})

module.exports = router