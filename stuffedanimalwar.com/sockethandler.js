/* STUFFED ANIMAL WAR - jaemzware.org - 2015*/

//MEANT TO BE OVERRIDDEN - USE djnachossockethandler.js FOR AN EXAMPLE
var baseMasterAlias = null;
var baseUnspecifiedAlias = null;

var chatSocketEvent = null;
var tapSocketEvent = null;
var baseSocket = null;

var stuffedanimalwardivTop = 0; 

//CONTAINS METHOD
String.prototype.contains = function(it) { return this.indexOf(it) !== -1; };

//SETUP INITIAL VARS - CALLED WHEN THE OVERRIDDEN JS FILE IS LOADED, AND HAS SET THESE UNIQUE VALUES
function initializeCommonVars(masterAlias,unspecifiedAlias){
    baseMasterAlias = masterAlias;
    baseUnspecifiedAlias = unspecifiedAlias;
}


//SETUP SOCKET HANDLER - CALLED WHEN THE OVERRIDDEN JS FILE IS LOADED, AND HAS SET ITS UNIQUE CHATSOCKETEVENT STRING
function initializeChatSocketHandler(socket){
    socket.on(chatSocketEvent, function(msgObject){
        onBaseChatSocketEvent(msgObject);
    });
    
    baseSocket=socket;
}

//SETUP SOCKET HANDLER - CALLED WHEN THE OVERRIDDEN JS FILE IS LOADED, AND HAS SET ITS UNIQUE TAPSOCKETEVENT STRING
function initializeTapSocketHandler(socket){
    socket.on(tapSocketEvent, function(msg){
        onBaseTapSocketEvent(msg);
    });
    
    baseSocket=socket;
}

//CHAT MESSAGE HANDLER - CHAT MESSAGE => SOCKET (COMMON)
$('form').submit(function(){

    //GET THE MESSAGE IN THE MESSAGE BOX
    var chatMessage = $('#chatClientMessage').val();

    //CLEAR THE MESSAGE FROM THE MESSAGE BOX
    $('#chatClientMessage').val('');

    console.log("CALLING EMITCHATMESSAGE FROM FORM SUBMIT WITH #chatClientMessage => "+chatMessage);
    emitChatMessage(chatMessage);

    return false;
});

//AUTORESPONDER HANDLER - SELECT DROP DOWN (COMMON) 
$('#chatClientAutoResponder').change(function(){

    //GET THE MESSAGE FROM THE AUTORESPONDER
    var chatMessage = $('#chatClientAutoResponder option:selected').text();

    console.log("CALLING EMITCHATMESSAGE FROM AUTORESPONDER WITH #chatClientAutoResponder option:selected => "+chatMessage);
    emitChatMessage(chatMessage);

    //set the autoresponder back to blanck
    $('#chatClientAutoResponder').val('blank');
});

//AUDIO DROPDOWN HANDLER - SELECT DROP DOWN - CHANGE SONG (COMMON)
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

//VIDEO DROPDOWN HANDLER - CHANGE VIDEO (COMMON)
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


$('#stuffedanimalwarsvg').click(function(event){
    console.log('EMITTING:'+tapSocketEvent,'{"x":"'+event.pageX+'", "y":"'+event.pageY+'"}');
    baseSocket.emit(tapSocketEvent,'{"x":"'+event.pageX+'", "y":"'+event.pageY+'"}');
});

//UNCOMMON - chatmessage
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

    console.log("EMITTING:"+JSON.stringify(chatMessageObject)+" TO CHATSOCKETEVENT:"+chatSocketEvent);
    //send the message
    baseSocket.emit(chatSocketEvent,chatMessageObject); 
}


function onBaseTapSocketEvent(msg){
    //width of the line to draw
    var lineWidth = 7;

    //convert json string to an object
    var msgObject = jQuery.parseJSON(msg);

    //get the coordinates emitted
    var newPointX = msgObject.x;
    var newPointY = msgObject.y;

    //save off these coordinates (for drawing a line)
    var oldPointX =$("#stuffedanimalwarsvgrect").attr("x");
    var oldPointY =$("#stuffedanimalwarsvgrect").attr("y");

    //draw a line from the new to the old location
    var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');

    newLine.setAttribute('id','line'+$.now());
    newLine.setAttribute('x1',newPointX);
    newLine.setAttribute('y1',newPointY-stuffedanimalwardivTop); //NOTE: TOP OF .stuffedanimalwardivTop IS defined above
    newLine.setAttribute('x2',oldPointX);
    newLine.setAttribute('y2',oldPointY);
    newLine.setAttribute('style','stroke:rgb('+getRandomColorValue()+','+getRandomColorValue()+','+getRandomColorValue()+');stroke-width:'+lineWidth); //RANDOM COLOR
    //    newLine.setAttribute('style','stroke:rgb(0,0,0);stroke-width:'+lineWidth); //BLACK LINE

    $("#stuffedanimalwarsvg").append(newLine);

    //move the rectangle to where the click was made
    $("#stuffedanimalwarsvgrect").attr("x",newPointX);
    $("#stuffedanimalwarsvgrect").attr("y",newPointY-stuffedanimalwardivTop); 
}

function onBaseChatSocketEvent(msgObject){
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

/* GETRANDOMCOLORVALUE (COMMON)
 * this function returns a random color value, used by drawing new things
 */
function getRandomColorValue(){
    return Math.floor((Math.random() * 255) + 1);
}

/*
 * CHANGEMP3 (COMMON)
 */
function changeMp3(mp3Url)
{
    //change the source of the AUDIO player
    $('#jaemzwaredynamicaudiosource').attr("src",mp3Url);
    document.getElementById("jaemzwaredynamicaudioplayer").load();
    document.getElementById("jaemzwaredynamicaudioplayer").play();
}

/*
 * CHANGEMP4 (COMMON)
 */
function changeMp4(mp4Url){
    $('#jaemzwaredynamicvideosource').attr("src",mp4Url);
    document.getElementById("jaemzwaredynamicvideoplayer").load();
    document.getElementById("jaemzwaredynamicvideoplayer").play();
}

