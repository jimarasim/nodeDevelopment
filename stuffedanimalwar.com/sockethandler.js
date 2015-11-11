/**
 * jaemzware
 * 
 * * THIS JS FILE REQUIRES utilities.js, stuffedanimalwarmechanics.js
 * @type String
 */
var endpoint = null;
var chatSocketEvent = null;
var tapSocketEvent = null;
var baseSocket = null;
var connectSocketEvent = 'connectSocketEvent';
var disconnectSocketEvent = 'disconnectSocketEvent';

$('#stuffedanimalwarsvg').click(function(event){
    
    //ASSEMBLE A JSON BLOB OF INFORMATION INCLUDING:
    //  1. WHERE THE USER CLICKED
    //  2. THE ANIMAL (INCLUDING SHAPES AND CUSTOM) CHOSEN
    //  3. THE URL OF THE IMAGE (IN CASE THE ANIMAL IS CUSTOM)
    //  4. THE DIRECTION THE ANIMAL SHOULD GO
    //THEN SEND THE JSON BLOB TO THE SERVER, WHO WILL SEND IT TO EVERYONE ELSE
    //get the user alias
    var chatClientUser = $("#chatClientUser").val();

    //SET THE DEFAULT ALIAS IF IT'S EMPTY
    if(chatClientUser.length===0){
        chatClientUser = baseUnspecifiedAlias;
    }
    
    var tapMsgObject = {
          x:event.pageX,
          y:event.pageY,
          animal:$('#animals option:selected').val(),
          customimage:$('#imagepathtextbox').val(),
          movement:$('#movement option:selected').val(),
          CHATCLIENTUSER: chatClientUser,
          CHATSERVERUSER:'',
          CHATSERVERDATE:''
      }; 
    
    baseSocket.emit(tapSocketEvent,tapMsgObject);
});
$('form.autoresponderform').submit(function(){

    //GET THE MESSAGE IN THE MESSAGE BOX
    var chatMessage = $('#chatClientMessage').val();

    //CLEAR THE MESSAGE FROM THE MESSAGE BOX
    $('#chatClientMessage').val('');

    //SEND IT TO A FUNCTION THAT WILL ASSEMBLE A JSON BLOB, AND SEND IT TO THE SERVER, WHO WILL SEND IT TO EVERYONE ELSE
    emitChatMessage(chatMessage);

    return false;
});
$('#chatClientAutoResponder').change(function(){

    //GET THE MESSAGE FROM THE AUTORESPONDER
    var chatMessage = $('#chatClientAutoResponder option:selected').text();

    //SEND IT TO A FUNCTION THAT WILL ASSEMBLE A JSON BLOB, AND SEND IT TO THE SERVER, WHO WILL SEND IT TO EVERYONE ELSE
    emitChatMessage(chatMessage);

    //set the autoresponder back to blank
    $('#chatClientAutoResponder').val('blank');
});
$('#selectsongs').change(function(){
    var songToPlay = $('#selectsongs option:selected').attr("value");
    var chatClientUser = $("#chatClientUser").val();
    
    if(chatClientUser===baseMasterAlias){
        emitChatMessage(songToPlay);
    }
    else{
        changeMp3(songToPlay);
    }
});
$('#jaemzwaredynamicaudioplayer').bind("ended", function(){
    var currentFile = $(this).children(":first").attr('src');
    PlayNextTrack(currentFile);
});
$('#selectvideos').change(function(){
    var videoToPlay = $('#selectvideos option:selected').attr("value");
    var chatClientUser = $("#chatClientUser").val();

    if(chatClientUser===baseMasterAlias){
        emitChatMessage(videoToPlay);
    }
    else{
        changeMp4(videoToPlay);
    }
});

//CONSTRUCTION
function initializeCommonVars(masterAlias,unspecifiedAlias){
    baseMasterAlias = masterAlias;
    baseUnspecifiedAlias = unspecifiedAlias;
}
function initializeTapSocketHandler(socket){
    //  WHEN A TAP MESSAGE IS RECEIVED FROM THER SERVER
    //  SEND THE OBJECT RECEIVED TO THE APPROPRIATE FUNCTION THAT HANDLES IT, 
    //  DEPENDING ON THE TYPE OF ANIMAL SENT BY $('#stuffedanimalwarsvg').click;
    socket.on(tapSocketEvent, function(tapMsgObject){
        var animal = tapMsgObject.animal; //see htmlwriter.js writeStuffedAnimalWarAnimalDropdown
        switch(animal){
            case "dots":
                onBaseTapSocketEventDots(tapMsgObject);
                break;
            case "line01":
                onBaseTapSocketEventLines(tapMsgObject);
                break;
            case "line02":
                onBaseTapSocketEventLines(tapMsgObject);
                break;
            case "custom":
                onBaseTapSocketEventCustom(tapMsgObject);
                break;
            default:
                onBaseTapSocketEventImages(tapMsgObject,tapMsgObject.animal);
                break;
        }        
    });
    baseSocket=socket;
}
function initializeChatSocketHandler(socket){
    socket.on(chatSocketEvent, function(chatMsgObject){
        onBaseChatSocketEvent(chatMsgObject);
    });
    baseSocket=socket;
}

function initializeConnectSocketHandler(socket){
    socket.on(connectSocketEvent, function(connectMsgObject){
        onBaseConnectSocketEvent(connectMsgObject);
    });
    baseSocket=socket;
}
function initializeDisConnectSocketHandler(socket){
    socket.on(disconnectSocketEvent, function(connectMsgObject){
        onBaseDisconnectSocketEvent(connectMsgObject);
    });
    baseSocket=socket;
}

function onBaseConnectSocketEvent(connectMsgObject){console.log('CONNECT:'+JSON.stringify(connectMsgObject));}
function onBaseDisconnectSocketEvent(connectMsgObject){console.log('DISCONNECCT:'+JSON.stringify(connectMsgObject));}
function onBaseChatSocketEvent(chatMsgObject){
    var remoteChatClientUser = chatMsgObject.CHATCLIENTUSER;
    var chatServerUser = chatMsgObject.CHATSERVERUSER;
    var chatClientMessage = chatMsgObject.CHATCLIENTMESSAGE;
    var chatServerDate = chatMsgObject.CHATSERVERDATE;
    var serverStamp = "["+chatServerUser+"]["+chatServerDate+"]"; //ip and time stamp

    //smart link - recognize chat links (only at the very beginning of the message), and display them appropriately.
    if (
        chatClientMessage.indexOf("http://")===0||
        chatClientMessage.indexOf("https://")===0
       ){ 
            if( chatClientMessage.indexOf(".jpg")   >   0 ||
                chatClientMessage.indexOf(".jpeg")  >   0 ||
                chatClientMessage.indexOf(".gif")   >   0 ||
                chatClientMessage.indexOf(".png")   >   0)
            {

                //show the image if it's just an image tag
                $('#messagesdiv').prepend($('<br />'));
                $("<img/>").prependTo("#messagesdiv").attr({
                    src: chatClientMessage,
                    alt: remoteChatClientUser+" "+chatServerUser+" "+chatClientMessage+" "+chatServerDate
                 });
            }
          else if(chatClientMessage.indexOf(".mp3") && remoteChatClientUser===baseMasterAlias)
            {
                //change the source of the AUDIO player
                changeMp3(chatClientMessage);

            }
          else if(chatClientMessage.indexOf(".mp4") > 0 && remoteChatClientUser===baseMasterAlias)
            {
                    //change the source of the VIDEO player
                    changeMp4(chatClientMessage);
            }
            else{
                $('#messagesdiv').prepend($('<br />'));

                //ip and time stamp
                $("<span>").prependTo("#messagesdiv").attr({
                   class: "serverdate"
                }).text(serverStamp);

                //user alias
                $("<span>").prependTo("#messagesdiv").attr({
                                    class: "remoteChatClientUser"
                                 }).text(remoteChatClientUser);

                $("<br />").prependTo("#messagesdiv");

                 //chat message
                $("<span>").prependTo("#messagesdiv").attr({
                   class: "chatclientmessage"
                }).text(chatClientMessage);

            }
        }
        else{
            $('#messagesdiv').prepend($('<br />'));

            //ip and time stamp
            $("<span>").prependTo("#messagesdiv").attr({
               class: "serverdate"
            }).text(serverStamp);

            //user alias
            $("<span>").prependTo("#messagesdiv").attr({
                                class: "remoteChatClientUser"
                             }).text(remoteChatClientUser);

            $("<br />").prependTo("#messagesdiv");

             //chat message
            $("<span>").prependTo("#messagesdiv").attr({
               class: "chatclientmessage"
            }).text(chatClientMessage);
        }
}
function emitChatMessage(message){
    //get the user alias
    var chatClientUser = $("#chatClientUser").val();

    //SET THE DEFAULT ALIAS IF IT'S EMPTY
    if(chatClientUser.length===0){
        chatClientUser = baseUnspecifiedAlias;
    }

    //CONSTRUCT THE MESSAGE TO EMIT IN JSON, WITH THE USERNAME INCLUDED
    var chatMessageObject = {
              CHATCLIENTUSER: chatClientUser,
              CHATSERVERUSER:'',
              CHATCLIENTMESSAGE:message,
              CHATSERVERDATE:''
          };  

    //send the message
    baseSocket.emit(chatSocketEvent,chatMessageObject); 
}
