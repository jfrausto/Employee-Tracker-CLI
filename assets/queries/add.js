const inq = require("inquirer");

module.exports = function (connection, addType) {
  console.log("--------------REAL DEEP connected as id " + connection.threadId);
  let query = "";
  switch (addType) {
    case "add department":
      inq
        .prompt({
          name: "depName",
          type: "input",
          message: "What is the name of the new department?",
        })
        .then(function (answer) {
          // const newDep = new Department(answer.depName);
          // console.log(" *** created a new department!");
          // console.log(newDep.d_name);
          query = `INSERT INTO department(name) VALUES (?)`;
          connection.query(query, [answer.depName], function (err, res) {
            if (err) throw err;
            console.log(" ");
            console.log(` *** created new department ${answer.depName}!`);
            console.log(" ");
            require("../promptSeq")(connection);
          });
        });
      break;
    case "add role":
      inq
        .prompt([
          {
            name: "title",
            type: "input",
            message: "What is the title of the new role?",
          },
          {
            name: "salary",
            type: "input",
            message: "What is the salary of the new role?",
          },
          {
            name: "department",
            type: "input",
            message: "Department ID to be assigned: ",
          },
        ])
        .then(function (answer) {
          // ? could populate an array containing all objects from database
          // ? in order to accurately assign a department id using series
          // ? of switch statements going through array of departments.
          query = `INSERT INTO role(title, salary, department_id) VALUES (?, ?, ?)`;
          connection.query(
            query,
            [
              answer.title,
              parseFloat(answer.salary),
              parseInt(answer.department),
            ],
            function (err, res) {
              if (err) throw err;
              console.log(" ");
              console.log(` *** created new role ${answer.title}!`);
              console.log(" ");
              require("../promptSeq")(connection);
            }
          );
        });
      break;
    case "add employee":
      inq
        .prompt([
          {
            name: "firstName",
            type: "input",
            message: "What is the first name?",
          },
          {
            name: "lastName",
            type: "input",
            message: "What is the last name?",
          },
          {
            name: "role",
            type: "input",
            message: "Role ID to be assigned: ",
          },
          {
            name: "manager",
            type: "input",
            message: "Employee ID of Manager assigned: ",
          },
        ])
        .then(function (answer) {
          // ? could populate an array containing all objects from database
          // ? in order to accurately assign a department id using series
          // ? of switch statements going through array of departments.
          query = `INSERT INTO employee(first_name, last_name, role_id ,manager_id)
                   VALUES (?, ?, ?, ?)`;
          connection.query(
            query,
            [
              answer.firstName,
              answer.lastName,
              parseInt(answer.role),
              parseInt(answer.manager),
            ],
            function (err, res) {
              if (err) throw err;
              console.log(" ");
              console.log(
                ` *** created new Employee ${answer.firstName} ${answer.lastName}!`
              );
              console.log(" ");
              require("../promptSeq")(connection);
            }
          );
        });
      break;
    default:
      break;
  }
};
