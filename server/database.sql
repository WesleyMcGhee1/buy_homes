CREATE DATABASE buy_homes;

CREATE TABLE home(
    home_id SERIAL PRIMARY KEY,
    home_name VARCHAR(255),
    home_address VARCHAR(255),
    home_disc VARCHAR(10000),
    home_img VARCHAR(1000),
    home_price INT
);