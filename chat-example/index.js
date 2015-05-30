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

////////////////////////////////////////////////////PORT TO USE
if(process.argv.length < 3){
    console.log("PLEASE SPECIFY PORT node index.js {port number. e.g. '3000'}");
    return;
}
var listenPort = process.argv[2];

////////////////////////////////////////////////////GET REQUEST HANDLERS
//handler for incoming get requests
app.get('/', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/index.html');
});

//handler for incoming get requests
app.get('/canvas', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/canvas.html');
        });

//handler for incoming get requests
app.get('/svg', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/svg.html');
        });
////////////////////////////////////////////////////GET REQUEST HANDLERS

////////////////////////////////////////////////////SOCKET HANDLERS
//handler for incoming socket connections
io.on('connection', function(socket){
      console.log('a user connected');
      
      //specify the socket disconnect event handler to print out a message when the user disconnects
      socket.on('disconnect', function(){
                console.log('user disconnected');
                });
      
      //specify 'chat message' event handler. happens when emit(ted) by the client
      socket.on('chat message', function(chatClientMessage){
          
                //get the address of the message emitter
                
          
                console.log('chatClientMessage: ' + chatClientMessage);
                
                
                
                //broadcast chat message (client page needs to have  a socket.on handler for this)
                io.emit('chat message','{"chatClientMessage":"'+chatClientMessage+'}');

                   
                });
      
      //specify 'tapmessage' event handler, when emit(ted) by the user connection
      socket.on('tap msg', function(msg){
                console.log('message: ' + msg);
                
                //broadcast chat message (client page needs to have  a socket.on handler for this)
                io.emit('tap msg',msg);
                });
});
////////////////////////////////////////////////////SOCKET HANDLERS

http.listen(listenPort, function(){
            console.log('listening on *:'+listenPort);
});

