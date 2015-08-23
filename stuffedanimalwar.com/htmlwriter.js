/* jaemzware.org - research project stuffed animal war - 20150822 */

//WRITEAUDIOPLAYER - this function writes the Stuffed Animal War style audio player to the page
function writeChat(){
    document.write("<table>");
        document.write("<tr>");
        document.write("<td>");
            document.write("<form action=\"\">");
                document.write("<input id=\"chatClientUser\" placeholder=\"alias\"/>");
                document.write("<input id=\"chatClientMessage\" size=\"35\" placeholder=\"message\" />");
                document.write("<select id=\"chatClientAutoResponder\" size=1 >");
                document.write("<option value=\"--autoresponse--\" selected>--autoresponse--</option>");
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
                document.write("<option value=\"linkisbusted\">that link is busted/option>");
                document.write("<option value=\"look it up\">look it up/option>");
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
        document.write("<tr>");
        document.write("<td><div id=\"messagesdiv\"></div></td>");
        document.write("</tr>");
    document.write("</table>");
}

//WRITEAUDIOPLAYER - this function writes the Stuffed Animal War style audio player to the page
function writeAudioPlayer(){
document.write("<table>");
    document.write("<tr>");
        document.write("<td>");
            document.write("<audio id=\"jaemzwaredynamicaudioplayer\" controls=\"\" preload=\"none\">");
                document.write("<source id=\"jaemzwaredynamicaudiosource\" src=\"http://jaemzware.com/analogarchive/analog/01%20Would_.mp3\" type=\"audio/mpeg\">");
                document.write("HTML5 Audio Tag support not available with your browser. For source type='audio/mpeg'");
            document.write("</audio>");
        document.write("</td>");
    document.write("</tr>");
    document.write("<tr>");
        document.write("<td>");
            document.write("<select id=\"selectsongs\">");
            writeAudioPlayerDropdownSongs();
            document.write("</select>");
        document.write("</td>");
    document.write("</tr>");
document.write("</table>");       
}

//WRITEAUDIOPLAYERDROPDOWNSONGS - this function wirites the song options for the Stuffed Animal War style audio player. 
//                                originally just called form writeAudioPlayer
function writeAudioPlayerDropdownSongs()
{
    document.write("<option selected value=\"http://analogarchive.com/analogarchive/analog/01%20Would_.mp3\">alice in chains - would</option>");
                document.write("<option value=\"http://analogarchive.com/analogarchive/analog/01%20-%20Corrosion%20of%20Conformity%20-%20Tell%20Me.mp3\">corrosion of conformity-tell me</option>");
                document.write("<option value=\"http://analogarchive.com/analogarchive/analog/01%20-%20Missing%20Pieces%20.mp3\">jack white-missing pieces</option>");
                document.write("<option value=\"http://analogarchive.com/analogarchive/analog/01%20Ghost%20Of%20Love.mp3\">david lynch-ghost of love</option>");
                document.write("<option value=\"http://analogarchive.com/analogarchive/analog/01%20Sabotage.mp3\">beastie boys - sabotage</option>");
                document.write("<option value=\"http://analogarchive.com/analogarchive/analog/01%20The%20Plan.mp3\">built to spill - the plan</option>");
                document.write("<option value=\"http://analogarchive.com/analogarchive/analog/01_meandyou.mp3\">egghunt - me and you</option>");
                document.write("<option value=\"http://analogarchive.com/analogarchive/analog/3-06%20Do%20You%20Fear%20For%20Your%20Child.mp3\">my life with the thrill kill cult - do you fear for your child</option>");
}

