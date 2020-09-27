const inq = require("inquirer");
// this module handles update type queries
module.exports = function (connection, updateType) {
  let query = "";
  // initialize query string to empty
  // a deeper series of inquirer prompts answer cases
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
          // update role query with sanitation of data
          query = `UPDATE employee SET role_id = ? WHERE id = ?`;
          connection.query(query, [answer.role, answer.id], function (
            err,
            res
          ) {
            if (err) throw err;
            // empty console logs for neater console.table output
            console.log(" ");
            console.log(` *** updated to role ID ${answer.role}!`);
            console.log(" ");
            // return to start of prompts!
            require("../promptSeq")(connection);
          });
        });
      break;
    // go back if there is no choice matching; a default catch
    default:
      require("../promptSeq")(connection);
      break;
  }
};
