/* 
    Author     : jaemzware.org james arasim
*/

/* PAGE HAS FINISHED LOADING, SETUP PAGE EVENTS */
document.addEventListener('DOMContentLoaded', function () {
    SetupEvents();
});


//1. PRECEDE GROUPE NAME WITH "jaemzwarevid"
//2. ADD ARRAY ASSIGNMENT FOR GROUP NAME e.g. jaemzwarevideojimroxhill20150802 TO ELSE IF BELOW
var jaemzwarevideomarginalbenefit20140913 = [
                    
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0001-marginalbenefit-2bit20140913","marginal 01"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0002-marginalbenefit-2bit20140913","marginal 02"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0003-marginalbenefit-2bit20140913","marginal 03"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0004-marginalbenefit-2bit20140913","marginal 04"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0005-marginalbenefit-2bit20140913","marginal 05"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0006-marginalbenefit-2bit20140913","marginal 06"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0007-marginalbenefit-2bit20140913","marginal 07"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0008-marginalbenefit-2bit20140913","marginal 08"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0009-marginalbenefit-2bit20140913","marginal 09"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0010-marginalbenefit-2bit20140913","marginal 10"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0011-marginalbenefit-2bit20140913","marginal 11"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0012-marginalbenefit-2bit20140913","marginal 12"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0013-marginalbenefit-2bit20140913","marginal 13"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0014-marginalbenefit-2bit20140913","marginal 14"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0015-marginalbenefit-2bit20140913","marginal 15"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0016-marginalbenefit-2bit20140913","marginal 16"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0016-marginalbenefit-2bit20140913","marginal 17"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0017-marginalbenefit-2bit20140913","marginal 18"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0018-marginalbenefit-2bit20140913","marginal 19"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0019-marginalbenefit-2bit20140913","marginal 20"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0020-marginalbenefit-2bit20140913","marginal 21"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0021-marginalbenefit-2bit20140913","marginal 22"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0022-marginalbenefit-2bit20140913","marginal 23"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0023-marginalbenefit-2bit20140913","marginal 24"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0024-marginalbenefit-2bit20140913","marginal 25"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0025-marginalbenefit-2bit20140913","marginal 26"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0026-marginalbenefit-2bit20140913","marginal 27"],
                        ["https://blackmarketskates.seattlerules.com/theshop/media/marginalbenefit20140913/ZOOM0027-marginalbenefit-2bit20140913","marginal 28"]
];
var jaemzwarevideoadam20150207 = [
                    ["https://blackmarketskates.com/media/marginaladam/IMG_0682","Adam Marginal rocking"],
                    ["https://blackmarketskates.com/media/marginaladam/IMG_0684","Adam Marginal cradle"],
                    ["https://blackmarketskates.com/media/marginaladam/IMG_0686","Adam Marginal lipping"],
                    ["https://blackmarketskates.com/media/marginaladam/IMG_0688","Adam Marginal sliding"]
                    ];

var jaemzwarevideojimroxhill20150802 = [
                    ["http://www.helena.seattlerules.com/media/jim/IMG_3263","Jim Roxhill Rox bank and bank hip"],
                    ["http://www.helena.seattlerules.com/media/jim/IMG_3264","Jim Roxhill Rox bank and step-up"],
                    ["http://www.helena.seattlerules.com/media/jim/IMG_3272","Jim Roxhill small backside ollie line"],
                    ["http://www.helena.seattlerules.com/media/jim/IMG_3273","Jim Roxhill board slide"]
                    ];
                    

                    


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
        if(multiGroup[i]===             "jaemzwarevideojimroxhill20150802"){
            filePathsNoExtensionArray = jaemzwarevideojimroxhill20150802;
        }
        else if(multiGroup[i]===        "jaemzwarevideoadam20150207"){
            filePathsNoExtensionArray = jaemzwarevideoadam20150207;
        }
        else if(multiGroup[i]===        "jaemzwarevideomarginalbenefit20140913"){
            filePathsNoExtensionArray = jaemzwarevideomarginalbenefit20140913;
        }
        else{
            console.error("UNEXPECTED JAEMZWAREVIDEOGROUP PRE-BUILT VIDEO ARRAY:"+multiGroup[i]);
            break;
        }
        
        //write the video player
        $("#"+multiGroup[i]).after("<video style='width: 100%;' controls='controls' preload='metadata' poster='"+filePathsNoExtensionArray[0][0]+".png' title='"+filePathsNoExtensionArray[0][1]+"' id='"+multiGroup[i]+"Video'>browser doesn't support video</video>");

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

/**
 * This function changes the video loaded in the video player for video pages
 * @param {type} basepath - if empty, assumes the whole path is specified
 * @param {type} png - full path to the png image
 * @param {type} mp4 - full path to the mp4 file
 * @param {type} ogv - full path to the ogv file
 * @param {type} group - group of videos / images (array) to change. need to put this in the id
 * of the video images and video, so there could be more than one on a page
 * @returns {undefined}
 */
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




