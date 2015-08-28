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

        
app.get('/roxhillsessions', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/roxhillsessions.html');
        });
        
app.get('/', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/index.html');
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
        
app.get('/tabstripvideo', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/djnachostabstripvideo.html');
        });
        
//ON PERSISTENT CONNECTION
//handler for incoming socket connections
io.on('connection', function(socket){
    var chatClientAddress = socket.handshake.address;
    console.log('CONNECT:'+chatClientAddress);
    
    //COMMON--------------------------------------------------------------------------------------
    socket.on('disconnect', function(){
        var chatClientAddress = socket.handshake.address;
              console.log('DISCONNECT:'+chatClientAddress);
              });
         
    //ON ERROR
    socket.on('error', function(msg){
              console.log('error: ' + msg  );
    }); 
    
    
    //CHATMESSAGES--------------------------------------------------------------------------------------
    socket.on('chatmessage', function(chatMessageObject){
        sendChatMessage('chatmessage',chatMessageObject);
    });
    
    socket.on('lexzechatmessage', function(chatMessageObject){
        sendChatMessage('lexzechatmessage',chatMessageObject);
    });
    
    socket.on('djnachoschatmessage', function(chatMessageObject){
        sendChatMessage('djnachoschatmessage',chatMessageObject);
    });
    
    socket.on('roxhillsessionschatmessage', function(chatMessageObject){
        sendChatMessage('roxhillsessionschatmessage',chatMessageObject);
    });
    
    
    
    //TAPMESSAGES--------------------------------------------------------------------------------------
    socket.on('tapmsg', function(tapMsgObject){
        sendTapMessage('tapmsg',tapMsgObject);
    }); 
    
    socket.on('djnachostapmessage', function(tapMsgObject){
        sendTapMessage('djnachostapmessage',tapMsgObject);
    });  
    
    socket.on('lexzetapmessage', function(tapMsgObject){
        sendTapMessage('lexzetapmessage',tapMsgObject);
    });
    
    
    //GENERIC CHATMESSAGE SENDER, FOR MULTIPLE, INDEPENDENT CHAT CHANNELS
    function sendChatMessage(socketEvent,chatMessageObject){
          //GET THE ADDRESS AND DATE
          var chatClientAddress = socket.handshake.address;
          var chatServerDate = new Date();

          //update the emitted json object with server information
          chatMessageObject.CHATSERVERUSER = chatClientAddress;
          chatMessageObject.CHATSERVERDATE = chatServerDate;

          console.log("BROADCAST SOCKETEVENT:"+socketEvent+" CHATMESSAGEOBJECT:" + JSON.stringify(chatMessageObject)+" FROM:"+chatClientAddress+" ON:"+chatServerDate);

          //broadcast
          io.emit(socketEvent,chatMessageObject);
    }

    function sendTapMessage(socketEvent,tapMsgObject){
            //GET THE ADDRESS AND DATE
            var chatClientAddress = socket.handshake.address;
            var chatServerDate = new Date();
            console.log("BROADCAST SOCKETEVENT:"+socketEvent+" TAPMSGOBJECT:" + JSON.stringify(tapMsgObject)+" FROM:"+chatClientAddress+" ON:"+chatServerDate);

            //broadcast chat message (client page needs to have  a socket.on handler for this)
            io.emit(socketEvent,tapMsgObject);
    }
    
    
    
});



