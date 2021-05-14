const express = require('express');
// const Router = require('express-promise-router'); // promise-based router?
const db = require('../db');

const router = express.Router();

// REVIEWS
// router.get('/', (req, res) => {
//   const query = 'SELECT * FROM reviews LIMIT 10';
//   db.query(query, (err, results) => {
//     if (err) { res.status(500).send('Error retrieving /reviews', err); }
//     res.status(200).send(results.rows)
//   })
// });

// REVIEWS
router.get('/', async (req, res) => {
  const { product_id: productId } = req.query;
  console.log('productId', productId)
  try {
    const query = `
      SELECT id,
        rating,
        summary,
        recommend,
        response,
        body,
        date,
        reviewer_name,
        reviewer_email,
        helpfulness,
        (
          SELECT ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(p)))
          FROM (
              SELECT id,
                url
              FROM photos
              WHERE r.id = photos.review_id
            ) p
        ) AS photos,
        reported
      FROM reviews r
      WHERE product_id = $1;
    `;

    // json_array_agg
    const results = await db.query(query, [productId]);

    // TODO: Use COALESCE to handle when photos array === null
    results.rows.map((row) => {
      if (row.photos === null) { row.photos = []; }
    })

    // SHAPE RETURN DATA
    const reviews = {
      product: productId,
      page: req.query.page || 0, // check default
      count: req.query.count || 5, // check default
      results: results.rows,
    }

    // console.log(reviews);
    res.status(200).send(reviews)
  } catch (err) {
    console.error(err);
    throw err;
  }
});

module.exports = router;
