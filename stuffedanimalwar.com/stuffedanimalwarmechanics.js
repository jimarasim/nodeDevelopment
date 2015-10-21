/* 
 * jaemzware
 */
var animalObjects = []; //{'objectId':'','timerId':'','xAxisAttr':'',yAxisAttr:''}
var shapeObjects = []; //{'objectId':'','timerId':'','xAxisAttr':'',yAxisAttr:''}
var animalPositionIncrement = 5; //distance animal moves each reposition 
var shapePositionIncrement = 7; //distance shape moves each reposition
var animalInterval = 50; //milliseconds between animal repositions
var shapeInterval = 50; //milliseconds between shape repositions
var radius = 10; //RADIUS of the dot shape to draw
var lineWidth = 10; //width of the line shape to draw
var baseMasterAlias = null;
var baseUnspecifiedAlias = null;
var imageHeightPixels = 100;
var imageWidthPixels = 100;

function moveAnimalObjectUp(objectId,xAxisAttr,yAxisAttr) {
    //get the current location
    var yPosition = $('#'+objectId).attr(yAxisAttr);
    var svgHeight = $('#stuffedanimalwarsvg').height();
    //if still on the gameboard
    if(yPosition>0){
        //update the coordinates
        yPosition=parseInt(yPosition)-parseInt(animalPositionIncrement);
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
        yPosition=parseInt(yPosition)+parseInt(animalPositionIncrement);
        $('#'+objectId).attr(yAxisAttr,yPosition);
    }
    else{
        $('#'+objectId).attr(yAxisAttr,'0');
    }
}
function moveShapeObjectUp(shapeObjectId,shapeXAxisAttr,shapeYAxisAttr) {
    //get the current location
    var yPosition = $('#'+shapeObjectId).attr(shapeYAxisAttr);
    var svgHeight = $('#stuffedanimalwarsvg').height();
    //if still on the gameboard
    if(yPosition>0){
        //update the coordinates
        yPosition=parseInt(yPosition)-parseInt(shapePositionIncrement);
-       $('#'+shapeObjectId).attr(shapeYAxisAttr,yPosition);
    }
    else{
        $('#'+shapeObjectId).attr(shapeYAxisAttr,svgHeight);
    }
    
    //check if any image animal was hit, and stop it if so
    for(var i=0;i<animalObjects.length;i++){
        if(HitTest(animalObjects[i],shapeObjectId,shapeXAxisAttr,shapeYAxisAttr)){
            clearInterval(animalObjects[i].timerId);
            $('#'+animalObjects[i].objectId).remove();
        }
    }
}
function moveShapeObjectDown(shapeObjectId,shapeXAxisAttr,shapeYAxisAttr) {
    //get the current location
    var yPosition = $('#'+shapeObjectId).attr(shapeYAxisAttr);
    var svgHeight = $('#stuffedanimalwarsvg').height();
    //if still on the gameboard
    if(yPosition<svgHeight){
        //update the coordinates
        yPosition=parseInt(yPosition)+parseInt(shapePositionIncrement);
        $('#'+shapeObjectId).attr(shapeYAxisAttr,yPosition);
    }
    else{
        $('#'+shapeObjectId).attr(shapeYAxisAttr,'0');
    }    
    
    //check if any image animal was hit, and stop it if so
    for(var i=0;i<animalObjects.length;i++){
        if(HitTest(animalObjects[i],shapeObjectId,shapeXAxisAttr,shapeYAxisAttr)){
            clearInterval(animalObjects[i].timerId);
            $('#'+animalObjects[i].objectId).remove();
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
}
function onBaseTapSocketEventCustom(tapMsgObject){
    console.log("tapMsgObject:"+tapMsgObject+"tapMsgObject.customimage:"+tapMsgObject.customimage);
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
    console.log("tapMsgObject:"+tapMsgObject+"imagePath:"+imagePath);
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
