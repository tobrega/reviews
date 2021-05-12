const { Pool } = require('pg');
const config = require('./config.js');

const pool = new Pool(config);

// https://node-postgres.com/api/pool
// ;(async function() {
//   const client = await pool.connect()
//   await client.query('SELECT NOW()')
//   client.release()
// })()

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};

// Links to check out 5/10/2021
// https://stackoverflow.com/questions/53910835/using-async-await-with-node-postgres
// https://stackoverflow.com/questions/38202891/express-js-global-try-catch
// Brenton:  https://hashrocket.com/blog/posts/faster-json-generation-with-postgresql
// pg.Pool:  https://node-postgres.com/api/pool
