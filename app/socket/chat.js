module.exports = (function(io) {
	io.on('connection', function(socket) {
		console.log('a user connected');
		socket.on('chat-message', function(data) {
			console.log(data.user + ': ' + msg);
		});
	});
});