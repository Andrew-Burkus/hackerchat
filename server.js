var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/*==========  Socket Functionality  ==========*/
require('./app/socket/chat')(io);

/*==========  Routing  ==========*/
app.use('/', require('./routes/index'));
app.use('/login', require('./routes/login'));

/*=============================================
=          Listening like a Psychiatrist
=============================================*/
http.listen(8080, function() {
  console.log('listening on 8080');
});