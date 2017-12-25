var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
var port = 3001;
var ws = new WebSocketServer({port});
var messages = [];
var clients = new Set();

console.log('websockets server started');

ws.on('connection', function(socket) {
  console.log('client connection established');

  socket.send('Please, enter the password:');

  socket.on('message', function(data) {

    if (!clients.has(socket) && data.toLowerCase() === 'swordfish') {
      socket.send('==== Password correct. Welcome! ====');
      messages.forEach(function(msg) {
        socket.send(msg);
      });
      clients.add(socket);
    } else if (!clients.has(socket)) {
      socket.send('==== Bad password. Please, try again ====');
    }

    console.log(clients.has(socket));

    if (clients.has(socket) && data.toLocaleLowerCase() !== 'swordfish') {
      console.log('message received: %s', data);
      messages.push(data);
      ws.clients.forEach(function(clientSocket) {
        clientSocket.send(data);
      });
    }
  });
});
