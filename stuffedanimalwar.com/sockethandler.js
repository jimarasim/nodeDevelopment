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
var baseMasterAlias=null;
var baseUnspecifiedAlias=null;

$('#stuffedanimalwarsvg').click(function(event){
    console.log("$('#stuffedanimalwarsvg').click");
    
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
    console.log("$('chatClientAutoResponder");

    //GET THE MESSAGE IN THE MESSAGE BOX
    var chatMessage = $('#chatClientMessage').val();

    //CLEAR THE MESSAGE FROM THE MESSAGE BOX
    $('#chatClientMessage').val('');

    //SEND IT TO A FUNCTION THAT WILL ASSEMBLE A JSON BLOB, AND SEND IT TO THE SERVER, WHO WILL SEND IT TO EVERYONE ELSE
    emitChatMessage(chatMessage);
});

$('#selectsongs').change(function(){
    console.log("$('#selectsongs').change");

    var songToPlay = $('#selectsongs option:selected').attr("value");
//    var chatClientUser = $("#chatClientUser").val();
    emitChatMessage(songToPlay);

});
$('#jaemzwaredynamicvideoplayer').bind("ended", function(){
    console.log("$('#jaemzwaredynamicvideoplayer').bind(ended, function(){");
    var currentFile = $(this).children(":first").attr('src');
    PlayNextVideo(currentFile);
});

$('#jaemzwaredynamicaudioplayer').bind("ended", function(){
    console.log('#jaemzwaredynamicaudioplayer');
    var currentFile = $(this).children(":first").attr('src');
    PlayNextTrack(currentFile);
});
$('#selectvideos').change(function(){
    console.log('selectvideos.change');
    var videoToPlay = $('#selectvideos option:selected').attr("value");
    emitChatMessage(videoToPlay);
    
});

$('#sendbutton').click(function(){
    var chatMessage = $('#chatClientMessage').val();
    //CLEAR THE MESSAGE FROM THE MESSAGE BOX
    $('#chatClientMessage').val('');
    //SEND IT TO A FUNCTION THAT WILL ASSEMBLE A JSON BLOB, AND SEND IT TO THE SERVER, WHO WILL SEND IT TO EVERYONE ELSE
    emitChatMessage(chatMessage);    
});

//CONSTRUCTION


function initializeCommonVars(socket,masterAlias,unspecifiedAlias){
    console.log(this);
    baseMasterAlias = masterAlias;
    baseUnspecifiedAlias = unspecifiedAlias;
    baseSocket=socket;
}

function initializeTapSocketHandler(socket){
    console.log(this);
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
        console.log(this);

    socket.on(chatSocketEvent, function(chatMsgObject){
        onBaseChatSocketEvent(chatMsgObject);
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
function emitChatMessage(messageString){
    console.log('emitChatMessage'+messageString);

    //get the user alias
    var chatClientUser = $('#chatClientUser').val();

    //CONSTRUCT THE MESSAGE TO EMIT IN JSON, WITH THE USERNAME INCLUDED
    var chatMessageObject = {
              CHATCLIENTUSER: chatClientUser,
              CHATSERVERUSER:'defaultserveruserresponse',
              CHATCLIENTMESSAGE:messageString,
              CHATSERVERDATE:'defaultserverdateresponse'
          };  

    //send the message
    console.log("EMIT CHAT MESSAGE:"+JSON.stringify(chatMessageObject));
    baseSocket.emit(chatSocketEvent,chatMessageObject); 
}
