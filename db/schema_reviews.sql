-- Create table to hold raw imported data --

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id              INTEGER primary key,
  product_id      INTEGER,
  rating          INTEGER,
  date            VARCHAR(255),
  summary         VARCHAR(255),
  body            VARCHAR(510),
  recommend       BOOLEAN,
  reported        BOOLEAN,
  reviewer_name   VARCHAR(255),
  reviewer_email  VARCHAR(255),
  response        VARCHAR(255),
  helpfulness     INTEGER
);

-- Import data --
COPY reviews
FROM '/home/tony/Nextcloud/HR-SEA16/sdc/data-jelder/reviews.csv'
-- WITH (format csv, header)
DELIMITER ',' CSV HEADER;
