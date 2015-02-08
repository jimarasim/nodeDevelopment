//sockethandler.js - client side javascript for page hosting a chat and stuffed animal war

var socket = io();
var divSvgTop = 250; //NOTE: TOP OF .divsvg in  IS 250

//CHAT
//send chat message to server
$('form').submit(function(){
    
    messageToEmit = '+'+$('#chatClientUser').val()+':'+$('#chatClientMessage').val();
    
    console.log(messageToEmit);
    
    //send the message
    socket.emit('chat message',messageToEmit); 
  
    //clear the message box
    $('#chatClientMessage').val('');
    return false;
});

//receive chat message from server
socket.on('chat message', function(msg){
    //convert json string to an object
    var msgObject = jQuery.parseJSON(msg);
    var chatClientMessage = msgObject.chatClientMessage;
    var chatClientAddress = msgObject.chatClientAddress;
    var chatClientDate = msgObject.chatClientDate;
    
    $('#messagesdiv').prepend($('<br />'));
    $('#messagesdiv').prepend($('<span>').text(chatClientAddress));
    $('#messagesdiv').prepend($('<span>').text(chatClientDate));
    $('#messagesdiv').prepend($('<br />'));
    $('#messagesdiv').prepend($('<span>').text(chatClientMessage));
});



//STUFFED ANIMAL WAR
//send click coordinates to server
$('#svgdiv1').click(function(event){
    //report coordinates to the server
    socket.emit('tap msg','{"x":"'+event.pageX+'", "y":"'+event.pageY+'"}');

});

//receive coordinates from server
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
    newLine.setAttribute('y1',newPointY-divSvgTop); //NOTE: TOP OF .divsvg IS 250
    newLine.setAttribute('x2',oldPointX);
    newLine.setAttribute('y2',oldPointY);
    newLine.setAttribute('style','stroke:rgb('+getRandomColorValue()+','+getRandomColorValue()+','+getRandomColorValue()+');stroke-width:7');
    $("#svgtag1").append(newLine);

    //move the rectangle to where the click was made
    $("#svgrect1").attr("x",newPointX);
    $("#svgrect1").attr("y",newPointY-divSvgTop); //NOTE: TOP OF .divsvg IS 250
          
});

//COMMON
/*
 * this function returns a random color value, used by drawing new things
 */
function getRandomColorValue(){
    return Math.floor((Math.random() * 255) + 1);
}