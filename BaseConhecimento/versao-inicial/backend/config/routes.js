module.exports = app => {
    app.route('/users')
       .get(app.api.user.save) // Caminho pelo consign
       .get(app.api.user.get)

    app.route('/users/:id') // A partir desse paramentro vai se saber se o sistema está inserindo ou alterando
       .put(app.api.user.save)
}