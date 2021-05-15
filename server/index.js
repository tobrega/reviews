const express = require('express');
const morgan = require('morgan');
const db = require('../db/index.js');
const router = require('./routes.js');

const app = express();
const port = 3000;
app.use(morgan('dev'));
app.use(express.json());

// PASS ALL TRAFFIC TO ROUTES
app.use('/', router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// module.exports = { app };
