var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.sendfile('html.html', { root: __dirname + "/" } );
});
app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});