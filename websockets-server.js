var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
var port = 3001;
var ws = new WebSocketServer({port});
var messages = [];
console.log('websockets server started');

ws.on('connection', function (socket) {
  console.log('client connection established');

  messages.forEach(function (msg) {
    socket.send(msg);
  });

  socket.on('message', function (data) {
    console.log(`message recieved: ${data}`);
    messages.push(data);
    socket.send(data);
  });
});