const express = require('express');
const db = require('../db/index.js');
const router = require('./routes.js');

const app = express();
const port = 3000;
app.use(express.json());

// EXTERNAL ENDPOINT
app.get('/', (req, res) => { res.status(200).send('Connect to endpoint at /reviews') })

// REVIEWS ENDPOINT
app.get('/reviews', router)

// GET reviews by product_id
app.get('/reviews/:product_id', router);

// GET metadata
app.get('/reviews/meta/:product_id', router);

// POST review by product_id
app.post('/reviews/:product_id', router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = { app };
