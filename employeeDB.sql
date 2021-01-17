-- Drops the employee_db if it exists currently --
DROP DATABASE IF EXISTS employee_db;

-- Creates the "employee_db" database --
CREATE DATABASE employee_db;

-- Makes it so all of the following code will affect animals_db --
USE animals_db;

-- Creates the table "department" --
CREATE TABLE department (
    id INT PRIMARY KEY NULL,
    name VARCHAR(30) NULL,
    PRIMARY KEY (position)
);

-- Creates the table "role" --
CREATE TABLE role (
    id INT PRIMARY KEY NULL,
    title VARCHAR(30) NULL,
    salary DECIMAL(10,4) NULL,
    department_id INT NULL,
    PRIMARY KEY (position)
);

-- Creates the table "employee" --
CREATE TABLE employee (
    PRIMARY KEY (position)
;)
