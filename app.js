let WebSocket = require('ws');

let port = process.env.PORT || 8080;

let wss = new WebSocket.Server({port: port});

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log(`Recieved: ${message}`);
    // ws.send(message);

    wss.clients.forEach((client) => {
      client.send(message);
    });

  });
});
