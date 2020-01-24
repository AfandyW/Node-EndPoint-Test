const express = require('express')
const bodyParser = require('body-parser')

const router = require('./App/Route/user')

const app = express()

app.use(bodyParser.json())

//create Route
app.use('/user', router)

app.listen(3000, ()=> {
    console.log('on port 3000')
})
