/* jaemzware.org - research project stuffed animal war - 20150822 */

//AUDIO 
function writeAudioPlayer(){
document.write("<table>");
    document.write("<tr>");
        document.write("<td>");
            document.write("<audio id=\"jaemzwaredynamicaudioplayer\" controls=\"\" preload=\"none\" width=\"640\">");
                document.write("<source id=\"jaemzwaredynamicaudiosource\" src=\"http://analogarchive.com/live/ZOOM0001-SkerikTrio-OwlnThistle-20130227.mp3\" type=\"audio/mpeg\">");
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
function writeRoxhillAudioPlayer(){
    document.write("<table>");
    document.write("<tr>");
        document.write("<td>");
            document.write("<audio id=\"jaemzwaredynamicaudioplayer\" controls=\"\" preload=\"none\">");
                document.write("<source id=\"jaemzwaredynamicaudiosource\" src=\"http://analogarchive.com/live/ZOOM0001roxhillsessions20150827.mp3\" type=\"audio/mpeg\">");
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
function writeSufferingFuckheadsAudioPlayer(){
    document.write("<table>");
    document.write("<tr>");
        document.write("<td>");
            document.write("<audio id=\"jaemzwaredynamicaudioplayer\" controls=\"\" preload=\"none\">");
                document.write("<source id=\"jaemzwaredynamicaudiosource\" src=\"http://analogarchive.com/live/ZOOM0005-sufferingfuckheads-coppergate-20130205.mp3\" type=\"audio/mpeg\">");
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
function writeMelvinsAudioPlayer(){
    document.write("<table>");
    document.write("<tr>");
        document.write("<td>");
            document.write("<audio id=\"jaemzwaredynamicaudioplayer\" controls=\"\" preload=\"none\">");
                document.write("<source id=\"jaemzwaredynamicaudiosource\" src=\"http://analogarchive.com/live/ZOOM0001-melvins-showboxmarket-20141018.mp3\" type=\"audio/mpeg\">");
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
function writeCrackSabbathAudioPlayer(){
    document.write("<table>");
    document.write("<tr>");
        document.write("<td>");
            document.write("<audio id=\"jaemzwaredynamicaudioplayer\" controls=\"\" preload=\"none\">");
                document.write("<source id=\"jaemzwaredynamicaudiosource\" src=\"http://analogarchive.com/live/ZOOM0001-CrackSabbath-RoyalRoom-20130622.mp3\" type=\"audio/mpeg\">");
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
function writeMelvinsAudioPlayerOptions(){
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0001-melvins-showboxmarket-20141018.mp3\" selected>01 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0002-melvins-showboxmarket-20141018.mp3\">02 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0003-melvins-showboxmarket-20141018.mp3\">03 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0004-melvins-showboxmarket-20141018.mp3\">04 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0005-melvins-showboxmarket-20141018.mp3\">05 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0006-melvins-showboxmarket-20141018.mp3\">01 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0007-melvins-showboxmarket-20141018.mp3\">02 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0008-melvins-showboxmarket-20141018.mp3\">03 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0009-melvins-showboxmarket-20141018.mp3\">04 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0010-melvins-showboxmarket-20141018.mp3\">05 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0011-melvins-showboxmarket-20141018.mp3\">06 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0012-melvins-showboxmarket-20141018.mp3\">07 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0013-melvins-showboxmarket-20141018.mp3\">08 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0014-melvins-showboxmarket-20141018.mp3\">09 Melvins - Showbox Market - October 18th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0006melvinsportlandwonderballroom20150907.mp3\">01 Melvins - Wonder Ballroom - Portland - September 7th, 2015</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0007melvinsportlandwonderballroom20150907.mp3\">02 Melvins - Wonder Ballroom - Portland - September 7th, 2015</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0008melvinsportlandwonderballroom20150907.mp3\">03 Melvins - Wonder Ballroom - Portland - September 7th, 2015</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0009melvinsportlandwonderballroom20150907.mp3\">04 Melvins - Wonder Ballroom - Portland - September 7th, 2015</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0010melvinsportlandwonderballroom20150907.mp3\">05 Melvins - Wonder Ballroom - Portland - September 7th, 2015</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0011melvinsportlandwonderballroom20150907.mp3\">06 Melvins - Wonder Ballroom - Portland - September 7th, 2015</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0012melvinsportlandwonderballroom20150907.mp3\">07 Melvins - Wonder Ballroom - Portland - September 7th, 2015</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0013melvinsportlandwonderballroom20150907.mp3\">08 Melvins - Wonder Ballroom - Portland - September 7th, 2015</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0014melvinsportlandwonderballroom20150907.mp3\">09 Melvins - Wonder Ballroom - Portland - September 7th, 2015</option>");
}
function writeSufferingFuckheadsAudioPlayerOptions(){
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0005-sufferingfuckheads-coppergate-20130205.mp3\" selected>01 Suffering Fuckheads - Coppergate - February 5th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0008-sufferingfuckheads-coppergate-20130205.mp3\">02 Suffering Fuckheads - Coppergate - February 5th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0011-sufferingfuckheads-coppergate-20130205.mp3\">03 Suffering Fuckheads - Coppergate - February 5th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0013-sufferingfuckheads-coppergate-20130205.mp3\">04 Suffering Fuckheads - Coppergate - February 5th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0015-sufferingfuckheads-coppergate-20130205.mp3\">05 Suffering Fuckheads - Coppergate - February 5th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0018-sufferingfuckheads-coppergate-20130205.mp3\">06 Suffering Fuckheads - Coppergate - February 5th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0019-sufferingfuckheads-coppergate-20130205.mp3\">07 Suffering Fuckheads - Coppergate - February 5th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0021-sufferingfuckheads-coppergate-20130205.mp3\">08 Suffering Fuckheads - Coppergate - February 5th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0004-sufferingfuckheads-coppergate-20130212.mp3\">01 Suffering Fuckheads - Coppergate - February 12th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0005-sufferingfuckheads-coppergate-20130212.mp3\">02 Suffering Fuckheads - Coppergate - February 12th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0006-sufferingfuckheads-coppergate-20130212.mp3\">03 Suffering Fuckheads - Coppergate - February 12th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0012-sufferingfuckheads-coppergate-20130212.mp3\">04 Suffering Fuckheads - Coppergate - February 12th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0014-sufferingfuckheads-coppergate-20130212.mp3\">05 Suffering Fuckheads - Coppergate - February 12th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0015-sufferingfuckheads-coppergate-20130212.mp3\">06 Suffering Fuckheads - Coppergate - February 12th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0018-sufferingfuckheads-coppergate-20130212.mp3\">07 Suffering Fuckheads - Coppergate - February 12th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0020-sufferingfuckheads-coppergate-20130212.mp3\">08 Suffering Fuckheads - Coppergate - February 12th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0024-sufferingfuckheads-coppergate-20130212.mp3\">09 Suffering Fuckheads - Coppergate - February 12th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0025-sufferingfuckheads-coppergate-20130212.mp3\">10 Suffering Fuckheads - Coppergate - February 12th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0026-sufferingfuckheads-coppergate-20130212.mp3\">11 Suffering Fuckheads - Coppergate - February 12th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0001-sufferingfuckheads-coppergate-20130326.mp3\">01 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0002-sufferingfuckheads-coppergate-20130326.mp3\">02 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0003-sufferingfuckheads-coppergate-20130326.mp3\">03 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0004-sufferingfuckheads-coppergate-20130326.mp3\">04 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0005-sufferingfuckheads-coppergate-20130326.mp3\">05 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0006-sufferingfuckheads-coppergate-20130326.mp3\">06 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0007-sufferingfuckheads-coppergate-20130326.mp3\">07 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0008-sufferingfuckheads-coppergate-20130326.mp3\">08 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0009-sufferingfuckheads-coppergate-20130326.mp3\">09 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0010-sufferingfuckheads-coppergate-20130326.mp3\">10 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0011-sufferingfuckheads-coppergate-20130326.mp3\">11 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0012-sufferingfuckheads-coppergate-20130326.mp3\">12 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0013-sufferingfuckheads-coppergate-20130326.mp3\">13 Suffering Fuckheads - Coppergate - March 26th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0014-sufferingfuckheads-coppergate-20130423.mp3\">01 Suffering Fuckheads - Coppergate - April 23rd, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0016-sufferingfuckheads-coppergate-20130423.mp3\">02 Suffering Fuckheads - Coppergate - April 23rd, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0019-sufferingfuckheads-coppergate-20130423.mp3\">03 Suffering Fuckheads - Coppergate - April 23rd, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0020-sufferingfuckheads-coppergate-20130423.mp3\">04 Suffering Fuckheads - Coppergate - April 23rd, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0022-sufferingfuckheads-coppergate-20130423.mp3\">05 Suffering Fuckheads - Coppergate - April 23rd, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0023-sufferingfuckheads-coppergate-20130423.mp3\">06 Suffering Fuckheads - Coppergate - April 23rd, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0025-sufferingfuckheads-coppergate-20130423.mp3\">07 Suffering Fuckheads - Coppergate - April 23rd, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0026-sufferingfuckheads-coppergate-20130423.mp3\">08 Suffering Fuckheads - Coppergate - April 23rd, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0028-sufferingfuckheads-coppergate-20130423.mp3\">09 Suffering Fuckheads - Coppergate - April 23rd, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0008-sufferingfuckheads-coppergate-20130604.mp3\">01 Suffering Fuckheads - Coppergate - June 4th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0009-sufferingfuckheads-coppergate-20130604.mp3\">02 Suffering Fuckheads - Coppergate - June 4th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0010-sufferingfuckheads-coppergate-20130604.mp3\">03 Suffering Fuckheads - Coppergate - June 4th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0011-sufferingfuckheads-coppergate-20130604.mp3\">04 Suffering Fuckheads - Coppergate - June 4th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0012-sufferingfuckheads-coppergate-20130604.mp3\">05 Suffering Fuckheads - Coppergate - June 4th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0013-sufferingfuckheads-coppergate-20130604.mp3\">06 Suffering Fuckheads - Coppergate - June 4th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0014-sufferingfuckheads-coppergate-20130604.mp3\">07 Suffering Fuckheads - Coppergate - June 4th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0015-sufferingfuckheads-coppergate-20130604.mp3\">08 Suffering Fuckheads - Coppergate - June 4th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0016-sufferingfuckheads-coppergate-20130604.mp3\">09 Suffering Fuckheads - Coppergate - June 4th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0017-sufferingfuckheads-coppergate-20130604.mp3\">10 Suffering Fuckheads - Coppergate - June 4th, 2013</option>");
}
function writeRoxhillSessionsAudioPlayerOptions(){
        document.write("<option value=\"http://analogarchive.com/live/ZOOM0003roxhillsessions20150827.mp3\">03 Acting Like a Bee</option>");
        document.write("<option value=\"http://analogarchive.com/live/ZOOM0007roxhillsessions20150827.mp3\">07 Beau</option>");
        document.write("<option value=\"http://analogarchive.com/live/ZOOM0008roxhillsessions20150827.mp3\">08 Spicy Divine Intervention with Ex Stacy</option>");
        document.write("<option value=\"http://analogarchive.com/live/ZOOM0010roxhillsessions20150827.mp3\">10 Redbox</option>");
        document.write("<option value=\"http://analogarchive.com/live/ZOOM0011roxhillsessions20150827.mp3\">11 Uber Super</option>");
        document.write("<option value=\"http://analogarchive.com/live/ZOOM0012roxhillsessions20150827.mp3\">12 Jordan</option>");
        document.write("<option value=\"http://analogarchive.com/live/ZOOM0013roxhillsessions20150827.mp3\">13 Black Humor</option>");
        document.write("<option value=\"http://analogarchive.com/live/ZOOM0016roxhillsessions20150827.mp3\">16 Hungry as a Skeleton</option>");
        document.write("<option value=\"http://analogarchive.com/live/ZOOM0019roxhillsessions20150827.mp3\">19 Grabbed Their Pie</option>");
        document.write("<option value=\"http://analogarchive.com/live/ZOOM0020roxhillsessions20150827.mp3\">20 Take the Beat Back</option>");
        document.write("<option value=\"http://analogarchive.com/live/ZOOM0022roxhillsessions20150827.mp3\">22 Pot Farm</option>");
        document.write("<option value=\"http://analogarchive.com/live/ZOOM0023roxhillsessions20150827.mp3\">23 Grinch</option>");
        document.write("<option value=\"http://analogarchive.com/live/ZOOM0024roxhillsessions20150827.mp3\">24 Dont Speak Spanish</option>");
        document.write("<option value=\"http://analogarchive.com/live/ZOOM0025roxhillsessions20150827.mp3\">25 Get Up On Aurora</option>");
        document.write("<option value=\"http://analogarchive.com/live/ZOOM0027roxhillsessions20150827.mp3\">27 Too Murderous</option>");
        document.write("<option value=\"http://analogarchive.com/live/ZOOM0028roxhillsessions20150827.mp3\">28 Driving Your Mom's Car</option>");
        document.write("<option value=\"http://analogarchive.com/live/ZOOM0029roxhillsessions20150827.mp3\">29 Skate Beats</option>");
        document.write("<option value=\"http://analogarchive.com/live/ZOOM0033roxhillsessions20150827.mp3\">33 Pill Press</option>");
        document.write("<option value=\"http://analogarchive.com/live/ZOOM0035roxhillsessions20150827.mp3\">35 Pop You in the Brain</option>");
        document.write("<option value=\"http://analogarchive.com/live/ZOOM0037roxhillsessions20150827.mp3\">37 Laxative</option>");
}
function writeCrackSabbathAudioPlayerOptions(){
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0001-CrackSabbath-RoyalRoom-20130622.mp3\">01 Crack Sabbath - Royal Room - June 22nd, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0002-CrackSabbath-RoyalRoom-20130622.mp3\">02 Crack Sabbath - Royal Room - June 22nd, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0003-CrackSabbath-RoyalRoom-20130622.mp3\">03 Crack Sabbath - Royal Room - June 22nd, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0004-CrackSabbath-RoyalRoom-20130622.mp3\">04 Crack Sabbath - Royal Room - June 22nd, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0005-CrackSabbath-RoyalRoom-20130622.mp3\">05 Crack Sabbath - Royal Room - June 22nd, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0008-CrackSabbath-RoyalRoom-20130622.mp3\">01 Crack Sabbath - Royal Room - June 22nd, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0009-CrackSabbath-RoyalRoom-20130622.mp3\">02 Crack Sabbath - Royal Room - June 22nd, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0010-CrackSabbath-RoyalRoom-20130622.mp3\">03 Crack Sabbath - Royal Room - June 22nd, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0011-CrackSabbath-RoyalRoom-20130622.mp3\">04 Crack Sabbath - Royal Room - June 22nd, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0012-CrackSabbath-RoyalRoom-20130622.mp3\">05 Crack Sabbath - Royal Room - June 22nd, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0013-CrackSabbath-RoyalRoom-20130622.mp3\">06 Crack Sabbath - Royal Room - June 22nd, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0014-CrackSabbath-RoyalRoom-20130622.mp3\">07 Crack Sabbath - Royal Room - June 22nd, 2013</option>");
    
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0001-cracksabbath-themix-20130920.mp3\">01 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0002-cracksabbath-themix-20130920.mp3\">02 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0003-cracksabbath-themix-20130920.mp3\">03 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0004-cracksabbath-themix-20130920.mp3\">04 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0005-cracksabbath-themix-20130920.mp3\">05 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0007-cracksabbath-themix-20130920.mp3\">01 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0008-cracksabbath-themix-20130920.mp3\">02 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0009-cracksabbath-themix-20130920.mp3\">03 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0010-cracksabbath-themix-20130920.mp3\">04 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0011-cracksabbath-themix-20130920.mp3\">05 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0012-cracksabbath-themix-20130920.mp3\">06 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0013-cracksabbath-themix-20130920.mp3\">07 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0014-cracksabbath-themix-20130920.mp3\">08 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0015-cracksabbath-themix-20130920.mp3\">09 Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0016-cracksabbath-themix-20130920.mp3\">10Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0017-cracksabbath-themix-20130920.mp3\">11Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0018-cracksabbath-themix-20130920.mp3\">12Crack Sabbath - The Mix - September 20th, 2013</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0019-cracksabbath-themix-20130920.mp3\">13Crack Sabbath - The Mix - September 20th, 2013</option>");
    
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-01.mp3\">01 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-02.mp3\">02 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-03.mp3\">03 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-04.mp3\">04 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-05.mp3\">05 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-06.mp3\">01 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-07.mp3\">02 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-08.mp3\">03 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-09.mp3\">04 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-10.mp3\">05 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-11.mp3\">06 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-12.mp3\">07 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-13.mp3\">08 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-14.mp3\">09 Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-15.mp3\">10Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-16.mp3\">11Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-17.mp3\">12Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-18.mp3\">13Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-19.mp3\">14Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-20.mp3\">15Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-21.mp3\">16Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-22.mp3\">17Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-23.mp3\">18Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-24.mp3\">19Crack Sabbath - Darrell's - May 8th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/cracksabbath20140509-25.mp3\">20Crack Sabbath - Darrell's - May 8th, 2014</option>");
    
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0002-cracksabbath-owlandthistle-20140917.mp3\">01 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0003-cracksabbath-owlandthistle-20140917.mp3\">02 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0004-cracksabbath-owlandthistle-20140917.mp3\">03 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0005-cracksabbath-owlandthistle-20140917.mp3\">04 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0006-cracksabbath-owlandthistle-20140917.mp3\">05 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0007-cracksabbath-owlandthistle-20140917.mp3\">01 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0008-cracksabbath-owlandthistle-20140917.mp3\">02 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0009-cracksabbath-owlandthistle-20140917.mp3\">03 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0010-cracksabbath-owlandthistle-20140917.mp3\">04 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0011-cracksabbath-owlandthistle-20140917.mp3\">05 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0012-cracksabbath-owlandthistle-20140917.mp3\">06 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0013-cracksabbath-owlandthistle-20140917.mp3\">07 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0014-cracksabbath-owlandthistle-20140917.mp3\">08 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0015-cracksabbath-owlandthistle-20140917.mp3\">09 Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0016-cracksabbath-owlandthistle-20140917.mp3\">10Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0017-cracksabbath-owlandthistle-20140917.mp3\">11Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0018-cracksabbath-owlandthistle-20140917.mp3\">12Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0019-cracksabbath-owlandthistle-20140917.mp3\">13Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0020-cracksabbath-owlandthistle-20140917.mp3\">14Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0021-cracksabbath-owlandthistle-20140917.mp3\">15Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0022-cracksabbath-owlandthistle-20140917.mp3\">16Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0023-cracksabbath-owlandthistle-20140917.mp3\">17Crack Sabbath - Owl 'n Thistle - September 17th, 2014</option>");
}
function writeDefaultAudioPlayerOptions()
{
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0001-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-01</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0002-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-02</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0003-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-03</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0004-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-04</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0005-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-05</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0006-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-06</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0007-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-07</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0008-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-08</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0009-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-09</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0012-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-10</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0014-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-11</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0015-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-12</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0016-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-13</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0017-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-14</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0018-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-15</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0019-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-16</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0020-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-17</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0021-SkerikTrio-OwlnThistle-20130227.mp3\">skerik trio-February 27th, 2013-18</option>");
    document.write("<option value=\"http://analogarchive.com/live/skerik1-SkerikTrio-OwlnThistle-20130206.mp3\">skerik1-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\"http://analogarchive.com/live/skerik2-SkerikTrio-OwlnThistle-20130206.mp3\">skerik2-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\"http://analogarchive.com/live/skerik3-SkerikTrio-OwlnThistle-20130206.mp3\">skerik3-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\"http://analogarchive.com/live/skerik4-SkerikTrio-OwlnThistle-20130206.mp3\">skerik4-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\"http://analogarchive.com/live/skerik5-SkerikTrio-OwlnThistle-20130206.mp3\">skerik5-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\"http://analogarchive.com/live/skerik6-SkerikTrio-OwlnThistle-20130206.mp3\">skerik6-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\"http://analogarchive.com/live/skerik7-SkerikTrio-OwlnThistle-20130206.mp3\">skerik7-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\"http://analogarchive.com/live/skerik8-SkerikTrio-OwlnThistle-20130206.mp3\">skerik8-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\"http://analogarchive.com/live/skerik9-SkerikTrio-OwlnThistle-20130206.mp3\">skerik9-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\"http://analogarchive.com/live/skerik10-SkerikTrio-OwlnThistle-20130206.mp3\">skerik10-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\"http://analogarchive.com/live/skerik11-SkerikTrio-OwlnThistle-20130206.mp3\">skerik11-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\"http://analogarchive.com/live/skerik12-SkerikTrio-OwlnThistle-20130206.mp3\">skerik12-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\"http://analogarchive.com/live/skerik13-SkerikTrio-OwlnThistle-20130206.mp3\">skerik13-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\"http://analogarchive.com/live/skerik14-SkerikTrio-OwlnThistle-20130206.mp3\">skerik14-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\"http://analogarchive.com/live/skerik15-SkerikTrio-OwlnThistle-20130206.mp3\">skerik15-SkerikTrio-OwlnThistle-20130206.mp3</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0001-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0001-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0002-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0002-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0003-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0003-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0004-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0004-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0005-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0005-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0006-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0006-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0007-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0007-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0008-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0008-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0009-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0009-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0010-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0010-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0011-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0011-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0012-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0012-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0013-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0013-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0014-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0014-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0015-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0015-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0016-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0016-SkerikTrio-OwlnThistle-20130213</option>");
    document.write("<option value=\"http://analogarchive.com/live/ZOOM0017-SkerikTrio-OwlnThistle-20130213.mp3\">ZOOM0017-SkerikTrio-OwlnThistle-20130213</option>");
    }
    

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
    document.write("<rect id=\"stuffedanimalwarsvgrect\" x=\"0\" y=\"0\" width=\"1\" height=\"1\" style=\"fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)\" />");
    document.write("</svg>"); 
    document.write("</div>");
}
function writeStuffedAnimalWarChoices(){
    
    document.write("<form>");
    document.write("<input type=\"radio\" id=\"stuffedanimalwardots\" name=\"sawstyle\" value=\"dots\" checked >Dots");
    document.write("<input type=\"radio\" id=\"stuffedanimalwarlines\" name=\"sawstyle\" value=\"lines\" >Lines");
    document.write("<input type=\"radio\" id=\"stuffedanimalwarcats\" name=\"sawstyle\" value=\"cats\" >Cats");
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
    document.write("<video id=\"jaemzwaredynamicvideoplayer\" poster=\"http://jaemzware.org/media/randompng/tv.png\" width=\"640\" height=\"480\" controls=\"controls\" preload=\"metadata\" title=\"jaemzwareTV\">");
    document.write(" browser doesn't support mp4 video. use chrome.");
    document.write("<source src=\"http://jaemzware.org/media/skate/roxhillbacksideollieline201508.mp4\" type=\"video/mp4\" id=\"jaemzwaredynamicvideosource\">");
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
    document.write("<option selected value=\"http://jaemzware.org/media/skate/roxhillbacksideollieline201508.mp4\">Jim, Roxhill, Backside Ollie Line,  August 2015</option>");
    document.write("<option value=\"http://jaemzware.org/media/skate/roxhillollierockline201508.mp4\">Jim, Roxhill Ollie Rock Line</option>");
    document.write("<option value=\"http://jaemzware.org/media/skate/yakima201508.mp4\">Jim, Yakima August 2015</option>");
    document.write("<option value=\"http://jaemzware.org/media/randommp4/01goingagainstyourmind.mp4\">Built to Spill - Going against your mind - Fremont Fair 2014</option>");
    document.write("<option value=\"http://jaemzware.org/media/randommp4/sk8cretewall.mp4\">Sk8crete or Die</option>");
    document.write("<option value=\"http://jaemzware.org/media/randommp4/babysessionstruevalue.mp4\">True Value Baby Sessions 2001</option>");
    document.write("<option value=\"http://jaemzware.org/media/skate/fortboise201508.mp4\">Jim, Fort Boise August 2015</option>");
}





