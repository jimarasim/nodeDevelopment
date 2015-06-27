/*jaemzware*/

var socket = io();
var stuffedanimalwardivTop = 0; 

function emitChatMessage(message){
    var userSendingMessage = $("#chatClientUser").val();
    
    if(userSendingMessage.length===0){
        userSendingMessage = "PHANTOM JOE";
    }

    //CONSTRUCT THE MESSAGE TO EMIT IN JSON, WITH THE USERNAME INCLUDED
    messageToEmit = userSendingMessage+":"+message;
    console.log("1. MESSAGETOEMIT RIGHT NOW:"+messageToEmit);
    
    
    //send the message
    socket.emit('chatmessage',messageToEmit); 
    
    console.log("3. MESSAGETOEMIT WAS EMITTED:"+messageToEmit);
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
    
    /* THIS IS WHAT THE msg OBJECT SHOULD LOOK LIKE FROM THE SOCKET (SEE INDEX.JS)
     * var chatMessageObject = {
              CHATSERVERUSER:chatClientAddress,
              CHATCLIENTMESSAGE:chatClientMessage,
              CHATSERVERDATE:chatClientDate
          }    
     */
    
    console.log("2.1 RECEIVING EMITTED MESSAGE msg:"+msg.toString());
    
    var chatServerUser = msgObject.CHATSERVERUSER;
    var chatClientMessage = msgObject.CHATCLIENTMESSAGE;
    var chatServerDate = msgObject.CHATSERVERDATE;

    console.log("2.2 RECEIVING EMITTED MESSAGE chatClientMessage:"+chatClientMessage);
    console.log("2.3 RECEIVING EMITTED MESSAGE chatClientUser:"+chatServerUser);

    if ((chatClientMessage.contains("http")) &&
            ((  chatClientMessage.contains(".jpg") ||
                chatClientMessage.contains(".gif") ||
                chatClientMessage.contains(".jpeg")))){
            
        //print the message verbatim
        $('#messagesdiv').prepend($('<br />'));
        $('#messagesdiv').prepend($('<span>').text(chatClientMessage+" "+chatServerUser+" "+chatServerDate));
        
        //display the image contained in the message
        $('#messagesdiv').prepend($('<br />'));
        $("<img/>").prependTo("#messagesdiv").attr({
            src: chatClientMessage,
            alt: chatClientMessage+" "+chatServerUser+" "+chatServerDate,
            height: '50'
         });
         
        $('#messagesdiv').prepend($('<br />'));
        $('#messagesdiv').prepend($('<span>').text(chatClientMessage));
  
    }
    else if(chatClientMessage.includes(".mp3")){
        //TODO ADD MP3 PLAYER LIKE ANALOG ARCHIVE
        $('#messagesdiv').prepend($('<br />'));
        $('#messagesdiv').prepend($('<span>').text("TODO ADD MP3 PLAYER LIKE ANALOG ARCHIVE"+chatClientMessage+" "+chatServerUser+" "+chatServerDate));
    }
    else if(chatClientMessage.includes(".mp4")){
        //TODO ADD VIDEO PLAYER LIKE RUTHLESS ON BLACK MARKET SITE
        $('#messagesdiv').prepend($('<br />'));
        $('#messagesdiv').prepend($('<span>').text("TODO ADD VIDEO PLAYER LIKE ANALOG ARCHIVE"+chatClientMessage+" "+chatServerUser+" "+chatServerDate));
    }
    else{
        $('#messagesdiv').prepend($('<br />'));
        $('#messagesdiv').prepend($('<span>').text(chatClientMessage+" "+chatServerUser+" "+chatServerDate));
    }
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
    newLine.setAttribute('style','stroke:rgb('+getRandomColorValue()+','+getRandomColorValue()+','+getRandomColorValue()+');stroke-width:'+lineWidth);
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

