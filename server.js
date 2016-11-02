//access express API
var express = require('express');

//create new app
var app = express();

//tell which folder we want to serve
app.use(express.static('public'));

//start serving
app.listen(3000, function(){
  console.log('Express server is up on port 3000');
});