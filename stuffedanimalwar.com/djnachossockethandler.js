/* STUFFED ANIMAL WAR - jaemzware.org - 2015*/

//REQUIRE BASE SOCKET HANDLER JAVASCRIPT
$.getScript('sockethandler.js', function()
{
    //SET AND INITIALIZE HANDLER SPECIFIC VARIABLES FOR THIS OVERRIDDEN HANDLER
    masterAlias = "DJ";
    chatSocketEvent = 'djnachoschatmessage';
    tapSocketEvent = 'djnachostapmessage';
    unspecifiedAlias = 'NOBODY SPECIAL';

    var socket = io();
    initializeCommonVars(masterAlias,unspecifiedAlias);
    initializeChatSocketHandler(socket,chatSocketEvent);
    initializeTapSocketHandler(socket,tapSocketEvent);
});


