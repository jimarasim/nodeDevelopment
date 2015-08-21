/* LEXZE replaced BETTY  - jaemzware.org - 20150728 */
/* THIS SCRIPT NEEDS TO BE INCLUDED AFTER THE ELEMENTS REFERENCED ARE DEFINED ON THE PAGE */
var masterAlias = "LEXZE";
var unspecifiedAlias = "FAN";
var socket = io();
var stuffedanimalwardivTop = 0; 

//CONTAINS METHOD
String.prototype.contains = function(it) { return this.indexOf(it) !== -1; };

//CHAT MESSAGE: SOCKET => CHAT MESSAGES - LEXZE (lexzechatmessage) - ALL COMMON EXCEPT FOR JUST THE EVENT NAME, WHICH NEEDS TO BE UNIQUE TO SERVICE DIFFERENT CHAT PAGES ON THE SAME SERVER
socket.on('lexzechatmessage', function(msgObject){
    var remoteChatClientUser = msgObject.CHATCLIENTUSER;
    var chatServerUser = msgObject.CHATSERVERUSER;
    var chatClientMessage = msgObject.CHATCLIENTMESSAGE;
    var chatServerDate = msgObject.CHATSERVERDATE;
    var serverStamp = "[IP:"+chatServerUser+" DATE:"+chatServerDate+"]"; //ip and time stamp
    
    console.log("RECEIVED MSGOBJECT FROM A CHATMESSAGE BROADCAST:"+JSON.stringify(msgObject));
    console.log("PARAMETERIZED FOR READABILITY remoteChatClientUser:"+remoteChatClientUser+" CHATSERVERUSER:"+chatServerUser+" CHATCLIENTMESSAGE:"+chatClientMessage+" CHATSERVERDATE:"+chatServerDate);

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
                    alt: remoteChatClientUser+" "+chatServerUser+" "+chatClientMessage+" "+chatServerDate,
                 });
            }
          else if(chatClientMessage.indexOf(".mp3") && remoteChatClientUser===masterAlias)
            {
                
                    //change the source of the AUDIO player
                    changeMp3(chatClientMessage);
                
            }
          else if(chatClientMessage.indexOf(".mp4") > 0 && remoteChatClientUser===masterAlias)
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

             //chat message
            $("<span>").prependTo("#messagesdiv").attr({
               class: "chatclientmessage"
            }).text(chatClientMessage);
        }
});

//FORM HANDLER - CHAT MESSAGE => SOCKET (COMMON)
$('form').submit(function(){

    //GET THE MESSAGE IN THE MESSAGE BOX
    var chatMessage = $('#chatClientMessage').val();

    //CLEAR THE MESSAGE FROM THE MESSAGE BOX
    $('#chatClientMessage').val('');

    console.log("CALLING EMITCHATMESSAGE FROM FORM SUBMIT WITH #chatClientMessage => "+chatMessage);
    emitChatMessage(chatMessage);

    return false;
});

//CHANGEMP3 (COMMON)
function changeMp3(mp3Url)
{
    //change the source of the AUDIO player
    $('#jaemzwaredynamicaudiosource').attr("src",mp3Url);
    document.getElementById("jaemzwaredynamicaudioplayer").load();
    document.getElementById("jaemzwaredynamicaudioplayer").play();
}

//CHANGEMP4 (COMMON)
function changeMp4(mp4Url){
    $('#jaemzwaredynamicvideosource').attr("src",mp4Url);
    document.getElementById("jaemzwaredynamicvideoplayer").load();
    document.getElementById("jaemzwaredynamicvideoplayer").play();
}

//CHATCLIENTAUTORESPONDER HANDLER - SELECT DROP DOWN (COMMON) 
$('#chatClientAutoResponder').change(function(){

    //GET THE MESSAGE FROM THE AUTORESPONDER
    var chatMessage = $('#chatClientAutoResponder option:selected').text();

    console.log("CALLING EMITCHATMESSAGE FROM AUTORESPONDER WITH #chatClientAutoResponder option:selected => "+chatMessage);
    emitChatMessage(chatMessage);

    //set the autoresponder back to blanck
    $('#chatClientAutoResponder').val('blank');
});

//EMITCHATMESSAGE - CALLED BY CHAT MESSAGE FORM SUBMIT AND AUTORESPONDER (UNCOMMON, CALLS UNIQUE SOCKET.EMIT CALLBACK
function emitChatMessage(message){
    //get the user alias
    var chatClientUser = $("#chatClientUser").val();
    
    //SET THE DEFAULT ALIAS IF IT'S EMPTY
    if(chatClientUser.length===0){
        chatClientUser = unspecifiedAlias;
    }

    //CONSTRUCT THE MESSAGE TO EMIT IN JSON, WITH THE USERNAME INCLUDED
    var chatMessageObject = {
              CHATCLIENTUSER: chatClientUser,
              CHATSERVERUSER:'',
              CHATCLIENTMESSAGE:message,
              CHATSERVERDATE:''
          }  
    
    //send the message
    socket.emit('lexzechatmessage',chatMessageObject); 
}


//SELECTSONGS DROPDOWN HANDLER - SELECT DROP DOWN - CHANGE SONG (COMMON)
$('#selectsongs').change(function(){
    var songToPlay = $('#selectsongs option:selected').attr("value");
    var chatClientUser = $("#chatClientUser").val();
    
    if(chatClientUser===masterAlias){
        emitChatMessage(songToPlay);
    }
    else{
        changeMp3(songToPlay);
    }
});

