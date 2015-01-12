var socket = io();
var divSvgTop = 250; //NOTE: TOP OF .divsvg in  IS 250



//MESSAGE BOX
$('form').submit(function(){
    socket.emit('chat message', $.now()+": "+$('#m').val()); //server needs to have a socket.on handler for this
    $('#m').val('');
    return false;
});
//handler for server socket io.emit
socket.on('chat message', function(msg){
    $('#messages').prepend($('<li>').text(msg));
});



//STUFFED ANIMAL WAR
//tell server about new coordinates when clicked
$('#svgdiv1').click(function(event){
                    
    //get coordinates of the point clicked
    var clickPointX = event.pageX;
    var clickPointY = event.pageY;

    //report coordinates to the server
    socket.emit('tap msg','{"x":"'+event.pageX+'", "y":"'+event.pageY+'"}');

});
//when server sends coordinates for someone clicking
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
    newLine.setAttribute('style','stroke:rgb(255,0,0);stroke-width:2');
    $("#svgtag1").append(newLine);

    //move the rectangle to where the click was made
    $("#svgrect1").attr("x",newPointX);
    $("#svgrect1").attr("y",newPointY-divSvgTop); //NOTE: TOP OF .divsvg IS 250
          
});


