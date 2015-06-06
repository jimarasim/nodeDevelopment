/*jaemzware*/

var socket = io();
var divSvgTop = 300; //NOTE: TOP OF .divsvg in stylebase.css IS 300



//MESSAGE BOX
$('form').submit(function(){
    
    messageToEmit = $('#chatClientMessage').val() + "-" + $('#chatClientUser').val();
    console.log("MESSAGETOEMITTEXTBOX:"+messageToEmit);
    
    //send the message
    socket.emit('chat message',messageToEmit); 
  
    //clear the message box
    $('#chatClientMessage').val('');
    return false;
});

//AUTORESPONDER SELECT DROP DOWN
$('#chatClientAutoResponder').change(function(){
    messageToEmit = $('#chatClientAutoResponder option:selected').text() + "-" + $('#chatClientUser').val();
    console.log("MESSAGETOEMITAUTORESPONDER:"+messageToEmit);
    
    //send the message
    socket.emit('chat message',messageToEmit); 
    
    //set the autoresponder back to blanck
    $('#chatClientAutoResponder').val('blank');
});

//handler for server socket io.emit
socket.on('chat message', function(msg){
    //convert json string to an object
    var msgObject = jQuery.parseJSON(msg);
    var chatClientMessage = msgObject.chatClientMessage;

    $('#messagesdiv').prepend($('<br />'));
    $('#messagesdiv').prepend($('<span>').text(chatClientMessage));
});



//STUFFED ANIMAL WAR
//tell server about new coordinates when clicked
$('#svgdiv1').click(function(event){
    //report coordinates to the server
    socket.emit('tap msg','{"x":"'+event.pageX+'", "y":"'+event.pageY+'"}');

});
//when we receive coordinates for the server 
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
    newLine.setAttribute('y1',newPointY-divSvgTop); //NOTE: TOP OF .divsvg IS 300
    newLine.setAttribute('x2',oldPointX);
    newLine.setAttribute('y2',oldPointY);
    newLine.setAttribute('style','stroke:rgb('+getRandomColorValue()+','+getRandomColorValue()+','+getRandomColorValue()+');stroke-width:7');
    $("#svgtag1").append(newLine);

    //move the rectangle to where the click was made
    $("#svgrect1").attr("x",newPointX);
    $("#svgrect1").attr("y",newPointY-divSvgTop); //NOTE: TOP OF .divsvg IS 300
          
});

/*
 * this function returns a random color value, used by drawing new things
 */
function getRandomColorValue(){
    return Math.floor((Math.random() * 255) + 1);
}