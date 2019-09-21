CREATE DATABASE burgers_db;
USE burgers_db;

CREATe TABLE burgers(
    id INTEGER AUTO_INCREMENT not NULL,
    burger_name VARCHAR(35),
    devoured BOOLEAN,
    PRIMARY KEY(id)
)