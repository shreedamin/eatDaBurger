var express = require("express");
var bodyParser = require("body-parser");
var methodOveride = require("method-override");
var exphbs = require("express-handlebars");

var app = express();
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOveride("_method"));
app.engine("handlebars", exphbs({
    defaultLayout: 'main'
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/routes.js");
app.use("/", routes);

var port = process.env.PORT || 3000;
app.listen(port);

