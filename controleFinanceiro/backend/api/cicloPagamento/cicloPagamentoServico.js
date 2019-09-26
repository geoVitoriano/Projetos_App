const CicloDePagamento = require('./cicloPagamento')
// NodeRest vai criar a api rest baseado em cima dos verbos http
// Vão ser criados os serviços Restful para o objeto ciclo de pagamento
CicloDePagamento.methods(['get', 'post', 'put', 'delete'])
// Será utilizado no mapeamento das rotas
module.exports = CicloDePagamento