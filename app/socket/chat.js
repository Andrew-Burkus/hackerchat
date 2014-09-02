module.exports = (function(io) {
	io.on('connection', function(socket) {
		console.log('a user connected');

		socket.broadcast.emit('connection', 'a user has connected');

		socket.on('chat-message', function(data) {
			socket.broadcast.emit('chat-message', data);
		});
	});
});