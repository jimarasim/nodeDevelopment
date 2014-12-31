//WHEN THE PAGE IS DONE LOADING
document.addEventListener('DOMContentLoaded', function () {
                          
                          SetupEvents();
                          
                          });


//DEFINE EVENTS TO RESPOND TO
function SetupEvents()
{
//    $("#svgtag4").click(function(){ImageSvgClicked();});
    
}

//WHEN THE IMAGE IS CLICKED
function ImageSvgClicked(){
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