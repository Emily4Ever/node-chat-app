var socket = io();
socket.on('connect',function() {
  console.log('connected to the server')
  socket.emit('createMessage', {
    from : 'diana',
    text : 'Yep this msg should work'
  });
});
socket.on('disconnect',function() {
  console.log('disconnected form the server');
});
socket.on('newMessage',function(message){
  console.log('newMessage',message);
});
