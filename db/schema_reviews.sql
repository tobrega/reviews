DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id              INTEGER NOT NULL primary key,
  product_id      INTEGER,
  rating          VARCHAR(255),
  date            VARCHAR(255),
  summary         VARCHAR(510),
  body            VARCHAR(510),
  recommend       VARCHAR,
  reported        VARCHAR,
  reviewer_name   VARCHAR(255),
  reviewer_email  VARCHAR(255),
  response        VARCHAR(255),
  helpfulness     INTEGER
);

-- Import data --
COPY reviews FROM '/home/tony/Nextcloud/HR-SEA16/sdc/tobrega-reviews/db/reviewsCleaned.csv' WITH (format csv, header)
