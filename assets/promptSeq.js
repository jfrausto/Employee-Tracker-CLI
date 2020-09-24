// const mysql = require("mysql");
const inq = require("inquirer");
const cTable = require("console.table");
const Department = require("./classes/Department");
const Role = require("./classes/Role");
const Employee = require("./classes/Employee");

// this export function is called once require statement is made
module.exports = function (connection) {
  console.log("--------------AGAIN connected as id " + connection.threadId);

  const start = function () {
    inq
      .prompt({
        name: "promptStart",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "view all employees",
          "view all employees by department",
          "view all employees by manager",
          "add employee",
          "remove employee",
          "update employee role",
          "update employee manager",
          "view all roles",
          "add role",
          "remove role",
          "--- EXIT ---",
        ],
      })
      .then(function (answer) {
        switch (answer.promptStart) {
          case "view all employees":
            viewAllEmployees();
            // console.log("lmao!");
            // connection.end();
            break;
          case "view all employees by department":
            // TODO: viewEmployeesDepartment();
            break;
          case "view all employees by manager":
            // TODO: viewEmployeesManagers();
            break;
          case "add employee":
            // TODO: addEmployee();
            break;
          case "remove employee":
            // TODO: removeEmployee();
            break;
          case "update employee role":
            // TODO: updateRole();
            break;
          case "update employee manager":
            // TODO: managerUpdate();
            break;
          case "view all roles":
            // TODO: viewRoles();
            break;
          case "add role":
            // TODO: addRole();
            break;
          case "remove role":
            // TODO: removeRole();
            break;
          case "--- EXIT ---":
            connection.end();
            break;
        }
      });
  };

  const viewAllEmployees = function () {
    const query = `SELECT e1.id, e1.first_name, e1.last_name, title, name AS department, 
                          salary, CONCAT(e2.first_name, " ", e2.last_name) AS manager
                    FROM employee e1
                    INNER JOIN role ON e1.role_id =  role.id
                    INNER JOIN department ON department_id = department.id
                    LEFT JOIN employee e2 ON e2.id = e1.manager_id
                    ORDER BY e1.id ASC
                    `;
    connection.query(query, function (err, res) {
      if (err) throw err;
      console.log("\n");
      console.table(res);
      start();
      // connection.end();
    });
  };

  // ------------------------------------------- run it
  start();

  // ! connection.end();
  // ! will need to end connection in THIS file
};
