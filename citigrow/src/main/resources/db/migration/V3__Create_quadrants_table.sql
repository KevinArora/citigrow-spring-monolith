CREATE TABLE quadrants (
  id SERIAL PRIMARY KEY,
  garden_id INT NOT NULL,
  produce_id INT,
  user_id INT
);