/*o navegador só aceita o método GET, por isso,
utilizamos o insomnia, que só mostra a res. 
A req aparece no console*/

const express = require('express')
const app = express()

app.listen('3000')



//middleware (momento antes da requisição)
app.use(express.json())



app.route('/').get((req, res)=>res.send('hello'))

//no terminal
//app.route('/post').post((req, res)=>console.log(req.body))
//no insomnia
app.route('/post').post((req, res)=>res.send(req.body))

//alterando uma variável no js pelo insomnia
let author = 'km0rtal'
app.route('/put').put((req, res) => {
    author = req.body.author
    res.send(author)
})
//somente para vermos a alteração
app.route('/put').get((req, res) =>res.send(author) )


app.route('/delete:identificador').delete((req,res)=>{
//  req.params.identificador = 'Variavel' (no insomnia)
    req.params.identificador = ''
    res.send(req.params.identificador)

})