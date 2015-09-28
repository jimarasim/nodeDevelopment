//JAEMZWARE
//EXAMPLE STARTED FROM: http://socket.io/get-started/chat/
//
/* global require, __dirname, process, http */

//setup an express application and bind it to an http server
var fs = require('fs');
var app = require('express')(); 
var express=require('express'); 
var http = require('http').Server(app);
var io = require('socket.io')(http);
var listenPort =3000;

//serve .css and .js and media files
app.use(express.static(__dirname));

//GET PORT TO USE
if(process.argv.length !== 3){
    console.log("PARAMETERS EXPECTED:3 ACTUAL:"+process.argv.length+" ASSUMING: $ node index.js "+listenPort);
}
else{
    listenPort = process.argv[2];
}

//LISTEN FOR INCOMING REQUESTS
http.listen(listenPort, function(){
    console.log('LISTENING TO PORT:'+listenPort);
});
        
//PAGE MAPPINGS
//IF PUTTING  A NEW PAGE, AND THAT PAGE SUPPORTS CHAT OR STUFFEDANIMAL WAR, DONT FORGET TO ADD THE SOCKET EVENT HANLDER FOR THE PAGE BELOW
app.get('/', function(req, res){
    console.log(req);
        //send a file back as the response
        res.sendFile(__dirname + '/index.html');
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
        
app.get('/sufferingfuckheads', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/sufferingfuckheads.html');
        });
        
app.get('/roxhillsessions', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/roxhillsessions.html');
        });

app.get('/melvins', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/melvins.html');
        });

app.get('/cracksabbath', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/cracksabbath.html');
        });
        
app.get('/builttospill', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/builttospill.html');
        });
  
app.get('/zeke', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/zeke.html');
        });
          
app.get('/lastgasp', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/lastgasp.html');
        });
        
app.get('/marklanegan', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/marklanegan.html');
        });
          
app.get('/bigbusiness', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/bigbusiness.html');
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
    
    socket.on('djnachoschatmessage', function(chatMessageObject){
        sendChatMessage('djnachoschatmessage',chatMessageObject);
    });
    
    socket.on('roxhillsessionschatmessage', function(chatMessageObject){
        sendChatMessage('roxhillsessionschatmessage',chatMessageObject);
    });
    
    socket.on('sufferingfuckheadschatmessage', function(chatMessageObject){
        sendChatMessage('sufferingfuckheadschatmessage',chatMessageObject);
    });
    
    socket.on('melvinschatmessage', function(chatMessageObject){
        sendChatMessage('melvinschatmessage',chatMessageObject);
    });
    
    socket.on('cracksabbathchatmessage', function(chatMessageObject){
        sendChatMessage('cracksabbathchatmessage',chatMessageObject);
    });
    
    socket.on('builttospillchatmessage', function(chatMessageObject){
        sendChatMessage('builttospillchatmessage',chatMessageObject);
    });
    
    socket.on('zekechatmessage', function(chatMessageObject){
        sendChatMessage('zekechatmessage',chatMessageObject);
    });
    
    socket.on('lastgaspchatmessage', function(chatMessageObject){
        sendChatMessage('lastgaspchatmessage',chatMessageObject);
    });
    
    socket.on('marklaneganchatmessage', function(chatMessageObject){
        sendChatMessage('marklaneganchatmessage',chatMessageObject);
    });
    
    socket.on('bigbusinesschatmessage', function(chatMessageObject){
        sendChatMessage('bigbusinesschatmessage',chatMessageObject);
    });
    
    //TAPMESSAGES--------------------------------------------------------------------------------------
    socket.on('tapmsg', function(tapMsgObject){
        sendTapMessage('tapmsg',tapMsgObject);
    }); 
    
    socket.on('djnachostapmessage', function(tapMsgObject){
        sendTapMessage('djnachostapmessage',tapMsgObject);
    });  
    
    socket.on('roxhillsessionstapmessage', function(tapMessageObject){
        sendChatMessage('roxhillsessionstapmessage',tapMessageObject);
    });
    
    socket.on('sufferingfuckheadstapmessage', function(tapMessageObject){
        sendChatMessage('sufferingfuckheadstapmessage',tapMessageObject);
    });
    
    socket.on('melvinstapmessage', function(tapMessageObject){
        sendChatMessage('melvinstapmessage',tapMessageObject);
    });
    
    socket.on('cracksabbathtapmessage', function(tapMessageObject){
        sendChatMessage('cracksabbathtapmessage',tapMessageObject);
    });
    
    socket.on('builttospilltapmessage', function(tapMessageObject){
        sendChatMessage('builttospilltapmessage',tapMessageObject);
    });
    
    socket.on('zeketapmessage', function(tapMessageObject){
        sendChatMessage('zeketapmessage',tapMessageObject);
    });
    
    socket.on('lastgasptapmessage', function(tapMessageObject){
        sendChatMessage('lastgasptapmessage',tapMessageObject);
    });
    
    socket.on('marklanegantapmessage', function(tapMessageObject){
        sendChatMessage('marklanegantapmessage',tapMessageObject);
    });
    
    socket.on('bigbusinesstapmessage', function(tapMessageObject){
        sendChatMessage('bigbusinesstapmessage',tapMessageObject);
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



