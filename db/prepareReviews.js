const fs = require('fs');
const parse = require('csv-parser');
const csv = require('fast-csv');
const path = require('path');

const originFilePath = path.join(__dirname, './reviews.csv');
const destinationFilePath = path.join(__dirname, './reviewsCleaned.csv');
const readableStream = fs.createReadStream(originFilePath);
const writableStream = fs.createWriteStream(destinationFilePath, { flags: 'a' });

const csvStream = csv.format({ headers: true });

csvStream.pipe(writableStream);

let rowCount = 0;

const startTime = Date.now();

readableStream
  .pipe(parse())
  .on('data', (row) => {
    rowCount += 1;
    if (rowCount % 100000 === 0) { console.log(rowCount); }

    const newRow = { ...row };

    // handle missing rating (column exists)
    if (!newRow.rating) {
      newRow.rating = 0;
    }

    // handle missing rating (column missing)
    if (!newRow.helpfulness) {
      newRow.helpfulness = newRow.response
      newRow.response = newRow.reviewer_email;
      newRow.reviewer_email = newRow.reviewer_name;
      newRow.reviewer_name = newRow.reported;
      newRow.reported = newRow.recommend;
      newRow.recommend = newRow.body;
      newRow.body = newRow.summary;
      newRow.summary = newRow.date;
      newRow.date = newRow.rating;
      newRow.rating = 0;
    }

    // unify dates to timestamps
    if (newRow.date.length > 15) {
      newRow.date = Date.parse(newRow.date)
    }

    csvStream.write(newRow);
    })
  .on('end', () => {
    csvStream.end();
    console.log(`CSV file successfully processed in ${(Date.now() - startTime) / 1000} seconds`);
  });

// sudo docker run --name postgresql-container -p 5432:5432 -e POSTGRES_PASSWORD=student -d postgres


// const fs = require('fs');
// const Pool = require('pg').Pool;
// const fastcsv = require('fast-csv');

// let stream = fs.createReadStream('./db/reviews_example.csv');
// let csvData = [];
// let csvStream = fastcsv
//   .parse()
//   .on('data', (data) => {
//     csvData.push(data);
//   })
//   .on('end', () => {
//     // remove the first line: header
//     csvData.shift();

//     // create a new connection to the database
//     const pool = new Pool({
//       host: 'localhost',
//       user: 'postgres',
//       database: 'reviews',
//       password: 'student',
//       port: 5432
//     });

//     const query = 'INSERT INTO reviews (id, product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)';

//     pool.connect((err, client, done) => {
//       if (err) { console.log('err:', err); }

//       try {
//         csvData.forEach(row => {
//           client.query(query, row, (err, res) => {
//             if (err) {
//               console.log(err.stack);
//             } else {
//               console.log('inserted ' + res.rowCount + ' row:', row);
//             }
//           });
//         });
//       } finally {
//         done();
//       }
//     });
// });

// stream.pipe(csvStream);
