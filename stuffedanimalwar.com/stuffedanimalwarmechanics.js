/* 
 * jaemzware
 */
var animalObjects = []; //{'objectId':'','timerId':'','xAxisAttr':'',yAxisAttr:''}
var shapeObjects = []; //{'objectId':'','timerId':'','xAxisAttr':'',yAxisAttr:''}
var animalPositionIncrement = 5; //distance animal moves each reposition 
var shapePositionIncrement = 7; //distance shape moves each reposition
var animalInterval = 50; //milliseconds between animal repositions
var shapeInterval = 25; //milliseconds between shape repositions
var radius = 10; //RADIUS of the dot shape to draw
var lineWidth = 10; //width of the line shape to draw
var baseMasterAlias = null; // alias in chat that can control media for all
var baseUnspecifiedAlias = null; //default alias when none is specified
var imageHeightPixels = 100; //height of the stuffed animals
var imageWidthPixels = 100; //width of the stuffed animals

function moveAnimalObjectUp(animalObjectId,animalXAxisAttr,animalYAxisAttr) {
    var xPosition = $('#'+animalObjectId).attr(animalXAxisAttr);    //get the current location
    var yPosition = $('#'+animalObjectId).attr(animalYAxisAttr);    //get the current location
    var svgHeight = $('#stuffedanimalwarsvg').height();
    if(yPosition>0){    //if still on the gameboard
        yPosition=parseInt(yPosition)-parseInt(animalPositionIncrement);        //update the coordinates
        xPosition=parseInt(xPosition);        //update the coordinates
        $('#'+animalObjectId).attr(animalYAxisAttr,yPosition);
        $('#'+animalObjectId).attr(animalXAxisAttr,xPosition);
    }
    else{
        $('#'+animalObjectId).attr(animalYAxisAttr,svgHeight);
        $('#'+animalObjectId).attr(animalXAxisAttr,xPosition);
    }  
}
function moveAnimalObjectLeft(animalObjectId,animalXAxisAttr,animalYAxisAttr) {
    var xPosition = $('#'+animalObjectId).attr(animalXAxisAttr);    //get the current location
    var yPosition = $('#'+animalObjectId).attr(animalYAxisAttr);    //get the current location
    var svgWidth = $('#stuffedanimalwarsvg').width();
    if(xPosition>0){    //if still on the gameboard
        yPosition=parseInt(yPosition);        //update the coordinates
        xPosition=parseInt(xPosition)-parseInt(animalPositionIncrement);        //update the coordinates
        $('#'+animalObjectId).attr(animalYAxisAttr,yPosition);
        $('#'+animalObjectId).attr(animalXAxisAttr,xPosition);
    }
    else{
        $('#'+animalObjectId).attr(animalYAxisAttr,yPosition);
        $('#'+animalObjectId).attr(animalXAxisAttr,svgWidth);
    }  
}
function moveAnimalObjectDown(animalObjectId,animalXAxisAttr,animalYyAxisAttr) {
    //get the current location
    var yPosition = $('#'+animalObjectId).attr(animalYyAxisAttr);
    var xPosition = $('#'+animalObjectId).attr(animalXAxisAttr);
    var svgHeight = $('#stuffedanimalwarsvg').height();
    if(yPosition<svgHeight){     //if still on SVG gameboard
        yPosition=parseInt(yPosition)+parseInt(animalPositionIncrement);         //update the coordinates
        $('#'+animalObjectId).attr(animalYyAxisAttr,yPosition);
        $('#'+animalObjectId).attr(animalXAxisAttr,xPosition);
    }
    else{
        $('#'+animalObjectId).attr(animalYyAxisAttr,'0');
        $('#'+animalObjectId).attr(animalXAxisAttr,xPosition);  //MOVE BACK TO THE TOP OF THE SVG
    }
}
function moveAnimalObjectRight(animalObjectId,animalXAxisAttr,animalYAxisAttr) {
    //get the current location
    var yPosition = $('#'+animalObjectId).attr(animalYAxisAttr);
    var xPosition = $('#'+animalObjectId).attr(animalXAxisAttr);
    var svgWidth = $('#stuffedanimalwarsvg').width();
    if(xPosition<svgWidth){     //if still on SVG gameboard
        xPosition=parseInt(xPosition)+parseInt(animalPositionIncrement);         //update the coordinates
        $('#'+animalObjectId).attr(animalYAxisAttr,yPosition);
        $('#'+animalObjectId).attr(animalXAxisAttr,xPosition);
    }
    else{
        $('#'+animalObjectId).attr(animalXAxisAttr,'0');
        $('#'+animalObjectId).attr(animalYAxisAttr,yPosition);  //MOVE BACK TO THE TOP OF THE SVG
    }
}
function moveShapeObjectUp(shapeObjectId,shapeXAxisAttr,shapeYAxisAttr) {
    //get the current location
    var xPosition = $('#'+shapeObjectId).attr(shapeXAxisAttr);
    var yPosition = $('#'+shapeObjectId).attr(shapeYAxisAttr);
    var svgHeight = $('#stuffedanimalwarsvg').height();
    if(yPosition>0){    //if still on the SVG gameboard
        yPosition=parseInt(yPosition)-parseInt(shapePositionIncrement);              //update the coordinates
        $('#'+shapeObjectId).attr(shapeYAxisAttr,yPosition);$('#'+shapeObjectId).attr(shapeXAxisAttr,xPosition);
    }
    else{
        $('#'+shapeObjectId).attr(shapeYAxisAttr,svgHeight);$('#'+shapeObjectId).attr(shapeXAxisAttr,xPosition);
    }
    
    //check if any image animal was hit, and stop it if so
    for(var i=0;i<animalObjects.length;i++){
        if(HitTest(animalObjects[i],shapeObjectId,shapeXAxisAttr,shapeYAxisAttr)){
            shapeObjectThatHitAnimal = jQuery.grep(shapeObjects, function(shapeObject) {  //REMOVE THE SHAPE
                return shapeObject.objectId === shapeObjectId;});
            clearInterval(shapeObjectThatHitAnimal.timerId);             //stop the shapeObjectThatHitAnimal timer
            $('#'+shapeObjectId).remove();            //remove the shapeObjectThatHitAnimal 
            clearInterval(animalObjects[i].timerId);            //stop the animal timer
            $('#'+animalObjects[i].objectId).fadeToggle('slow', function() {            //fade out the animal
                this.remove();                //remove the animal from the svg
            });
        }
    }
}
function moveShapeObjectLeft(shapeObjectId,shapeXAxisAttr,shapeYAxisAttr) {
    //get the current location
    var xPosition = $('#'+shapeObjectId).attr(shapeXAxisAttr);
    var yPosition = $('#'+shapeObjectId).attr(shapeYAxisAttr);
    var svgWidth = $('#stuffedanimalwarsvg').width();
    if(xPosition>0){    //if still on the SVG gameboard
        xPosition=parseInt(xPosition)-parseInt(shapePositionIncrement);              //update the coordinates
        $('#'+shapeObjectId).attr(shapeYAxisAttr,yPosition);
        $('#'+shapeObjectId).attr(shapeXAxisAttr,xPosition);
    }
    else{
        $('#'+shapeObjectId).attr(shapeXAxisAttr,svgWidth);
        $('#'+shapeObjectId).attr(shapeYAxisAttr,yPosition);
    }
    
    //check if any image animal was hit, and stop it if so
    for(var i=0;i<animalObjects.length;i++){
        if(HitTest(animalObjects[i],shapeObjectId,shapeXAxisAttr,shapeYAxisAttr)){
            shapeObjectThatHitAnimal = jQuery.grep(shapeObjects, function(shapeObject) {  //REMOVE THE SHAPE
                return shapeObject.objectId === shapeObjectId;});
            clearInterval(shapeObjectThatHitAnimal.timerId);             //stop the shapeObjectThatHitAnimal timer
            $('#'+shapeObjectId).remove();            //remove the shapeObjectThatHitAnimal 
            clearInterval(animalObjects[i].timerId);            //stop the animal timer
            $('#'+animalObjects[i].objectId).fadeToggle('slow', function() {            //fade out the animal
                this.remove();                //remove the animal from the svg
            });
        }
    }
}
function moveShapeObjectDown(shapeObjectId,shapeXAxisAttr,shapeYAxisAttr) {
    //get the current location
    var xPosition = $('#'+shapeObjectId).attr(shapeXAxisAttr);    
    var yPosition = $('#'+shapeObjectId).attr(shapeYAxisAttr);
    var svgHeight = $('#stuffedanimalwarsvg').height();
    //if still on the gameboard
    if(yPosition<svgHeight){
        //update the coordinates
        yPosition=parseInt(yPosition)+parseInt(shapePositionIncrement);
        $('#'+shapeObjectId).attr(shapeYAxisAttr,yPosition);$('#'+shapeObjectId).attr(shapeXAxisAttr,xPosition);
    }
    else{
        $('#'+shapeObjectId).attr(shapeYAxisAttr,'0');$('#'+shapeObjectId).attr(shapeXAxisAttr,xPosition);
    }    
    
    //check if any image animal was hit, and stop it if so
    for(var i=0;i<animalObjects.length;i++){
        if(HitTest(animalObjects[i],shapeObjectId,shapeXAxisAttr,shapeYAxisAttr)){
            shapeObjectThatHitAnimal = jQuery.grep(shapeObjects, function(shapeObject) {  //REMOVE THE SHAPE
                return shapeObject.objectId === shapeObjectId;});
            clearInterval(shapeObjectThatHitAnimal.timerId);             //stop the shapeObjectThatHitAnimal timer
            $('#'+shapeObjectId).remove();            //remove the shapeObjectThatHitAnimal 
            clearInterval(animalObjects[i].timerId);            //stop the animal timer
            $('#'+animalObjects[i].objectId).fadeToggle('slow', function() {            //fade out the animal
                this.remove();                //remove the animal from the svg
            });
        }
    }
}
function moveShapeObjectRight(shapeObjectId,shapeXAxisAttr,shapeYAxisAttr) {
    //get the current location
    var xPosition = $('#'+shapeObjectId).attr(shapeXAxisAttr);    
    var yPosition = $('#'+shapeObjectId).attr(shapeYAxisAttr);
    var svgWidth = $('#stuffedanimalwarsvg').width();
    //if still on the gameboard
    if(xPosition<svgWidth){
        //update the coordinates
        xPosition=parseInt(xPosition)+parseInt(shapePositionIncrement);
        $('#'+shapeObjectId).attr(shapeYAxisAttr,yPosition);
        $('#'+shapeObjectId).attr(shapeXAxisAttr,xPosition);
    }
    else{
        $('#'+shapeObjectId).attr(shapeXAxisAttr,'0');
        $('#'+shapeObjectId).attr(shapeYAxisAttr,yPosition);
    }    
    
    //check if any image animal was hit, and stop it if so
    for(var i=0;i<animalObjects.length;i++){
        if(HitTest(animalObjects[i],shapeObjectId,shapeXAxisAttr,shapeYAxisAttr)){
            shapeObjectThatHitAnimal = jQuery.grep(shapeObjects, function(shapeObject) {  //REMOVE THE SHAPE
                return shapeObject.objectId === shapeObjectId;});
            clearInterval(shapeObjectThatHitAnimal.timerId);             //stop the shapeObjectThatHitAnimal timer
            $('#'+shapeObjectId).remove();            //remove the shapeObjectThatHitAnimal 
            clearInterval(animalObjects[i].timerId);            //stop the animal timer
            $('#'+animalObjects[i].objectId).fadeToggle('slow', function() {            //fade out the animal
                this.remove();                //remove the animal from the svg
            });
        }
    }
}

function startAnimalObjectTimerUp(animalObjectId,xAxisAttr,yAxisAttr,animalInterval){
    var timerId=window.setInterval(moveAnimalObjectUp,animalInterval,animalObjectId,xAxisAttr,yAxisAttr);
    var animalObjectTimerId = {'objectId':animalObjectId,'timerId':timerId,'xAxisAttr':xAxisAttr,'yAxisAttr':yAxisAttr};
    animalObjects.push(animalObjectTimerId);
}
function startAnimalObjectTimerDown(animalObjectId,xAxisAttr,yAxisAttr,animalInterval){
    var timerId = window.setInterval(moveAnimalObjectDown,animalInterval,animalObjectId,xAxisAttr,yAxisAttr);
    var animalObjectTimerId = {'objectId':animalObjectId,'timerId':timerId,'xAxisAttr':xAxisAttr,'yAxisAttr':yAxisAttr};
    animalObjects.push(animalObjectTimerId);
}
function startAnimalObjectTimerLeft(animalObjectId,xAxisAttr,yAxisAttr,animalInterval){
    var timerId=window.setInterval(moveAnimalObjectLeft,animalInterval,animalObjectId,xAxisAttr,yAxisAttr);
    var animalObjectTimerId = {'objectId':animalObjectId,'timerId':timerId,'xAxisAttr':xAxisAttr,'yAxisAttr':yAxisAttr};
    animalObjects.push(animalObjectTimerId);
}
function startAnimalObjectTimerRight(animalObjectId,xAxisAttr,yAxisAttr,animalInterval){
    var timerId = window.setInterval(moveAnimalObjectRight,animalInterval,animalObjectId,xAxisAttr,yAxisAttr);
    var animalObjectTimerId = {'objectId':animalObjectId,'timerId':timerId,'xAxisAttr':xAxisAttr,'yAxisAttr':yAxisAttr};
    animalObjects.push(animalObjectTimerId);
}

function startShapeObjectTimerUp(shapeObjectId,xAxisAttr,yAxisAttr,shapeInterval){
    var timerId = window.setInterval(moveShapeObjectUp,shapeInterval,shapeObjectId,xAxisAttr,yAxisAttr);
    var shapeObjectTimerId = {'objectId':shapeObjectId,'timerId':timerId,'xAxisAttr':xAxisAttr,'yAxisAttr':yAxisAttr};
    shapeObjects.push(shapeObjectTimerId);
}
function startShapeObjectTimerDown(shapeObjectId,xAxisAttr,yAxisAttr,shapeInterval){
    var timerId = window.setInterval(moveShapeObjectDown,shapeInterval,shapeObjectId,xAxisAttr,yAxisAttr);
    var shapeObjectTimerId = {'objectId':shapeObjectId,'timerId':timerId,'xAxisAttr':xAxisAttr,'yAxisAttr':yAxisAttr};
    shapeObjects.push(shapeObjectTimerId);
}
function startShapeObjectTimerLeft(shapeObjectId,xAxisAttr,yAxisAttr,shapeInterval){
    var timerId = window.setInterval(moveShapeObjectLeft,shapeInterval,shapeObjectId,xAxisAttr,yAxisAttr);
    var shapeObjectTimerId = {'objectId':shapeObjectId,'timerId':timerId,'xAxisAttr':xAxisAttr,'yAxisAttr':yAxisAttr};
    shapeObjects.push(shapeObjectTimerId);
}
function startShapeObjectTimerRight(shapeObjectId,xAxisAttr,yAxisAttr,shapeInterval){
    var timerId = window.setInterval(moveShapeObjectRight,shapeInterval,shapeObjectId,xAxisAttr,yAxisAttr);
    var shapeObjectTimerId = {'objectId':shapeObjectId,'timerId':timerId,'xAxisAttr':xAxisAttr,'yAxisAttr':yAxisAttr};
    shapeObjects.push(shapeObjectTimerId);
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
    
    //RANDOM COLOR
    newCircle.setAttribute('style','transform=translate(75,25);stroke:rgb('+GetRandomColorValue()+','+GetRandomColorValue()+','+GetRandomColorValue()+');fill:rgb('+GetRandomColorValue()+','+GetRandomColorValue()+','+GetRandomColorValue()+');'); //WHITE FILL / WHITE STROKE (OUTER CIRCLE) 
    
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
        case 'LEFT':
            objectTimerId = startShapeObjectTimerLeft(circleId,"cx","cy",shapeInterval);
            break;
        case 'RIGHT':
            objectTimerId = startShapeObjectTimerRight(circleId,"cx","cy",shapeInterval);
            break;
        default:
            console.log("UNKNOWN DIRECTION FOR DOT:"+direction);
            break;
    }
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
    //XYxy
    if(tapMsgObject.animal==='line01'){
        newLine.setAttribute('x1',newPointX);
        newLine.setAttribute('y1',newPointY);
    
        newLine.setAttribute('x2',newPointX); //
        newLine.setAttribute('y2',newPointY); //
    }
    //xyXY
    else if(tapMsgObject.animal==='line02'){ 
        newLine.setAttribute('x1',oldPointX);
        newLine.setAttribute('y1',oldPointY);
    
        newLine.setAttribute('x2',newPointX); //
        newLine.setAttribute('y2',newPointY); //
    }
    else{
        console.log('UNKNOWN LINE ANIMAL:'+tapMsgObject.animal);
    }

    
    //RANDOM COLOR LINE
    newLine.setAttribute('style','stroke:rgb('+GetRandomColorValue()+','+GetRandomColorValue()+','+GetRandomColorValue()+');stroke-width:'+lineWidth+';'); 

    //ADD LINE TO THE SVG
    $("#stuffedanimalwarsvg").append(newLine);

    //MOVE THE CURSOR
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
        case 'LEFT':
            objectTimerId = startShapeObjectTimerLeft(lineId,"x1","y1",shapeInterval);
            break;
        case 'RIGHT':
            objectTimerId = startShapeObjectTimerRight(lineId,"x1","y1",shapeInterval);
            break;
        default:
            console.log("UNKNOWN DIRECTION FOR LINE:"+direction);
            break;
    }
}
function onBaseTapSocketEventCustom(tapMsgObject){
    if (
        tapMsgObject.customimage.indexOf("http://")===0||
        tapMsgObject.customimage.indexOf("https://")===0
       ){ 
            if( tapMsgObject.customimage.indexOf(".jpg")   >   0 ||
                tapMsgObject.customimage.indexOf(".jpeg")  >   0 ||
                tapMsgObject.customimage.indexOf(".JPG")  >   0 ||
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
    var width=imageWidthPixels;
    var height=imageHeightPixels;
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
        case 'LEFT':
            objectTimerId = startAnimalObjectTimerLeft(animalId,"x","y",animalInterval);
            break;
        case 'RIGHT':
            objectTimerId = startAnimalObjectTimerRight(animalId,"x","y",animalInterval);
            break;
        default:
            return;
            console.log("UNKNOWN DIRECTION FOR ANIMAL:"+direction);
            break;
    }
}

/* 
 * HIT TEST
 */
function HitTest(animalObject,shapeObjectId,shapeXAxisAttr,shapeYAxisAttr){
    var shapePointX=            parseInt($('#'+shapeObjectId).attr(shapeXAxisAttr));
    var shapePointY=            parseInt($('#'+shapeObjectId).attr(shapeYAxisAttr));
    var animalOriginPointX =    parseInt($('#'+animalObject.objectId).attr(animalObject.xAxisAttr));
    var animalOriginPointY =    parseInt($('#'+animalObject.objectId).attr(animalObject.yAxisAttr));
    var animalWidthPixels =     parseInt($('#'+animalObject.objectId).attr('width'));
    var animalHeightPixels =    parseInt($('#'+animalObject.objectId).attr('height'));
    
    if(     shapePointX >= animalOriginPointX && 
            shapePointX <= (animalOriginPointX + animalWidthPixels) &&
            shapePointY >= animalOriginPointY &&
            shapePointY <= (animalOriginPointY + animalHeightPixels)){
        return true;
    }
    else{
        return false;
    }
}
