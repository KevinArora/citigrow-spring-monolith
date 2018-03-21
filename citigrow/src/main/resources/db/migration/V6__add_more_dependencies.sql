ALTER TABLE ONLY quadrants
ADD CONSTRAINT quadrants_produce_id_fkey FOREIGN KEY (produce_id)
REFERENCES produce(id)
  ON UPDATE CASCADE
ON DELETE CASCADE;