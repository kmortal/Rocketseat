//verbos HTTP que recebem o body são o patch, put e post

const express = require('express')
const app = express()

app.use(express.json())

app.route('/').get((req, res) => {
    console.log(req.body)
})

app.route('/').post((req, res)=>{
    console.log(req.body)
    console.log(req.body.name)
    const {name, age} = req.body //os nomes têm que ser iguais ao do body
    res.send(`Hello, ${name}. You are ${age} years old`)
})

app.listen('1080')

console.log('\nserver: ok.\n')