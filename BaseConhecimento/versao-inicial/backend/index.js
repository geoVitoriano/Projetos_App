const app = require('express')()
const consign = require('consign')

consign()
     // Definição do que será lido 
    .then('./config/middleware.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend executando 2... ')
})