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
