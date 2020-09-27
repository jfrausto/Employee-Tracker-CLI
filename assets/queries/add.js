const inq = require("inquirer");
// this module handles all INSERT INTO queries
// organizes by switch construct
module.exports = function (connection, addType) {
  // initialize query string
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
          query = `INSERT INTO department(name) VALUES (?)`;
          connection.query(query, [answer.depName], function (err, res) {
            if (err) throw err;
            // console.log format new lines for clear CLI response
            console.log(" ");
            console.log(` *** created new department ${answer.depName}!`);
            console.log(" ");
            // start prompts again
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
          // make sure to always sanitize your inputs with ?s
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
    // default catch to return
    default:
      require("../promptSeq")(connection);
      break;
  }
};
