/* jaemzware.org - research project stuffed animal war - 20150822 */
//STUFFEDANIMALWAR
function writeStuffedAnimalWar(){
    writeStuffedAnimalWarDiv();
    document.write("<hr />");
    writeStuffedAnimalWarForm();
    document.write("<hr />");
}  
function writeStuffedAnimalWarDiv(){
    document.write("<div id=\"stuffedanimalwardiv\">");
    document.write("<svg id=\"stuffedanimalwarsvg\">");
    document.write("<rect id=\"stuffedanimalwarsvgrect\" x=\"0\" y=\"0\" width=\"1\" height=\"1\" style=\"fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)\" />");
    document.write("</svg>"); 
    document.write("</div>");
}
function writeStuffedAnimalWarForm(){
    document.write("<form>");
    document.write("<select id=\"animals\" name=\"sawstyle\" size=10 >");
    document.write("<option value=\"dots\" selected>Bullets</option>");
    document.write("<option value=\"line01\">Line 01</option>");
    document.write("<option value=\"line02\">Line 02</option>");
    document.write("<option value=\"birds\">Bird</option>");
    document.write("<option value=\"cats\">Cat</option>");
    document.write("<option value=\"chickens\">Chicken</option>");
    document.write("<option value=\"crocodiles\">Crocodile</option>");
    document.write("<option value=\"dogs\">Dogs</option>");
    document.write("<option value=\"lamblambs\">Lamb</option>");
    document.write("<option value=\"lions\">Lions</option>");
    document.write("<option value=\"custom\">CUSTOM URL (paste link in adjacent textbox</option>");    

    document.write("</select>");
    document.write("<input id=\"imagepathtextbox\" size=\"35\" placeholder=\"CUSTOM URL\" />");
    document.write("<select id=\"movement\" name=\"sawmove\" size=1 >");
    document.write("<option value=\"UP\" selected>UP</option>");
    document.write("<option value=\"DOWN\">DOWN</option>");
    document.write("<option value=\"LEFT\">LEFT</option>");
    document.write("<option value=\"RIGHT\">RIGHT</option>");

    document.write("</select>");
    document.write("</form>"); 
}
//AUDIO VIDEO PHOTOS
function writeMediaFromJson(mediaObject){
    if(mediaObject.videospath && mediaObject.videos[0]){
        document.write("<table style='"+"width:"+screen.width+"px;'>");
        document.write("<tr>");
        document.write("<td>");
        if(mediaObject.photos[0]){
            document.write("<video id=\"jaemzwaredynamicvideoplayer\" poster=\""+mediaObject.photospath+mediaObject.photos[0].file+"\" width=\"640\" height=\"480\" controls=\"controls\" preload=\"metadata\" title=\"jaemzwareTV\">");
        }
        else{
            document.write("<video id=\"jaemzwaredynamicvideoplayer\" poster=\"http://seattlerules.com/vinyl.jpeg\" width=\"640\" height=\"480\" controls=\"controls\" preload=\"metadata\" title=\"jaemzwareTV\">");
        }
        document.write(" browser doesn't support mp4 video. use chrome.");
        document.write("<source src=\""+mediaObject.videospath+mediaObject.videos[0].file+"\" type=\"video/mp4\" id=\"jaemzwaredynamicvideosource\">");
        document.write("</video>");
        document.write("</td>");
        document.write("</tr>");
        document.write("<tr>");
        document.write("<td>");
        document.write("<select id=\"selectvideos\">");
        for (var i=0;i<mediaObject.videos.length;i++){
            document.write("<option value=\""+mediaObject.videospath+mediaObject.videos[i].file+"\">"+mediaObject.videos[i].title+"</option>");
        }
        document.write("</select>");
        document.write("</td>");
        document.write("</tr>");
        document.write("</table>");  

    }

    if(mediaObject.songspath && mediaObject.songs[0]){
        document.write("<table class='audiotable' style='"+"width:"+screen.width+"px;'>");
        //paint the audio player
        document.write("<tr>");
        document.write("<td class='audioplayertd'>");
        document.write("<audio id=\"jaemzwaredynamicaudioplayer\" controls=\"\" preload=\"none\">");
        document.write("<source id=\"jaemzwaredynamicaudiosource\" src=\""+mediaObject.songspath+mediaObject.songs[0].file+"\" type=\"audio/mpeg\">");
        document.write("HTML5 Audio Tag support not available with your browser. For source type='audio/mpeg'");
        document.write("</audio>");
        document.write("</td>");
        document.write("</tr>");
        //paint the song selection dropdown 
        document.write("<tr>");
        document.write("<td class='audioplayertd'>");
        document.write("<select id=\"selectsongs\">");
        //paint song selection dropdown options (songs)
        for (var i=0;i<mediaObject.songs.length;i++){
            document.write("<option value=\""+mediaObject.songspath+mediaObject.songs[i].file+"\">"+mediaObject.songs[i].title+"</option>");
        }
        document.write("</select>");
        document.write("</td>");
        document.write("</tr>");
        document.write("</table>");  
        //paint links to the songs
        document.write("<table  class='audiotable' style='"+"width:"+screen.width+"px;'>");
        document.write("<tr><td>Download</td></tr>");
        for (var i=0;i<mediaObject.songs.length;i++){
            document.write("<tr>");
            document.write("<td class='audioplayertd'>");
            document.write("<a class=\"jaemzwarelogo\" href=\""+mediaObject.songspath+mediaObject.songs[i].file+"\" download>"+mediaObject.songs[i].title+"</a>");
            document.write("</td>");
            document.write("</tr>");
        }
        document.write("</table>");
    }
    
    if(mediaObject.photospath && mediaObject.photos[0]){
        //paint the photos
        document.write("<table  class='audiotable' style='"+"width:"+screen.width+"px;'>");
        for (var i=0;i<mediaObject.photos.length;i++){
            document.write("<tr>");
            document.write("<td class='audioplayertd'>");
            document.write(mediaObject.photos[i].title);
            document.write("</td>");
            document.write("</tr>");
            document.write("<tr>");
            document.write("<td class='audioplayertd'>");
            document.write("<img src=\""+mediaObject.photospath+mediaObject.photos[i].file+"\" alt=\""+mediaObject.photos[i].title+"\" />");
            document.write("</td>");
            document.write("</tr>");
        }
        document.write("</table>");   
    }
      
}
//CHAT
function writeChat(){
    document.write("<table style='"+"width:"+screen.width+"px;'>");
    writeDefaultAutoResponderOptions();
    writeChatMessagesDiv();
    document.write("</table>");
}
function writeDefaultAutoResponderOptions(){
    document.write("<tr>");
    document.write("<td>");
    document.write("<form class=\"autoresponderform\" action=\"\">");
    document.write("<input id=\"chatClientUser\" placeholder=\"your alias\"/>");
    document.write("<input id=\"chatClientMessage\" size=\"35\" placeholder=\"type message\" />");
    document.write("<select id=\"chatClientAutoResponder\" size=1 >");
    document.write("<option value=\"blank\" selected>--pick an autoresponse--</option>");
    document.write("<option value=\"wink\">;)</option>");
    document.write("<option value=\"smiley\">:)</option>");
    document.write("<option value=\"bigsmiley\">:D</option>");
    document.write("<option value=\"didyougoogle\">did you google that comeback?</option>");
    document.write("<option value=\"idk\">i dont know</option>");
    document.write("<option value=\"ikr\">i know right</option>");
    document.write("<option value=\"ilikeyou\">i like you</option>");
    document.write("<option value=\"iloveyou\">i love you</option>");
    document.write("<option value=\"ithinkyoure\">i think youre attractive</option>");
    document.write("<option value=\"holdmybeerwatchthis\">hold my beer, watch this</option>");
    document.write("<option value=\"idratherplaywithmycat\">id rather play with my cat</option>");
    document.write("<option value=\"ilikeyou\">i like you</option>");
    document.write("<option value=\"linkisbusted\">that link is busted</option>");
    document.write("<option value=\"look it up\">look it up</option>");
    document.write("<option value=\"lol\">LOL</option>");
    document.write("<option value=\"nice\">nice</option>");
    document.write("<option value=\"nuhuh\">Nuh UH!</option>");
    document.write("<option value=\"ok\">ok</option>");
    document.write("<option value=\"picsoritdidnthappen\">pics or it didnt happen</option>");
    document.write("<option value=\"sarcastic\">sarcastic clap</option>");
    document.write("<option value=\"silence\">silence for effect</option>");
    document.write("<option value=\"vague\">vague hipster comment</option>");
    document.write("<option value=\"witty\">witty comeback</option>");
    document.write("<option value=\"omg\">OMG</option>");
    document.write("<option value=\"picsoritdidnthappen\">pics or it didnt happen</option>");
    document.write("<option value=\"stfu\">STFU</option>");
    document.write("<option value=\"thatlinkisrad\">that link is rad</option>");
    document.write("<option value=\"thatscool\">thats cool</option>");
    document.write("<option value=\"thatsiteistooslow\">that site is too slow</option>");
    document.write("<option value=\"thatsucks\">that sucks</option>");
    document.write("<option value=\"thatscool\">thats cool</option>");
    document.write("<option value=\"thatswhatshesaid\">thats what she said</option>");
    document.write("<option value=\"whatever\">whatever</option>");
    document.write("<option value=\"youinspireme\">you inspire me</option>");
    document.write("<option value=\"youlookverynicetoday\">you look very nice today</option>");
    document.write("<option value=\"yourock\">you rock</option>");
    document.write("<option value=\"youropinioniswrong\">your opinion is wrong</option>");
    document.write("<option value=\"yousuck\">you suck</option>");
    document.write("<option value=\"youknowyourearealupperson\">youre a real UP person</option>");
    document.write("<option value=\"youremybestfriend\">youre my best friend</option>");
    document.write("<option value=\"youreworkingthatoutfitgirl\">youre working that outfit girl</option>");
    document.write("<option value=\"yourewrong\">youre wrong</option>");
    document.write("</select>");
    document.write("<button>SEND</button>");
    document.write("</form>");
    document.write("</td>");
    document.write("</tr>");

}
function writeChatMessagesDiv(){
    document.write("<tr>");
    document.write("<td>");
    document.write("<div id=\"messagesdiv\"></div>");
    document.write("</td>");
    document.write("</tr>");
}






