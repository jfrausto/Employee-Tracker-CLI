// const mysql = require("mysql");
const inq = require("inquirer");
const cTable = require("console.table");
// ? const Department = require("./classes/Department");
// ? const Role = require("./classes/Role");
// ? const Employee = require("./classes/Employee");

// query types
// ! const selectView = require("./queries/view");

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
          "view all roles",
          "view all departments",
          "add employee",
          "add role",
          "add department",
          "update employee role",
          "update employee manager",
          "remove employee",
          "remove role",
          "--- EXIT ---",
        ],
      })
      .then(function (answer) {
        switch (answer.promptStart) {
          // case "view all employees by department":
          //   // TODO: viewEmployeesDepartment();
          //   break;
          // case "view all employees by manager":
          //   // TODO: viewEmployeesManagers();
          //   break;
          case "update employee role": // ! need this one !
          case "update employee manager":
            require("./queries/update")(connection, answer.promptStart);
            break;
          case "remove employee":
          case "remove role":
            // TODO:
            break;
          case "add role":
          case "add department":
          case "add employee":
            console.log("!!!!!!!!!!!!!! Im about to be sent to add");
            require("./queries/add")(connection, answer.promptStart);
            break;
          case "view all departments":
          case "view all roles":
          case "view all employees":
            console.log("Im about to be sent to views!!!!!!!!!!!!!!!!");
            require("./queries/views")(connection, answer.promptStart);
            // ! THE CONNECTION WAS SENT!!
            break;
          case "--- EXIT ---":
            connection.end();
            break;
        }
      });
  };

  // const viewAllEmployees = function () {
  //   const query = `SELECT e1.id, e1.first_name, e1.last_name, title, name AS department,
  //                         salary, CONCAT(e2.first_name, " ", e2.last_name) AS manager
  //                   FROM employee e1
  //                   INNER JOIN role ON e1.role_id =  role.id
  //                   INNER JOIN department ON department_id = department.id
  //                   LEFT JOIN employee e2 ON e2.id = e1.manager_id
  //                   ORDER BY e1.id ASC
  //                   `;
  //   connection.query(query, function (err, res) {
  //     if (err) throw err;
  //     console.log(" ");
  //     console.table(res);
  //     start();
  //     // connection.end();
  //   });
  // };

  // const viewRoles = function () {
  //   const query = `SELECT role.id, title, salary, name AS department
  //                 FROM role
  //                 INNER JOIN department
  //                 ON department_id = department.id
  //                 ORDER BY role.id ASC
  //                 `;
  //   connection.query(query, function (err, res) {
  //     if (err) throw err;
  //     console.log(" ");
  //     console.table(res);
  //     start();
  //   });
  // };

  // const viewDepartments = function () {
  //   const query = `SELECT id, name
  //                 FROM department
  //                 ORDER BY id ASC`;
  //   connection.query(query, function (err, res) {
  //     if (err) throw err;
  //     console.log(" ");
  //     console.table(res);
  //     start();
  //   });
  // };

  const addDepartment = function () {
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

        const query = `INSERT INTO department(name) VALUES (?)`;
        connection.query(query, [answer.depName], function (err, res) {
          if (err) throw err;
          console.log(" ");
          console.log(` *** created new department ${answer.depName}!`);
          console.log(" ");
          start();
        });
      });
  };

  // const addRole = function () {
  //   inq
  //     .prompt([
  //       {
  //         name: "title",
  //         type: "input",
  //         message: "What is the title of the new role?",
  //       },
  //       {
  //         name: "salary",
  //         type: "input",
  //         message: "What is the salary of the new role?",
  //       },
  //       {
  //         name: "department",
  //         type: "input",
  //         message: "What department ID is this role best suited?",
  //       },
  //     ])
  //     .then(function (answer) {
  //       // const newDep = new Department(answer.depName);
  //       // console.log(" *** created a new department!");
  //       // console.log(newDep.d_name);

  //       // ? could populate an array containing all objects from database
  //       // ? in order to accurately assign a department id using series
  //       // ? of switch statements going through array of departments.
  //       const query = `INSERT INTO role(title, salary, department_id) VALUES (?, ?, ?)`;
  //       connection.query(
  //         query,
  //         [
  //           answer.title,
  //           parseFloat(answer.salary),
  //           parseInt(answer.department),
  //         ],
  //         function (err, res) {
  //           if (err) throw err;
  //           console.log(" ");
  //           console.log(` *** created new role ${answer.title}!`);
  //           console.log(" ");
  //           start();
  //         }
  //       );
  //     });
  // };

  // TODO: before you commit, make the last add query for employee work.
  // TODO: LOOK INTO SENDING CONNECTION the same way we sent it here, with a require.
  //

  // ------------------------------------------- run it
  // console.log("OVER HEREEEeeeEE");
  start();

  // return;
  // ! CAN I RETURN TO THE SERVER FILE AFTER HERE IF I DONT END THE CONNECTION???
  // ! NEED TO KNOW, THIS WILL LEAD TO MODULARITY OF THE TYPES OF QUERIES, for organization.

  // ! connection.end();
  // ! will need to end connection in THIS file??? MAYBE
};
