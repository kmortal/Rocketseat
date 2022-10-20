const express = require('express')
const axios = require('axios')

const app = express()

app.listen('1080')

app.route('/').get((req, res) => {
    res.send('utilize a rota "/user/<username>" para checar seu usuário')
})

app.route('/user/:username').get((req, res) => {
    const user = axios.get(`https://api.github.com/users/${req.params.username}`)
                        .then(response => res.send(response.data))
                        .catch(()=> res.send('nome de usuário não identificado'))
})