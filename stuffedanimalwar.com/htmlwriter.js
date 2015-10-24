/* jaemzware.org - research project stuffed animal war - 20150822 */
var baseMediaPath = "http://analogarchive.com/live/";
//STUFFEDANIMALWAR
function writeStuffedAnimalWarTable(){
    document.write("<table style='"+"width:"+screen.width+"px;'>");
    writeStuffedAnimalWar();
    writeStuffedAnimalWarAnimalDropdown();
    document.write("</table>");
}   
function writeStuffedAnimalWar(){
    document.write("<tr>");
    document.write("<td>");
    document.write("<div id=\"stuffedanimalwardiv\" class=\"divstuffedanimalwaronly\">");
    document.write("<svg id=\"stuffedanimalwarsvg\" class=\"svgstuffedanimalwar\">");
    document.write("<rect id=\"stuffedanimalwarsvgrect\" x=\"0\" y=\"0\" width=\"10\" height=\"10\" style=\"fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)\" />");
    document.write("</svg>"); 
    document.write("</div>");
    document.write("</td>");
    document.write("</tr>");
}
function writeStuffedAnimalWarAnimalDropdown(){
    document.write("<tr>");
    document.write("<td>");
    document.write("<form>");
    document.write("<select id=\"animals\" name=\"sawstyle\" size=1 >");
    document.write("<option value=\"dots\" selected>Dots</option>");
    document.write("<option value=\"lines\">Lines</option>");
    document.write("<option value=\"cats\">Cats</option>");
    document.write("<option value=\"dogs\">Dogs</option>");
    document.write("<option value=\"lions\">Lions</option>");
    document.write("<option value=\"crocodiles\">Crocodiles</option>");
    document.write("<option value=\"birds\">Birds</option>");
    document.write("<option value=\"lamblambs\">Lamb</option>");
    document.write("<option value=\"chickens\">Chickens</option>");
    document.write("<option value=\"custom\">CUSTOM URL</option>");    
    document.write("</select>");
    document.write("<input id=\"imagepathtextbox\" size=\"35\" placeholder=\"CUSTOM URL\" />");
    document.write("<select id=\"movement\" name=\"sawmove\" size=1 >");
    document.write("<option value=\"UP\" selected>UP</option>");
    document.write("<option value=\"DOWN\">DOWN</option>");
    document.write("</select>");
    document.write("</form>"); 
    document.write("</td>");
    document.write("</tr>");
}
function writeStuffedAnimalWarAnimalUpAndDownButtons(){
    document.write("<tr>");
    document.write("<td>");
    document.write("<form>");
    document.write("<select id=\"animals\" name=\"sawstyle\" size=1 >");
    document.write("<option value=\"dots\" selected>Dots</option>");
    document.write("<option value=\"lines\">Lines</option>");
    document.write("<option value=\"cats\">Cats</option>");
    document.write("<option value=\"dogs\">Dogs</option>");
    document.write("<option value=\"lions\">Lions</option>");
    document.write("<option value=\"crocodiles\">Crocodiles</option>");
    document.write("<option value=\"birds\">Birds</option>");
    document.write("<option value=\"lamblambs\">Lamb</option>");
    document.write("<option value=\"chickens\">Chickens</option>");
    document.write("<option value=\"custom\">CUSTOM URL</option>");    
    document.write("</select>");
    document.write("<input id=\"imagepathtextbox\" size=\"35\" placeholder=\"CUSTOM URL\" />");
    document.write("<select id=\"movement\" name=\"sawmove\" size=1 >");
    document.write("<option value=\"UP\" selected>UP</option>");
    document.write("<option value=\"DOWN\">DOWN</option>");
    document.write("</select>");
    document.write("</form>"); 
    document.write("</td>");
    document.write("</tr>");
}
function writeAudioPlayerFromJson(mediaObject){
    document.write("<table style='"+"width:"+screen.width+"px;'>");
    //paint the audio player
    document.write("<tr>");
    document.write("<td>");
    document.write("<audio id=\"jaemzwaredynamicaudioplayer\" controls=\"\" preload=\"none\">");
    document.write("<source id=\"jaemzwaredynamicaudiosource\" src=\""+mediaObject.songspath+mediaObject.songs[0].file+"\" type=\"audio/mpeg\">");
    document.write("HTML5 Audio Tag support not available with your browser. For source type='audio/mpeg'");
    document.write("</audio>");
    document.write("</td>");
    document.write("</tr>");
    //paint the song selection dropdown 
    document.write("<tr>");
    document.write("<td>");
    document.write("<select id=\"selectsongs\">");
    //paint song selection dropdown options (songs)
    for (var i=0;i<mediaObject.songs.length;i++){
        document.write("<option value=\""+mediaObject.songspath+mediaObject.songs[i].file+"\">"+mediaObject.songs[i].title+"</option>");
    }
    document.write("</select>");
    document.write("</td>");
    document.write("</tr>");
    document.write("</table>");  
    document.write("<table style='"+"width:"+screen.width+"px;'>");
    writeDefaultAutoResponderOptions();
    writeChatMessagesDiv();
    document.write("</table>");  
    //paint the photos
    document.write("<table style='"+"width:"+screen.width+"px;'>");
    for (var i=0;i<mediaObject.photos.length;i++){
        document.write("<tr>");
        document.write("<td>");
        document.write(mediaObject.photos[i].title);
        document.write("</td>");
        document.write("</tr>");
        document.write("<tr>");
        document.write("<td>");
        document.write("<img src=\""+mediaObject.photospath+mediaObject.photos[i].file+"\" alt=\""+mediaObject.photos[i].title+"\" />");
        document.write("</td>");
        document.write("</tr>");
    }
    document.write("</table>");   
    //paint links to the songs
    document.write("<table style='"+"width:"+screen.width+"px;'>");
    document.write("<tr><th>Download</th></tr>");
    for (var i=0;i<mediaObject.songs.length;i++){
        document.write("<tr>");
        document.write("<td>");
        document.write("<a class=\"jaemzwarelogo\" href=\""+mediaObject.songspath+mediaObject.songs[i].file+"\" download>"+mediaObject.songs[i].title+"</a>");
        document.write("</td>");
        document.write("</tr>");
    }
    document.write("</table>");  
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
//VIDEO 
function writeVideoPlayer(){
    document.write("<table style='"+"width:"+screen.width+"px;'>");
    writeVideoPlayer();
    writeDefaultVideoPlayerOptions();
    document.write("</table>");
}
function writeVideoPlayerWithChat(){
    document.write("<table style='"+"width:"+screen.width+"px;'>");
    writeVideoPlayer();
    writeDefaultVideoPlayerOptions();
    writeDefaultAutoResponderOptions();
    writeChatMessagesDiv();
    document.write("</table>");
}
function writeVideoPlayer(){
    document.write("<tr>");
    document.write("<td>");
    document.write("<video id=\"jaemzwaredynamicvideoplayer\" poster=\"http://seattlerules.com/media/cat.jpg\" width=\"640\" height=\"480\" controls=\"controls\" preload=\"metadata\" title=\"jaemzwareTV\">");
    document.write(" browser doesn't support mp4 video. use chrome.");
    document.write("<source src=\"https://seattlerules.com/media/marginal/jim-marginal-overthelight-march2015.mp4\" type=\"video/mp4\" id=\"jaemzwaredynamicvideosource\">");
    document.write("</video>");
    document.write("</td>");
    document.write("</tr>");
}
function writeDefaultVideoPlayerOptions(){
    document.write("<tr>");
    document.write("<td>");
    document.write("<select id=\"selectvideos\">");
    document.write("<option value=\"http://seattlerules.com/media/marginal/jim-marginal-overthelight-march2015.mp4\" selected>Sk8creteordie over the light at Marginal</option>");
    document.write("<option value=\"http://seattlerules.com/media/wxpfl/IMG_0098.mp4\">01 WXPFL</option>");
    document.write("<option value=\"http://seattlerules.com/media/wxpfl/IMG_0101.mp4\">02 WXPFL</option>");
    document.write("<option value=\"http://seattlerules.com/media/wxpfl/IMG_0103.mp4\">03 WXPFL</option>");
    document.write("<option value=\"http://seattlerules.com/media/wxpfl/IMG_0106.mp4\">04 WXPFL</option>");
    document.write("<option value=\"http://seattlerules.com/media/wxpfl/IMG_0109.mp4\">05 WXPFL</option>");
    document.write("<option value=\"http://seattlerules.com/media/wxpfl/IMG_0113.mp4\">01 WXPFL</option>");
    document.write("<option value=\"http://seattlerules.com/media/wxpfl/IMG_0116.mp4\">02 WXPFL</option>");
    document.write("<option value=\"http://seattlerules.com/media/wxpfl/IMG_0117.mp4\">03 WXPFL</option>");
    document.write("<option value=\"http://seattlerules.com/media/wxpfl/IMG_0119.mp4\">04 WXPFL</option>");
    document.write("<option value=\"http://seattlerules.com/media/wxpfl/IMG_0120.mp4\">05 WXPFL</option>");
    document.write("<option value=\"http://seattlerules.com/media/wxpfl/IMG_0127.mp4\">06 WXPFL</option>");
    document.write("<option value=\"http://seattlerules.com/media/wxpfl/wxpfl-greenwood-201411.mp4\">07 WXPFL</option>");
    document.write("<option value=\"http://seattlerules.com/media/kaylacheering/kayla_cheerleading_20150215.mp4\">01 Kayla Cheering</option>");
    document.write("<option value=\"http://seattlerules.com/media/kaylacheering/kayla_cheerleading_20150215b.mp4\"> 02Kayla Cheering</option>");
    document.write("<option value=\"http://seattlerules.com/cellphoto/cellphoto/sk8crete201408131923451.mp4\">01 Sk8creteordie cellphoto</option>");
    document.write("<option value=\"http://seattlerules.com/cellphoto/cellphoto/sk8crete201408131950341.mp4\">02 Sk8creteordie cellphoto</option>");
    document.write("<option value=\"http://seattlerules.com/cellphoto/cellphoto/sk8crete201408131952541.mp4\">03 Sk8creteordie cellphoto</option>");
    document.write("<option value=\"http://seattlerules.com/cellphoto/cellphoto/sk8crete201408131956261.mp4\">04 Sk8creteordie cellphoto</option>");
    document.write("<option value=\"http://seattlerules.com/cellphoto/cellphoto/sk8crete201408132002401.mp4\">05 Sk8creteordie cellphoto</option>");
    document.write("<option value=\"http://seattlerules.com/cellphoto/cellphoto/sk8crete201408132012071.mp4\">06  Sk8creteordie cellphoto</option>");
    document.write("<option value=\"http://seattlerules.com/cellphoto/cellphoto/sk8crete201408142156021.mp4\">07 Sk8creteordie cellphoto</option>");
    document.write("</select>");
    document.write("</td>");
    document.write("</tr>");
}





