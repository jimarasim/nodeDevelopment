/* put in themes js folder */
document.addEventListener('DOMContentLoaded', function () {
    SetupEvents();
});


function SetupEvents(){
    //NEW JQUERY - MULTIPLE VIDEOS
    //if there are jaemzware-video ids
    if($('span[id*="jaemzwarevideo"]').length>0){
        //get all the video ids
        var multiGroup=[];
        $('span[id*="jaemzwarevideo"]').each(function(index, element){
                                               multiGroup[index]=$(element).attr('id');
                                               });
        MultiVideoJquery(multiGroup);
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////CURRENT JQUERY WAY, PRECEDE GROUPE NAME WITH "jaemzwarevid
//ADD ARRAY ASSIGNMENT TO ELSE IF BELOW
//MEDIA URL[0]  (REQUIRED: MP4, OGV*, PNG), TITLE[1]
//*removed for this implementation
var jaemzwarevideotennis20150212 = [
                                    ["https://blackmarketskates.com/media/tenniscourts/tompeha-tenniscourts-20150212","Tom Peha"],
                                    ["https://blackmarketskates.com/media/tenniscourts/jimarasim-tenniscourts-20150212","Jim"],
                                    ["https://blackmarketskates.com/media/tenniscourts/jimarasim-tenniscourts-20150212b","Jim"],
                                    ["https://blackmarketskates.com/media/tenniscourts/brent-tenniscourts-20150212","Brent"],
                                    ["https://blackmarketskates.com/media/tenniscourts/brent-tenniscourts-20150212b","Brent"],
                                    ["https://blackmarketskates.com/media/tenniscourts/brent-tenniscourts-20150212c","Brent Slo Mo"]
                                    ];

var jaemzwarevideomarginalAnt20150203 = [["https://blackmarketskates.com/media/marginalant/ant_marginal","Ant hip"]];

var jaemzwarevideoadam20150207 = [
                    ["https://blackmarketskates.com/media/marginaladam/IMG_0682","Adam Ruthless rocking"],
                    ["https://blackmarketskates.com/media/marginaladam/IMG_0684","Adam Ruthless cradle"],
                    ["https://blackmarketskates.com/media/marginaladam/IMG_0686","Adam Ruthless lipping"],
                    ["https://blackmarketskates.com/media/marginaladam/IMG_0688","Adam Ruthless sliding"]
                    ];

var jaemzwarevideolordsofseatown20140914 = [
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0320-lordsofseatown2014","Lords of Seatown 01"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0321-lordsofseatown2014","Lords of Seatown 02"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0322-lordsofseatown2014","Lords of Seatown 03"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0323-lordsofseatown2014","Lords of Seatown 04"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0324-lordsofseatown2014","Lords of Seatown 05"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0326-lordsofseatown2014","Lords of Seatown 06"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0327-lordsofseatown2014","Lords of Seatown 07"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0328-lordsofseatown2014","Lords of Seatown 08"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0330-lordsofseatown2014","Lords of Seatown 09"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0331-lordsofseatown2014","Lords of Seatown 10"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0332-lordsofseatown2014","Lords of Seatown 12"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0333-lordsofseatown2014","Lords of Seatown 13"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0335-lordsofseatown2014","Lords of Seatown 14"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0337-lordsofseatown2014","Lords of Seatown 15"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0339-lordsofseatown2014","Lords of Seatown 16"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0340-lordsofseatown2014","Lords of Seatown 17"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0342-lordsofseatown2014","Lords of Seatown 18"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0344-lordsofseatown2014","Lords of Seatown 19"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0347-lordsofseatown2014","Lords of Seatown 20"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0349-lordsofseatown2014","Lords of Seatown 21"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0350-lordsofseatown2014","Lords of Seatown 22"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0351-lordsofseatown2014","Lords of Seatown 23"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0353-lordsofseatown2014","Lords of Seatown 24"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0354-lordsofseatown2014","Lords of Seatown 25"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0355-lordsofseatown2014","Lords of Seatown 26"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0356-lordsofseatown2014","Lords of Seatown 27"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0357-lordsofseatown2014","Lords of Seatown 28"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0358-lordsofseatown2014","Lords of Seatown 29"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0359-lordsofseatown2014","Lords of Seatown 30"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0360-lordsofseatown2014","Lords of Seatown 31"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0362-lordsofseatown2014","Lords of Seatown 32"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0363-lordsofseatown2014","Lords of Seatown 33"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0364-lordsofseatown2014","Lords of Seatown 34"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0366-lordsofseatown2014","Lords of Seatown 35"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0368-lordsofseatown2014","Lords of Seatown 36"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0369-lordsofseatown2014","Lords of Seatown 37"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0370-lordsofseatown2014","Lords of Seatown 38"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0371-lordsofseatown2014","Lords of Seatown 39"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0373-lordsofseatown2014","Lords of Seatown 40"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0375-lordsofseatown2014","Lords of Seatown 41"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0377-lordsofseatown2014","Lords of Seatown 42"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0378-lordsofseatown2014","Lords of Seatown 43"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0379-lordsofseatown2014","Lords of Seatown 44"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0380-lordsofseatown2014","Lords of Seatown 45"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0381-lordsofseatown2014","Lords of Seatown 46"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0382-lordsofseatown2014","Lords of Seatown 47"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0384-lordsofseatown2014","Lords of Seatown 48"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0385-lordsofseatown2014","Lords of Seatown 49"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0387-lordsofseatown2014","Lords of Seatown 50"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0390-lordsofseatown2014","Lords of Seatown 51"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0391-lordsofseatown2014","Lords of Seatown 52"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0392-lordsofseatown2014","Lords of Seatown 53"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0393-lordsofseatown2014","Lords of Seatown 54"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0396-lordsofseatown2014","Lords of Seatown 55"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0397-lordsofseatown2014","Lords of Seatown 56"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0402-lordsofseatown2014","Lords of Seatown 57"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0403-lordsofseatown2014","Lords of Seatown 58"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0404-lordsofseatown2014","Lords of Seatown 59"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0406-lordsofseatown2014","Lords of Seatown 60"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0407-lordsofseatown2014","Lords of Seatown 61"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0408-lordsofseatown2014","Lords of Seatown 62"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0410-lordsofseatown2014","Lords of Seatown 63"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0411-lordsofseatown2014","Lords of Seatown 64"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0412-lordsofseatown2014","Lords of Seatown 65"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0413-lordsofseatown2014","Lords of Seatown 66"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0414-lordsofseatown2014","Lords of Seatown 67"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0421-lordsofseatown2014","Lords of Seatown 68"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0422-lordsofseatown2014","Lords of Seatown 69"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0423-lordsofseatown2014","Lords of Seatown 70"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0424-lordsofseatown2014","Lords of Seatown 71"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0427-lordsofseatown2014","Lords of Seatown 72"],
                              ["https://blackmarketskates.seattlerules.com/theshop/media/lordsofseatown20140914/IMG_0428-lordsofseatown2014","Lords of Seatown 73"]
                              ];

/**
 * This function is for testing if an include worked in wordpress
 * @returns {undefined}T
 */
function TestAlert()
{
    alert("testing");
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
//    var ogvpath = basepath===""?ogv:basepath + ogv;
    
    //set elements of the video
    document.getElementById(group+"videopng").setAttribute("poster",pngpath);
    document.getElementById(group+"videomp4").setAttribute("src",mp4path);
//    document.getElementById(group+"videoogv").setAttribute("src",ogvpath);
    
    //set element of the video title
    document.getElementById(group+"videoTitle").innerHTML=fileNameOnly;
    
    //reload the video
    document.getElementById(group+"videopng").load();
}
/**
 * This function writes the video player and individual videos, 
 * because the word press editor tends to kill them
 * It assumes there is a png, 
 * @param {type} group - group is used to distinguish video elements, in case there are two of these videos on the same page
 * @returns {undefined}
 */
function WriteVideoPlayer(group)
{
    //path to the required mp4, ogv, and png files, assuming the prefix for all of them are the same, without the .mp4, .ogv, or .png
    var filePathsNoExtension;
    
    
    //get the group of files to write
    switch (group)
    {
        case "marginalbenefit20140913":
            filePathsNoExtension = marginalbenefit20140913;
            break;
        case "lordsofseatown20140914":
            filePathsNoExtension = lordsofseatown20140914;
            break;
        case "marginalAnt20150203":
            filePathsNoExtension = marginalAnt20150203;
            break;
        
        default:
            return;
    }
    
    document.write("<br />");
    //write out the video player 
    if(filePathsNoExtension.length>0)
    {

        document.write("<video width='640' height=480' controls='controls' preload='metadata' ");
        document.write("poster='"+filePathsNoExtension[0]+".png' ");
        document.write("title='"+filePathsNoExtension[0]+"'");
        document.write("id='"+group+"videopng'>");
        document.write("<source src='"+filePathsNoExtension[0]+".mp4' type='video/mp4' id='"+group+"videomp4'/>");
//        document.write("<source src='"+filePathsNoExtension[0]+".ogv' type='video/ogg' id='"+group+"videoogv'/>");
        document.write("whats wrong with your browser? out of date? It won't show mp4 nor ogv videos in an html5 video player.");
        document.write("</video>");
        
        document.write("<span id='"+group+"videoTitle'></span>");
        
        document.write("<br />");
        
        //write out the videos
        document.write("<div class='videostrip'>");
        document.write("<table><tbody><tr>");
        for (var i=0;i<filePathsNoExtension.length;i++)
        {
            var fileNameOnly = filePathsNoExtension[i].substr(filePathsNoExtension[i].lastIndexOf("/"));
            document.write("<td>");
            document.write("<img class='videolink' ");
            document.write("src='"+filePathsNoExtension[i]+".png' ");
            document.write("onclick='ChangeVideo(\"\",\""+filePathsNoExtension[i]+".png\",\""+filePathsNoExtension[i]+".mp4\",\""+filePathsNoExtension[i]+".ogv\",\""+group+"\",\""+fileNameOnly+"\")' ");
            document.write("title='"+fileNameOnly+"' ");
            document.write("alt='"+group+"' ");
            document.write("/>");
            document.write("</td>");
        }
        document.write("</tr></tbody></table></div><br />");
    }
}

/* this function writes the video player and individual videos from jquery */
function MultiVideoJquery(multiGroup){
    
    console.log("MULTI GROUP LENGTH:"+multiGroup.length);
    
    //write out all the ids found
    for(i=0;i<multiGroup.length;i++){
        
        
        console.log('WRITING VIDEO PLAYER FOR GROUP:'+multiGroup[i]);
        
        
        if(multiGroup[i]==="jaemzwarevideotennis20150212"){
            filePathsNoExtensionArray = jaemzwarevideotennis20150212;
        }
        else if(multiGroup[i]==="jaemzwarevideomarginalAnt20150203"){
            filePathsNoExtensionArray = jaemzwarevideomarginalAnt20150203;
        }
        else if(multiGroup[i]==="jaemzwarevideoadam20150207"){
            filePathsNoExtensionArray = jaemzwarevideoadam20150207;
        }
        else if(multiGroup[i]==="jaemzwarevideolordsofseatown20140914"){
            filePathsNoExtensionArray = jaemzwarevideolordsofseatown20140914;
        }
        else{
            console.log("error: unexpected group");
            
        }
        
        
        console.log("NUMBER OF VIDEOS:"+filePathsNoExtensionArray.length);
        
        
        //write out the video player
        if(filePathsNoExtensionArray.length>0)
        {
            //write the video player
            $("#"+multiGroup[i]).after("<video style='width: 100%;' controls='controls' preload='metadata' poster='"+filePathsNoExtensionArray[0][0]+".png' title='"+filePathsNoExtensionArray[0][1]+"' id='"+multiGroup[i]+"Video'>browser doesn't support video</video>");
            
            
            console.log('CHECK VIDEO PLAYER');
            
            
            //add the different file format clips
            $("#"+multiGroup[i]+"Video").append("<source src='"+filePathsNoExtensionArray[0][0]+".mp4' type='video/mp4' id='"+multiGroup[i]+"Videomp4'/>");
            $("#"+multiGroup[i]+"Video").append("<source src='"+filePathsNoExtensionArray[0][0]+".ogv' type='video/ogg' id='"+multiGroup[i]+"Videoogv'/>");
            

            console.log('CHECK VIDEO PLAYER SOURCE ELEMENTS');
            
            
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
                                                       onclick='MultiVideoJqueryChanger(\""+filePathsNoExtensionArray[0][0]+".png\",\""+
                                                       filePathsNoExtensionArray[0][0]+".mp4\",\""+
                                                       filePathsNoExtensionArray[0][0]+".ogv\",\""+
                                                       multiGroup[i]+"\",\""+
                                                       filePathsNoExtensionArray[0][1]+"\")' \
                                                       />");
            
            
            console.log('CHECK STRIP WITH ONE VIDEO');
            
            
            //WRITE OUT THE REST OF THE VIDEOS
            for (var j=1;j<filePathsNoExtensionArray.length;j++)
            {
                $("#"+multiGroup[i]+"VideoStripTR").append("<td id='"+multiGroup[i]+"VideoStripTD"+j+"'></td>");
                $("#"+multiGroup[i]+"VideoStripTD"+j).append("<img class='videolink' id='"+multiGroup[i]+"VideoStripIMG"+j+"' \
                                                           title='"+filePathsNoExtensionArray[j][1]+"' \
                                                           alt='"+filePathsNoExtensionArray[j][1]+"' \
                                                           src='"+filePathsNoExtensionArray[j][0]+".png' \
                                                           onclick='MultiVideoJqueryChanger(\""+filePathsNoExtensionArray[j][0]+".png\",\""+filePathsNoExtensionArray[j][0]+".mp4\",\""+filePathsNoExtensionArray[j][0]+".ogv\",\""+multiGroup[i]+"\",\""+filePathsNoExtensionArray[j][1]+"\")' \
                                                           />");
                
            }
            
            console.log('CHECK STRIP WITH ALL VIDEOS');
            
            
        }
        else{
            $("#"+multiGroup[i]).text("unexpected no filePathsNoExtensionArray, or no entries:"+filePathsNoExtensionArray);
        }
        
    }
}

/**
     * This function changes the video loaded in the video player for video pages

     * @param {type} png - full path to the png image
     * @param {type} mp4 - full path to the mp4 file
     * @param {type} ogv - full path to the ogv file
     group
     fileNameOnly
     title
     * of the video images and video, so there could be more than one on a page
     * @returns {undefined}
*/
//function ChangeVideoJQuery(png,mp4,ogv,group,title)
//{
//        //set elements of the video
//        document.getElementById(group+"-video").setAttribute("poster",png);
//        document.getElementById(group+"-videomp4").setAttribute("src",mp4);
////        document.getElementById(group+"-videoogv").setAttribute("src",ogv);
//        
//        //set element of the video title
//        document.getElementById(group+"-videoTitle").innerHTML=title;
//        
//        //reload the video
//        document.getElementById(group+"-video").load();
//}





/**
 * This function changes the video loaded in the video player for video pages
 
 * @param {type} png - full path to the png image
 * @param {type} mp4 - full path to the mp4 file
 * @param {type} ogv - full path to the ogv file
 group
 fileNameOnly
 title
 * of the video images and video, so there could be more than one on a page
 * @returns {undefined}
 */
function MultiVideoJqueryChanger(png,mp4,ogv,group,title)
{
    //set elements of the video
    document.getElementById(group+"Video").setAttribute("poster",png);
    document.getElementById(group+"Video").setAttribute("title",title);
    document.getElementById(group+"Videomp4").setAttribute("src",mp4);
//    document.getElementById(group+"Videoogv").setAttribute("src",ogv);
    
    //set element of the video title
    document.getElementById(group+"VideoTitle").innerHTML=title;
    
    //reload the video
    document.getElementById(group+"Video").load();
}




