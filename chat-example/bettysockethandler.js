/* BETTY  - jaemzware.org - 20150728 */


var masterAlias = "BETTY";
var unspecifiedAlias = "MR NOBODY";


var socket = io();
var stuffedanimalwardivTop = 0; 

String.prototype.contains = function(it) { return this.indexOf(it) !== -1; };


function emitChatMessage(message){
    
    //get the user alias
    var chatClientUser = $("#chatClientUser").val();
    
    if(chatClientUser.length===0){
        chatClientUser = unspecifiedAlias;
    }

    //CONSTRUCT THE MESSAGE TO EMIT IN JSON, WITH THE USERNAME INCLUDED
    var chatMessageObject = {
              CHATCLIENTUSER: chatClientUser,
              CHATSERVERUSER:'CHATSERVERUSER',
              CHATCLIENTMESSAGE:message,
              CHATSERVERDATE:'CHATSERVERDATE'
          }  

    //send the message
    socket.emit('bettychatmessage',chatMessageObject); 
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

//SONGS - CHANGE SONG
$('#selectsongs').change(function(){
    
    if(chatClientUser===masterAlias){
    //PLAY SONG
    //change the source of the AUDIO player
    $('#jaemzwaredynamicaudiosource').attr("src",$('#selectsongs option:selected').text());
    document.getElementById("jaemzwaredynamicaudioplayer").load();
    document.getElementById("jaemzwaredynamicaudioplayer").play();
}
});

//VIDEOS - CHANGE VIDEO
$('#selectvideos').change(function(){
    
    if(chatClientUser===masterAlias){
    //PLAY VIDEO
     //change the source of the VIDEO player
    $('#jaemzwaredynamicvideosource').attr("src",$('#selectvideos option:selected').text());
    document.getElementById("jaemzwaredynamicvideoplayer").load();
    document.getElementById("jaemzwaredynamicvideoplayer").play();
}
});


//CHAT MESSAGE: SOCKET => CHAT MESSAGES
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
          else if(chatClientMessage.indexOf(".mp3") > 0 &&
                  chatClientUser===masterAlias)
            {
                //change the source of the AUDIO player
                $('#jaemzwaredynamicaudiosource').attr("src",chatClientMessage);
                document.getElementById("jaemzwaredynamicaudioplayer").load();
                document.getElementById("jaemzwaredynamicaudioplayer").play();
            }
          else if(chatClientMessage.includes(".mp4")&&
                   chatClientUser===masterAlias)
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

//STUFFED ANIMAL WAR
//tell server about new coordinates when clicked
$('#stuffedanimalwarsvg').click(function(event){
    console.log('CLICKSTUFFEDANIMALWARSVG tapmsg','{"x":"'+event.pageX+'", "y":"'+event.pageY+'"}');
    //report coordinates to the server
    socket.emit('bettytapmsg','{"x":"'+event.pageX+'", "y":"'+event.pageY+'"}');
});

//STUFFED ANIMAL WAR
//the server is telling us new coordinates for the next line from another player
//DRAW A LINE DEPENDING ON COORDINATES RECEIVED FROM THE SERVER SIDE JAVASCRIPT
socket.on('bettytapmsg', function(msg){
          
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

