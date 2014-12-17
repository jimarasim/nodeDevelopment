//http://socket.io/get-started/chat/
//setup an express application and bind it to an http server
var app = require('express')();

//require express for serving other, static files, like .css from the root dir
var express=require('express');

//require http
var http = require('http').Server(app);

//attach a socket to the listening http
var io = require('socket.io')(http);

//include static files like .css
app.use(express.static(__dirname));

//handler for incoming get requests
app.get('/', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/index.html');
});

//handler for incoming socket connections
io.on('connection', function(socket){
      console.log('a user connected');
      
      //specify the socket disconnect event handler to print out a message when the user disconnects
      socket.on('disconnect', function(){
                console.log('user disconnected');
                });
      
      //specify 'chat message' event handler, when emit(ted) by the user connection
      socket.on('chat message', function(msg){
                console.log('message: ' + msg);
                
                //broadcast chat message (client page needs to have  a socket.on handler for this)
                io.emit('chat message',msg);
                });
});

http.listen(3000, function(){
            console.log('listening on *:3000');
});