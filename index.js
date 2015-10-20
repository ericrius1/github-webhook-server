var express = require("express")

var app = express()

var bodyParser = require('body-parser')
app.use( bodyParser.json() ); 

var latestBody = null;

app.post('/payload', function(req, res) {
    console.log(req.body)
    latestBody = req.body;
});

app.get('/github', function(req, res) {
    res.send(latestBody);
});

var server = app.listen(4567, function() {
    console.log("listeing at 4567!");
});