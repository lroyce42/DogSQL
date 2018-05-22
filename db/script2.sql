\c doggo2

CREATE TABLE tricks(
  trick_id serial PRIMARY KEY,
  doggie_id INTEGER REFERENCES dogs(doggie_id)
  ON UPDATE CASCADE ON DELETE CASCADE NOT NULL,
  tricks_name varchar(255) NOT NULL
);

INSERT INTO tricks(doggie_id, tricks_name)

VALUES(1, 'Roll Over'),
(1, 'Play Dead'),
(5, 'Speak'),
(5, 'Eat A LOT'),
(7, 'Sit...kinda');

SELECT * FROM tricks;
