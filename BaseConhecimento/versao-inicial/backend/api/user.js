
const bcrypt = require('bcrypt-nodejs')


module.exports = app => {
    // Utilizando o destrction
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validator
    /*
    O salt é uma sequencia de caracteres adicionados antes da senha para dar maior aleatoriedade
    ao resultado da criptografia .
    */
    const encryptPassword = password => {
        const salt = brcrypt.genSaltSync(10)
        // método hashSync transforma uma senha de texto em um hash criptográfico
        // essa senha será gravada no banco de dados
        return brcrypt.hashSync(password, salt)
    }
    // Método insere e altera um usuário já existente
    // utilização do async que aguarda as chamadas dos métodos assíncronos antes de prosseguir
    const save = async (req, res) => {
        // utilizando o operador spread 
        // o bodyParser gerou um objeto originado do JSON ( corpo da requisição ) todo configurado  
        // O body praticamente está sendo clonado
        // O id do usuário eventualmente pode vim através da requisição
        const user = { ...req.body }

        if ( req.params.id ) user.id = req.params.id // O id pode vim nos parametros da requisição

        // Parte de tratamento
        try {
            existsOrError(user.name, 'Nome não informado !')
            existsOrError(user.email, 'E-mail não informado !')
            existsOrError(user.password, 'Senha não informada !')
            existsOrError(user.confirmPassword, 'Confirmação de senha inválida !')
            equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem !')
            // o db é a forma de acessar o knex
            const userFromDB = await app.db('users')
                .where({ email : user.email }).first()
            if ( !user.id ) {
                notExistsOrError( userFromDB, 'Usuário não cadastrado !' )   
            } 
        } catch(msg) {
            return res.status(400).send(msg)
        }

        user.password = encryptPassword(user.password) 
        delete user.confirmPassword

        if ( user.id ) {
            app.db('users')
                .update(user)
                .where({ id: user.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('users')
                .insert(users)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }

    }
    // Método responsável por obter todos os usuários
    const get = ( req, res ) => {
        app.db('users')
        .select('id', 'name', 'email', 'admin')
        .then(users => res.join(users))
        .catch(err => res.status(500).send(err))
    }
    
    return { save, get }
}