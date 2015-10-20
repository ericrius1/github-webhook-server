var express = require("express")
var shortid = require('shortid');

var app = express()

app.set('port', (process.env.PORT || 5000));

var bodyParser = require('body-parser')
app.use( bodyParser.json() ); 

var latestBody = null;

app.post('/payload', function(req, res) {
    latestBody = req.body;
    latestBody.id = shortid.generate()
});

app.get('/github', function(req, res) {
    res.send(latestBody);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
