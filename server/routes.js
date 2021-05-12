const express = require('express');
// const Router = require('express-promise-router'); // promise-based router?
const db = require('../db');

const router = express.Router();

// REVIEWS
router.get('/reviews', (req, res) => {
  const query = 'SELECT * FROM reviews LIMIT 10';
  db.query(query, (err, results) => {
    if (err) { res.status(500).send('Error retrieving /reviews', err); }
    res.status(200).send(results.rows)
  })
});

// PRODUCT_ID
router.get('/reviews/:product_id', (req, res) => {
  const { product_id } = req.params;
  const query = `SELECT * FROM reviews WHERE product_id = ${product_id}`;
  db.query(query, (err, results) => {
    if (err) { res.status(500).send('Error retrieving /reviews', err); }
    res.status(200).send(results.rows)
  })
});

module.exports = router;
