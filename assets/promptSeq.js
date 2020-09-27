const inq = require("inquirer");
const cTable = require("console.table");

// this export function is called once require statement is made in external files
module.exports = function (connection, ...objects) {
  const start = function () {
    inq
      .prompt({
        name: "promptStart",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "view all employees",
          "view all roles",
          "view all departments",
          "add employee",
          "add role",
          "add department",
          "update employee role",
          "--- EXIT ---",
        ],
      })
      .then(function (answer) {
        // switch case filters through answers
        // calls require to handle different query requests
        // passes the my sql connection along with the promp answer
        switch (answer.promptStart) {
          case "update employee role":
            require("./queries/update")(connection, answer.promptStart);
            break;
          case "add role":
          case "add department":
          case "add employee":
            require("./queries/add")(connection, answer.promptStart);
            break;
          case "view all departments":
          case "view all roles":
          case "view all employees":
            require("./queries/views")(connection, answer.promptStart);
            break;
          case "--- EXIT ---":
            connection.end();
            break;
        }
      });
  };

  start(); // prompts are called to start from here
};
