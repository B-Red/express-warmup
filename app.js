const express = require('express')
const app = express()
const data = require('./data.json')
const port = 3000

app.get('/cakes', (req, res, next) => {
    console.log("test")
})

app.listen(port)