var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/*==========  Socket Functionality  ==========*/
require('./app/socket/chat')(io);

/*==========  Routing  ==========*/
var home = require('./routes/index');
app.use('/', home);

/*=============================================
=            Listening like a Psychiatrist
=============================================*/
http.listen(3000, function(){
  console.log('listening on *:3000');
});