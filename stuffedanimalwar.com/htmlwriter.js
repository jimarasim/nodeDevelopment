/* jaemzware.org - 20150822 */


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

