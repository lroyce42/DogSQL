-- DROP DATABASE doggo2;

-- CREATE DATABASE doggo2;

-- \c doggo2

CREATE TABLE dogs(
  doggie_id serial PRIMARY KEY,
  doggie_username varchar(255) unique NOT NULL,
  owner_name varchar(255) NOT NULL,
  age integer NOT NULL,
  weight integer NOT NULL
);

INSERT INTO dogs(doggie_username, owner_name, age, weight)

VALUES('Snoopy', 'Charlie_Brown', 3, 18),
('Santas_Little_Helper', 'Bart_Simpson', 4, 14);

SELECT * FROM dogs;
