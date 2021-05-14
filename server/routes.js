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
  const { product_id } = req.query;
  console.log('productId', product_id)
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
    const results = await db.query(query, [product_id]);

    // TODO: Use COALESCE to handle when photos array === null
    results.rows.map((row) => {
      if (row.photos === null) { row.photos = []; }
    })

    console.log(results.rows);
    res.status(200).send(results.rows)
  } catch (err) {
    console.error(err);
    throw err;
  }
});

module.exports = router;
