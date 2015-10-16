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
    var chatServerDate = new Date();
    console.log('CONNECT:'+chatClientAddress+chatServerDate);
    
    //COMMON--------------------------------------------------------------------------------------
    socket.on('disconnect', function(){
        var chatClientAddress = socket.handshake.address;
        var chatServerDate = new Date();
        console.log('DISCONNECT:'+chatClientAddress+chatServerDate);
    });
         
    //ON ERROR
    socket.on('error', function(msgObject){
              console.log('ERROR: ' + msgObject  );
    }); 
    
    //CHATMESSAGES--------------------------------------------------------------------------------------
//    var chatMessageObject = {
//              CHATCLIENTUSER: chatClientUser,
//              CHATSERVERUSER:'',
//              CHATCLIENTMESSAGE:message,
//              CHATSERVERDATE:''
//          };  
    socket.on('chatmessage', function(msgObject){
        sendChatMessage('chatmessage',msgObject);
    });
    
    socket.on('djnachoschatmessage', function(msgObject){
        sendChatMessage('djnachoschatmessage',msgObject);
    });
    
    socket.on('roxhillsessionschatmessage', function(msgObject){
        sendChatMessage('roxhillsessionschatmessage',msgObject);
    });
    
    socket.on('sufferingfuckheadschatmessage', function(msgObject){
        sendChatMessage('sufferingfuckheadschatmessage',msgObject);
    });
    
    socket.on('melvinschatmessage', function(msgObject){
        sendChatMessage('melvinschatmessage',msgObject);
    });
    
    socket.on('cracksabbathchatmessage', function(msgObject){
        sendChatMessage('cracksabbathchatmessage',msgObject);
    });
    
    socket.on('builttospillchatmessage', function(msgObject){
        sendChatMessage('builttospillchatmessage',msgObject);
    });
    
    socket.on('zekechatmessage', function(msgObject){
        sendChatMessage('zekechatmessage',msgObject);
    });
    
    socket.on('lastgaspchatmessage', function(msgObject){
        sendChatMessage('lastgaspchatmessage',msgObject);
    });
    
    socket.on('marklaneganchatmessage', function(msgObject){
        sendChatMessage('marklaneganchatmessage',msgObject);
    });
    
    socket.on('bigbusinesschatmessage', function(msgObject){
        sendChatMessage('bigbusinesschatmessage',msgObject);
    });
    
    //TAPMESSAGES--------------------------------------------------------------------------------------
    socket.on('djnachostapmessage', function(msgObject){
        sendTapMessage('djnachostapmessage',msgObject);
    });  
    
    socket.on('roxhillsessionstapmessage', function(msgObject){
        sendTapMessage('roxhillsessionstapmessage',msgObject);
    });
    
    socket.on('sufferingfuckheadstapmessage', function(msgObject){
        sendTapMessage('sufferingfuckheadstapmessage',msgObject);
    });
    
    socket.on('melvinstapmessage', function(msgObject){
        sendTapMessage('melvinstapmessage',msgObject);
    });
    
    socket.on('cracksabbathtapmessage', function(msgObject){
        sendTapMessage('cracksabbathtapmessage',msgObject);
    });
    
    socket.on('builttospilltapmessage', function(msgObject){
        sendTapMessage('builttospilltapmessage',msgObject);
    });
    
    socket.on('zeketapmessage', function(msgObject){
        sendTapMessage('zeketapmessage',msgObject);
    });
    
    socket.on('lastgasptapmessage', function(msgObject){
        sendTapMessage('lastgasptapmessage',msgObject);
    });
    
    socket.on('marklanegantapmessage', function(msgObject){
        sendTapMessage('marklanegantapmessage',msgObject);
    });
    
    socket.on('bigbusinesstapmessage', function(msgObject){
        sendTapMessage('bigbusinesstapmessage',msgObject);
    });
    
    
    //GENERIC CHATMESSAGE SENDER, FOR MULTIPLE, INDEPENDENT CHAT CHANNELS
    //    sockethandler.js (client) => emitChatMessage
    //    var chatMessageObject = {
    //              CHATCLIENTUSER: chatClientUser,
    //              CHATSERVERUSER:'',
    //              CHATCLIENTMESSAGE:message,
    //              CHATSERVERDATE:''
    //          };  
    function sendChatMessage(chatSocketEvent,chatMsgObject){
          //GET THE ADDRESS AND DATE
          var chatClientAddress = socket.handshake.address;
          var chatServerDate = new Date();

          //update the emitted json object with server information
          chatMsgObject.CHATSERVERUSER = chatClientAddress;
          chatMsgObject.CHATSERVERDATE = chatServerDate;

          //broadcast
          io.emit(chatSocketEvent,chatMsgObject);
    }
    //GENERIC TAPMESSAGE SENDER, FOR MULTIPLE, INDEPENDENT CHAT CHANNELS
    //    sockethandler.js (client) => $('#stuffedanimalwarsvg').click
    //    var tapMsgObject = JSON.parse('{"x":"'+event.pageX+
    //            '", "y":"'+event.pageY+
    //            '", "animal":"'+$( '#animals option:selected' ).val()+
    //            '","customimage":"'+$('#imagepathtextbox option:selected').val()+
    //            '","movement":"'+$('#movement option:selected').val()+'"}');
    function sendTapMessage(tapSocketEvent,tapMsgObject){
        //broadcast TAP message (client page needs to have  a socket.on handler for this)
        io.emit(tapSocketEvent,tapMsgObject);
    } 
});



