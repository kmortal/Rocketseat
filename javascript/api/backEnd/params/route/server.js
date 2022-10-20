const express = require('express')
const app = express()

app.listen('1080')

app.route('/').get((req, res) => {
    res.send('utilize outras rotas')
})

app.route('/:variavel').get((req, res) => {
    res.send(`Você utilizou a rota onde os dois pontos indicam a entrada de uma variável: ${req.params.variavel}`)
})

app.route('/identificador/:name').get((req, res) => {
    res.send(`Você utilizou a rota onde você é identificado pelo nome: ${req.params.name}`)
})
console.log('server: ok')