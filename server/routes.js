const express = require('express');
// const Router = require('express-promise-router'); // promise-based router?
const db = require('../db');

const router = express.Router();

// REVIEWS
router.get('/', (req, res) => {
  const query = 'SELECT * FROM reviews LIMIT 10';
  db.query(query, (err, results) => {
    if (err) { res.status(500).send('Error retrieving /reviews', err); }
    res.status(200).send(results.rows)
  })
});

// // PRODUCT_ID
// router.get('/reviews/:product_id', (req, res) => {
//   const { product_id } = req.params;
//   const query = `SELECT * FROM reviews WHERE product_id = ${product_id}`;
//   db.query(query, (err, results) => {
//     if (err) { res.status(500).send('Error retrieving /reviews', err); }
//     res.status(200).send(results.rows)
//   })
// });

// PRODUCT_ID
router.get('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const [ reviewsData, photosData ] = await Promise.all([ // Promise.all takes an array of promises as input
      db.query('SELECT * FROM reviews WHERE product_id = $1', [productId]),
      // db.query('SELECT * FROM photos WHERE product_id = $1', [productId]),
      db.query('SELECT * FROM photos WHERE review_id = $1', [productId])
    ]);
    const reviews = reviewsData.rows;
    const photos = photosData.rows;
    const results = { reviews, photos }
    // console.log('results:', reviews, photos)
    res.status(200).send(results)
  } catch (err) {
    console.error(err);
    throw err;
  }

});

module.exports = router;
