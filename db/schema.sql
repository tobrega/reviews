DROP TABLE IF EXISTS reviews, characteristics, photos;

CREATE TABLE reviews (
  id              INTEGER NOT NULL primary key,
  product_id      INTEGER,
  rating          TEXT,
  date            DATE,
  summary         TEXT,
  body            TEXT,
  recommend       BOOLEAN,
  reported        BOOLEAN,
  reviewer_name   TEXT,
  reviewer_email  TEXT,
  response        TEXT,
  helpfulness     INTEGER
);

CREATE TABLE characteristics (
  id          INTEGER NOT NULL primary key,
  product_id  INTEGER,
  name        TEXT
);

CREATE TABLE photos (
  id          INTEGER NOT NULL primary key,
  review_id   INTEGER,
  url         TEXT
);

-- JOINS FOR METADATA

DROP INDEX IF EXISTS review_id_index;
DROP INDEX IF EXISTS product_id_reviews_index;
DROP INDEX IF EXISTS characteristics_id_index;
DROP INDEX IF EXISTS product_id_characteristics;
DROP INDEX IF EXISTS photos_id_index;
DROP INDEX IF EXISTS review_id_index;

CREATE UNIQUE INDEX review_id_index ON reviews(id ASC);
CREATE INDEX product_id_reviews_index ON reviews(product_id ASC);
CREATE INDEX characteristics_id_index ON characteristics(id ASC);
CREATE INDEX product_id_characteristics ON characteristics(product_id ASC);
CREATE INDEX photos_id_index ON photos(id ASC);
CREATE INDEX review_id_photos_index ON photos(review_id ASC);

-- Import data --
COPY reviews FROM '/home/tony/Nextcloud/HR-SEA16/sdc/tobrega-reviews/db/clean/reviewsCleaned.csv' WITH (FORMAT csv, header);
COPY characteristics FROM '/home/tony/Nextcloud/HR-SEA16/sdc/tobrega-reviews/db/clean/characteristicsCleaned.csv' WITH (FORMAT csv, header);
COPY photos FROM '/home/tony/Nextcloud/HR-SEA16/sdc/tobrega-reviews/db/clean/reviewsPhotosCleaned.csv' WITH (FORMAT csv, header);
