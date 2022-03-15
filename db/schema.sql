CREATE DATABASE nets;
\c nets;


CREATE TABLE users(id SERIAL PRIMARY KEY, name TEXT, email TEXT, password_digest TEXT);
