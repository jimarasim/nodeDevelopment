/* STUFFED ANIMAL WAR - jaemzware.org - 2015*/

//MEANT TO BE OVERRIDDEN - USE djnachossockethandler.js FOR AN EXAMPLE
var gameMediaUrl = "http://seattlenative.org/gamemedia";

var baseMasterAlias = null;
var baseUnspecifiedAlias = null;
var endpoint = null;
var chatSocketEvent = null;
var tapSocketEvent = null;
var baseSocket = null;

var dotTimer=null;

  
//CONSTRUCTION - SETUP INITIAL VARS - CALLED WHEN THE OVERRIDDEN JS FILE IS LOADED, AND HAS SET THESE UNIQUE VALUES
function initializeCommonVars(masterAlias,unspecifiedAlias){
    baseMasterAlias = masterAlias;
    baseUnspecifiedAlias = unspecifiedAlias;
}
//CONSTRUCTION - 
//SVG - WHEN A TAP MESSAGE IS RECEIVED FROM THER SERVER
//  SEND THE OBJECT RECEIVED TO THE APPROPRIATE FUNCTION THAT HANDLES IT, 
//  DEPENDING ON THE TYPE OF ANIMAL SENT.
//  THE TYPE OF ANIMAL SENT IS SENT BY $('#stuffedanimalwarsvg').click 
function initializeTapSocketHandler(socket){
    socket.on(tapSocketEvent, function(msgObject){
        var animal = msgObject.animal;
        console.log("RECEIVED TAPSOCKETEVENT:"+JSON.stringify(msgObject)+" ANIMAL:"+animal);
        switch(animal){
            case "cats":
                onBaseTapSocketEventImages(msgObject,"gamemedia/cats.png");
                break;
            case "dogs":
                onBaseTapSocketEventImages(msgObject,"gamemedia/dogs.png");
                break;
            case "lions":
                onBaseTapSocketEventImages(msgObject,"gamemedia/lions.png");
                break;
            case "crocodiles":
                onBaseTapSocketEventImages(msgObject,"gamemedia/crocodiles.png");
                break;
            case "chickens":
                onBaseTapSocketEventImages(msgObject,"gamemedia/chickens.png");
                break;
            case "birds":
                onBaseTapSocketEventImages(msgObject,"gamemedia/birds.png");
                break;
            case "lamblambs":
                onBaseTapSocketEventImages(msgObject,"gamemedia/lamblambs.png");
                break;
            case "dots":
                onBaseTapSocketEventDots(msgObject);
                break;
            case "lines":
                onBaseTapSocketEventLines(msgObject);
                break;
            case "custom":
                onBaseTapSocketEventCustom(msgObject);
                break;
            default:
                console.log("unknown stuffed animal or drawing object:"+msgObject.animal);
                break;
        } 
        
        
        //kick off the circle timer
        dotTimer = window.setInterval(moveDots, 500);
        
    });
    baseSocket=socket;
}
//CONSTRUCTION - 
//CHAT - WHEN A CHAT MESSAGE IS RECEIVED FROM THE SERVER,
//  SEND THE OBJECT RECEIVED TO THE FUNCTION THAT HANDLES IT
function initializeChatSocketHandler(socket){
    socket.on(chatSocketEvent, function(msgObject){
        onBaseChatSocketEvent(msgObject);
    });
    baseSocket=socket;
}

//SVG - HELPER FUNCTIONS THAT HANDLE MESSAGES RECEIVED FROM THE SERVER
function moveDots()
{
    $( 'circle' ).each(function( i,val ) {
        //get the current location
        var yCirclePosition = $('#'+val).attr('cy');
        //update the coordinates
        yCirclePosition = yCirclePosition - 1;
        if(yCirclePosition>0){
            $('#'+val).attr('cy',yCirclePosition);
        }
    
    } );
    
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

//SVG - WHEN THE STUFFED ANIMAL WAR GAME PAD IS CLICKED, 
//      SEND A MESSAGE TO THE SERVER WITH THE LOCATION AND ANIMAL
$('#stuffedanimalwarsvg').click(function(event){
    
    var msgObject = JSON.parse('{"x":"'+event.pageX+'", "y":"'+event.pageY+'", "animal":"'+$( '#animals option:selected' ).val()+'","customimage":"'+$('#imagepathtextbox').val()+'"}');
    
    console.log('EMITTING:'+tapSocketEvent+' WITH:'+msgObject);
    baseSocket.emit(tapSocketEvent,msgObject);
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

//AUDIO - WHEN THE PLAYER'S SONG HAS ENDED
//  GO TO THE FIRST SONG IN THE DROPDOWN
$('#jaemzwaredynamicaudioplayer').bind("ended", function(){
    var currentFile = $(this).children(":first").attr('src');
    PlayNextTrack(currentFile);
});

//VIDEO - WHEN VIDEO DROPDOWN BOX IS CHANGED, 
//  SEND A MESSAGE TO THE SERVER WITH THE SELECTED VALUE
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

function onBaseTapSocketEventDots(msgObject){
    //width of the line to draw
    var radius = 4;

    //get the coordinates emitted
    var pointX = msgObject.x;
    var pointY = msgObject.y;

    //draw a circle from the new to the old location
    var newCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
    var circleId = 'circle'+$.now();

    newCircle.setAttribute('id',circleId);
    newCircle.setAttribute('cx',pointX);
    newCircle.setAttribute('cy',pointY);
    newCircle.setAttribute('r',radius);
    newCircle.setAttribute('style','stroke:rgb(0,0,0);strokewidth:3;fill:black;'); //BLACK STROKE (OUTER CIRCLE) RANDOM STROKE => newCircle.setAttribute('style','stroke:rgb('+getRandomColorValue()+','+getRandomColorValue()+','+getRandomColorValue()+');stroke-width:1;fill:black;'); //RANDOM COLOR STROKE (OUTER CIRCLE)

    $("#stuffedanimalwarsvg").append(newCircle);
    
    //move the state rectangle to where the click was made
    $("#stuffedanimalwarsvgrect").attr("x",pointX);
    $("#stuffedanimalwarsvgrect").attr("y",pointY); 
}
function onBaseTapSocketEventLines(msgObject){
    //width of the line to draw
    var lineWidth = 3;

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
    newLine.setAttribute('y1',newPointY); 
    newLine.setAttribute('x2',oldPointX);
    newLine.setAttribute('y2',oldPointY);
//    newLine.setAttribute('style','stroke:rgb('+getRandomColorValue()+','+getRandomColorValue()+','+getRandomColorValue()+');stroke-width:'+lineWidth); //RANDOM COLOR
    newLine.setAttribute('style','stroke:rgb(0,0,0);strokewidth:'+lineWidth); //BLACK LINE

    $("#stuffedanimalwarsvg").append(newLine);

    //move the state rectangle to where the click was made
    $("#stuffedanimalwarsvgrect").attr("x",newPointX);
    $("#stuffedanimalwarsvgrect").attr("y",newPointY); 
}
function onBaseTapSocketEventCustom(msgObject){
    if (
        msgObject.customimage.indexOf("http://")===0||
        msgObject.customimage.indexOf("https://")===0
       ){ 
            if( msgObject.customimage.indexOf(".jpg")   >   0 ||
                msgObject.customimage.indexOf(".jpeg")  >   0 ||
                msgObject.customimage.indexOf(".gif")   >   0 ||
                msgObject.customimage.indexOf(".png")   >   0){
                onBaseTapSocketEventImages(msgObject,msgObject.customimage);
            }
            else{
                console.log('MESSAGE SENT DOES NOT CONTAIN A VALID ENOUGH IMAGE URL'+msgObject.customimage);
            }
        }
}
//SVG - HELPER FUNCTION FOR HELPER FUNCTION FOR ANIMAL IMAGES AND CUSTOM
function onBaseTapSocketEventImages(msgObject,imagePath){
    var width="50";
    var height="50";

    //get the coordinates emitted
    var pointX = msgObject.x-(width/2);
    var pointY = msgObject.y-(height/2);
    
    var svgimg = document.createElementNS('http://www.w3.org/2000/svg','image');
    svgimg.setAttributeNS(null,'height',height);
    svgimg.setAttributeNS(null,'width',width);
    svgimg.setAttributeNS('http://www.w3.org/1999/xlink','href', imagePath);
    svgimg.setAttributeNS(null,'x',pointX);
    svgimg.setAttributeNS(null,'y',pointY);
    svgimg.setAttributeNS(null, 'visibility', 'visible');
    $('#stuffedanimalwarsvg').append(svgimg);

    $("#stuffedanimalwarsvgrect").attr("x",msgObject.x);
    $("#stuffedanimalwarsvgrect").attr("y",msgObject.y); 
}
//CHAT - EMITCHATMESSAGE - CALLED BY CHAT MESSAGE FORM SUBMIT AND AUTORESPONDER 
function emitChatMessage(message){
    //get the user alias
    var chatClientUser = $("#chatClientUser").val();

    //SET THE DEFAULT ALIAS IF IT'S EMPTY
    if(chatClientUser.length===0){
        chatClientUser = baseUnspecifiedAlias;
    }

    //CONSTRUCT THE MESSAGE TO EMIT IN JSON, WITH THE USERNAME INCLUDED
    var chatMessageObject = {
              CHATCLIENTUSER: chatClientUser,
              CHATSERVERUSER:'',
              CHATCLIENTMESSAGE:message,
              CHATSERVERDATE:''
          };  

    console.log("EMITTING:"+JSON.stringify(chatMessageObject)+" TO CHATSOCKETEVENT:"+chatSocketEvent);
    //send the message
    baseSocket.emit(chatSocketEvent,chatMessageObject); 
}

//CHAT - 
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
                    alt: remoteChatClientUser+" "+chatServerUser+" "+chatClientMessage+" "+chatServerDate
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

//AUDIO - USED TO PLAY NEXT TRACK IN THE AUDIO DROPDOWN
function PlayNextTrack(currentFile)
{
    //don't do anything if there are no tracks
    if($('#selectsongs option').length===0)
    {
        return;
    }

    //get the next track, if there isn't one, use the first one
    if($('#selectsongs option[value="'+currentFile+'"]').next().text().length!==0)
    {
        changeMp3($('#selectsongs option[value="'+currentFile+'"]').next().attr('value'));
    }
    else if($('#selectsongs option[value="'+currentFile+'"]').first().text().length!==0)
    {
        changeMp3($('#selectsongs option[value="'+currentFile+'"]').first().attr('value'));
    }
    else{
        console.log("SOMETHING WENT WRONG TRYING TO PLAY NEXT TRACK IN THE DROPDOWN");
    }
}

/* UTILITY - GETRANDOMCOLORVALUE (COMMON)
 * this function returns a random color value, used by drawing new things
 */
function getRandomColorValue(){
    return Math.floor((Math.random() * 255) + 1);
}

/* UTILITY - CHANGEMP3 (COMMON)*/
function changeMp3(mp3Url){
    //change the source of the AUDIO player
    $('#jaemzwaredynamicaudiosource').attr("src",mp3Url);
    document.getElementById("jaemzwaredynamicaudioplayer").load();
    document.getElementById("jaemzwaredynamicaudioplayer").play();
    $('#selectsongs').val(mp3Url);
}

/*UTILITY CHANGEMP4 (COMMON)*/
function changeMp4(mp4Url){
    $('#jaemzwaredynamicvideosource').attr("src",mp4Url);
    document.getElementById("jaemzwaredynamicvideoplayer").load();
    document.getElementById("jaemzwaredynamicvideoplayer").play();
}

function circleTimer(){
    var circleXPosition = $('circle').attr('cx');
//    var circleYPosition = $('circle').attr('cy');
//    var circleZPosition = $('circle').attr('r');
    
    circleXPosition += 3;
//    circleYPosition += 3;
//    circleZPosition += 3;
    
    $('circle').attr('cx',circleXPosition);
//    $('circle').attr('cy',circleYPosition);
//    $('circle').attr('r',circleZPosition);
}


