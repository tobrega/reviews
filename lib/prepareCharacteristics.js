const fs = require('fs');
const parse = require('csv-parser');
const csv = require('fast-csv');
const path = require('path');

const originFilePath = path.join(__dirname, './characteristics.csv');
const destinationFilePath = path.join(__dirname, './characteristicsCleaned.csv');
const readableStream = fs.createReadStream(originFilePath);
const writableStream = fs.createWriteStream(destinationFilePath, { flags: 'a' });
const csvStream = csv.format({ headers: true });
csvStream.pipe(writableStream);

let rowCount = 0;

const columns = {
  id: {},
  productId: {},
  name: {}
};

const startTime = Date.now();

readableStream
  .pipe(parse())
  .on('data', (row) => {
    rowCount += 1;
    if (rowCount % 100000 === 0) { console.log(rowCount); }

    const newRow = { ...row };

    // handle missing name (column exists)
    if (!newRow.name) {
      newRow.name = 'null';
    }

    const [ id, product_id, name ] = Object.values(newRow);

    const idType = typeof Number(id);
    columns.id[idType] = columns.id[idType] + 1 || 1;

    const productIdType = typeof Number(product_id);
    columns.productId[productIdType] =  columns.productId[productIdType] + 1 || 1;

    // const name = typeof Number(id);
    columns.name[name] = columns.name[name] + 1 || 1;

    csvStream.write(newRow);
    })
  .on('end', () => {
    csvStream.end();
    console.log(JSON.stringify(columns, null, 2));
    console.log(`CSV file successfully processed in ${(Date.now() - startTime) / 1000} seconds`);
  });
