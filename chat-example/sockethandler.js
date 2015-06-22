/*jaemzware*/

var socket = io();
var stuffedanimalwardivTop = 0; 

//CHAT MESSAGE: CHAT MESSAGE => SOCKET
$('form').submit(function(){
    
    messageToEmit = $('#chatClientMessage').val() + " [" + $('#chatClientUser').val()+"]";
    console.log("MESSAGETOEMITTEXTBOX:"+messageToEmit);
    
    //send the message
    socket.emit('chat message',messageToEmit); 
  
    //clear the message box
    $('#chatClientMessage').val('');
    return false;
});

String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

//CHAT MESSAGE: SOCKET => CHAT MESSAGES
socket.on('chat message', function(msg){
    //convert json string to an object
    var msgObject = jQuery.parseJSON(msg);
    var chatClientMessage = msgObject.chatClientMessage;

    if ((chatClientMessage.indexOf("http")===0) &&
            ((  chatClientMessage.indexOf(".jpg") !== -1 ||
                chatClientMessage.indexOf(".gif") !== -1 ||
                chatClientMessage.indexOf(".jpeg") !== -1))){
            
        $('#messagesdiv').prepend($('<br />'));
        
            $("<img/>").prependTo("#messagesdiv").attr({
                src: chatClientMessage,
                alt: chatClientMessage,
                height: '50'
             });
             
             
        $('#messagesdiv').prepend($('<br />'));
        $('#messagesdiv').prepend($('<span>').text(chatClientMessage));
  
    }
    else if(chatClientMessage.indexOf(".mp3") != -1){
        //TODO ADD MP3 PLAYER LIKE ANALOG ARCHIVE
        $('#messagesdiv').prepend($('<br />'));
        $('#messagesdiv').prepend($('<span>').text(chatClientMessage));
    }
    else if(chatClientMessage.indexOf(".mp3") != -1){
        //TODO ADD VIDEO PLAYER LIKE RUTHLESS ON BLACK MARKET SITE
        $('#messagesdiv').prepend($('<br />'));
        $('#messagesdiv').prepend($('<span>').text(chatClientMessage));
    }
    else{
        $('#messagesdiv').prepend($('<br />'));
        $('#messagesdiv').prepend($('<span>').text(chatClientMessage));
    }
});

//AUTORESPONDER SELECT DROP DOWN
$('#chatClientAutoResponder').change(function(){
    messageToEmit = $('#chatClientAutoResponder option:selected').text() + " [" + $('#chatClientUser').val()+"]";
    console.log("MESSAGETOEMITAUTORESPONDER:"+messageToEmit);
    
    //send the message
    socket.emit('chat message',messageToEmit); 
    
    //set the autoresponder back to blanck
    $('#chatClientAutoResponder').val('blank');
});

//STUFFED ANIMAL WAR
//tell server about new coordinates when clicked
$('#stuffedanimalwarsvg').click(function(event){
    console.log('CLICKSTUFFEDANIMALWARSVG tap msg','{"x":"'+event.pageX+'", "y":"'+event.pageY+'"}');
    //report coordinates to the server
    socket.emit('tap msg','{"x":"'+event.pageX+'", "y":"'+event.pageY+'"}');

});

//DRAW A LINE DEPENDING ON COORDINATES RECEIVED FROM THE SERVER SIDE JAVASCRIPT
socket.on('tap msg', function(msg){
          
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
//when server sends coordinates for someone clicking or tapping
socket.on('tap msg', function(msg){
          
    //convert json string to an object
    var msgObject = jQuery.parseJSON(msg);

    //get the coordinates emitted
    var newPointX = msgObject.x;
    var newPointY = msgObject.y;

    //save off these coordinates (for drawing a line)
    var oldPointX =$("#svgrect1").attr("x");
    var oldPointY =$("#svgrect1").attr("y");

    //draw a line from the new to the old location
    var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
    newLine.setAttribute('id','line'+$.now());
    newLine.setAttribute('x1',newPointX);
    newLine.setAttribute('y1',newPointY-stuffedanimalwardivTop); //NOTE: TOP OF .stuffedanimalwardivTop IS defined above
    newLine.setAttribute('x2',oldPointX);
    newLine.setAttribute('y2',oldPointY);
    newLine.setAttribute('style','stroke:rgb('+getRandomColorValue()+','+getRandomColorValue()+','+getRandomColorValue()+');stroke-width:7');
    $("#svgtag1").append(newLine);

    //move the rectangle to where the click was made
    $("#svgrect1").attr("x",newPointX);
    $("#svgrect1").attr("y",newPointY-stuffedanimalwardivTop); //NOTE: TOP OF .stuffedanimalwardivTop IS defined above
          
});

/*
 * this function returns a random color value, used by drawing new things
 */
function getRandomColorValue(){
    return Math.floor((Math.random() * 255) + 1);
}