-- Drops the employee_db if it exists currently --
DROP DATABASE IF EXISTS employee_db;

-- Creates the "employee_db" database --
CREATE DATABASE employee_db;

-- Makes it so all of the following code will affect employee_db --
USE employee_db;

-- Creates the table "department" --
CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30) NULL,
    PRIMARY KEY (position)
);

-- Creates the table "role" --
CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30) NULL,
    salary DECIMAL(15,5) NULL,
    department_id INT NULL,
    PRIMARY KEY (position)
);

-- Creates the table "employee" --
CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT NULL,
    manager_id INT NULL,
    PRIMARY KEY (position)
;)

SELECT * FROM department;
select * from role;
select * from employee;
