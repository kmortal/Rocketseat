const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function(req, res){
    const brinks = [
        {
            title: 'E',
            message: 'mbedded'
        },
        {
            title: 'J',
            message: 'ava'
        },
        {
            title: 'S',
            message: 'cript'
        },
        {
            title: 'T',
            message: 'emplating'
        }
    ]
    res.render('pages/index', {text: brinks})
})

app.get('/sobre', function(req, res){
    res.render('pages/about')
})

app.listen(8080)
console.log('prossiga')