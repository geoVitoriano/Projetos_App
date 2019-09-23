const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

app.db = db // importou o knex já configurado

consign()
     // Definição do que será lido 
    .then('./config/middleware.js')
    .then('./api')
    .then('./config/routes.js')
    .then('')
    .into(app)

app.listen(3000, () => {
    console.log('Backend executando 2... ')
})