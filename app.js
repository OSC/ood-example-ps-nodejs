// a minimal node app that displays your running processes on the OOD web host
var http = require('http');
var exec = require('child_process').exec;

var server = http.createServer(function (request, response){
    exec('ps ufx', function(error, stdout, stderr){
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("<h2>" + new Date() + "</h2>");
        response.write("<pre>" + stdout + "</pre>\n");
        response.end();
    });
});
server.listen(3000);

