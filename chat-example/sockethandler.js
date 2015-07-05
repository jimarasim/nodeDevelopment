/*jaemzware*/

var socket = io();
var stuffedanimalwardivTop = 0; 

function emitChatMessage(message){
    
    //get the user alias
    var chatClientUser = $("#chatClientUser").val();
    
    if(chatClientUser.length===0){
        chatClientUser = "PHANTOM JOE";
    }

    //CONSTRUCT THE MESSAGE TO EMIT IN JSON, WITH THE USERNAME INCLUDED
    var chatMessageObject = {
              CHATCLIENTUSER: chatClientUser,
              CHATSERVERUSER:'CHATSERVERUSER',
              CHATCLIENTMESSAGE:message,
              CHATSERVERDATE:'CHATSERVERDATE'
          }  
    
    console.log("1. MESSAGETOEMIT RIGHT NOW:"+chatMessageObject.toString());
    
    //send the message
    socket.emit('chatmessage',chatMessageObject); 
    
    console.log("3. MESSAGETOEMIT WAS EMITTED:"+chatMessageObject.toString());
}

//CHAT MESSAGE: CHAT MESSAGE => SOCKET
$('form').submit(function(){
    
    emitChatMessage($('#chatClientMessage').val());
    
    //clear the message box
    $('#chatClientMessage').val('');
    return false;
});


//AUTORESPONDER SELECT DROP DOWN
$('#chatClientAutoResponder').change(function(){
    
    emitChatMessage($('#chatClientAutoResponder option:selected').text());
    
    //set the autoresponder back to blanck
    $('#chatClientAutoResponder').val('blank');
});

String.prototype.contains = function(it) { return this.indexOf(it) !== -1; };

//CHAT MESSAGE: SOCKET => CHAT MESSAGES
socket.on('chatmessage', function(msgObject){
    var chatClientUser = msgObject.CHATCLIENTUSER;
    var chatServerUser = msgObject.CHATSERVERUSER;
    var chatClientMessage = msgObject.CHATCLIENTMESSAGE;
    var chatServerDate = msgObject.CHATSERVERDATE;

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
                    alt: chatClientUser+" "+chatServerUser+" "+chatClientMessage+" "+chatServerDate,
                 });
            }
            else if(chatClientMessage.indexOf(".mp3") > 0){
                var audioId = "audio"+chatServerDate;
                
                $('#messagesdiv').prepend($('<br />'));
                
                //add audio element
                $("<audio>").prependTo("#messagesdiv").attr({
                        id: audioId,
                        preload: none
                     });
                
                //add audio source
                $("<source />").prependTo("#"+audioId).attr({
                    src: chatClientMessage,
                    type: "audio/mpeg"
                }).text("Your browser doesn't support the HTML5 Audio Tag");
            }
            else if(chatClientMessage.includes(".mp4")){
                var videoId = "video"+chatServerDate;
                
                $('#messagesdiv').prepend($('<br />'));
                
                //TODO ADD VIDEO PLAYER LIKE RUTHLESS ON BLACK MARKET SITE
                $('#messagesdiv').prepend($('<br />'));
                $('#messagesdiv').prepend($('<span>').text("TODO ADD VIDEO PLAYER WITH ID:"+videoId+" LIKE BLACKMARKET. chatClientUser:"+chatClientUser+" chatServerUser:"+chatServerUser+" chatClientMessage:"+chatClientMessage+" chatServerDate:"+chatServerDate));
            }
        }
    
    //show the whole message
    $('#messagesdiv').prepend($('<br />'));
    
    //ip and time stamp
    var serverStamp = "["+chatServerUser+"-"+chatServerDate+"]";
    $("<span>").prependTo("#messagesdiv").attr({
       class: "serverdate"
    }).text(serverStamp);
    
     //chat message
    $("<span>").prependTo("#messagesdiv").attr({
       class: "chatclientmessage"
    }).text(chatClientMessage);
    
    //user alias
    $("<span>").prependTo("#messagesdiv").attr({
                        class: "chatclientuser"
                     }).text(chatClientUser);
    
});


//STUFFED ANIMAL WAR
//tell server about new coordinates when clicked
$('#stuffedanimalwarsvg').click(function(event){
    console.log('CLICKSTUFFEDANIMALWARSVG tapmsg','{"x":"'+event.pageX+'", "y":"'+event.pageY+'"}');
    //report coordinates to the server
    socket.emit('tapmsg','{"x":"'+event.pageX+'", "y":"'+event.pageY+'"}');
});

//STUFFED ANIMAL WAR
//the server is telling us new coordinates for the next line from another player
//DRAW A LINE DEPENDING ON COORDINATES RECEIVED FROM THE SERVER SIDE JAVASCRIPT
socket.on('tapmsg', function(msg){
          
    //width of the line to draw
    var lineWidth = 5;
          
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
//    newLine.setAttribute('style','stroke:rgb('+getRandomColorValue()+','+getRandomColorValue()+','+getRandomColorValue()+');stroke-width:'+lineWidth); //RANDOM COLOR
    newLine.setAttribute('style','stroke:rgb(0,0,0);stroke-width:'+lineWidth);

    $("#stuffedanimalwarsvg").append(newLine);
    
    //move the rectangle to where the click was made
    $("#stuffedanimalwarsvgrect").attr("x",newPointX);
    $("#stuffedanimalwarsvgrect").attr("y",newPointY-stuffedanimalwardivTop); 

});


/*
 * this function returns a random color value, used by drawing new things
 */
function getRandomColorValue(){
    return Math.floor((Math.random() * 255) + 1);
}

