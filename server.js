const express = require('express')

let app = express()

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
    res.sendfile(__dirname + '/');
  });
    
app.listen(3000, function () {
    console.log('Listening on port 3000!');
});