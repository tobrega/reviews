DROP TABLE IF EXISTS characteristics;

CREATE TABLE characteristics (
  id INTEGER primary key,
  product_id INTEGER,
  name VARCHAR(255)
);

-- Import data --
COPY characteristics
FROM '/home/tony/Nextcloud/HR-SEA16/sdc/tobrega-reviews/db/characteristics.csv'
WITH (format csv, header)
