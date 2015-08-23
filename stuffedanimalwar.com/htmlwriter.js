/* jaemzware.org - research project stuffed animal war - 20150822 */


function writeStuffedAnimalWar(){
    document.write("<div id=\"stuffedanimalwardiv\" class=\"divstuffedanimalwaronly\">");
    document.write("<svg id=\"stuffedanimalwarsvg\" class=\"svgstuffedanimalwar\">");
    document.write("<rect id=\"stuffedanimalwarsvgrect\" x=\"0\" y=\"0\" width=\"1\" height=\"1\" style=\"fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)\" />");
    document.write("</svg>");
    document.write("</div>");
}

//WRITECHAT - this function writes the Stuffed Animal War style chat  to the page
function writeChat(){
    document.write("<table>");
        document.write("<tr>");
        document.write("<td>");
            document.write("<form action=\"\">");
                document.write("<input id=\"chatClientUser\" placeholder=\"your alias\"/>");
                document.write("<input id=\"chatClientMessage\" size=\"35\" placeholder=\"type message\" />");
                document.write("<select id=\"chatClientAutoResponder\" size=1 >");
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

//WRITEAUDIOPLAYERDROPDOWNSONGS - this function writes the song options for the Stuffed Animal War style audio player. 
//                                originally just called from writeAudioPlayer
function writeAudioPlayerDropdownSongs()
{
    document.write("<option selected value=\"\"></option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/cracksabbath20140509-02.mp3\">crack sabbath-May 9th, 2015-02</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/cracksabbath20140509-03.mp3\">crack sabbath-May 9th, 2015-03</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/cracksabbath20140509-04.mp3\">crack sabbath-May 9th, 2015-04</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/cracksabbath20140509-05.mp3\">crack sabbath-May 9th, 2015-05</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/cracksabbath20140509-06.mp3\">crack sabbath-May 9th, 2015-06</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/cracksabbath20140509-07.mp3\">crack sabbath-May 9th, 2015-07</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/cracksabbath20140509-08.mp3\">crack sabbath-May 9th, 2015-08</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/cracksabbath20140509-09.mp3\">crack sabbath-May 9th, 2015-09</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/cracksabbath20140509-10.mp3\">crack sabbath-May 9th, 2015-10</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/cracksabbath20140509-11.mp3\">crack sabbath-May 9th, 2015-11</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/cracksabbath20140509-12.mp3\">crack sabbath-May 9th, 2015-12</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/cracksabbath20140509-13.mp3\">crack sabbath-May 9th, 2015-13</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/cracksabbath20140509-14.mp3\">crack sabbath-May 9th, 2015-14</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/cracksabbath20140509-15.mp3\">crack sabbath-May 9th, 2015-15</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/cracksabbath20140509-16.mp3\">crack sabbath-May 9th, 2015-16</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/cracksabbath20140509-17.mp3\">crack sabbath-May 9th, 2015-17</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/cracksabbath20140509-18.mp3\">crack sabbath-May 9th, 2015-18</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/cracksabbath20140509-19.mp3\">crack sabbath-May 9th, 2015-19</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/cracksabbath20140509-20.mp3\">crack sabbath-May 9th, 2015-20</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/cracksabbath20140509-21.mp3\">crack sabbath-May 9th, 2015-21</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/cracksabbath20140509-22.mp3\">crack sabbath-May 9th, 2015-22</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/cracksabbath20140509-23.mp3\">crack sabbath-May 9th, 2015-23</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/cracksabbath20140509-24.mp3\">crack sabbath-May 9th, 2015-24</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/cracksabbath20140509-25.mp3\">crack sabbath-May 9th, 2015-25</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0001-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-01</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0002-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-02</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0003-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-03</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0004-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-04</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0005-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-05</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0006-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-06</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0007-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-07</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0008-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-08</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0009-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-09</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0012-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-10</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0014-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-11</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0015-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-12</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0016-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-13</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0017-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-14</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0018-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-15</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0019-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-16</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0020-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-17</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0021-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-18</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0004-sufferingfuckheads-coppergate-20130212.mp3\">suffering fuckheads-February 12th, 2013-01</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0005-sufferingfuckheads-coppergate-20130212.mp3\">suffering fuckheads-February 12th, 2013-02</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0006-sufferingfuckheads-coppergate-20130212.mp3\">suffering fuckheads-February 12th, 2013-03</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0012-sufferingfuckheads-coppergate-20130212.mp3\">suffering fuckheads-February 12th, 2013-04</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0014-sufferingfuckheads-coppergate-20130212.mp3\">suffering fuckheads-February 12th, 2013-05</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0015-sufferingfuckheads-coppergate-20130212.mp3\">suffering fuckheads-February 12th, 2013-06</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0018-sufferingfuckheads-coppergate-20130212.mp3\">suffering fuckheads-February 12th, 2013-07</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0020-sufferingfuckheads-coppergate-20130212.mp3\">suffering fuckheads-February 12th, 2013-08</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0024-sufferingfuckheads-coppergate-20130212.mp3\">suffering fuckheads-February 12th, 2013-09</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0025-sufferingfuckheads-coppergate-20130212.mp3\">suffering fuckheads-February 12th, 2013-10</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/live/ZOOM0026-sufferingfuckheads-coppergate-20130212.mp3\">suffering fuckheads-February 12th, 2013-11</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/aliceinchains-sidea.mp3\">Alice In Chains-3 Legged Dog-Side A</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/aliceinchains-sideb.mp3\">Alice In Chains-3 Legged Dog-Side B</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/aliceinchains-sidec.mp3\">Alice In Chains-3 Legged Dog-Side C</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/aliceinchains-sided.mp3\">Alice In Chains-3 Legged Dog-Side D</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/aliceinchains-jarofflies-sidea.mp3\">Alice In Chains-Jar of Flies-Side A</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/aliceinchains-jarofflies-sideb.mp3\">Alice In Chains-Jar of Flies-Side B</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/aliceinchains-sap-sidea.mp3\">Alice In Chains-Sap-Side Only</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/Soundgarden-Come-Together.mp3\">Soundgarden-Come Together-Come Together 7\"</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/Soundgarden-Heretic.mp3\">Soundgarden-Heretic-Come Together 7\"</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/soundgarden-screaminglife-sidea.mp3\">Soundgarden-Screaming Life-Side A</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/soundgarden-screaminglife-sideb.mp3\">Soundgarden-Screaming Life-Side B</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/07%20Birth%20Ritual.mp3\">Soundgarden-Singles Soundtrack CD-Birth Ritual</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/soundgarden-telephantasm-sided.mp3\">Soundgarden-Telephantasm-Side D</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/soundgarden-telephantasm-sidee.mp3\">Soundgarden-Telephantasm-Side E</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/soundgarden-ultramegaok-sidea.mp3\">Soundgarden-Ultramega OK-Side A</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/treepeople-more%20than%20a%20feeling.mp3\">Treepeople-Bostonot 7\" Set-More Than A Feeling</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/treepeople-guiltregretandembarassment-sidea.mp3\">Treepeople-Guilt Regret and Embarassment-Side A</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/treepeople-guiltregretandembarassment-sideb.mp3\">Treepeople-Guilt Regret and Embarassment-Side B</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/treepeople-hide%20and%20find%20out.mp3\">Treepeople-Hide and Find Out 7\"-Hide and Find Out</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/treepeople-justkidding-sidea.mp3\">Treepeople-Just Kidding-Side A</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/treepeople-justkidding-sideb.mp3\">Treepeople-Just Kidding-Side B</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/treepeople-somethingviciousfortomorrow-sidea.mp3\">Treepeople-Something Viscious For Tomorrow LP-Side A</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/treepeople-somethingviciousfortomorrow-sideb.mp3\">Treepeople-Something Viscious For Tomorrow LP-Side B</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/heart-crazyonyou-7.mp3\">Heart-Crazy on You 7\"-Crazy on You b/w</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/heart-magicman-7.mp3\">Heart-Magic Man 7\"-Magic Man b/w</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/nirvana-sliverBWdive.mp3\">Nirvana-Sliver b/w Dive</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/nirvana-bleach-sidea.mp3\">Nirvana-Bleach-Side A</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/nirvana-bleach-sideb.mp3\">Nirvana-Bleach-Side B</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/nirvana-comeasyouare-ep.mp3\">Nirvana-Come As You Are-EP</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/nirvana-inbloom-ep.mp3\">Nirvana-In Bloom-EP</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/nirvana-inutero2013mix-sidea.mp3\">Nirvana-In Utero 2013-Side A</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/nirvana-inutero2013mix-sideb.mp3\">Nirvana-In Utero 2013-Side B</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/nirvana-inutero2013mix-sidec.mp3\">Nirvana-In Utero 2013-Side C</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/nirvana-inutero2013mix-sided.mp3\">Nirvana-In Utero 2013-Side D</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/nirvana-inutero-sidea.mp3\">Nirvana-In Utero-Side A</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/nirvana-inutero-sideb.mp3\">Nirvana-In Utero-Side B</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/nirvana-incesticide-sidea.mp3\">Nirvana-Incesticide-Side A</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/nirvana-incesticide-sideb.mp3\">Nirvana-Incesticide-Side B</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/nirvana-lithium-ep.mp3\">Nirvana-Lithium-EP</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/nirvana-nevermind-sideb.mp3\">Nirvana-Nevermind-Side B</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/nirvana-smellsliketeenspirit-ep.mp3\">Nirvana-Smells Like Teen Spirit-EP</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/nirvana-wipeout-sidea.mp3\">Nirvana-Wipeout-Side A</option>");
    document.write("<option value=\"http://analogarchive.com/analogarchive/analog/nirvana-wipeout-sideb.mp3\">Nirvana-Wipeout-Side B</option>");
}

//WRITEVIDEOPLAYER - write the video player control and its dropdown fo rthe videos
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

    writeVideoPlayerDropdownVideos();
    
    document.write("</select>");
    document.write("</td>");
    document.write("</tr>");
    document.write("</table>");
}

function writeVideoPlayerDropdownVideos(){
    document.write("<option value=\"http://jaemzware.org/media/skate/roxhillbacksideollieline201508.mp4\">Jim, Roxhill, Backside Ollie Line,  August 2015</option>");
    document.write("<option value=\"http://jaemzware.org/media/skate/roxhillollierockline201508.mp4\">Jim, Roxhill Ollie Rock Line</option>");
    document.write("<option value=\"http://jaemzware.org/media/skate/yakima201508.mp4\">Jim, Yakima August 2015</option>");
    document.write("<option value=\"http://jaemzware.org/media/randommp4/01goingagainstyourmind.mp4\">Built to Spill - Going against your mind - Fremont Fair 2014</option>");
    document.write("<option value=\"http://jaemzware.org/media/randommp4/sk8cretewall.mp4\">Sk8crete or Die</option>");
    document.write("<option value=\"http://jaemzware.org/media/randommp4/babysessionstruevalue.mp4\">True Value Baby Sessions 2001</option>");
    document.write("<option value=\"http://jaemzware.org/media/skate/fortboise201508.mp4\">Jim, Fort Boise August 2015</option>");
}