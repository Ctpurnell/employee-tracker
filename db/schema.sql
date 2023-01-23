DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE
    department (
        id NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30) NOT NULL
    );

CREATE TABLE
    role (
        id NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(30) NOT NULL,
        salary DECIMAL,
        FOREIGN KEY (role_id) REFERENCES department(id)
    );

CREATE TABLE
    employee (
        id NOT NULL AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        FOREIGN KEY (role_id) REFERENCES department(id) FOREIGN KEY (manager_id) REFERENCES role(id)
    );

SHOW TABLES();