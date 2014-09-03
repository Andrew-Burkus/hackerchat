/*=============================================
=            Socket.io Handler
=============================================*/
module.exports = (function(io) {
	io.on('connection', function(socket) {
		/*==========  User Connections for Debug Purposes  ==========*/
		console.log('a user connected');

		/*==========  Emit Connection Event to all other sockets  ==========*/
		socket.broadcast.emit('connection', 'a user has connected');

		/*=============================================
		=            Message Event
		=============================================*/
		socket.on('chat-message', function(data) {
			socket.broadcast.emit('chat-message', data);//broadcast sends to all OTHER SOCKETS, not to sender
		});
	});
});