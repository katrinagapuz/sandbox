var express = require('express');
var app = express();

app.set("view engine", "ejs");

var request = require('request');

app.get("/", function(req, res) {
	res.render("search");
});

app.get("/results", function(req, res) {
	var searchq = req.query.searchq;
	var url = "http://omdbapi.com/?s=" + searchq + "&apikey=thewdb";
	request(url, function(err, resp, body) {
		if(!err && resp.statusCode === 200) {
			var result = JSON.parse(body);
			res.render("results", {result: result});
		}
	});
});

app.listen("8080", function() {
	console.log("Server started");
});
