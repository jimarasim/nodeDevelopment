//STUFFPEDANIMALWAR HTTP JAEMZWARE
//EXAMPLE STARTED FROM: http://socket.io/get-started/chat/

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

app.get('/roxhill', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/roxhillsessions.html');
        });

app.get('/sawonlyV2', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/djnachosstuffedanimalwarV2.html');
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
        
app.get('/skycriesmary', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/skycriesmary.html');
        });
        
app.get('/marklanegan', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/marklanegan.html');
        });
          
app.get('/bigbusiness', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/bigbusiness.html');
        });

app.get('/houston2015', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/houston2015.html');
        });

//ON PERSISTENT CONNECTION
//handler for incoming socket connections
io.on('connection', function(socket){
    var chatClientAddress = socket.handshake.address;
    var chatServerDate = new Date();
    var connectMsgObject = {
                  CHATSERVERUSER:chatClientAddress,
                  CHATSERVERDATE:chatServerDate
     }; 
    io.emit('connectSocketEvent',connectMsgObject);
    console.log("connectSocketEvent:"+JSON.stringify(connectMsgObject));

    
    //COMMON--------------------------------------------------------------------------------------
    socket.on('disconnect', function(){
        var chatClientAddress = socket.handshake.address;
        var chatServerDate = new Date();
        var connectMsgObject = {
                CHATSERVERUSER:chatClientAddress,
                CHATSERVERDATE:chatServerDate
         }; 
        io.emit('disconnectSocketEvent',connectMsgObject);
        console.log("disconnectSocketEvent:"+JSON.stringify(connectMsgObject));
    });
         
    //ON ERROR
    socket.on('error', function(errorMsgObject){
              console.log('ERROR: ' + errorMsgObject  );
    }); 
    
    //CHATMESSAGES--------------------------------------------------------------------------------------
//    var chatMessageObject = {
//              CHATCLIENTUSER: chatClientUser,
//              CHATSERVERUSER:'',
//              CHATCLIENTMESSAGE:message,
//              CHATSERVERDATE:''
//          };  
    socket.on('chatmessage', function(chatMsgObject){
        sendChatMessage('chatmessage',chatMsgObject);
    });
    
    socket.on('djnachoschatmessage', function(chatMsgObject){
        sendChatMessage('djnachoschatmessage',chatMsgObject);
    });
    
    
    socket.on('djnachoschatmessageV2', function(chatMsgObject){
        sendChatMessage('djnachoschatmessageV2',chatMsgObject);
    });
    
    socket.on('roxhillsessionschatmessage', function(chatMsgObject){
        sendChatMessage('roxhillsessionschatmessage',chatMsgObject);
    });
    
    socket.on('sufferingfuckheadschatmessage', function(chatMsgObject){
        sendChatMessage('sufferingfuckheadschatmessage',chatMsgObject);
    });
    
    socket.on('melvinschatmessage', function(chatMsgObject){
        sendChatMessage('melvinschatmessage',chatMsgObject);
    });
    
    socket.on('cracksabbathchatmessage', function(chatMsgObject){
        sendChatMessage('cracksabbathchatmessage',chatMsgObject);
    });
    
    socket.on('builttospillchatmessage', function(chatMsgObject){
        sendChatMessage('builttospillchatmessage',chatMsgObject);
    });
    
    socket.on('zekechatmessage', function(chatMsgObject){
        sendChatMessage('zekechatmessage',chatMsgObject);
    });
    
    socket.on('lastgaspchatmessage', function(chatMsgObject){
        sendChatMessage('lastgaspchatmessage',chatMsgObject);
    });
    
    socket.on('skycriesmarychatmessage', function(chatMsgObject){
        sendChatMessage('skycriesmarychatmessage',chatMsgObject);
    });
    
    socket.on('marklaneganchatmessage', function(chatMsgObject){
        sendChatMessage('marklaneganchatmessage',chatMsgObject);
    });
    
    socket.on('bigbusinesschatmessage', function(chatMsgObject){
        sendChatMessage('bigbusinesschatmessage',chatMsgObject);
    });
    
    socket.on('houston2015chatmessage', function(chatMsgObject){
        sendChatMessage('houston2015chatmessage',chatMsgObject);
    });
    
    //TAPMESSAGES--------------------------------------------------------------------------------------
//    var tapMsgObject = {
//          x:event.pageX,
//          y:event.pageY,
//          animal:$('#animals option:selected').val(),
//          customimage:$('#imagepathtextbox').val(),
//          movement:$('#movement option:selected').val(),
//          CHATCLIENTUSER: chatClientUser,
//          CHATSERVERUSER:'',
//          CHATSERVERDATE:''
//      }; 
    socket.on('djnachostapmessage', function(tapMsgObject){
        sendTapMessage('djnachostapmessage',tapMsgObject);
    });  
    
    
    socket.on('roxhillsessionstapmessage', function(tapMsgObject){
        sendTapMessage('roxhillsessionstapmessage',tapMsgObject);
    });
    
    socket.on('sufferingfuckheadstapmessage', function(tapMsgObject){
        sendTapMessage('sufferingfuckheadstapmessage',tapMsgObject);
    });
    
    socket.on('melvinstapmessage', function(tapMsgObject){
        sendTapMessage('melvinstapmessage',tapMsgObject);
    });
    
    socket.on('cracksabbathtapmessage', function(tapMsgObject){
        sendTapMessage('cracksabbathtapmessage',tapMsgObject);
    });
    
    socket.on('builttospilltapmessage', function(tapMsgObject){
        sendTapMessage('builttospilltapmessage',tapMsgObject);
    });
    
    socket.on('zeketapmessage', function(tapMsgObject){
        sendTapMessage('zeketapmessage',tapMsgObject);
    });
    
    socket.on('lastgasptapmessage', function(tapMsgObject){
        sendTapMessage('lastgasptapmessage',tapMsgObject);
    });
    
    socket.on('skycriesmarytapmessage', function(tapMsgObject){
        sendTapMessage('skycriesmarytapmessage',tapMsgObject);
    });
    
    socket.on('marklanegantapmessage', function(tapMsgObject){
        sendTapMessage('marklanegantapmessage',tapMsgObject);
    });
    
    socket.on('bigbusinesstapmessage', function(tapMsgObject){
        sendTapMessage('bigbusinesstapmessage',tapMsgObject);
    });
    
    socket.on('houston2015tapmessage', function(tapMsgObject){
        sendTapMessage('houston2015tapmessage',tapMsgObject);
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
          
          console.log(JSON.stringify(chatMsgObject));

    }
    //GENERIC TAPMESSAGE SENDER, FOR MULTIPLE, INDEPENDENT CHAT CHANNELS
    //    sockethandler.js (client) => $('#stuffedanimalwarsvg').click
    //    var tapMsgObject = JSON.parse('{"x":"'+event.pageX+
    //            '", "y":"'+event.pageY+
    //            '", "animal":"'+$( '#animals option:selected' ).val()+
    //            '","customimage":"'+$('#imagepathtextbox option:selected').val()+
    //            '","movement":"'+$('#movement option:selected').val()+'"}');
    function sendTapMessage(tapSocketEvent,tapMsgObject){
        //    var tapMsgObject = {
        //          x:event.pageX,
        //          y:event.pageY,
        //          animal:$('#animals option:selected').val(),
        //          customimage:$('#imagepathtextbox').val(),
        //          movement:$('#movement option:selected').val(),
        //          CHATCLIENTUSER: chatClientUser,
        //          CHATSERVERUSER:'',
        //          CHATSERVERDATE:''
        //      }; 
        //GET THE ADDRESS AND DATE
        var tapClientAddress = socket.handshake.address;
        var tapServerDate = new Date();
        
        //update the emitted json object with server information
        tapMsgObject.CHATSERVERUSER = tapClientAddress;
        tapMsgObject.CHATSERVERDATE = tapServerDate;
          
        //broadcast TAP message (client page needs to have  a socket.on handler for this)
        io.emit(tapSocketEvent,tapMsgObject);
        
        console.log(JSON.stringify(tapMsgObject));
    } 
});



