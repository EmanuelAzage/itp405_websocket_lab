let WebSocket = require('ws');

let port = process.env.PORT || 8080;

let wss = new WebSocket.Server({port: port});

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log(`Recieved: ${message}`);

    wss.clients.forEach((client) => {
      // don't want to send the message back to the client that sent it to us
      if(ws != client) {
        client.send(message);
      }
    });

  });
});
