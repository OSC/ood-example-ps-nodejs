// a minimal node app that displays your running processes on the OOD web host
var http = require('http');
var exec = require('child_process').exec;
var express   = require('express');
var hbs       = require('hbs');
var path      = require('path');


// create routes
var router = express.Router();

router.get("/", function(request, response){
  exec('ps ufx', function(error, stdout, stderr){
    response.render('index', {
      date: new Date(),
      output: stdout
    });
  });
});


var app = express();

// Setup template engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(process.env.PASSENGER_BASE_URI || '/', router);

app.listen(3000);
