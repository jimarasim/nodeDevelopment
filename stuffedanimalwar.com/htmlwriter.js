/* jaemzware.org - research project stuffed animal war - 20150822 */
var baseMediaPath = "http://analogarchive.com/live/";

//STUFFEDANIMALWAR
function writeStuffedAnimalWarWithChat(){
    document.write("<table>");
    document.write("<tr>");
    document.write("<td>");
    writeStuffedAnimalWar();
    writeStuffedAnimalWarChoices();
    document.write("</td>");
    document.write("<td>");
    writeChatControls();
    writeChatMessagesDiv();
    document.write("</td>");
    document.write("</tr>");
    document.write("</table>");
}   
function writeStuffedAnimalWar(){
    document.write("<div id=\"stuffedanimalwardiv\" class=\"divstuffedanimalwaronly\">");
    document.write("<svg id=\"stuffedanimalwarsvg\" class=\"svgstuffedanimalwar\">");
    document.write("<rect id=\"stuffedanimalwarsvgrect\" x=\"0\" y=\"0\" width=\"3\" height=\"3\" style=\"fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)\" />");
    document.write("</svg>"); 
    document.write("</div>");
}
function writeStuffedAnimalWarChoices(){
    
    document.write("<form>");
    document.write("<input type=\"radio\" id=\"stuffedanimalwardots\" name=\"sawstyle\" value=\"dots\" checked >Dots");
    document.write("<input type=\"radio\" id=\"stuffedanimalwarlines\" name=\"sawstyle\" value=\"lines\" >Lines");
    document.write("<input type=\"radio\" id=\"stuffedanimalwarcats\" name=\"sawstyle\" value=\"cats\" >Cats");
    document.write("<input type=\"radio\" id=\"stuffedanimalwardogs\" name=\"sawstyle\" value=\"dogs\" >Dogs");
    document.write("<input type=\"radio\" id=\"stuffedanimalwarcustom\" name=\"sawstyle\" value=\"custom\" >Custom Image URL:");
    document.write("<input id=\"imagepathtextbox\" size=\"35\" placeholder=\"type message\" />");
    document.write("</form>"); 
}

//CHAT
function writeChat(){
    document.write("<table class='roxhillsession'>");
    document.write("<tr>");
    document.write("<td>");
    writeChatControls();
    document.write("</td>");
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>");
    writeChatMessagesDiv();
    document.write("</td>");
    document.write("</tr>");
    document.write("</table>");
}
function writeChatControls(){
    document.write("<form action=\"\">");
    document.write("<input id=\"chatClientUser\" placeholder=\"your alias\"/>");
    document.write("<input id=\"chatClientMessage\" size=\"35\" placeholder=\"type message\" />");
    document.write("<br />");
    document.write("<select id=\"chatClientAutoResponder\" size=1 >");
    writeDefaultAutoResponderOptions();
    document.write("</select>");
    document.write("<button>SEND</button>");
    document.write("</form>");
}
function writeDefaultAutoResponderOptions(){
    document.write("<option value=\"blank\" selected>--autoresponse--</option>");
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
}
function writeChatMessagesDiv(){
    document.write("<div id=\"messagesdiv\"></div>");
}

//AUDIO 
function writeAudioPlayer(){
document.write("<table>");
    document.write("<tr>");
        document.write("<td>");
            document.write("<audio id=\"jaemzwaredynamicaudioplayer\" controls=\"\" preload=\"none\" width=\"640\">");
                document.write("<source id=\"jaemzwaredynamicaudiosource\" src=\""+baseMediaPath+"ZOOM0001-SkerikTrio-OwlnThistle-20130227.mp3\" type=\"audio/mpeg\">");
                document.write("HTML5 Audio Tag support not available with your browser. For source type='audio/mpeg'");
            document.write("</audio>");
        document.write("</td>");
    document.write("</tr>");
    document.write("<tr>");
        document.write("<td>");
            document.write("<select id=\"selectsongs\">");
            writeDefaultAudioPlayerOptions();
            document.write("</select>");
        document.write("</td>");
    document.write("</tr>");
document.write("</table>");       
}
function writeDefaultAudioPlayerOptions()
{
    document.write("<option value=\""+baseMediaPath+"ZOOM0001-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-01</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0002-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-02</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0003-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-03</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0004-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-04</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0005-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-05</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0006-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-06</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0007-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-07</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0008-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-08</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0009-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-09</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0012-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-10</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0014-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-11</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0015-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-12</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0016-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-13</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0017-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-14</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0018-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-15</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0019-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-16</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0020-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-17</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0021-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-18</option>");
    document.write("<option value=\""+baseMediaPath+"skerik1-SkerikTrio-OwlnThistle-20130206.mp3\">skerik1-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\""+baseMediaPath+"skerik2-SkerikTrio-OwlnThistle-20130206.mp3\">skerik2-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\""+baseMediaPath+"skerik3-SkerikTrio-OwlnThistle-20130206.mp3\">skerik3-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\""+baseMediaPath+"skerik4-SkerikTrio-OwlnThistle-20130206.mp3\">skerik4-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\""+baseMediaPath+"skerik5-SkerikTrio-OwlnThistle-20130206.mp3\">skerik5-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\""+baseMediaPath+"skerik6-SkerikTrio-OwlnThistle-20130206.mp3\">skerik6-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\""+baseMediaPath+"skerik7-SkerikTrio-OwlnThistle-20130206.mp3\">skerik7-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\""+baseMediaPath+"skerik8-SkerikTrio-OwlnThistle-20130206.mp3\">skerik8-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\""+baseMediaPath+"skerik9-SkerikTrio-OwlnThistle-20130206.mp3\">skerik9-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\""+baseMediaPath+"skerik10-SkerikTrio-OwlnThistle-20130206.mp3\">skerik10-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\""+baseMediaPath+"skerik11-SkerikTrio-OwlnThistle-20130206.mp3\">skerik11-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\""+baseMediaPath+"skerik12-SkerikTrio-OwlnThistle-20130206.mp3\">skerik12-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\""+baseMediaPath+"skerik13-SkerikTrio-OwlnThistle-20130206.mp3\">skerik13-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\""+baseMediaPath+"skerik14-SkerikTrio-OwlnThistle-20130206.mp3\">skerik14-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\""+baseMediaPath+"skerik15-SkerikTrio-OwlnThistle-20130206.mp3\">skerik15-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0001-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0001-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0002-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0002-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0003-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0003-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0004-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0004-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0005-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0005-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0006-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0006-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0007-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0007-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0008-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0008-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0009-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0009-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0010-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0010-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0011-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0011-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0012-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0012-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0013-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0013-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0014-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0014-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0015-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0015-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0016-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0016-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0017-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0017-SkerikTrio-OwlnThistle-20130213</option>");
    }

function writeRoxhillAudioPlayer(){
    document.write("<table>");
    document.write("<tr>");
        document.write("<td>");
            document.write("<audio id=\"jaemzwaredynamicaudioplayer\" controls=\"\" preload=\"none\">");
                document.write("<source id=\"jaemzwaredynamicaudiosource\" src=\""+baseMediaPath+"ZOOM0003roxhillsessions20150827.mp3\" type=\"audio/mpeg\">");
                document.write("HTML5 Audio Tag support not available with your browser. For source type='audio/mpeg'");
            document.write("</audio>");
        document.write("</td>");
    document.write("</tr>");
    document.write("<tr>");
        document.write("<td>");
            document.write("<select id=\"selectsongs\">");
            writeRoxhillSessionsAudioPlayerOptions();
            document.write("</select>");
        document.write("</td>");
    document.write("</tr>");
    document.write("</table>"); 
}
function writeRoxhillSessionsAudioPlayerOptions(){
        document.write("<option value=\""+baseMediaPath+"ZOOM0003roxhillsessions20150827.mp3\" selected>03 Acting Like a Bee</option>");
        document.write("<option value=\""+baseMediaPath+"ZOOM0007roxhillsessions20150827.mp3\">07 Beau</option>");
        document.write("<option value=\""+baseMediaPath+"ZOOM0008roxhillsessions20150827.mp3\">08 Spicy Divine Intervention with Ex Stacy</option>");
        document.write("<option value=\""+baseMediaPath+"ZOOM0010roxhillsessions20150827.mp3\">10 Redbox</option>");
        document.write("<option value=\""+baseMediaPath+"ZOOM0011roxhillsessions20150827.mp3\">11 Uber Super</option>");
        document.write("<option value=\""+baseMediaPath+"ZOOM0012roxhillsessions20150827.mp3\">12 Jordan</option>");
        document.write("<option value=\""+baseMediaPath+"ZOOM0013roxhillsessions20150827.mp3\">13 Black Humor</option>");
        document.write("<option value=\""+baseMediaPath+"ZOOM0016roxhillsessions20150827.mp3\">16 Hungry as a Skeleton</option>");
        document.write("<option value=\""+baseMediaPath+"ZOOM0019roxhillsessions20150827.mp3\">19 Grabbed Their Pie</option>");
        document.write("<option value=\""+baseMediaPath+"ZOOM0020roxhillsessions20150827.mp3\">20 Take the Beat Back</option>");
        document.write("<option value=\""+baseMediaPath+"ZOOM0022roxhillsessions20150827.mp3\">22 Pot Farm</option>");
        document.write("<option value=\""+baseMediaPath+"ZOOM0023roxhillsessions20150827.mp3\">23 Grinch</option>");
        document.write("<option value=\""+baseMediaPath+"ZOOM0024roxhillsessions20150827.mp3\">24 Dont Speak Spanish</option>");
        document.write("<option value=\""+baseMediaPath+"ZOOM0025roxhillsessions20150827.mp3\">25 Get Up On Aurora</option>");
        document.write("<option value=\""+baseMediaPath+"ZOOM0027roxhillsessions20150827.mp3\">27 Too Murderous</option>");
        document.write("<option value=\""+baseMediaPath+"ZOOM0028roxhillsessions20150827.mp3\">28 Driving Your Mom's Car</option>");
        document.write("<option value=\""+baseMediaPath+"ZOOM0029roxhillsessions20150827.mp3\">29 Skate Beats</option>");
        document.write("<option value=\""+baseMediaPath+"ZOOM0033roxhillsessions20150827.mp3\">33 Pill Press</option>");
        document.write("<option value=\""+baseMediaPath+"ZOOM0035roxhillsessions20150827.mp3\">35 Pop You in the Brain</option>");
        document.write("<option value=\""+baseMediaPath+"ZOOM0037roxhillsessions20150827.mp3\">37 Laxative</option>");
}

function writeSufferingFuckheadsAudioPlayer(){
    document.write("<table>");
    document.write("<tr>");
        document.write("<td>");
            document.write("<audio id=\"jaemzwaredynamicaudioplayer\" controls=\"\" preload=\"none\">");
                document.write("<source id=\"jaemzwaredynamicaudiosource\" src=\""+baseMediaPath+"ZOOM0005-sufferingfuckheads-coppergate-20130205.mp3\" type=\"audio/mpeg\">");
                document.write("HTML5 Audio Tag support not available with your browser. For source type='audio/mpeg'");
            document.write("</audio>");
        document.write("</td>");
    document.write("</tr>");
    document.write("<tr>");
        document.write("<td>");
            document.write("<select id=\"selectsongs\">");
            writeSufferingFuckheadsAudioPlayerOptions();
            document.write("</select>");
        document.write("</td>");
    document.write("</tr>");
    document.write("</table>"); 
}
function writeSufferingFuckheadsAudioPlayerOptions(){
    document.write("<option value=\""+baseMediaPath+"ZOOM0005-sufferingfuckheads-coppergate-20130205.mp3\" selected>01 Suffering Fuckheads - Coppergate - February 5th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0008-sufferingfuckheads-coppergate-20130205.mp3\">02 Suffering Fuckheads - Coppergate - February 5th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0011-sufferingfuckheads-coppergate-20130205.mp3\">03 Suffering Fuckheads - Coppergate - February 5th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0013-sufferingfuckheads-coppergate-20130205.mp3\">04 Suffering Fuckheads - Coppergate - February 5th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0015-sufferingfuckheads-coppergate-20130205.mp3\">05 Suffering Fuckheads - Coppergate - February 5th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0018-sufferingfuckheads-coppergate-20130205.mp3\">06 Suffering Fuckheads - Coppergate - February 5th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0019-sufferingfuckheads-coppergate-20130205.mp3\">07 Suffering Fuckheads - Coppergate - February 5th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0021-sufferingfuckheads-coppergate-20130205.mp3\">08 Suffering Fuckheads - Coppergate - February 5th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0004-sufferingfuckheads-coppergate-20130212.mp3\">01 Suffering Fuckheads - Coppergate - February 12th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0005-sufferingfuckheads-coppergate-20130212.mp3\">02 Suffering Fuckheads - Coppergate - February 12th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0006-sufferingfuckheads-coppergate-20130212.mp3\">03 Suffering Fuckheads - Coppergate - February 12th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0012-sufferingfuckheads-coppergate-20130212.mp3\">04 Suffering Fuckheads - Coppergate - February 12th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0014-sufferingfuckheads-coppergate-20130212.mp3\">05 Suffering Fuckheads - Coppergate - February 12th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0015-sufferingfuckheads-coppergate-20130212.mp3\">06 Suffering Fuckheads - Coppergate - February 12th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0018-sufferingfuckheads-coppergate-20130212.mp3\">07 Suffering Fuckheads - Coppergate - February 12th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0020-sufferingfuckheads-coppergate-20130212.mp3\">08 Suffering Fuckheads - Coppergate - February 12th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0024-sufferingfuckheads-coppergate-20130212.mp3\">09 Suffering Fuckheads - Coppergate - February 12th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0025-sufferingfuckheads-coppergate-20130212.mp3\">10 Suffering Fuckheads - Coppergate - February 12th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0026-sufferingfuckheads-coppergate-20130212.mp3\">11 Suffering Fuckheads - Coppergate - February 12th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0001-sufferingfuckheads-coppergate-20130326.mp3\">01 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0002-sufferingfuckheads-coppergate-20130326.mp3\">02 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0003-sufferingfuckheads-coppergate-20130326.mp3\">03 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0004-sufferingfuckheads-coppergate-20130326.mp3\">04 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0005-sufferingfuckheads-coppergate-20130326.mp3\">05 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0006-sufferingfuckheads-coppergate-20130326.mp3\">06 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0007-sufferingfuckheads-coppergate-20130326.mp3\">07 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0008-sufferingfuckheads-coppergate-20130326.mp3\">08 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0009-sufferingfuckheads-coppergate-20130326.mp3\">09 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0010-sufferingfuckheads-coppergate-20130326.mp3\">10 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0011-sufferingfuckheads-coppergate-20130326.mp3\">11 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0012-sufferingfuckheads-coppergate-20130326.mp3\">12 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0013-sufferingfuckheads-coppergate-20130326.mp3\">13 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0014-sufferingfuckheads-coppergate-20130423.mp3\">01 Suffering Fuckheads - Coppergate - April 23rd, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0016-sufferingfuckheads-coppergate-20130423.mp3\">02 Suffering Fuckheads - Coppergate - April 23rd, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0019-sufferingfuckheads-coppergate-20130423.mp3\">03 Suffering Fuckheads - Coppergate - April 23rd, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0020-sufferingfuckheads-coppergate-20130423.mp3\">04 Suffering Fuckheads - Coppergate - April 23rd, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0022-sufferingfuckheads-coppergate-20130423.mp3\">05 Suffering Fuckheads - Coppergate - April 23rd, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0023-sufferingfuckheads-coppergate-20130423.mp3\">06 Suffering Fuckheads - Coppergate - April 23rd, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0025-sufferingfuckheads-coppergate-20130423.mp3\">07 Suffering Fuckheads - Coppergate - April 23rd, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0026-sufferingfuckheads-coppergate-20130423.mp3\">08 Suffering Fuckheads - Coppergate - April 23rd, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0028-sufferingfuckheads-coppergate-20130423.mp3\">09 Suffering Fuckheads - Coppergate - April 23rd, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0008-sufferingfuckheads-coppergate-20130604.mp3\">01 Suffering Fuckheads - Coppergate - June 4th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0009-sufferingfuckheads-coppergate-20130604.mp3\">02 Suffering Fuckheads - Coppergate - June 4th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0010-sufferingfuckheads-coppergate-20130604.mp3\">03 Suffering Fuckheads - Coppergate - June 4th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0011-sufferingfuckheads-coppergate-20130604.mp3\">04 Suffering Fuckheads - Coppergate - June 4th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0012-sufferingfuckheads-coppergate-20130604.mp3\">05 Suffering Fuckheads - Coppergate - June 4th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0013-sufferingfuckheads-coppergate-20130604.mp3\">06 Suffering Fuckheads - Coppergate - June 4th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0014-sufferingfuckheads-coppergate-20130604.mp3\">07 Suffering Fuckheads - Coppergate - June 4th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0015-sufferingfuckheads-coppergate-20130604.mp3\">08 Suffering Fuckheads - Coppergate - June 4th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0016-sufferingfuckheads-coppergate-20130604.mp3\">09 Suffering Fuckheads - Coppergate - June 4th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0017-sufferingfuckheads-coppergate-20130604.mp3\">10 Suffering Fuckheads - Coppergate - June 4th, 2013</option>");
}

function writeMelvinsAudioPlayer(){
    document.write("<table>");
    document.write("<tr>");
        document.write("<td>");
            document.write("<audio id=\"jaemzwaredynamicaudioplayer\" controls=\"\" preload=\"none\">");
                document.write("<source id=\"jaemzwaredynamicaudiosource\" src=\""+baseMediaPath+"ZOOM0001-melvins-showboxmarket-20141018.mp3\" type=\"audio/mpeg\">");
                document.write("HTML5 Audio Tag support not available with your browser. For source type='audio/mpeg'");
            document.write("</audio>");
        document.write("</td>");
    document.write("</tr>");
    document.write("<tr>");
        document.write("<td>");
            document.write("<select id=\"selectsongs\">");
            writeMelvinsAudioPlayerOptions();
            document.write("</select>");
        document.write("</td>");
    document.write("</tr>");
    document.write("</table>"); 
}
function writeMelvinsAudioPlayerOptions(){
    document.write("<option value=\""+baseMediaPath+"ZOOM0001-melvins-showboxmarket-20141018.mp3\" selected>01 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0002-melvins-showboxmarket-20141018.mp3\">02 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0003-melvins-showboxmarket-20141018.mp3\">03 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0004-melvins-showboxmarket-20141018.mp3\">04 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0005-melvins-showboxmarket-20141018.mp3\">05 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0006-melvins-showboxmarket-20141018.mp3\">01 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0007-melvins-showboxmarket-20141018.mp3\">02 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0008-melvins-showboxmarket-20141018.mp3\">03 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0009-melvins-showboxmarket-20141018.mp3\">04 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0010-melvins-showboxmarket-20141018.mp3\">05 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0011-melvins-showboxmarket-20141018.mp3\">06 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0012-melvins-showboxmarket-20141018.mp3\">07 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0013-melvins-showboxmarket-20141018.mp3\">08 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0014-melvins-showboxmarket-20141018.mp3\">09 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0006melvinsportlandwonderballroom20150907.mp3\">01 Melvins - Wonder Ballroom - Portland - September 7th, 2015</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0007melvinsportlandwonderballroom20150907.mp3\">02 Melvins - Wonder Ballroom - Portland - September 7th, 2015</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0008melvinsportlandwonderballroom20150907.mp3\">03 Melvins - Wonder Ballroom - Portland - September 7th, 2015</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0009melvinsportlandwonderballroom20150907.mp3\">04 Melvins - Wonder Ballroom - Portland - September 7th, 2015</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0010melvinsportlandwonderballroom20150907.mp3\">05 Melvins - Wonder Ballroom - Portland - September 7th, 2015</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0011melvinsportlandwonderballroom20150907.mp3\">06 Melvins - Wonder Ballroom - Portland - September 7th, 2015</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0012melvinsportlandwonderballroom20150907.mp3\">07 Melvins - Wonder Ballroom - Portland - September 7th, 2015</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0013melvinsportlandwonderballroom20150907.mp3\">08 Melvins - Wonder Ballroom - Portland - September 7th, 2015</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0014melvinsportlandwonderballroom20150907.mp3\">09 Melvins - Wonder Ballroom - Portland - September 7th, 2015</option>");
}

function writeCrackSabbathAudioPlayer(){
    document.write("<table>");
    document.write("<tr>");
        document.write("<td>");
            document.write("<audio id=\"jaemzwaredynamicaudioplayer\" controls=\"\" preload=\"none\">");
                document.write("<source id=\"jaemzwaredynamicaudiosource\" src=\""+baseMediaPath+"ZOOM0001-CrackSabbath-RoyalRoom-20130622.mp3\" type=\"audio/mpeg\">");
                document.write("HTML5 Audio Tag support not available with your browser. For source type='audio/mpeg'");
            document.write("</audio>");
        document.write("</td>");
    document.write("</tr>");
    document.write("<tr>");
        document.write("<td>");
            document.write("<select id=\"selectsongs\">");
            writeCrackSabbathAudioPlayerOptions();
            document.write("</select>");
        document.write("</td>");
    document.write("</tr>");
    document.write("</table>"); 
}
function writeCrackSabbathAudioPlayerOptions(){
    document.write("<option value=\""+baseMediaPath+"ZOOM0001-CrackSabbath-RoyalRoom-20130622.mp3\" selected>01 Crack Sabbath - Royal Room - June 22nd, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0002-CrackSabbath-RoyalRoom-20130622.mp3\">02 Crack Sabbath - Royal Room - June 22nd, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0003-CrackSabbath-RoyalRoom-20130622.mp3\">03 Crack Sabbath - Royal Room - June 22nd, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0004-CrackSabbath-RoyalRoom-20130622.mp3\">04 Crack Sabbath - Royal Room - June 22nd, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0005-CrackSabbath-RoyalRoom-20130622.mp3\">05 Crack Sabbath - Royal Room - June 22nd, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0008-CrackSabbath-RoyalRoom-20130622.mp3\">01 Crack Sabbath - Royal Room - June 22nd, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0009-CrackSabbath-RoyalRoom-20130622.mp3\">02 Crack Sabbath - Royal Room - June 22nd, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0010-CrackSabbath-RoyalRoom-20130622.mp3\">03 Crack Sabbath - Royal Room - June 22nd, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0011-CrackSabbath-RoyalRoom-20130622.mp3\">04 Crack Sabbath - Royal Room - June 22nd, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0012-CrackSabbath-RoyalRoom-20130622.mp3\">05 Crack Sabbath - Royal Room - June 22nd, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0013-CrackSabbath-RoyalRoom-20130622.mp3\">06 Crack Sabbath - Royal Room - June 22nd, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0014-CrackSabbath-RoyalRoom-20130622.mp3\">07 Crack Sabbath - Royal Room - June 22nd, 2013</option>");
    
    document.write("<option value=\""+baseMediaPath+"ZOOM0001-cracksabbath-themix-20130920.mp3\">01 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0002-cracksabbath-themix-20130920.mp3\">02 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0003-cracksabbath-themix-20130920.mp3\">03 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0004-cracksabbath-themix-20130920.mp3\">04 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0005-cracksabbath-themix-20130920.mp3\">05 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0007-cracksabbath-themix-20130920.mp3\">01 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0008-cracksabbath-themix-20130920.mp3\">02 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0009-cracksabbath-themix-20130920.mp3\">03 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0010-cracksabbath-themix-20130920.mp3\">04 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0011-cracksabbath-themix-20130920.mp3\">05 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0012-cracksabbath-themix-20130920.mp3\">06 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0013-cracksabbath-themix-20130920.mp3\">07 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0014-cracksabbath-themix-20130920.mp3\">08 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0015-cracksabbath-themix-20130920.mp3\">09 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0016-cracksabbath-themix-20130920.mp3\">10Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0017-cracksabbath-themix-20130920.mp3\">11Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0018-cracksabbath-themix-20130920.mp3\">12Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0019-cracksabbath-themix-20130920.mp3\">13Crack Sabbath - The Mix - September 20th, 2013</option>");
    
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-01.mp3\">01 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-02.mp3\">02 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-03.mp3\">03 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-04.mp3\">04 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-05.mp3\">05 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-06.mp3\">01 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-07.mp3\">02 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-08.mp3\">03 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-09.mp3\">04 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-10.mp3\">05 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-11.mp3\">06 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-12.mp3\">07 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-13.mp3\">08 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-14.mp3\">09 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-15.mp3\">10Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-16.mp3\">11Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-17.mp3\">12Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-18.mp3\">13Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-19.mp3\">14Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-20.mp3\">15Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-21.mp3\">16Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-22.mp3\">17Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-23.mp3\">18Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-24.mp3\">19Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"cracksabbath20140509-25.mp3\">20Crack Sabbath - Darrell's - May 8th, 2014</option>");
    
    document.write("<option value=\""+baseMediaPath+"ZOOM0002-cracksabbath-owlandthistle-20140917.mp3\">01 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0003-cracksabbath-owlandthistle-20140917.mp3\">02 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0004-cracksabbath-owlandthistle-20140917.mp3\">03 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0005-cracksabbath-owlandthistle-20140917.mp3\">04 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0006-cracksabbath-owlandthistle-20140917.mp3\">05 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0007-cracksabbath-owlandthistle-20140917.mp3\">01 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0008-cracksabbath-owlandthistle-20140917.mp3\">02 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0009-cracksabbath-owlandthistle-20140917.mp3\">03 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0010-cracksabbath-owlandthistle-20140917.mp3\">04 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0011-cracksabbath-owlandthistle-20140917.mp3\">05 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0012-cracksabbath-owlandthistle-20140917.mp3\">06 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0013-cracksabbath-owlandthistle-20140917.mp3\">07 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0014-cracksabbath-owlandthistle-20140917.mp3\">08 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0015-cracksabbath-owlandthistle-20140917.mp3\">09 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0016-cracksabbath-owlandthistle-20140917.mp3\">10Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0017-cracksabbath-owlandthistle-20140917.mp3\">11Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0018-cracksabbath-owlandthistle-20140917.mp3\">12Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0019-cracksabbath-owlandthistle-20140917.mp3\">13Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0020-cracksabbath-owlandthistle-20140917.mp3\">14Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0021-cracksabbath-owlandthistle-20140917.mp3\">15Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0022-cracksabbath-owlandthistle-20140917.mp3\">16Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\""+baseMediaPath+"ZOOM0023-cracksabbath-owlandthistle-20140917.mp3\">17Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
}

function writeBuiltToSpillAudioPlayer(){
    document.write("<table>");
    document.write("<tr>");
        document.write("<td>");
            document.write("<audio id=\"jaemzwaredynamicaudioplayer\" controls=\"\" preload=\"none\">");
                document.write("<source id=\"jaemzwaredynamicaudiosource\" src=\""+baseMediaPath+"01%20Hazy2013-02-03-15-02-09-0679196-BuiltToSpill-Bellingham-20130202.mp3\" type=\"audio/mpeg\">");
                document.write("HTML5 Audio Tag support not available with your browser. For source type='audio/mpeg'");
            document.write("</audio>");
        document.write("</td>");
    document.write("</tr>");
    document.write("<tr>");
        document.write("<td>");
            document.write("<select id=\"selectsongs\">");
            writeBuiltToSpillAudioPlayerOptions();
            document.write("</select>");
        document.write("</td>");
    document.write("</tr>");
    document.write("</table>"); 
}
function writeBuiltToSpillAudioPlayerOptions(){
document.write("<option value=\""+baseMediaPath+"01%20Hazy2013-02-03-15-02-09-0679196-BuiltToSpill-Bellingham-20130202.mp3\" selected>01 Built to Spill - Bellingham - February 2nd, 2013</option>");
document.write("<option value=\""+baseMediaPath+"09%20Dont%20Fear%20the%20Reaper2013-02-03-15-17-23-8247012-BuiltToSpill-Bellingham-20130202.mp3\">02 Built to Spill - Bellingham - February 2nd, 2013</option>");
document.write("<option value=\""+baseMediaPath+"10%20Goin%20Against%20Your%20Mind2013-02-03-15-17-25-1663528-BuiltToSpill-Bellingham-20130202.mp3\">03 Built to Spill - Bellingham - February 2nd, 2013</option>");
document.write("<option value=\""+baseMediaPath+"11%20Kicked%20It%20In%20The%20Sun2013-02-03-15-17-25-9151816-BuiltToSpill-Bellingham-20130202.mp3\">04 Built to Spill - Bellingham - February 2nd, 2013</option>");
document.write("<option value=\""+baseMediaPath+"12%20Center%20Of%20The%20Universe2013-02-03-15-17-27-2100314-BuiltToSpill-Bellingham-20130202.mp3\">05 Built to Spill - Bellingham - February 2nd, 2013</option>");
document.write("<option value=\""+baseMediaPath+"13%20Heart2013-02-03-15-17-27-3192356-BuiltToSpill-Bellingham-20130202.mp3\">06 Built to Spill - Bellingham - February 2nd, 2013</option>");
document.write("<option value=\""+baseMediaPath+"14%20Pat2013-02-03-15-17-28-4736800-BuiltToSpill-Bellingham-20130202.mp3\">07 Built to Spill - Bellingham - February 2nd, 2013</option>");
document.write("<option value=\""+baseMediaPath+"15%20How%20Soon%20Is%20Now%20-%20Unknown2013-02-03-15-17-29-5657220-BuiltToSpill-Bellingham-20130202.mp3\">08 Built to Spill - Bellingham - February 2nd, 2013</option>");
document.write("<option value=\""+baseMediaPath+"02%20The%20Source2013-02-03-15-02-10-4095712-BuiltToSpill-Bellingham-20130202.mp3\">10 Built to Spill - Bellingham - February 2nd, 2013</option>");
document.write("<option value=\""+baseMediaPath+"03%20Reasons2013-02-03-15-02-11-6108174-BuiltToSpill-Bellingham-20130202.mp3\">11 Built to Spill - Bellingham - February 2nd, 2013</option>");
document.write("<option value=\""+baseMediaPath+"05%20Stab2013-02-03-15-02-13-9977092-BuiltToSpill-Bellingham-20130202.mp3\">12 Built to Spill - Bellingham - February 2nd, 2013</option>");
document.write("<option value=\""+baseMediaPath+"06%20Strange2013-02-03-15-02-15-2301566-BuiltToSpill-Bellingham-20130202.mp3\">13 Built to Spill - Bellingham - February 2nd, 2013</option>");
document.write("<option value=\""+baseMediaPath+"07%20Get%20a%20Life2013-02-03-15-02-15-5421686-BuiltToSpill-Bellingham-20130202.mp3\">14 Built to Spill - Bellingham - February 2nd, 2013</option>");
document.write("<option value=\""+baseMediaPath+"08%20Made%20Up%20Dreams2013-02-03-15-02-16-8214178-BuiltToSpill-Bellingham-20130202.mp3\">15 Built to Spill - Bellingham - February 2nd, 2013</option>");
document.write("<option value=\""+baseMediaPath+"01goingagainstyourmind-BuiltToSpill-Freemont-20140620.mp3\">01 Built to Spill - Fremont - June 20th, 2014</option>");
document.write("<option value=\""+baseMediaPath+"02inthemorning-BuiltToSpill-Freemont-20140620.mp3\">02 Built to Spill - Fremont - June 20th, 2014</option>");
document.write("<option value=\""+baseMediaPath+"03theplan-BuiltToSpill-Freemont-20140620.mp3\">03 Built to Spill - Fremont - June 20th, 2014</option>");
document.write("<option value=\""+baseMediaPath+"04strange-BuiltToSpill-Freemont-20140620.mp3\">04 Built to Spill - Fremont - June 20th, 2014</option>");
document.write("<option value=\""+baseMediaPath+"05untrustable-BuiltToSpill-Freemont-20140620.mp3\">05 Built to Spill - Fremont - June 20th, 2014</option>");
document.write("<option value=\""+baseMediaPath+"06else-BuiltToSpill-Freemont-20140620.mp3\">01 Built to Spill - Fremont - June 20th, 2014</option>");
document.write("<option value=\""+baseMediaPath+"07messwithtime-BuiltToSpill-Freemont-20140620.mp3\">02 Built to Spill - Fremont - June 20th, 2014</option>");
document.write("<option value=\""+baseMediaPath+"08iwouldhurtafly-BuiltToSpill-Freemont-20140620.mp3\">03 Built to Spill - Fremont - June 20th, 2014</option>");
document.write("<option value=\""+baseMediaPath+"09getalife-BuiltToSpill-Freemont-20140620.mp3\">04 Built to Spill - Fremont - June 20th, 2014</option>");
document.write("<option value=\""+baseMediaPath+"10joyride-BuiltToSpill-Freemont-20140620.mp3\">05 Built to Spill - Fremont - June 20th, 2014</option>");
document.write("<option value=\""+baseMediaPath+"11stab-BuiltToSpill-Freemont-20140620.mp3\">06 Built to Spill - Fremont - June 20th, 2014</option>");
document.write("<option value=\""+baseMediaPath+"12carrythezero-BuiltToSpill-Freemont-20140620.mp3\">07 Built to Spill - Fremont - June 20th, 2014</option>");
document.write("<option value=\""+baseMediaPath+"13youwereright-BuiltToSpill-Freemont-20140620.mp3\">01Built to Spill - Fremont - June 20th, 2014</option>");
document.write("<option value=\""+baseMediaPath+"14bigdipper-BuiltToSpill-Freemont-20140620.mp3\">10Built to Spill - Fremont - June 20th, 2014</option>");
document.write("<option value=\""+baseMediaPath+"15dontfearthereaper-BuiltToSpill-Freemont-20140620.mp3\">11Built to Spill - Fremont - June 20th, 2014</option>");
document.write("<option value=\""+baseMediaPath+"16conventionalwisdom-BuiltToSpill-Freemont-20140620.mp3\">12Built to Spill - Fremont - June 20th, 2014</option>");
document.write("<option value=\""+baseMediaPath+"bts-center-BuiltToSpill-Geogetown-20130713.mp3\">01Built to Spill - Sub Pop 25th, Georgetown - July 13th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"bts-fly-BuiltToSpill-Geogetown-20130713.mp3\">02Built to Spill - Sub Pop 25th, Georgetown - July 13th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"bts-goingagainst-BuiltToSpill-Geogetown-20130713.mp3\">03Built to Spill - Sub Pop 25th, Georgetown - July 13th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"bts-inthemorning-BuiltToSpill-Geogetown-20130713.mp3\">04Built to Spill - Sub Pop 25th, Georgetown - July 13th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"bts-madeupdreams-BuiltToSpill-Geogetown-20130713.mp3\">05Built to Spill - Sub Pop 25th, Georgetown - July 13th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"bts-sidewalk-BuiltToSpill-Geogetown-20130713.mp3\">06Built to Spill - Sub Pop 25th, Georgetown - July 13th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"bts-soundcheck-BuiltToSpill-Geogetown-20130713.mp3\">07Built to Spill - Sub Pop 25th, Georgetown - July 13th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"bts-theplan-BuiltToSpill-Geogetown-20130713.mp3\">08Built to Spill - Sub Pop 25th, Georgetown - July 13th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"bts-untitled-BuiltToSpill-Geogetown-20130713.mp3\">09Built to Spill - Sub Pop 25th, Georgetown - July 13th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"bts-youwereright-BuiltToSpill-Geogetown-20130713.mp3\">10Built to Spill - Sub Pop 25th, Georgetown - July 13th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"01%20Going%20Against%20Your%20Mind-BuiltToSpill-LiveatNeumos20131227.mp3\">01Built to Spill - Neumos, Seattle - December 27th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"02%20In%20The%20Morning-BuiltToSpill-LiveatNeumos20131227.mp3\">02Built to Spill - Neumos, Seattle - December 27th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"03%20Center%20of%20the%20Universe-BuiltToSpill-LiveatNeumos20131227.mp3\">03Built to Spill - Neumos, Seattle - December 27th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"04%20The%20Plan-BuiltToSpill-LiveatNeumos20131227.mp3\">04Built to Spill - Neumos, Seattle - December 27th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"05%20Planting%20Seeds-BuiltToSpill-LiveatNeumos20131227.mp3\">05Built to Spill - Neumos, Seattle - December 27th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"06%20Kicked%20It%20In%20the%20Sun-BuiltToSpill-LiveatNeumos20131227.mp3\">06Built to Spill - Neumos, Seattle - December 27th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"07%20Get%20a%20Life-BuiltToSpill-LiveatNeumos20131227.mp3\">07Built to Spill - Neumos, Seattle - December 27th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"08%20Sidewalk-BuiltToSpill-LiveatNeumos20131227.mp3\">08Built to Spill - Neumos, Seattle - December 27th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"09%20Here%20-%20Pavement-BuiltToSpill-LiveatNeumos20131227.mp3\">09Built to Spill - Neumos, Seattle - December 27th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"10%20You%20were%20right-BuiltToSpill-LiveatNeumos20131227.mp3\">10Built to Spill - Neumos, Seattle - December 27th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"11%20Conventional%20Wisdom-BuiltToSpill-LiveatNeumos20131227.mp3\">11Built to Spill - Neumos, Seattle - December 27th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"12%20Heart%20-%20Doug%20Martsch-BuiltToSpill-LiveatNeumos20131227.mp3\">12Built to Spill - Neumos, Seattle - December 27th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"13%20Carry%20the%20Zero-BuiltToSpill-LiveatNeumos20131227.mp3\">13Built to Spill - Neumos, Seattle - December 27th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"14%20Instrumental%20-%20dont%20know-BuiltToSpill-LiveatNeumos20131227.mp3\">14Built to Spill - Neumos, Seattle - December 27th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"15%20I%20would%20hurt%20a%20fly-BuiltToSpill-LiveatNeumos20131227.mp3\">15Built to Spill - Neumos, Seattle - December 27th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"16%20Age%20of%20Consent%20-%20New%20Order-BuiltToSpill-LiveatNeumos20131227.mp3\">16Built to Spill - Neumos, Seattle - December 27th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"17%20How%20Soon%20is%20Now%20-%20The%20Smiths-BuiltToSpill-LiveatNeumos20131227.mp3\">17Built to Spill - Neumos, Seattle - December 27th, 2013</option>");
document.write("<option value=\""+baseMediaPath+"18%20Car-BuiltToSpill-LiveatNeumos20131227.mp3\">18Built to Spill - Neumos, Seattle - December 27th, 2013</option>");
}

//VIDEO 
function writeVideoPlayer(){
    document.write("<table>");
    document.write("<tr>");
    document.write("<td>");
    document.write("<video id=\"jaemzwaredynamicvideoplayer\" poster=\"http://jaemzware.org/media/randompng/tv.png\" width=\"640\" height=\"480\" controls=\"controls\" preload=\"metadata\" title=\"jaemzwareTV\">");
    document.write(" browser doesn't support mp4 video. use chrome.");
    document.write("<source src=\"http://jaemzware.org/media/skate/roxhillbacksideollieline201508.mp4\" type=\"video/mp4\" id=\"jaemzwaredynamicvideosource\">");
    document.write("</video>");
    document.write("</td>");
    document.write("</tr>");
    document.write("<td>");
    document.write("<select id=\"selectvideos\">");
    writeDefaultVideoPlayerOptions();
    document.write("</select>");
    document.write("</td>");
    document.write("</tr>");
    document.write("</table>");
}
function writeVideoPlayerWithChat(){
    document.write("<table>");
    document.write("<tr>");
    document.write("<td>");
    document.write("<video id=\"jaemzwaredynamicvideoplayer\" poster=\"http://seattlerules.com/media/cat.jpg\" width=\"640\" height=\"480\" controls=\"controls\" preload=\"metadata\" title=\"jaemzwareTV\">");
    document.write(" browser doesn't support mp4 video. use chrome.");
    document.write("<source src=\"https://seattlerules.com/media/marginal/jim-marginal-overthelight-march2015.mp4\" type=\"video/mp4\" id=\"jaemzwaredynamicvideosource\">");
    document.write("</video>");
    document.write("</td>");
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>");
    document.write("<select id=\"selectvideos\">");
    writeDefaultVideoPlayerOptions();
    document.write("</select>");
    document.write("</td>");
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>");
    writeChatControls();
    writeChatMessagesDiv();
    document.write("</td>");
    document.write("</tr>");
    document.write("</table>");
}
function writeDefaultVideoPlayerOptions(){
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
}





