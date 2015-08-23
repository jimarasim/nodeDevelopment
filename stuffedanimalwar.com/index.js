/*jaemzware.org*/
/* global require, __dirname, process */
//http://socket.io/get-started/chat/
//setup an express application and bind it to an http server
var app = require('express')();

//require express for serving other, static files, like .css from the root dir
var express=require('express');
app.use(express.static(__dirname));

//require http
var http = require('http').Server(app);

//attach a socket to the listening http
var io = require('socket.io')(http);

//GET PORT TO USE
var listenPort =3000;
if(process.argv.length < 3){
    console.log("USAGE: node index.js 3000");  
    listenPort = 3000;
}
else{
    listenPort = process.argv[2];
}

//LISTEN FOR INCOMING REQUESTS
http.listen(listenPort, function(){
    console.log('LISTENING TO PORT:'+listenPort);
});

app.get('/', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/index.html');
});

app.get('/djnachos', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/djnachos.html');
});

app.get('/Lexze', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/lexze.html');
});
app.get('/LEXZE', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/lexze.html');
});
app.get('/lexze', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/lexze.html');
});

//handler for incoming get requests
app.get('/sawonly', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/djnachosstuffedanimalwar.html');
        });
        
app.get('/only', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/djnachosstuffedanimalwar.html');
        });

app.get('/videodjonly', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/djnachosvideo.html');
        });

app.get('/djnachos', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/djnachosaudio.html');
        });

app.get('/audiodjonly', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/djnachosaudio.html');
        });
        
app.get('/AUDIODJONLY', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/djnachosaudio.html');
        });
        
app.get('/tabstripvideo', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/djnachostabstripvideo.html');
        });
        
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
    
    //ON LEXZECHATMESSAGE
    ///////////////////////////////////////////////////////////////////////////////////////////////////////lexzechatmessage for lexze.html, lexzesockethandler.js, lexzestylebase.css
    //specify 'chat message' event handler. happens when emit(ted) by the client
    socket.on('lexzechatmessage', function(lexzeChatMessageObject){
      //get the address of the message emitter
      var chatClientAddress = socket.handshake.address;
      //get datestamp from the server
      var chatServerDate = new Date();
      
      console.log("received lexzechatmessage lexzeChatMessageObject:" + JSON.stringify(lexzeChatMessageObject)+" FROM:"+chatClientAddress+" ON:"+chatServerDate);

      //update the emitted json object with server information
      lexzeChatMessageObject.CHATSERVERUSER = chatClientAddress;
      lexzeChatMessageObject.CHATSERVERDATE = chatServerDate;
       
      //broadcast
      console.log("emitting lexzechatmessage with lexzeChatMessageObject:"+JSON.stringify(lexzeChatMessageObject));
      io.emit('lexzechatmessage',lexzeChatMessageObject);
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


