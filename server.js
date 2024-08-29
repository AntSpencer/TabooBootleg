const express = require("express");
const http = require("http");
const WebSocket = require("ws");

//Even withoout a .env file, Render uses a custm one so you HAVE TO put it down.
const port = process.env.PORT || 3000;
const app = express();

const password = "Password"; //THIS IS WHERE YOU CHANGE THE PASSWORD I HATE IT SO MUCH

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log("received: %s", message);
    if (message == "Password") {
      ws.send("Granted");
    } else {
      ws.send("Denied");
    }
  });

  //send this to update the Connection Status (fancy i know)
  ws.send("Connected");
});

//Start the server
server.listen(port, () => {
  console.log(`Server started on port ${server.address().port} :)`);
});
