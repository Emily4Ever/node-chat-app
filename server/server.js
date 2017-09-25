
const path = require('path');
const publicPath = path.join(__dirname,'../public');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const port = process.env.PORT || 3000;
const {generateMessage,generateLocationMessage} =require('./utils/message');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection',(socket)=>{
  console.log('user connected');

  //socket.emit from admin  to the new user
  socket.emit('newMessage',generateMessage('Admin','welcome to the chat'));
  //socket.broadcast from admin to the other onces annoucing the new user
  socket.broadcast.emit('newMessage',generateMessage('Admin','New user joined'));

  socket.on('createMessage',(message,callback)=>{
    io.emit('newMessage',generateMessage(message.from,message.text));
    callback();

  });
  socket.on('createLocationMessage',(coords)=>{
    io.emit('newLocationMessage',generateLocationMessage('Admin ',coords.latitude,coords.longitude));
  })
  socket.on('disconnect',()=>{
    console.log('user was disconnected');
  });
});

server.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
});
