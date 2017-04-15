var express = require("express");
var path = require("path");
var routes = require("./routes/routes");

var app = express();

app.use(express.static(path.resolve(__dirname, "public")));
app.set("view engine", "ejs");

app.use(routes);

app.listen(3000, function(){
	console.log("Applicaation listening at port 3000");
});