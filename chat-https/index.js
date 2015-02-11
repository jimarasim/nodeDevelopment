
//require express for serving other, static files, like .css from the root dir
var express=require('express');
var app = express();

//require https
var https = require('https');

//require fs (file system, for getting certificate)
var fs = require('fs');

var privateKey = fs.readFileSync('key.pem');
var certificate = fs.readFileSync('cert.pem');
var credentials = {key: privateKey, cert:certificate};

//attach a socket to the listening https
var io = require('socket.io')(https);

//include static files like .css
app.use(express.static(__dirname));

////////////////////////////////////////////////////GET REQUEST HANDLERS
//handler for incoming get requests
app.get('/', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/index.html');
});

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
                var chatClientAddress = socket.handshake.address;
                var chatClientDate = new Date();
                
          
                console.log('chatClientMessage: ' + chatClientMessage);
                
                
                //broadcast chat message (client page needs to have  a socket.on handler for this)
                io.emit('chat message','{"chatClientMessage":"'+chatClientMessage+'","chatClientAddress":"'+chatClientAddress+'","chatClientDate":"'+chatClientDate.toUTCString()+'"}');

                   
                });
      
      //specify 'tapmessage' event handler, when emit(ted) by the user connection
      socket.on('tap msg', function(msg){
                console.log('message: ' + msg);
                
                //broadcast chat message (client page needs to have  a socket.on handler for this)
                io.emit('tap msg',msg);
                });
});

///////////////////////////////////////////////////////////START SERVER
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(3000, function(){
                   console.log('listenting over https on 3000');
                   });


