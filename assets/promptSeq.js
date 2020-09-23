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
    const query = "SELECT * FROM employee";
    connection.query(query, function (err, res) {
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
