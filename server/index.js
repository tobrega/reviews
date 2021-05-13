const express = require('express');
const morgan = require('morgan');
const db = require('../db/index.js');
const router = require('./routes.js');

const app = express();
const port = 3000;
app.use(morgan('dev'));
app.use(express.json());

// EXTERNAL ENDPOINT
// app.use('/', (req, res) => { res.status(200).send('Connect to endpoint at /reviews') })

// REVIEWS ENDPOINT
app.use('/reviews', router);

// // GET reviews by product_id
// app.get('/reviews/:productId', router);

// // GET metadata
// app.get('/reviews/meta/:product_id', router);

// // POST review by product_id
// app.post('/reviews/:product_id', router);

// // PUT helpful
// app.put('/reviews/:product_id', router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// module.exports = { app };
