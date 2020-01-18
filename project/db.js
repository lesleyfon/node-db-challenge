const db = require('knex');
const configOptions = require('./../knexfile');

module.exports = db(configOptions.development)