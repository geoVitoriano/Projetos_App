const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))

server.listen(port, function(){
    console.log(`Backend rodando na porta ${port} .`)
})
/*
server.use(function(req, res, next){
    //res.send('Funcionou')
    console.log("middleware 1")
    next()
})
*/
/*
server.use(function(req, res, next ){
    console.log("middleware 2")
    res.send("Funcionou novamente")
})
*/
// O servidor deve ser exportado para no arquivo loader retornar o server para a função rotas
module.exports = server
