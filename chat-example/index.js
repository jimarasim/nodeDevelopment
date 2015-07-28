/*jaemzware*/


/* global require, __dirname, process */
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

////////////////////////////////////////////////////////////////////////////////////////////////////////PORT TO USE
if(process.argv.length < 3){
    console.log("PLEASE SPECIFY PORT node index.js {port number. e.g. '3000'}");
}
var listenPort = process.argv[2];
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////SOCKET HANDLERS
//handler for incoming socket connections
io.on('connection', function(socket){
      
    var chatClientAddress = socket.handshake.address;
    console.log('CONNECT:'+chatClientAddress);
      
    //specify the socket disconnect event handler to print out a message when the user disconnects
    socket.on('disconnect', function(){
        var chatClientAddress = socket.handshake.address;
              console.log('DISCONNECT:'+chatClientAddress);
              });
      
      
      
    //specify 'chat message' event handler. happens when emit(ted) by the client
    socket.on('chatmessage', function(chatMessageObject){
      //get the address of the message emitter
      var chatServerAddress = socket.handshake.address;

      //get datestamp from the server
      var chatServerDate = new Date();

      //update the emitted json object with server information
      chatMessageObject.CHATSERVERUSER = chatServerAddress;
      chatMessageObject.CHATSERVERDATE = chatServerDate;
       
      //broadcast
      io.emit('chatmessage',chatMessageObject);
    });
      
    //specify 'tapmessage' event handler, when emit(ted) by the user connection
    socket.on('tapmsg', function(msg){
              console.log('message: ' + msg);

              //broadcast chat message (client page needs to have  a socket.on handler for this)
              io.emit('tapmsg',msg);
              });  
              
    socket.on('error', function(msg){
              console.log('error: ' + msg  );
              });  
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////////GET REQUEST HANDLERS
//handler for incoming get requests
app.get('/', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/index.html');
});


app.get('/camppapaken', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/camppapaken.html');
});

app.get('/vivideyecare', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/vivideyecare.html');
});

app.get('/bartonhouse', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/bartonhouse.html');
});

app.get('/betty', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/betty.html');
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
////////////////////////////////////////////////////

http.listen(listenPort, function(){
            console.log('LISTENING ON PORT:'+listenPort);
});

