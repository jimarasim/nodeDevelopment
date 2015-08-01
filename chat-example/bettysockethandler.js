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

//SONGS - CHANGE SONG (COMMON)
$('#selectsongs').change(function(){
    
    if($('#chatClientUser').val()===masterAlias){    //PLAY SONG
        console.log(masterAlias+" IS THE MASTER");
        
        var songToPlay = $('#selectsongs option:selected').text();
        
        console.log(masterAlias+" IS THE MASTER AND CHOSE THE SONGTOPLAY:"+songToPlay);

        console.log("CALLING EMITCHATMESSAGE FROM SONG CHANGER WITH #selectsongs option:selected => "+songToPlay);
        emitChatMessage(songToPlay);
    }   
    else{
        console.log($('#chatClientUser').val()+" IS NOT THE MASTER");
    }
});

//VIDEOS - CHANGE VIDEO (COMMON)
$('#selectvideos').change(function(){
    
    if($('#chatClientUser').val()===masterAlias){    //PLAY VIDEO
        console.log(masterAlias+" IS THE MASTER");
        
        var videoToPlay = $('#selectvideos option:selected').text();
        
        console.log(masterAlias+" IS THE MASTER AND CHOSE THE VIDEOTOPLAY:"+videoToPlay);

        console.log("CALLING EMITCHATMESSAGE FROM AUTORESPONDER WITH #selectvideos option:selected => "+videoToPlay);
        emitChatMessage(videoToPlay);
    }
    else{
        console.log($('#chatClientUser').val()+" IS NOT THE MASTER");
    }
});

//CHAT MESSAGE: SOCKET => CHAT MESSAGES - BETTY (bettychatmessage) - ALL COMMON EXCEPT FOR JUST THE EVENT NAME, WHICH NEEDS TO BE UNIQUE TO SERVICE DIFFERENT CHAT PAGES ON THE SAME SERVER
socket.on('bettychatmessage', function(msgObject){ 
    var chatClientUser = msgObject.CHATCLIENTUSER;
    var chatServerUser = msgObject.CHATSERVERUSER;
    var chatClientMessage = msgObject.CHATCLIENTMESSAGE;
    var chatServerDate = msgObject.CHATSERVERDATE;
    var serverStamp = "[IP:"+chatServerUser+" DATE:"+chatServerDate+"]"; //ip and time stamp
    
    console.log("RECEIVED MSGOBJECT FROM A BETTYCHATMESSAGE BROADCAST:"+JSON.stringify(msgObject));
    console.log("PARAMETERIZED FOR READABILITY CHATCLIENTUSER:"+chatClientUser+" CHATSERVERUSER:"+chatServerUser+" CHATCLIENTMESSAGE:"+chatClientMessage+" CHATSERVERDATE:"+chatServerDate);


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

//STUFFED ANIMAL WAR (COMMON)
//tell server about new coordinates when clicked
$('#stuffedanimalwarsvg').click(function(event){
    console.log('CLICKSTUFFEDANIMALWARSVG tapmsg','{"x":"'+event.pageX+'", "y":"'+event.pageY+'"}');
    //report coordinates to the server
//BETTY-------------------------------------------------------------------------------------------BETTY
    socket.emit('bettytapmsg','{"x":"'+event.pageX+'", "y":"'+event.pageY+'"}');
});

//STUFFED ANIMAL WAR - BETTY (bettytapmsg) - ALL COMMON EXCEPT FOR JUST THE EVENT NAME, WHICH NEEDS TO BE UNIQUE TO SERVICE DIFFERENT CHAT PAGES ON THE SAME SERVER
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
    newLine.setAttribute('style','stroke:rgb('+getRandomColorValue()+','+getRandomColorValue()+','+getRandomColorValue()+');stroke-width:'+lineWidth); //RANDOM COLOR
//    newLine.setAttribute('style','stroke:rgb(0,0,0);stroke-width:'+lineWidth); //BLACK LINE

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

