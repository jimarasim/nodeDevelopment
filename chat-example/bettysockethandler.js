/* BETTY  - jaemzware.org - 20150728 */
/* THIS SCRIPT NEEDS TO BE INCLUDED AFTER THE ELEMENTS REFERENCED ARE DEFINED ON THE PAGE */
var masterAlias = "BETTY";
var unspecifiedAlias = "ANONYMOUS BETTY WANNABE";
var socket = io();
var stuffedanimalwardivTop = 0; 

//CONTAINS METHOD
String.prototype.contains = function(it) { return this.indexOf(it) !== -1; };

//EMITCHATMESSAGE - CALLED BY CHAT MESSAGE FORM SUBMIT AND AUTORESPONDER (UNCOMMON, CALLS UNIQUE SOCKET.EMIT CALLBACK
function emitChatMessage(message){
    
    console.log("EMITCHATMESSAGE RECEIVED THE MESSAGE:"+message);
    
    //get the user alias
    var chatClientUser = $("#chatClientUser").val();
    console.log("EMITCHATMESSAGE RECEIVED THE MESSAGE:"+message+" FROM THE USER:"+chatClientUser);
    
    //SET THE DEFAULT ALIAS IF IT'S EMPTY
    if(chatClientUser.length===0){
        chatClientUser = unspecifiedAlias;
        console.log("EMITCHATMESSAGE RECEIVED THE MESSAGE:"+message+" AND SET THE USER TO:"+chatClientUser);
    }

    //CONSTRUCT THE MESSAGE TO EMIT IN JSON, WITH THE USERNAME INCLUDED
    var chatMessageObject = {
              CHATCLIENTUSER: chatClientUser,
              CHATSERVERUSER:'CHATSERVERUSER',
              CHATCLIENTMESSAGE:message,
              CHATSERVERDATE:'CHATSERVERDATE'
          }  

    //send the message
    console.log("emitting bettychatmessage with chatMessageObject:"+JSON.stringify(chatMessageObject));
    socket.emit('bettychatmessage',chatMessageObject); //BETTY-------------------------------------------------------------------------------------------BETTY
}


//CHAT MESSAGE - CHAT MESSAGE => SOCKET (COMMON)
$('form').submit(function(){
    
    //GET THE MESSAGE IN THE MESSAGE BOX
    var chatMessage = $('#chatClientMessage').val();

    //CLEAR THE MESSAGE FROM THE MESSAGE BOX
    $('#chatClientMessage').val('');
    
    console.log("CALLING EMITCHATMESSAGE FROM FORM SUBMIT WITH #chatClientMessage => "+chatMessage);
    emitChatMessage(chatMessage);
    
    return false;
});

//AUTORESPONDER - SELECT DROP DOWN (COMMON) 
$('#chatClientAutoResponder').change(function(){
    
    //GET THE MESSAGE FROM THE AUTORESPONDER
    var chatMessage = $('#chatClientAutoResponder option:selected').text();
    
    console.log("CALLING EMITCHATMESSAGE FROM AUTORESPONDER WITH #chatClientAutoResponder option:selected => "+chatMessage);
    emitChatMessage(chatMessage);
    
    //set the autoresponder back to blanck
    $('#chatClientAutoResponder').val('blank');
});


//VIDEOS - CHANGE VIDEO (COMMON)
$('#selectvideos').change(function(){
    var videoToPlay = $('#selectvideos option:selected').attr("value");
    emitChatMessage(videoToPlay);
});

//CHAT MESSAGE: SOCKET => CHAT MESSAGES - BETTY (bettychatmessage) - ALL COMMON EXCEPT FOR JUST THE EVENT NAME, WHICH NEEDS TO BE UNIQUE TO SERVICE DIFFERENT CHAT PAGES ON THE SAME SERVER
socket.on('bettychatmessage', function(msgObject){ 
    var chatClientUser = msgObject.CHATCLIENTUSER;
    var chatServerUser = msgObject.CHATSERVERUSER;
    var chatClientMessage = msgObject.CHATCLIENTMESSAGE;
    var chatServerDate = msgObject.CHATSERVERDATE;
    var serverStamp = "[IP:"+chatServerUser+" DATE:"+chatServerDate+"]"; //ip and time stamp
    

    //smart link - recognize chat links (only at the very beginning of the message), and display them appropriately.
    if (
        chatClientMessage.indexOf("http://")===0||
        chatClientMessage.indexOf("https://")===0
       ){ 
            if( chatClientMessage.contains(".jpg") ||
                chatClientMessage.contains(".jpeg") ||
                chatClientMessage.contains(".gif") ||
                chatClientMessage.contains(".png"))
            {

                //show the image if it's just an image tag
                $('#messagesdiv').prepend($('<br />'));
                $("<img/>").prependTo("#messagesdiv").attr({
                    src: chatClientMessage,
                    alt: chatClientUser+" "+chatServerUser+" "+chatClientMessage+" "+chatServerDate,
                 });
            }
          else if(chatClientMessage.contains(".mp3"))
            {
                //change the source of the AUDIO player
                $('#jaemzwaredynamicaudiosource').attr("src",chatClientMessage);
                document.getElementById("jaemzwaredynamicaudioplayer").load();
                document.getElementById("jaemzwaredynamicaudioplayer").play();
            }
          else if(chatClientMessage.contains(".mp4"))
            {
                //change the source of the VIDEO player
                $('#jaemzwaredynamicvideosource').attr("src",chatClientMessage);
                document.getElementById("jaemzwaredynamicvideoplayer").load();
                document.getElementById("jaemzwaredynamicvideoplayer").play();
            }
            else{
                //show the whole message
                $('#messagesdiv').prepend($('<br />'));

                //ip and time stamp
                $("<span>").prependTo("#messagesdiv").attr({
                   class: "serverdate"
                }).text(serverStamp);
                
                //user alias
                $("<span>").prependTo("#messagesdiv").attr({
                                    class: "chatclientuser"
                                 }).text(chatClientUser);
                                 
                $('#messagesdiv').prepend($('<br />'));

                 //chat message
                $("<span>").prependTo("#messagesdiv").attr({
                   class: "chatclientmessage"
                }).text(chatClientMessage);
                
            }
        }
        else{
                //show the whole message
                $('#messagesdiv').prepend($('<br />'));


                //ip and time stamp
                $("<span>").prependTo("#messagesdiv").attr({
                   class: "serverdate"
                }).text(serverStamp);
                
                //user alias
                $("<span>").prependTo("#messagesdiv").attr({
                                    class: "chatclientuser"
                                 }).text(chatClientUser);

                $('#messagesdiv').prepend($('<br />'));

                 //chat message
                $("<span>").prependTo("#messagesdiv").attr({
                   class: "chatclientmessage"
                }).text(chatClientMessage);

        }
});

