var express = require("express")

var app = express()

app.set('port', (process.env.PORT || 5000));

var bodyParser = require('body-parser')
app.use( bodyParser.json() ); 

var latestBody = null;
var count = 0;

app.post('/payload', function(req, res) {
    console.log("JUST TESTING SHIT")
    latestBody = req.body;
    count++;
});

app.get('/github', function(req, res) {
    console.log("CURRENT COUZNT IS ", count);
    res.send("HEY", latestBody);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
