const {Client} = require('pg');

const config = {
    user: 'postgres',
    database: 'ticketball',
    password: 'ennod',
    port: '5432'
};

const client = new Client(config);

// client.query('SELECT * FROM client;')

module.exports = {
    client
}