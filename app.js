const express = require('express')
const app = express()
const data = require('./data.json')
const port = 3000

app.get('/', (req, res, next) => {
    res.send({ message: 'try again' })
})

app.get('/cakes', (req, res, next) => {
    res.send({ cakes: data })
})

app.get('/cakes/:id', (req, res, next) => {
    let id = req.params.id
    let matchingCake = data.filter(cake => { 
        return cake.id == id
    })
    if(!matchingCake.length){
        res.status(404).send({ message: "Yo thats made up."})
    } else {
        res.send({ cake: matchingCake[0]})
    }
    
})

app.listen(port)