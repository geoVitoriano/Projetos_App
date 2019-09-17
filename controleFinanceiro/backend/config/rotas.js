const express = require('express')

module.exports = function( server ) {
    const rota = express.Router()
    server.use('/api', rota)
 
    // rotas de api
    const cicloDePagamentoServico = require('../api/cicloPagamento/cicloPagamentoServico')
    // console.log( " teste " + cicloDePagamentoServicos )
    cicloDePagamentoServico.register(rota, '/cicloPagamentos')
}