const mysql = require("mysql");
// const prompts = require("./assets/promptSeq");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "cyborganize",
  database: "employee_db",
});

// TODO: make sure you can get the connection in the external prompts file

// * will execute once connected
// * program flow should start in the prompts file,
// TODO: maybe need a init() type logic to start the prompts from here
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

  // program flow gets sent to the promptSequence file;
  // mysql connection instance is passed in
  require("./assets/promptSeq")(connection);
  //  this behaves like afterConnection() would
});

// function afterConnection() {
//   connection.query("SELECT * FROM example", function (err, res) {
//     if (err) throw err;
//     console.log(res);
//     connection.end();
//   });
// }
