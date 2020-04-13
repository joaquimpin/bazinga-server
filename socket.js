

const socketGame = require('./routes/game/socket_game')
const connection = (io) => {
	io.on('connection', socket => {
		socketGame.startListener(socket,io)
		console.log('New user connected');
		socket.on('disconnect', () => { 
			try {
				
				io.sockets.actualGame[socket.room].numberOfPlayersAtRoom--
			} catch (error) {
				
			}
			console.log('User disconnected');
		})
		
	});

};
module.exports = {
	connection
}

