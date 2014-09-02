var app = require('express')();
var http = require('http').Server(app);
var parser = require('body-parser');
var io = require('socket.io')(http);

app.use(parser());

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