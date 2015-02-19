


//require fs (file system, for getting certificate)
var fs = require('fs');

var privateKey = fs.readFileSync('key.pem');
var certificate = fs.readFileSync('cert.pem');
var sslOptions = {key: privateKey, cert:certificate};

//attach a socket to the listening https
var io = require('socket.io');

////////////////////////////////////////////////////////////////////////////////WEB APPLICATION
//require express for serving other, static files, like .css from the root dir
var express=require('express');
var app = express();
//include static files like .css
app.use(express.static(__dirname));
//handler for incoming get requests
app.get('/', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/index.html');
        });



/////////////////////////////////////////////////////////////////////////////////////NODE SERVER
//require https
var http = require('http');
var https = require('https');
var httpServer = http.createServer(app);
var httpsServer = https.createServer(sslOptions, app);

httpServer.listen(3000, function(){
                  console.log('listenting over http on 3000');
                  });
httpsServer.listen(3001, function(){
                   console.log('listenting over https on 3001');
                   });


////////////////////////////////////////////////////SOCKET HANDLER HTTPS
var io = io.listen(httpsServer, {
                       "log level" : 3,
                       "match origin protocol" : true,
                       "transports" : ['websocket']
                       });
//handler for incoming socket connections
io.on('connection', function(socket){
      console.log('a user connected https');
      
      //specify the socket disconnect event handler to print out a message when the user disconnects
      socket.on('disconnect', function(){
            console.log('user disconnected https');
            });
      
      //specify 'chat message' event handler. happens when emit(ted) by the client
      socket.on('chat message', function(chatClientMessage){
            
            //get the address of the message emitter
            var chatClientAddress = socket.handshake.address;
            var chatClientDate = new Date();
            
            
            console.log('chatClientMessage: ' + chatClientMessage);
            
            
            //broadcast chat message (client page needs to have  a socket.on handler for this)
            socket.emit('chat message','{"chatClientMessage":"'+chatClientMessage+'","chatClientAddress":"'+chatClientAddress+'","chatClientDate":"'+chatClientDate.toUTCString()+'"}');
            
            
            });
      
      //specify 'tapmessage' event handler, when emit(ted) by the user connection
      socket.on('tap msg', function(msg){
            console.log('message: ' + msg);
            
            //broadcast chat message (client page needs to have  a socket.on handler for this)
            socket.emit('tap msg',msg);
            });
      });

////////////////////////////////////////////////////SOCKET HANDLER HTTP
var ioHttp = io.listen(httpServer, {
                   "log level" : 3,
                   "match origin protocol" : true,
                   "transports" : ['websocket']
                   });
//handler for incoming socket connections
ioHttp.on('connection', function(socket){
      console.log('a user connected HTTP');
      
      //specify the socket disconnect event handler to print out a message when the user disconnects
      socket.on('disconnect', function(){
                console.log('user disconnected http');
                });
      
      //specify 'chat message' event handler. happens when emit(ted) by the client
      socket.on('chat message', function(chatClientMessage){
                
                //get the address of the message emitter
                var chatClientAddress = socket.handshake.address;
                var chatClientDate = new Date();
                
                
                console.log('chatClientMessage: ' + chatClientMessage);
                
                
                //broadcast chat message (client page needs to have  a socket.on handler for this)
                socket.emit('chat message','{"chatClientMessage":"'+chatClientMessage+'","chatClientAddress":"'+chatClientAddress+'","chatClientDate":"'+chatClientDate.toUTCString()+'"}');
                
                
                });
      
      //specify 'tapmessage' event handler, when emit(ted) by the user connection
      socket.on('tap msg', function(msg){
                console.log('message: ' + msg);
                
                //broadcast chat message (client page needs to have  a socket.on handler for this)
                socket.emit('tap msg',msg);
                });
      });










