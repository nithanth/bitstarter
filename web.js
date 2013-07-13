var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var fileContents = fs.readFileSync('index.html');
var requiredResponse = fileContents.toString();

app.get('/', function(request, response) {
  response.send(requiredResponse);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
