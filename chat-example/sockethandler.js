
//SOCKET HANDLING
var socket = io();

$('#svgdiv1').click(function(event){
                    
                    //get coordinates of the point clicked
                    var clickPointX = event.pageX;
                    var clickPointY = event.pageY;
                    
                    //report coordinates to the server
                    socket.emit('tap msg','{"x":"'+event.pageX+'", "y":"'+event.pageY+'"}');

                    });

//handler for server socket io.emit, when someone taps
socket.on('tap msg', function(msg){
          
                    //convert json string to an object
                    var msgObject = jQuery.parseJSON(msg);
          
                    //get the coordinates reported
                    var setPointX = msgObject.x;
                    var setPointY = msgObject.y;
          
                    //move the rectangle to where the click was made
                    $("#svgrect1").attr("x",setPointX);
                    $("#svgrect1").attr("y",setPointY);
          
                    $( "#span1" ).text( "BROADCASTED:"+ msg + "X:"+msgObject.x+" Y:"+msgObject.y);
                    });
