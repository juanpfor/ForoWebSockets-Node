
const app = require('./app')
const http = require('http')
const { Server } = require("socket.io"); //import express con ESM
const server = http.createServer(app)
require("dotenv").config();

const socketio = new Server(server)

const io = socketio.listen(server)

require('./sockets')(io)


//create port
const PORT = process.env.PORT || 8080;
//running port
server.listen(PORT, (err) => {
  if (err) {
    console.log(`error server:${err}`);
  } else {
    console.log(`server running succesfull in port: ${PORT}`);
  }
});
