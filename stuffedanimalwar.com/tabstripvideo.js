/*
    Author     : jaemzware.org james arasim
*/

/* PAGE HAS FINISHED LOADING, SETUP PAGE EVENTS */
document.addEventListener('DOMContentLoaded', function () {
    SetupEvents();
});

/*
THESE PRE-DEFINED VIDEO ARRAYS NEED TO BE ASSOCIATED IN THE FIRST IF STATEMENT OF THE PROGRAM BELOW.
THESE PRE-DEFINED VIDEO ARRAYS MUST START WITH 'jaemzwarevideo'
THESE PRE-DEFINED VIDEO ARRAYS MUST HAVE A .MP4 AND .PNG file associcated with the first parameter. The first parameter is the filename with no extension. The second parameter is the caption for the alt id of the image
*/

var jaemzwarevideoskatevids = [
                    ["http://seattlerules.com/media/skatecreteordie/ANDI20160601andrewflipgodbluntswitchtransferdisaster","Marginal Way - Andi - 01"],
                    ["http://seattlerules.com/media/skatecreteordie/ANDI20160601andrewflipgodbonelesstransfer","Marginal Way - Andi - 02"],
                    ["http://seattlerules.com/media/skatecreteordie/ANDI20160601andrewflipgodfourthdimensionmarbletransfer","Marginal Way - Andi - 03"],
                    ["http://seattlerules.com/media/skatecreteordie/ANDI20160601andrewflipgodfrigidtransfer","Marginal Way - Andi - 04"],
                    ["http://seattlerules.com/media/skatecreteordie/ANDI20160601andrewflipgodintopooltransferwithalady","Marginal Way - Andi - 05"],
                    ["http://seattlerules.com/media/skatecreteordie/ANDI20160601andrewflipgodpoolmethodtransfer","Marginal Way - Andi - 06"],
                    ["http://seattlerules.com/media/skatecreteordie/ANDI20160601andrewflipmarbletransfer","Marginal Way - Andi - 07"],
                    ["http://seattlerules.com/media/skate/roxhillollierockline201508","Roxhill Skatepark - James - 01"],
                    ["http://seattlerules.com/media/skate/roxhillbacksideolliesmallbankstepup201500807","Roxhill - James - 02"],
                    ["http://seattlerules.com/media/skate/IMG_4695","Marginal Way - Adam"],
                    ["http://seattlerules.com/media/skate/IMG_4701","Marginal Way - Hector"],
                    ["http://seattlerules.com/media/skate/IMG_4819","Roxhill - Beau"],
                    ["http://seattlerules.com/media/skate/IMG_4837","Roxhill - Matt 01"],
                    ["http://seattlerules.com/media/skate/IMG_4839","Roxhill - Matt 02"],
                    ["http://seattlerules.com/media/skate/NGNQ0173","Roxhill - Matt 03"]
];


var jaemzwarevideohouston2015 = [
                    ["http://seattlerules.com/media/houston2015/IMG_4091","IMG_4091"],
                    ["http://seattlerules.com/media/houston2015/IMG_4092","IMG_4092"],
                    ["http://seattlerules.com/media/houston2015/IMG_4111","IMG_4111"],
                    ["http://seattlerules.com/media/houston2015/IMG_4125","IMG_4125"],
                    ["http://seattlerules.com/media/houston2015/IMG_4126","IMG_4126"],
                    ["http://seattlerules.com/media/houston2015/IMG_4127","IMG_4127"],
                    ["http://seattlerules.com/media/houston2015/IMG_4258","IMG_4258"],
                    ["http://seattlerules.com/media/houston2015/IMG_4260","IMG_4260"],
                    ["http://seattlerules.com/media/houston2015/IMG_4285","IMG_4285"],
                    ["http://seattlerules.com/media/houston2015/IMG_4345","IMG_4345"],
                    ["http://seattlerules.com/media/houston2015/IMG_4348","IMG_4348"] 
];

//THIS FUNCTION SETS UP THE VIDEO ELEMENTS
function SetupEvents(){
    
    //SETUP VIDEO STRIP-LIKE VIDEO PLAYER
    if($('span[id*="jaemzwarevideo"]').length>0){
        //GET IDS OF ALL THE VIDEOS
        var multiGroup=[];
        $('span[id*="jaemzwarevideo"]').each(function(index, element){
                                               multiGroup[index]=$(element).attr('id');
                                               });
        //CREATE VIDEO PLAYERS WITH THOSE IDS
        MultiVideoJquery(multiGroup);
    }
}

/* this function writes the video player and individual videos from jquery */
function MultiVideoJquery(multiGroup){
    
    //write out all the ids found
    for(i=0;i<multiGroup.length;i++){
        
        //get the array of video file paths (sans extension) from the pre-built array
        if(multiGroup[i]===             "jaemzwarevideoskatevids"){
            filePathsNoExtensionArray = jaemzwarevideoskatevids;
        }
        else if(multiGroup[i]===        "jaemzwarevideohouston2015"){
            filePathsNoExtensionArray = jaemzwarevideohouston2015;
        }
        else{
            console.error("UNEXPECTED JAEMZWAREVIDEOGROUP PRE-BUILT VIDEO ARRAY:"+multiGroup[i]);
            break;
        }
        
        //write the video player
        $("#"+multiGroup[i]).after("<video width='640' height='480' controls='controls' preload='metadata' poster='"+filePathsNoExtensionArray[0][0]+".png' title='"+filePathsNoExtensionArray[0][1]+"' id='"+multiGroup[i]+"Video'>browser doesn't support video</video>");

        //add the different file format clips
        $("#"+multiGroup[i]+"Video").append("<source src='"+filePathsNoExtensionArray[0][0]+".mp4' type='video/mp4' id='"+multiGroup[i]+"Videomp4'/>");

        //write out the video strip
        $("#"+multiGroup[i]+"Video").before("<span class='videolinktext' id='"+multiGroup[i]+"VideoTitle'>"+filePathsNoExtensionArray[0][1]+"</span>");
        $("#"+multiGroup[i]+"VideoTitle").after("<div class='videostrip' id='"+multiGroup[i]+"VideoStripDiv' class='videostrip'></div>");
        $("#"+multiGroup[i]+"VideoStripDiv").append("<table id='"+multiGroup[i]+"VideoStripTable'></table>");
        $("#"+multiGroup[i]+"VideoStripTable").append("<tr id='"+multiGroup[i]+"VideoStripTR'></tr>");


        //WRITE OUT THE FIRST VIDEO
        $("#"+multiGroup[i]+"VideoStripTR").append("<td id='"+multiGroup[i]+"VideoStripTD0'></td>");
        $("#"+multiGroup[i]+"VideoStripTD0").append("<img class='videolink' id='"+multiGroup[i]+"VideoStripIMG0' \
                                                   title='"+filePathsNoExtensionArray[0][1]+"' \
                                                   alt='"+filePathsNoExtensionArray[0][1]+"' \
                                                   src='"+filePathsNoExtensionArray[0][0]+".png' \
                                                   onclick='MultiVideoJqueryChanger(\""+
                                                                filePathsNoExtensionArray[0][0]+".png\",\""+
                                                                filePathsNoExtensionArray[0][0]+".mp4\",\""+
                                                                multiGroup[i]+"\",\""+
                                                                filePathsNoExtensionArray[0][1]+"\")' \
                                                   />");

        //WRITE OUT THE REST OF THE VIDEOS
        for (var j=1;j<filePathsNoExtensionArray.length;j++)
        {
            $("#"+multiGroup[i]+"VideoStripTR").append("<td id='"+multiGroup[i]+"VideoStripTD"+j+"'></td>");
            $("#"+multiGroup[i]+"VideoStripTD"+j).append("<img class='videolink' id='"+multiGroup[i]+"VideoStripIMG"+j+"' \
                                                       title='"+filePathsNoExtensionArray[j][1]+"' \
                                                       alt='"+filePathsNoExtensionArray[j][1]+"' \
                                                       src='"+filePathsNoExtensionArray[j][0]+".png' \
                                                       onclick='MultiVideoJqueryChanger(\""+filePathsNoExtensionArray[j][0]+".png\",\""+
                                                                                            filePathsNoExtensionArray[j][0]+".mp4\",\""+
                                                                                            multiGroup[i]+
                                                                                            "\",\""+filePathsNoExtensionArray[j][1]+"\")' \
                                                       />");

        }
    }
}


function ChangeVideo(basepath,png,mp4,ogv,group,fileNameOnly)
{
    var pngpath = basepath===""?png:basepath + png;
    var mp4path = basepath===""?mp4:basepath + mp4;
    
    //set elements of the video
    document.getElementById(group+"videopng").setAttribute("poster",pngpath);
    document.getElementById(group+"videomp4").setAttribute("src",mp4path);
    
    //set element of the video title
    document.getElementById(group+"videoTitle").innerHTML=fileNameOnly;
    
    //reload the video
    document.getElementById(group+"videopng").load();
}


function MultiVideoJqueryChanger(png,mp4,group,title)
{
    //set elements of the video
    document.getElementById(group+"Video").setAttribute("poster",png);
    document.getElementById(group+"Video").setAttribute("title",title);
    document.getElementById(group+"Videomp4").setAttribute("src",mp4);
    
    //set element of the video title
    document.getElementById(group+"VideoTitle").innerHTML=title;
    
    //reload the video
    document.getElementById(group+"Video").load();
}




