var express = require("express");
var questionGenerator = require("../myModules/question-generator");

var Router = express.Router();

Router.get("/", function(req, res){

	res.render("home");

});

Router.get("/question/:number", function(req, res){

	var questionObj = questionGenerator.generate(req.params.number);

	res.json(questionObj);

});

module.exports = Router;