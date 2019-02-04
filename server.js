var express = require("express");
var connection = mysql.createConnection(process.env.JAWSDB_URL);
connection.connect();

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");
app.use(routes);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});