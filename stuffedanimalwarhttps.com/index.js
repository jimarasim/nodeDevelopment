/*jaemzware.org*/


/* global require, __dirname, process */
//http://socket.io/get-started/chat/
//setup an express application and bind it to an http server
var app = require('express')();

//require express for serving other, static files, like .css from the root dir
var express=require('express');

//require http
var https = require('https').Server(app);

//attach a socket to the listening http
var io = require('socket.io')(https);

//THIS ALLOWS ME TO include static files like .css
app.use(express.static(__dirname));

//GET PORT TO USE
if(process.argv.length < 3){
    console.log("USAGE (e.g. to listen on port 3000: node index.js 3000");
}
var listenPort = process.argv[2];

//ON PERSISTENT CONNECTION
//handler for incoming socket connections
io.on('connection', function(socket){
      
    var chatClientAddress = socket.handshake.address;
    console.log('CONNECT:'+chatClientAddress);
      
    //ON DISCONNECT
    //specify the socket disconnect event handler to print out a message when the user disconnects
    socket.on('disconnect', function(){
        var chatClientAddress = socket.handshake.address;
              console.log('DISCONNECT:'+chatClientAddress);
              });
         
    //ON CHATMESSAGE (OG STUFFEDANIMALWAR)
    ///////////////////////////////////////////////////////////////////////////////////////////////////////chatmessage for index.html, sockerhandler.js, stylebase.css
    //specify 'chat message' event handler. happens when emit(ted) by the client
    socket.on('chatmessage', function(chatMessageObject){
      console.log("received chatmessage chatMessageObject:"+JSON.stringify(chatMessageObject));
      
      //get the address of the message emitter
      var chatClientAddress = socket.handshake.address;
      console.log("received chatmessage chatMessageObject:"+JSON.stringify(chatMessageObject)+" FROM:"+chatClientAddress);

      //get datestamp from the server
      var chatServerDate = new Date();
      console.log("received chatmessage chatMessageObject:"+JSON.stringify(chatMessageObject)+" FROM:"+chatClientAddress+" ON:"+chatServerDate);

      //update the emitted json object with server information
      chatMessageObject.CHATSERVERUSER = chatClientAddress;
      chatMessageObject.CHATSERVERDATE = chatServerDate;
       
      //broadcast
      console.log("emitting chatmessage with chatMessageObject:"+JSON.stringify(chatMessageObject));
      io.emit('chatmessage',chatMessageObject);
    });
    
    //ON BETTYCHATMESSAGE
    ///////////////////////////////////////////////////////////////////////////////////////////////////////bettychatmessage for betty.html, bettysockethandler.js, bettystylebase.css
    //specify 'chat message' event handler. happens when emit(ted) by the client
    socket.on('bettychatmessage', function(bettyChatMessageObject){
      //get the address of the message emitter
      var chatClientAddress = socket.handshake.address;
      //get datestamp from the server
      var chatServerDate = new Date();
      
      console.log("received bettychatmessage bettyChatMessageObject:" + JSON.stringify(bettyChatMessageObject)+" FROM:"+chatClientAddress+" ON:"+chatServerDate);

      //update the emitted json object with server information
      bettyChatMessageObject.CHATSERVERUSER = chatClientAddress;
      bettyChatMessageObject.CHATSERVERDATE = chatServerDate;
       
      //broadcast
      console.log("emitting bettychatmessage with bettyChatMessageObject:"+JSON.stringify(bettyChatMessageObject));
      io.emit('bettychatmessage',bettyChatMessageObject);
    });
      

    //ON TAPMESSAGE (OG STUFFED ANIMAL WAR
    ///////////////////////////////////////////////////////////////////////////////////////////////////////chatmessage for index.html, sockerhandler.js, stylebase.css
    //specify 'tapmessage' event handler, when emit(ted) by the user connection
    socket.on('tapmsg', function(tapMsgObject){
            console.log('received tapmsg tapMsgObject: ' + JSON.stringify(tapMsgObject));
              
            //get the address of the message emitter
            var chatClientAddress = socket.handshake.address;
            console.log("received tapmsg tapMsgObject:" + JSON.stringify(tapMsgObject)+" FROM:"+chatClientAddress);

            //get datestamp from the server
            var chatServerDate = new Date();
            console.log("received tapmsg tapMsgObject:" + JSON.stringify(tapMsgObject)+" FROM:"+chatClientAddress+" ON:"+chatServerDate);

            //broadcast chat message (client page needs to have  a socket.on handler for this)
            console.log("emitting tapmsg with tapMsgObject:"+tapMsgObject);    
            
            //broadcast chat message (client page needs to have  a socket.on handler for this)
            io.emit('tapmsg',tapMsgObject);
    }); 
    
    //ON ERROR
    socket.on('error', function(msg){
              console.log('error: ' + msg  );
    });  
});

////////////////////////////////////////////////////////////////////////////////////////////////////////GET REQUEST HANDLERS
//handler for incoming get requests
app.get('/', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/index.html');
});

app.get('/djnachos', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/djnachos.html');
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

