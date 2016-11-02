//access express API
var express = require('express');

//create new app
var app = express();
const PORT = process.env.PORT || 3000;

//Force it to be HTTP 
app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'http'){
    next();
  }else{
    res.redirect('http://' + req.hostname + req.url);
  }
});

//tell which folder we want to serve
app.use(express.static('public'));

//start serving
app.listen(port, function(){
  console.log('Express server is up on port ' + PORT);
});
