// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true, // needed for sqlite
    connection: {
      filename: './data/projects_db.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data.seeds'
    },
    pool: {
      afterCreate: (connection, done) => {
        // runs after a connection is made to the sqlite engine
        connection.run("PRAGMA foreign_keys = ON", done); // turns on FK enforcement
      }
    }
  }
};
