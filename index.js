var http = require('http')
var path = require('path')
var express = require('express')

var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/index.html'));
});

app.get('/narrow', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/narrow.html'));
});

app.listen(3000, () => {
    console.log('http://localhost:3000 is running !')
});
