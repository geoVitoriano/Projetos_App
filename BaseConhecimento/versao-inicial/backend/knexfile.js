// Update with your config settings.

module.exports = {

      client: 'postgresql',
      connection: {
          database: 'knowledge',
          user:     'postgres',
          password: '19375058'
      },
      pool: {
          min: 2,
          max: 10
      },
      migrations: {
          tableName: 'knex_migrations'
      }
}
