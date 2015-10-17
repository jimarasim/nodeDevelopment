var gameMediaUrl = "http://seattlenative.org/gamemedia";
var baseMasterAlias = null;
var baseUnspecifiedAlias = null;
var endpoint = null;
var chatSocketEvent = null;
var tapSocketEvent = null;
var baseSocket = null;
var rectTimer = null;
var animalObjectTimerIds = []; //{'objectId':'','timerId':'','xAxisAttr':'',yAxisAttr:''}
var shapeObjectTimerIds = []; //{'objectId':'','timerId':'','xAxisAttr':'',yAxisAttr:''}
var animalPositionIncrement = 10; //distance animal moves each reposition 
var shapePositionIncrement = 10; //distance shape moves each reposition
var animalInterval = 50; //milliseconds between animal repositions
var shapeInterval = 50; //milliseconds between shape repositions
var radius = 10; //RADIUS of the dot shape to draw
var lineWidth = 10; //width of the line shape to draw

$('form').submit(function(){

    //GET THE MESSAGE IN THE MESSAGE BOX
    var chatMessage = $('#chatClientMessage').val();

    //CLEAR THE MESSAGE FROM THE MESSAGE BOX
    $('#chatClientMessage').val('');

    console.log("CALLING EMITCHATMESSAGE FROM FORM SUBMIT WITH #chatClientMessage => "+chatMessage);
    emitChatMessage(chatMessage);

    return false;
});
$('#stuffedanimalwarsvg').click(function(event){
    var tapMsgObject = JSON.parse('{"x":"'+event.pageX+
            '", "y":"'+event.pageY+
            '", "animal":"'+$( '#animals option:selected' ).val()+
            '","customimage":"'+$('#imagepathtextbox option:selected').val()+
            '","movement":"'+$('#movement option:selected').val()+'"}');
    
    baseSocket.emit(tapSocketEvent,tapMsgObject);
});
$('#chatClientAutoResponder').change(function(){

    //GET THE MESSAGE FROM THE AUTORESPONDER
    var chatMessage = $('#chatClientAutoResponder option:selected').text();

    emitChatMessage(chatMessage);

    //set the autoresponder back to blanck
    $('#chatClientAutoResponder').val('blank');
});
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
$('#jaemzwaredynamicaudioplayer').bind("ended", function(){
    var currentFile = $(this).children(":first").attr('src');
    PlayNextTrack(currentFile);
});
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


//CONSTRUCTION - INITIALIZE VARIABLES
function initializeCommonVars(masterAlias,unspecifiedAlias){
    baseMasterAlias = masterAlias;
    baseUnspecifiedAlias = unspecifiedAlias;
}
//CONSTRUCTION - SETUP TAP HANDLERS
function initializeTapSocketHandler(socket){
    //  WHEN A TAP MESSAGE IS RECEIVED FROM THER SERVER
    //  SEND THE OBJECT RECEIVED TO THE APPROPRIATE FUNCTION THAT HANDLES IT, 
    //  DEPENDING ON THE TYPE OF ANIMAL SENT BY $('#stuffedanimalwarsvg').click;
    socket.on(tapSocketEvent, function(tapMsgObject){
        var animal = tapMsgObject.animal; //see htmlwriter.js writeStuffedAnimalWarChoices
        switch(animal){
            case "cats":
                onBaseTapSocketEventImages(tapMsgObject,"gamemedia/cats.png");
                break;
            case "dogs":
                onBaseTapSocketEventImages(tapMsgObject,"gamemedia/dogs.png");
                break;
            case "lions":
                onBaseTapSocketEventImages(tapMsgObject,"gamemedia/lions.png");
                break;
            case "crocodiles":
                onBaseTapSocketEventImages(tapMsgObject,"gamemedia/crocodiles.png");
                break;
            case "chickens":
                onBaseTapSocketEventImages(tapMsgObject,"gamemedia/chickens.png");
                break;
            case "birds":
                onBaseTapSocketEventImages(tapMsgObject,"gamemedia/birds.png");
                break;
            case "lamblambs":
                onBaseTapSocketEventImages(tapMsgObject,"gamemedia/lamblambs.png");
                break;
            case "dots":
                onBaseTapSocketEventDots(tapMsgObject);
                break;
            case "lines":
                onBaseTapSocketEventLines(tapMsgObject);
                break;
            case "custom":
                onBaseTapSocketEventCustom(tapMsgObject);
                break;
            default:
                console.log("I DONT KNOW WHAT THIS IS!!:"+tapMsgObject.animal);
                break;
        }        
    });
    baseSocket=socket;
}
//CONSTRUCTION - SETUP CHAT HANDLERS
function initializeChatSocketHandler(socket){
    socket.on(chatSocketEvent, function(chatMsgObject){
        onBaseChatSocketEvent(chatMsgObject);
    });
    baseSocket=socket;
}

function moveAnimalObjectUp(objectId,xAxisAttr,yAxisAttr) {
    //get the current location
    var yPosition = $('#'+objectId).attr(yAxisAttr);
    var svgHeight = $('#stuffedanimalwarsvg').height();
    //if still on the gameboard
    if(yPosition>0){
        //update the coordinates
        yPosition--;
        $('#'+objectId).attr(yAxisAttr,yPosition);
    }
    else{
        $('#'+objectId).attr(yAxisAttr,svgHeight);
    }  
}
function moveAnimalObjectDown(objectId,xAxisAttr,yAxisAttr) {
    //get the current location
    var yPosition = $('#'+objectId).attr(yAxisAttr);
    var svgHeight = $('#stuffedanimalwarsvg').height();
    //if still on the gameboard
    if(yPosition<svgHeight){
        //update the coordinates
        yPosition++;
        $('#'+objectId).attr(yAxisAttr,yPosition);
    }
    else{
        $('#'+objectId).attr(yAxisAttr,'0');
    }
}
function moveShapeObjectUp(objectId,xAxisAttr,yAxisAttr) {
    //get the current location
    var yPosition = $('#'+objectId).attr(yAxisAttr);
    var svgHeight = $('#stuffedanimalwarsvg').height();
    //if still on the gameboard
    if(yPosition>0){
        //update the coordinates
        yPosition--;
        $('#'+objectId).attr(yAxisAttr,yPosition);
    }
    else{
        $('#'+objectId).attr(yAxisAttr,svgHeight);
    }
    
    //check if any image animal was hit
    animalObjectTimerIds.
        forEach(
            function(animalObjectTimerId)
            {
                console.log("ANIMALS:"+JSON.stringify(animalObjectTimerId));
            }
        );
}
function moveShapeObjectDown(objectId,xAxisAttr,yAxisAttr) {
    //get the current location
    console.log(objectId);
    var yPosition = $('#'+objectId).attr(yAxisAttr);
    var svgHeight = $('#stuffedanimalwarsvg').height();
    //if still on the gameboard
    if(yPosition<svgHeight){
        //update the coordinates
        yPosition++;
        $('#'+objectId).attr(yAxisAttr,yPosition);
    }
    else{
        $('#'+objectId).attr(yAxisAttr,'0');
    }
    
    //check if any image animal was hit
    animalObjectTimerIds.
        forEach(
            function(animalObjectTimerId)
            {
                console.log(JSON.stringify(animalObjectTimerId));
            }
        );
}

function startAnimalObjectTimerUp(objectId,xAxisAttr,yAxisAttr,animalInterval){
    var timerId=window.setInterval(moveAnimalObjectUp,animalInterval,objectId,xAxisAttr,yAxisAttr);
    var animalObjectTimerId = {'objectId':objectId,'timerId':timerId,'xAxisAttr':xAxisAttr,'yAxisAttr':yAxisAttr};
    animalObjectTimerIds.push(animalObjectTimerId);
}
function startShapeObjectTimerUp(objectId,xAxisAttr,yAxisAttr,shapeInterval){
    var timerId = window.setInterval(moveShapeObjectUp,shapeInterval,objectId,xAxisAttr,yAxisAttr);
    var shapeObjectTimerId = {'objectId':objectId,'timerId':timerId,'xAxisAttr':xAxisAttr,'yAxisAttr':yAxisAttr};
    shapeObjectTimerIds.push(shapeObjectTimerId);
}
function startAnimalObjectTimerDown(objectId,xAxisAttr,yAxisAttr,animalInterval){
    var timerId = window.setInterval(moveAnimalObjectDown,animalInterval,objectId,xAxisAttr,yAxisAttr);
    var animalObjectTimerId = {'objectId':objectId,'timerId':timerId,'xAxisAttr':xAxisAttr,'yAxisAttr':yAxisAttr};
    animalObjectTimerIds.push(animalObjectTimerId);
}
function startShapeObjectTimerDown(objectId,xAxisAttr,yAxisAttr,shapeInterval){
    var timerId = window.setInterval(moveShapeObjectDown,shapeInterval,objectId,xAxisAttr,yAxisAttr);
    var shapeObjectTimerId = {'objectId':objectId,'timerId':timerId,'xAxisAttr':xAxisAttr,'yAxisAttr':yAxisAttr};
    shapeObjectTimerIds.push(shapeObjectTimerId);
}

function onBaseTapSocketEventDots(tapMsgObject){
    
    //get the coordinates emitted
    var pointX = tapMsgObject.x;
    var pointY = tapMsgObject.y;

    //draw a circle from the new to the old location
    var newCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
    var circleId = 'circle'+$.now();

    newCircle.setAttribute('id',circleId);
    newCircle.setAttribute('cx',pointX);
    newCircle.setAttribute('cy',pointY);
    newCircle.setAttribute('r',radius);
    
    //WHITE
    newCircle.setAttribute('style','stroke:rgb('+getRandomColorValue()+','+getRandomColorValue()+','+getRandomColorValue()+');strokewidth:5;fill:white;'); //WHITE FILL / WHITE STROKE (OUTER CIRCLE) 
    
    $("#stuffedanimalwarsvg").append(newCircle);

    //move the state rectangle to where the click was made
    $("#stuffedanimalwarsvgrect").attr("x",pointX);
    $("#stuffedanimalwarsvgrect").attr("y",pointY); 
    
    //start a timer for the line, depending on the direction
    var direction = tapMsgObject.movement;
    var objectTimerId;
    switch(direction){
        case 'UP':
            objectTimerId = startShapeObjectTimerUp(circleId,"cx","cy",shapeInterval);
            break;
        case 'DOWN':
            objectTimerId = startShapeObjectTimerDown(circleId,"cx","cy",shapeInterval);

            break;
        default:
            console.log("UNKNOWN DIRECTION FOR DOT:"+direction);
            break;
    }
    var shapeObjectTimer = {'objectId':circleId,'timerId':objectTimerId};
    
//    console.log(JSON.stringify(shapeObjectTimer));
    shapeObjectTimerIds.push(shapeObjectTimer);

}
function onBaseTapSocketEventLines(tapMsgObject){
    //get the coordinates emitted
    var newPointX = tapMsgObject.x;
    var newPointY = tapMsgObject.y;

    //save off these coordinates (for drawing a line)
    var oldPointX =$("#stuffedanimalwarsvgrect").attr("x");
    var oldPointY =$("#stuffedanimalwarsvgrect").attr("y");

    //draw a line from the new to the old location
    var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
    var lineId='line'+$.now();

    newLine.setAttribute('id',lineId);
    newLine.setAttribute('x1',newPointX);
    newLine.setAttribute('y1',newPointY); 
    newLine.setAttribute('x2',oldPointX);
    newLine.setAttribute('y2',oldPointY);
    
    //WHITE LINE
    newLine.setAttribute('style','stroke:rgb(255,255,255);stroke-width:'+lineWidth+';'); 

    $("#stuffedanimalwarsvg").append(newLine);

    //move the state rectangle to where the click was made
    $("#stuffedanimalwarsvgrect").attr("x",newPointX);
    $("#stuffedanimalwarsvgrect").attr("y",newPointY); 
    
    //start a timer for the line, depending on the direction
    var direction = tapMsgObject.movement;
    var objectTimerId;
    switch(direction){
        case 'UP':
            objectTimerId = startShapeObjectTimerUp(lineId,"x1","y1",shapeInterval);
            break;
        case 'DOWN':
            objectTimerId = startShapeObjectTimerDown(lineId,"x1","y1",shapeInterval);
            break;
        default:
            console.log("UNKNOWN DIRECTION FOR LINE:"+direction);
            break;
    }
    var timerObject = {'objectId':lineId,'timerId':objectTimerId};
    shapeObjectTimerIds.push(timerObject);
}
function onBaseTapSocketEventCustom(tapMsgObject){
    if (
        tapMsgObject.customimage.indexOf("http://")===0||
        tapMsgObject.customimage.indexOf("https://")===0
       ){ 
            if( tapMsgObject.customimage.indexOf(".jpg")   >   0 ||
                tapMsgObject.customimage.indexOf(".jpeg")  >   0 ||
                tapMsgObject.customimage.indexOf(".gif")   >   0 ||
                tapMsgObject.customimage.indexOf(".png")   >   0){
                onBaseTapSocketEventImages(tapMsgObject,tapMsgObject.customimage);
            }
            else{
                console.log('MESSAGE SENT DOES NOT CONTAIN A VALID ENOUGH IMAGE URL'+tapMsgObject.customimage);
            }
        }
}
function onBaseTapSocketEventImages(tapMsgObject,imagePath){
    var width="100";
    var height="100";
    var animalId='animal'+$.now();

    //get the coordinates emitted
    var pointX = tapMsgObject.x-(width/2);
    var pointY = tapMsgObject.y-(height/2);
    
    var svgimg = document.createElementNS('http://www.w3.org/2000/svg','image');
    svgimg.setAttributeNS(null,'id',animalId);
    svgimg.setAttributeNS(null,'class','animalimage');
    svgimg.setAttributeNS(null,'height',height);
    svgimg.setAttributeNS(null,'width',width);
    svgimg.setAttributeNS('http://www.w3.org/1999/xlink','href', imagePath);
    svgimg.setAttributeNS(null,'x',pointX);
    svgimg.setAttributeNS(null,'y',pointY);
    svgimg.setAttributeNS(null, 'visibility', 'visible');
    $('#stuffedanimalwarsvg').append(svgimg);

    $("#stuffedanimalwarsvgrect").attr("x",tapMsgObject.x);
    $("#stuffedanimalwarsvgrect").attr("y",tapMsgObject.y); 
    
    //start a timer for the line, depending on the direction
    var direction = tapMsgObject.movement;
    var objectTimerId;
    switch(direction){
        case 'UP':
            objectTimerId = startAnimalObjectTimerUp(animalId,"x","y",animalInterval);
            break;
        case 'DOWN':
            objectTimerId = startAnimalObjectTimerDown(animalId,"x","y",animalInterval);
            break;
        default:
            return;
            console.log("UNKNOWN DIRECTION FOR ANIMAL:"+direction);
            break;
    }
    var timerObject = {'objectId':animalId,'timerId':objectTimerId};
    animalObjectTimerIds.push(timerObject);
}

function onBaseChatSocketEvent(chatMsgObject){
    var remoteChatClientUser = chatMsgObject.CHATCLIENTUSER;
    var chatServerUser = chatMsgObject.CHATSERVERUSER;
    var chatClientMessage = chatMsgObject.CHATCLIENTMESSAGE;
    var chatServerDate = chatMsgObject.CHATSERVERDATE;
    var serverStamp = "["+chatServerUser+"]["+chatServerDate+"]"; //ip and time stamp

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

//    console.log("EMIT:"+JSON.stringify(chatMessageObject)+" CHATSOCKETEVENT:"+chatSocketEvent);
    //send the message
    baseSocket.emit(chatSocketEvent,chatMessageObject); 
}


//AUDIO SPECIFIC UTILITIES
function PlayNextTrack(currentFile){
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
function changeMp3(mp3Url){
    //change the source of the AUDIO player
    $('#jaemzwaredynamicaudiosource').attr("src",mp3Url);
    document.getElementById("jaemzwaredynamicaudioplayer").load();
    document.getElementById("jaemzwaredynamicaudioplayer").play();
    $('#selectsongs').val(mp3Url);
}
function changeMp4(mp4Url){
    $('#jaemzwaredynamicvideosource').attr("src",mp4Url);
    document.getElementById("jaemzwaredynamicvideoplayer").load();
    document.getElementById("jaemzwaredynamicvideoplayer").play();
}

