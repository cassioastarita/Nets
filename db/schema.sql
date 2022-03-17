CREATE DATABASE nets;
\c nets;


CREATE TABLE users(id SERIAL PRIMARY KEY, name TEXT, email TEXT, password_digest TEXT);

CREATE TABLE court_info(id SERIAL PRIMARY KEY, court_name TEXT, net BOOLEAN, toilet BOOLEAN, water BOOLEAN, parking BOOLEAN, img_url TEXT);

ALTER TABLE court_info RENAME COLUMN lat_long TO coordinates;