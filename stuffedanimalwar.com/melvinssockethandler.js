/* STUFFED ANIMAL WAR - jaemzware.org - 2015*/

//REQUIRE BASE SOCKET HANDLER JAVASCRIPT
$.getScript('sockethandler.js', function()
{
    endpoint = "melvins";
    masterAlias = "DJ";
    unspecifiedAlias="BORIS";
    chatSocketEvent = endpoint+'chatmessage';
    tapSocketEvent = 'djnachostapmessage';
    var baseMediaPath = "http://analogarchive.com/live/";

    var socket = io();
    initializeCommonVars(masterAlias,unspecifiedAlias);
    initializeChatSocketHandler(socket,chatSocketEvent);
    initializeTapSocketHandler(socket,tapSocketEvent);

});


