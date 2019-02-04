var mysql = require("mysql");
var connection = mysql.createConnection(process.env.JAWSDB_URL);
connection.connect();

var connection = mysql.createConnection({
  host: "d13xat1hwxt21t45.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "upnzjiuzbn72a3vd",
  password: "mxd8shhzvvwc8l9w",
  database: "zr392agqgzqwu3xq"
});

// Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

// Export connection for our ORM to use.
module.exports = connection;