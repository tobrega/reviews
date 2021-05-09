const fs = require('fs');
const parse = require('csv-parser');
const csv = require('fast-csv');
const path = require('path');

const originFilePath = path.join(__dirname, './source/reviews_photos.csv');
const destinationFilePath = path.join(__dirname, './clean/reviewsPhotosCleaned.csv');
const readableStream = fs.createReadStream(originFilePath);
const writableStream = fs.createWriteStream(destinationFilePath, { flags: 'a' });
const csvStream = csv.format({ headers: true });
csvStream.pipe(writableStream);

let rowCount = 0;

const columns = {
  id: {},
  reviewId: {},
  // url: {}
};

const startTime = Date.now();

readableStream
  .pipe(parse())
  .on('data', (row) => {
    rowCount += 1;
    if (rowCount % 100000 === 0) { console.log(rowCount); }

    const newRow = { ...row };

    // handle missing url
    if (!newRow.url) {
      newRow.url = 'null';
    }

    const [ id, review_id, url ] = Object.values(newRow);

    const idType = typeof Number(id);
    columns.id[idType] = columns.id[idType] + 1 || 1;

    const reviewIdType = typeof Number(review_id);
    columns.reviewId[reviewIdType] =  columns.reviewId[reviewIdType] + 1 || 1;

    // columns.url[url] = columns.url++ || 1;

    csvStream.write(newRow);
    })
  .on('end', () => {
    csvStream.end();
    console.log(JSON.stringify(columns, null, 2));
    console.log(`CSV file successfully processed in ${(Date.now() - startTime) / 1000} seconds`);
  });
