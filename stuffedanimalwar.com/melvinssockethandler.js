/* STUFFED ANIMAL WAR - jaemzware.org - 2015*/

//REQUIRE BASE SOCKET HANDLER JAVASCRIPT
$.getScript('sockethandler.js', function()
{
    endpoint = "melvins";
    masterAlias = "BUZZ";
    unspecifiedAlias="BORIS";
    chatSocketEvent = endpoint+'chatmessage';
    tapSocketEvent = 'djnachostapmessage';

    var socket = io();
    initializeCommonVars(masterAlias,unspecifiedAlias);
    initializeChatSocketHandler(socket,chatSocketEvent);
    initializeTapSocketHandler(socket,tapSocketEvent);
});


