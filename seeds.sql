-- ! first add deparments
INSERT INTO deparment(name) VALUES ("Sales"), ("Finance"), 
("HR"), ("Engineering");

-- ! then add roles
INSERT INTO role(title, salary, department_id) 
VALUES ("Manager", 64000, 4), ("Sales Agent", 42000, 1), ("HR Rep", 52000, 3), 
("Engineer", 65000, 4), ("Accountant", 48000, 2);

-- ! then add employees
INSERT INTO employee(first_name, last_name, role_id, manager_id) 
VALUES ("Sterling", "Archer", 1, NULL), ("Malory", "Archer", 1, NULL), ("Jesse", "Frausto", 4, 2);

INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Eduardo", "Sanchez", 2, 2), ("Rosemary", "Frausto", 3, NULL);

INSERT INTO employee(first_name, last_name, role_id, manager_id) 
VALUES ("Lebron", "James", 5, 2), ("Javale", " McGee", 2, 6), 
("Rajon", "Rondo", 3, 1), ("Anthony", "Davis", 5, 2);