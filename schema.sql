DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

DROP TABLE department;
DROP TABLE role;
DROP TABLE employee;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    CONSTRAINT fk_department FOREIGN KEY (department_id)
        REFERENCES department(id)
        ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id),

    CONSTRAINT fk_role
    FOREIGN KEY (role_id)
        REFERENCES role(id)
        ON DELETE SET NULL ON UPDATE CASCADE,

    CONSTRAINT fk_manager
    FOREIGN KEY (manager_id)
        REFERENCES employee(id)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);