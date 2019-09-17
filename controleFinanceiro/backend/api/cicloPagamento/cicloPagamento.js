const restful = require('node-restful')
const mongoose = restful.mongoose
// Mapeamento objeto documento
//Criação dos esquemas abaixo 
const creditosSchema = new mongoose.Schema({
    nome : {type : String, registred : true },
    valor : { type : Number, min : 0, required : true }
})

const debitosSchema = new mongoose.Schema({
    nome : { type : String, required : true },
    valor : { type : Number, min : 0, required : true },
    status : { type : String, required : false, uppercase : true },
    enum : ['PAGO', 'PENDENTE', 'AGENDANDO' ]
})

const cicloDePagamentoSchema = new mongoose.Schema({
    nome: {type : String, required : true},
    mes : {type : Number, min : 1, max : 12, required :true},
    ano : { type : Number, min : 1970, max : 2100, required : true },
    creditos : [creditosSchema],
    debitos : [debitosSchema]
})
// Importar os esquemas
module.exports = restful.model('CicloDePagamento', cicloDePagamentoSchema)