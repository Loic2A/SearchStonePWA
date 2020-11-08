var PORT = process.env.PORT || 5000;

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app'));

var http = require('http');
var server = http.Server(app);
server.listen(PORT, function() {
    console.log('ca tourne');
});


