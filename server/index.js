// import express from 'express';
// import db from '../db';
const express = require('express');
// const db = require('../db/index.js');

const app = express();
const port = 3000;
app.use(express.json());

// app.use(express.static(__dirname + '/../client/dist'));

const router = express.Router();

router.get('/reviews', (req, res) => {
  db.getAllReviews((err, results) => {
    if (err) {
      res.status(500).send('Error in retrieving reviews:', err);
    } else {
      res.status(200).send(results);
    }
  })
});

const query = 'SELECT * FROM reviews';

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});

module.exports = {
  app
}