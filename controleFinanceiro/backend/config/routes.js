

const express = require('express')

module.exports = function( server ) {
    const rota = express.Router()
    server.use('/api', rota)
 
    //rota.route('/teste').get(function(req, res, next){
    //    res.send('funcionou')
    //})
    // rotas de api
    const cicloDePagamentoServico = require('../api/cicloPagamento/cicloPagamentoServico')
    cicloDePagamentoServico.register(rota, '/cicloPagamentos')

    
}

