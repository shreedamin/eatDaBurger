CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INT (10)  AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (255) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
    
);