/*=============================================
=            Actual Server
=============================================*/
var app = require('express')();
var http = require('http').Server(app);//create http web-server
var io = require('socket.io')(http);//create web-sockets
var parser = require('body-parser');//JSON body parser for $http requests
app.use(parser());//setting parser

/*==========  Socket Functionality  ==========*/
require('./app/socket/chat')(io);

/*==========  API-Routing  ==========*/
app.use('/', require('./routes/index'));

/*=============================================
=          Listening like a Psychiatrist
=============================================*/
http.listen(5000, function() {
  console.log('listening on 8080');
});