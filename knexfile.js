// Update with your config settings.
const connectionString = process.env.DB_CONNECTION_STRING

module.exports = {

  development: {
    client: 'pg',
    connection: connectionString || 'postgres://postgres:password@localhost:5432/tuesdai'
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
      database: 'db9mb8ctm0c0aj',   
      user: 'rxzvrbrdwzrydf',
      password: '7756274ea17b356dabfa957332f5bcc9a1f243b8ad2292e8e6b25792f56f30af'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }

};
