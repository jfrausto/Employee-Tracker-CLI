// todo: update a given employee's role
const inq = require("inquirer");
// ? update employee manager ?

module.exports = function (connection, updateType) {
  console.log("--------------REAL DEEP connected as id " + connection.threadId);
  // need inq
  let query = "";
  switch (updateType) {
    case "update employee role":
      inq
        .prompt([
          {
            name: "id",
            type: "input",
            message: "Enter Employee ID: ",
          },
          {
            name: "role",
            type: "input",
            message: "Enter new role ID to assign: ",
          },
        ])
        .then(function (answer) {
          // ? could populate an array containing all objects from database
          // ? in order to accurately assign a department id using series
          // ? of switch statements going through array of departments.
          query = `UPDATE employee SET role_id = ? WHERE id = ?`;
          connection.query(query, [answer.role, answer.id], function (
            err,
            res
          ) {
            if (err) throw err;
            console.log(" ");
            console.log(` *** updated to role ID ${answer.role}!`);
            console.log(" ");
            require("../promptSeq")(connection);
          });
        });
      break;

    default:
      require("../promptSeq")(connection);
      break;
  }
};
