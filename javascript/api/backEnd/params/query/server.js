const express = require("express")
const app = express()

app.listen('1080')
app.route('/').get((req, res) => {
    res.send(req.query)
})

app.route('/user').get((req, res) => {
    res.send(req.query.id)
})
console.log('prossiga')