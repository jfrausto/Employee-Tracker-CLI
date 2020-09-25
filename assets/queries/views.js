// * this module handles the three SELECT Queries for viewing
// * departments, roles, and employees
module.exports = function (connection, viewType) {
  console.log("--------------REAL DEEP connected as id " + connection.threadId);
  let query = "";
  switch (viewType) {
    case "view all departments":
      query = `SELECT id, name
                  FROM department
                  ORDER BY id ASC`;
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.log(" ");
        console.table(res);
        require("../promptSeq")(connection);
      });
      break;
    case "view all roles":
      query = `SELECT role.id, title, salary, name AS department
                  FROM role
                  INNER JOIN department
                  ON department_id = department.id
                  ORDER BY role.id ASC
                  `;
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.log(" ");
        console.table(res);
        require("../promptSeq")(connection);
      });
      break;
    case "view all employees":
      query = `SELECT e1.id, e1.first_name, e1.last_name, title, name AS department,
                          salary, CONCAT(e2.first_name, " ", e2.last_name) AS manager
                    FROM employee e1
                    INNER JOIN role ON e1.role_id =  role.id
                    INNER JOIN department ON department_id = department.id
                    LEFT JOIN employee e2 ON e2.id = e1.manager_id
                    ORDER BY e1.id ASC
                    `;
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.log(" ");
        console.table(res);
        require("../promptSeq")(connection);
      });
      break;
  }
  // console.log(viewType);
  // require("../promptSeq")(connection);
};
