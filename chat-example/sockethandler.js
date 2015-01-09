
//SOCKET HANDLING
var socket = io();

$('#svgdiv1').click(function(event){
                    var pageCoords = "( event.pageX, event.pageY ) : " + "( " + event.pageX + ", " + event.pageY + " )";
                    var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
                    
                    $( "#span1" ).text(  pageCoords );
                    
                    $("#svgrect1").attr("x",event.pageX);
                    $("#svgrect1").attr("y",event.pageY);
                    
//                    socket.emit('tap msg',"REMOTE:"+pageCoords);
                    socket.emit('tap msg',"{x:"+event.pageX+", y:"+event.pageY+"}");
                    });

//handler for server socket io.emit, when someone taps
socket.on('tap msg', function(msg){
          $( "#span1" ).text(  msg.x );
          });
