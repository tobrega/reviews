const { Pool } = require('pg');
const config = require('./config.js');

const pool = new Pool(config);

// https://node-postgres.com/api/pool
// ;(async function() {
//   const client = await pool.connect()
//   await client.query('SELECT NOW()')
//   client.release()
// })()

module.exports = {
  query
};