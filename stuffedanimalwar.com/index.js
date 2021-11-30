//STUFFPEDANIMALWAR HTTP JAEMZWARE
//EXAMPLE STARTED FROM: http://socket.io/get-started/chat/
//william, you're really nothing


//FOR MORE CUSTOM PAGES, ADD 3 THINGS for them to the file
//1111 - APP.GET (NOTE: it should make sense how to add these.  Copy paste a previous one, and change the names)
//2222 - {CUSTOM}chatmessage (NOTE: it should make sense how to add these.  Copy paste a previous one, and change the names)
//3333 - {CUSTOM}tapmessage (NOTE: it should make sense how to add these.  Copy paste a previous one, and change the names)

/* global require, __dirname, process, http */

//setup an express application and bind it to an http server
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
let listenPort =3005;

//serve .css and .js and media files
app.use(express.static(__dirname));

//GET PORT TO USE
if(process.argv.length !== 3){
    console.log(`NO PORT SPECIFIED. USING DEFAULT ${listenPort}`);
}
else{
    listenPort = process.argv[2];
    console.log(`PORT SPECIFIED. USING ${listenPort}`);
}

server.listen(listenPort, () => {
    console.log(`listening on *:${listenPort}`);
});

//PAGE MAPPINGS
//IF PUTTING  A NEW PAGE, AND THAT PAGE SUPPORTS CHAT OR STUFFEDANIMAL WAR, DONT FORGET TO ADD THE SOCKET EVENT HANLDER FOR THE PAGE BELOW
app.get('/', function(req, res){
    console.log(req);
        //send a file back as the response
        res.sendFile(__dirname + '/index.html');
});

/**
 * 111111111111111
 */
app.get('/fromkittehwithlove', function(req, res){
        //send a file back as the response
        res.sendFile(__dirname + '/fromkittehwithlove.html');
        });


//ON PERSISTENT CONNECTION
//handler for incoming socket connections
io.on('connection', function(socket){
    let chatClientAddress = socket.handshake.address;
    let chatServerDate = new Date();
    let connectMsgObject = {
                  CHATSERVERUSER:chatClientAddress,
                  CHATSERVERDATE:chatServerDate,
                  CHATCLIENTUSER:chatClientAddress,
                  CHATCLIENTMESSAGE:'CONNECT'
     }; 
    console.log('CONNECT');
    console.log(JSON.stringify(connectMsgObject));
    io.emit('connectSocketEvent',connectMsgObject);

    
    //COMMON--------------------------------------------------------------------------------------
    socket.on('disconnect', function(){
        let chatClientAddress = socket.handshake.address;
        let chatServerDate = new Date();
        let disconnectMsgObject = {
                CHATSERVERUSER:chatClientAddress,
                CHATSERVERDATE:chatServerDate,
                CHATCLIENTUSER:chatClientAddress,
                CHATCLIENTMESSAGE:'DISCONNECT'
         }; 
        console.log('DISCONNECT');
        io.emit('disconnectSocketEvent',disconnectMsgObject);
    });
         
    //ON ERROR
    socket.on('error', function(errorMsgObject){
              console.log('ERROR: ' + errorMsgObject  );
    }); 
    
    /**
     * 22222222222222222
     */
    socket.on('fromkittehwithlovechatmessage', function(chatMsgObject){
        sendChatMessage('fromkittehwithlovechatmessage',chatMsgObject);
    });


    /*
     * 33333333333333333
     */
    socket.on('fromkittehwithlovetapmessage', function(tapMsgObject){
        sendTapMessage('fromkittehwithlovetapmessage',tapMsgObject);
    });
    
    
    
    //GENERIC CHATMESSAGE SENDER, FOR MULTIPLE, INDEPENDENT CHAT CHANNELS   
    function sendChatMessage(chatSocketEvent,chatMsgObject){
        //GET THE ADDRESS AND DATE
        let chatClientAddress = socket.handshake.address;
        let chatServerDate = new Date();

        //update the emitted json object with server information
        chatMsgObject.CHATSERVERUSER = chatClientAddress;
        chatMsgObject.CHATSERVERDATE = chatServerDate;

        console.log(JSON.stringify(chatMsgObject));

        //broadcast
        io.emit(chatSocketEvent,chatMsgObject);
    }
    //GENERIC TAPMESSAGE SENDER, FOR MULTIPLE, INDEPENDENT CHAT CHANNELS
    
    function sendTapMessage(tapSocketEvent,tapMsgObject){
        
        //GET THE ADDRESS AND DATE
        let tapClientAddress = socket.handshake.address;
        let tapServerDate = new Date();
        
        //update the emitted json object with server information
        tapMsgObject.CHATSERVERUSER = tapClientAddress;
        tapMsgObject.CHATSERVERDATE = tapServerDate;
         
        console.log(JSON.stringify(tapMsgObject));
        
        //broadcast TAP message (client page needs to have  a socket.on handler for this)
        io.emit(tapSocketEvent,tapMsgObject);
        
    } 
});



