/**
 * jaemzware
 * 
 * * THIS JS FILE REQUIRES utilities.js, stuffedanimalwarmechanics.js
 * @type String
 */
var endpoint = null;
var chatSocketEvent = null;
var tapSocketEvent = null;
var connectSocketEvent = null;
var disconnectSocketEvent = null;
var baseSocket = null;
var baseMasterAlias=null;
var baseUnspecifiedAlias=null;
//SOCKET EVENTS///////////////////////////////////////////////////////////////////////////SOCKET EVENTS////////////////////////SOCKET EVENTS//
function initializeCommonVars(socket,masterAlias,unspecifiedAlias){
    baseMasterAlias = masterAlias;
    baseUnspecifiedAlias = unspecifiedAlias;
    baseSocket=socket;
    
    console.log("BASEMASTERALIAS"+baseMasterAlias);
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
        var remoteChatClientUser = connectMsgObject.CHATCLIENTUSER;
        var chatServerUser = connectMsgObject.CHATSERVERUSER;
        var chatClientMessage = connectMsgObject.CHATCLIENTMESSAGE;
        var chatServerDate = connectMsgObject.CHATSERVERDATE; 
        
//        $('#messagesdiv').prepend('<br />');
//        $('#messagesdiv').prepend('endpoint:'+endpoint+' chatServerUser:'+chatServerUser+' remoteChatClientUser:'+ remoteChatClientUser+' chatClientMessage:'+ chatClientMessage+' chatServerDate:'+chatServerDate);

    });
    
    baseSocket=socket;
}
function initializeDisconnectSocketHandler(socket){
    socket.on(disconnectSocketEvent, function(disconnectMsgObject){
        var remoteChatClientUser = disconnectMsgObject.CHATCLIENTUSER;
        var chatServerUser = disconnectMsgObject.CHATSERVERUSER;
        var chatClientMessage = disconnectMsgObject.CHATCLIENTMESSAGE;
        var chatServerDate = disconnectMsgObject.CHATSERVERDATE;   
        
//        $('#messagesdiv').prepend('<br />');
//        $('#messagesdiv').prepend('endpoint:'+endpoint+' chatServerUser:'+chatServerUser+' remoteChatClientUser:'+ remoteChatClientUser+' chatClientMessage:'+ chatClientMessage+' chatServerDate:'+chatServerDate);

    });
    
    baseSocket=socket;
}
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
                chatClientMessage.indexOf(".JPG")  >   0 ||
                chatClientMessage.indexOf(".JPEG")  >   0 ||
                chatClientMessage.indexOf(".jpeg")  >   0 ||
                chatClientMessage.indexOf(".gif")   >   0 ||
                chatClientMessage.indexOf(".png")   >   0)
            {

                //show the image if it's just an image tag
                $('#messagesdiv').prepend($('<br />'));
                $("<img/>").prependTo("#messagesdiv").attr({
                    src: chatClientMessage,
                    alt: "chat image"
//                    alt: remoteChatClientUser+" "+chatServerUser+" "+chatClientMessage+" "+chatServerDate
                 });
            }
          else if(chatClientMessage.indexOf(".mp3") && remoteChatClientUser===baseMasterAlias)
            {
                //change the source of the AUDIO player
                changeMp3(chatClientMessage);
                console.log("DJ BROADCAST CHANGED THE SONG");

            }
          else if(chatClientMessage.indexOf(".mp4") > 0 && remoteChatClientUser===baseMasterAlias)
            {
                //change the source of the VIDEO player
                changeMp4(chatClientMessage);
            }
            else{

//                ip and time stamp
//                $("<span>").prependTo("#messagesdiv").attr({
//                   class: "serverdate"
//                }).text(serverStamp);

//                user alias
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
//            $("<span>").prependTo("#messagesdiv").attr({
//               class: "serverdate"
//            }).text(serverStamp);

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
//SOCKET EVENTS///////////////////////////////////////////////////////////////////////////SOCKET EVENTS////////////////////////SOCKET EVENTS//

//HTML EVENTS///////////////////////////////////////////////////////////////////////////HTML EVENTS////////////////////////HTML EVENTS//
$('#stuffedanimalwarsvg').click(function(event){
    var tapMsgObject = {
          x:event.pageX,
          y:event.pageY,
          animal:$('#animals option:selected').val(),
          customimage:$('#imagepathtextbox').val(),
          movement:$('#movement option:selected').val(),
          CHATCLIENTUSER: baseUnspecifiedAlias,
          CHATSERVERUSER:'',
          CHATSERVERDATE:''
      }; 
    
    baseSocket.emit(tapSocketEvent,tapMsgObject);
});
$('#chatClientAutoResponder').change(function(){
    //GET THE MESSAGE FROM THE AUTORESPONDER
    var chatAutoResponderMessage = $('#chatClientAutoResponder option:selected').text();

    //SEND IT TO A FUNCTION THAT WILL ASSEMBLE A JSON BLOB, AND SEND IT TO THE SERVER, WHO WILL SEND IT TO EVERYONE ELSE
    emitChatMessage(chatAutoResponderMessage);
});
$('#selectsongs').change(function(){
    var songToPlay = $('#selectsongs option:selected').attr("value");
    var chatClientUser = $("#chatClientUser").val();
    
    console.log("CHATCLIENTUSER:"+chatClientUser+" BASEMASTERALIAS:"+baseMasterAlias);
    
    if(chatClientUser===baseMasterAlias){
        console.log("DJ CHANGED THE SONG:");
        emitChatMessage(songToPlay);
    }
    else{
        changeMp3(songToPlay);
        console.log("DJ DID NOT CHANGE THE SONG:");

    }
});
//VIDEO PLAYER HTML EVENTS
$('#jaemzwaredynamicvideoplayer').bind("ended", function(){
    var currentFile = $(this).children(":first").attr('src');
    PlayNextVideo(currentFile);
});
//AUDIO PLAYER HTML EVENTS
$('#jaemzwaredynamicaudioplayer').bind("ended", function(){
    var currentFile = $(this).children(":first").attr('src');
    PlayNextTrack(currentFile);
});
$('#nextaudiotrack').click(function(){
    var currentFile = $('#selectsongs option:selected').attr("value");
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
$('#chatClientMessage').keypress(function (event) {
    if (event.which === 13) {
        emitChatMessage($('#chatClientMessage').val());   
        $('#chatClientMessage').val('');
        return false; 
    }
});
function emitChatMessage(messageString){
    //get the user alias
    var chatClientUser = $('#chatClientUser').val();
    if(chatClientUser===""){
        chatClientUser = baseUnspecifiedAlias;
    }

    //CONSTRUCT THE MESSAGE TO EMIT IN JSON, WITH THE USERNAME INCLUDED
    var chatMessageObject = {
              CHATCLIENTUSER: chatClientUser,
              CHATSERVERUSER:'defaultserveruserresponse',
              CHATCLIENTMESSAGE:messageString,
              CHATSERVERDATE:'defaultserverdateresponse'
          };  

    //send the message
    baseSocket.emit(chatSocketEvent,chatMessageObject); 
}
//HTML EVENTS///////////////////////////////////////////////////////////////////////////HTML EVENTS////////////////////////HTML EVENTS//
