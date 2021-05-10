DROP TABLE IF EXISTS reviews, characteristics, photos;

DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS characteristics;
DROP TABLE IF EXISTS photos;

CREATE TABLE reviews (
  id              INTEGER NOT NULL primary key,
  product_id      INTEGER,
  rating          VARCHAR(255),
  date            DATE,
  summary         VARCHAR(510),
  body            VARCHAR(510),
  recommend       BOOLEAN,
  reported        BOOLEAN,
  reviewer_name   VARCHAR(255),
  reviewer_email  VARCHAR(255),
  response        VARCHAR(255),
  helpfulness     INTEGER
);

CREATE TABLE characteristics (
  id          INTEGER NOT NULL primary key,
  product_id  INTEGER,
  name        VARCHAR(50)
);

CREATE TABLE photos (
  id          INTEGER NOT NULL primary key,
  review_id   INTEGER,
  url         VARCHAR(255)
);

-- Import data --
COPY reviews FROM '/home/tony/Nextcloud/HR-SEA16/sdc/tobrega-reviews/db/clean/reviewsCleaned.csv' WITH (FORMAT csv, header);
COPY characteristics FROM '/home/tony/Nextcloud/HR-SEA16/sdc/tobrega-reviews/db/clean/characteristicsCleaned.csv' WITH (FORMAT csv, header);
COPY photos FROM '/home/tony/Nextcloud/HR-SEA16/sdc/tobrega-reviews/db/clean/reviewsPhotosCleaned.csv' WITH (FORMAT csv, header);
