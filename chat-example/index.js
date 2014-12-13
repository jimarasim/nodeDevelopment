//http://socket.io/get-started/chat/
//setup an express application and bind it to an http server
var app = require('express')();
var http = require('http').Server(app);
//attach a socket to the listening http
var io = require('socket.io')(http);

//handler for incoming get requests
app.get('/', function(req, res){
        //send just a string response to a get request
        //res.send('<h1>Hello world</h1>');
        
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
                });
});

http.listen(3000, function(){
            console.log('listening on *:3000');
});