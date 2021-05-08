DROP TABLE IF EXISTS characteristics;

CREATE TABLE characteristics (
  id          INTEGER primary key,
  product_id  INTEGER,
  name        VARCHAR(50)
);

-- Import data --
COPY characteristics FROM '/home/tony/Nextcloud/HR-SEA16/sdc/tobrega-reviews/db/characteristicsCleaned.csv' WITH (format csv, header)
