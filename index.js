var express = require("express")

var app = express()

var bodyParser = require('body-parser')
app.use( bodyParser.json() ); 


app.post('/payload', function(req, res) {
    console.log(req.body)
});

app.get('/github', function(req, res) {
    console.log('hey!');
});

var server = app.listen(4567, function() {
    console.log("listeing at 4567!");
});