//WHEN THE PAGE IS DONE LOADING
document.addEventListener('DOMContentLoaded', function () {
                          
                          SetupEvents();
                          
                          });


//DEFINE EVENTS TO RESPOND TO 71ck3t#Fly
function SetupEvents()
{
    $("#svgtag1").mousemove(function(event){Svg1MouseMove(event);});
    $("#svgtag1").tap(function(event){Svg1Tap(event);});
    $("#svgtag4").click(function(){Svg4Clicked();});
    
}

//WHEN THE FIRST SVG IS TAPPED
function Svg1Tap(event){
    var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
    var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
    $( "#span1" ).text( "( event.pageX, event.pageY ) : " + pageCoords );
    $( "#span2" ).text( "( event.clientX, event.clientY ) : " + clientCoords );
}

//WHEN THE FIRST SVG (WITH THE BLUE SQUARE) IS CLICKED
function Svg1MouseMove(event){
    var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
    var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
    $( "#span1" ).text( "( event.pageX, event.pageY ) : " + pageCoords );
    $( "#span2" ).text( "( event.clientX, event.clientY ) : " + clientCoords );
}

//WHEN THE SVG WITH AN IMAGE IS CLICKED
function Svg4Clicked(){
    if($("#svgimage1").attr("x")==0){
        $("#svgimage1").attr("x",10);
    }
    else{
        $("#svgimage1").attr("x",0);
    }
}

//DRAG AND DROP SUPPORT
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}