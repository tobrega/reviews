-- Create table to hold raw imported data --

LOGIN: psql -d reviews -U tony -W

sudo docker run -p 5434:80 \
   -e 'PGADMIN_DEFAULT_EMAIL=user@domain.com' \
   -e 'PGADMIN_DEFAULT_PASSWORD=student' \
   -d dpage/pgadmin4

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id              INTEGER primary key,
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
COPY reviews
FROM '/home/tony/Nextcloud/HR-SEA16/sdc/tobrega-reviews/db/reviewsCleaned.csv'
WITH (format csv, header)
